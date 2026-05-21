import type { BodyPathIntake, BodyPathResult, ScoredPathway } from '../types';
import { rankPathways } from './scoring';

const DISCLAIMER =
  'BodyPath provides educational health-navigation information. It is not a diagnosis, treatment plan, or substitute for a licensed medical professional.';

function uniqueLabs(pathways: ScoredPathway[]): { category: string; items: string[] }[] {
  const foundation = ['CBC', 'CMP', 'Lipid panel', 'A1C'];
  const pathwayLabs = new Set<string>();
  for (const p of pathways) {
    for (const lab of p.labs) {
      if (!foundation.includes(lab)) pathwayLabs.add(lab);
    }
  }
  const items = Array.from(pathwayLabs).slice(0, 8);
  return [
    { category: 'Foundation labs', items: foundation },
    ...(items.length ? [{ category: 'Pathway-specific labs to discuss', items }] : []),
  ];
}

function buildPrimaryNextStep(intake: BodyPathIntake, top: ScoredPathway | undefined): BodyPathResult['primary_next_step'] {
  const pref = intake.start_preference;
  const readiness = intake.readiness;

  if (pref === 'provider_first' || intake.pregnancy_status === 'pregnant') {
    return {
      title: 'Recommended next step: Talk to a licensed provider',
      body: 'Because you indicated provider-first preference or pregnancy-related context, a clinician review may be the safest first step.',
      cta_label: 'Explore care options',
      cta_type: 'provider',
    };
  }

  if (top?.pathway_id === 'sleep_recovery' && (intake.symptoms ?? []).some((s) => ['snoring', 'waking_tired'].includes(s))) {
    return {
      title: 'Recommended next step: Explore sleep evaluation',
      body: 'Snoring and waking unrefreshed can mean sleep quality is affecting energy. A sleep-focused evaluation may be more useful than labs alone.',
      cta_label: 'Explore sleep care options',
      cta_type: 'sleep',
    };
  }

  if (pref === 'labs_first' || intake.recent_labs === 'no' || intake.recent_labs === 'older') {
    return {
      title: 'Recommended next step: Start with baseline labs',
      body: `Your answers point to ${top?.title ?? 'several health areas'}. A basic lab panel may help identify common contributors worth discussing with a provider.`,
      cta_label: 'View recommended labs',
      cta_type: 'labs',
    };
  }

  if (readiness === 'researching') {
    return {
      title: 'Recommended next step: Save your BodyPath plan',
      body: 'You can review pathways below and optionally email yourself a summary to revisit when you are ready.',
      cta_label: 'Send me my BodyPath',
      cta_type: 'email',
    };
  }

  return {
    title: 'Recommended next step: Review your top pathways',
    body: 'Compare the areas below, then choose labs or care options that fit how you want to start.',
    cta_label: 'View recommended labs',
    cta_type: 'labs',
  };
}

export function buildBodyPathResult(intake: BodyPathIntake): BodyPathResult {
  const ranked = rankPathways(intake);
  const top_pathways = ranked.slice(0, 3);
  const secondary_pathways = ranked.slice(3, 6);
  const top = top_pathways[0];

  const provider_recommendations: BodyPathResult['provider_recommendations'] = [];
  const seen = new Set<string>();
  for (const p of top_pathways) {
    for (const type of p.provider_types) {
      if (!seen.has(type)) {
        seen.add(type);
        provider_recommendations.push({
          type,
          why: `Commonly discussed when exploring ${p.title.toLowerCase()}.`,
        });
      }
    }
  }

  const monetization_ctas: BodyPathResult['monetization_ctas'] = [];
  if (top?.pathway_id === 'metabolic_glp1') {
    monetization_ctas.push({ label: 'Check metabolic health labs', type: 'labs' });
    monetization_ctas.push({ label: 'Explore GLP-1 care options', type: 'provider' });
  } else if (top?.pathway_id === 'hormone_menopause') {
    monetization_ctas.push({ label: 'Explore menopause care options', type: 'provider' });
    monetization_ctas.push({ label: 'See hormone-related labs', type: 'labs' });
  } else if (top?.pathway_id === 'sleep_recovery') {
    monetization_ctas.push({ label: 'Explore sleep care options', type: 'provider' });
  } else {
    monetization_ctas.push({ label: 'View recommended labs', type: 'labs' });
    monetization_ctas.push({ label: 'Explore care options', type: 'provider' });
  }

  return {
    user_goal: intake.primary_goal,
    red_flag_status: 'none',
    top_pathways,
    secondary_pathways,
    primary_next_step: buildPrimaryNextStep(intake, top),
    lab_recommendations: uniqueLabs(top_pathways),
    provider_recommendations: provider_recommendations.slice(0, 5),
    education_cards: [
      {
        title: 'Why fatigue is hard to pin down',
        body: 'Many systems can contribute at once — sleep, nutrients, thyroid, metabolic health, and stress often overlap.',
      },
      {
        title: 'Labs help, but do not tell the whole story',
        body: 'Lab results are one input. Symptoms, timing, medications, and exam findings matter too.',
      },
      {
        title: 'Prepare for a better clinician conversation',
        body: 'Bring your symptom timeline, goals, and questions about which labs or referrals may fit.',
      },
    ],
    monetization_ctas,
    safety_disclaimer: DISCLAIMER,
  };
}
