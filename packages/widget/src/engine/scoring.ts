import { GOAL_PRIMARY_MAP, PATHWAY_DEFINITIONS } from '../config/pathways';
import type { BodyPathIntake, ConfidenceBand, PathwayId, ScoredPathway } from '../types';

type ScoreMap = Record<PathwayId, number>;

const ALL_PATHWAY_IDS = Object.keys(PATHWAY_DEFINITIONS) as PathwayId[];

function emptyScores(): ScoreMap {
  return ALL_PATHWAY_IDS.reduce((acc, id) => {
    acc[id] = 0;
    return acc;
  }, {} as ScoreMap);
}

function add(scores: ScoreMap, pathway: PathwayId, points: number): void {
  scores[pathway] = (scores[pathway] ?? 0) + points;
}

function bandFromScore(score: number): ConfidenceBand {
  if (score >= 8) return 'strong';
  if (score >= 5) return 'worth_exploring';
  if (score >= 3) return 'possible';
  return 'lower';
}

function bandLabel(band: ConfidenceBand): string {
  switch (band) {
    case 'strong':
      return 'Strong match';
    case 'worth_exploring':
      return 'Worth exploring';
    case 'possible':
      return 'Possible contributor';
    default:
      return 'Lower priority';
  }
}

const SYMPTOM_WEIGHTS: Record<string, Partial<Record<PathwayId, number>>> = {
  low_energy: { energy_fatigue: 3, sleep_recovery: 1, stress_mood: 1 },
  brain_fog: { energy_fatigue: 2, sleep_recovery: 1, stress_mood: 1 },
  poor_sleep: { sleep_recovery: 3, energy_fatigue: 1 },
  weight_gain: { metabolic_glp1: 2, hormone_menopause: 1, thyroid_signals: 1 },
  weight_loss: { thyroid_signals: 2, metabolic_glp1: 1 },
  hair_thinning: { thyroid_signals: 2, hormone_menopause: 1 },
  feeling_cold: { thyroid_signals: 3 },
  feeling_hot: { hormone_menopause: 2 },
  night_sweats: { hormone_menopause: 3 },
  mood_changes: { stress_mood: 2, hormone_menopause: 2 },
  anxiety: { stress_mood: 3 },
  low_mood: { stress_mood: 3 },
  low_libido: { hormone_menopause: 2, mens_testosterone: 2 },
  irregular_periods: { hormone_menopause: 3 },
  heavy_periods: { hormone_menopause: 2 },
  hot_flashes: { hormone_menopause: 4 },
  muscle_loss: { mens_testosterone: 2, energy_fatigue: 1 },
  increased_thirst: { metabolic_glp1: 2 },
  frequent_urination: { metabolic_glp1: 2 },
  snoring: { sleep_recovery: 4 },
  waking_tired: { sleep_recovery: 3, energy_fatigue: 2 },
  digestive: { stress_mood: 1 },
  cravings: { metabolic_glp1: 2 },
  headaches: { stress_mood: 1 },
};

const CONDITION_WEIGHTS: Record<string, Partial<Record<PathwayId, number>>> = {
  thyroid: { thyroid_signals: 4 },
  diabetes: { metabolic_glp1: 3 },
  high_cholesterol: { metabolic_glp1: 2 },
  high_bp: { metabolic_glp1: 2 },
  pcos: { hormone_menopause: 2, metabolic_glp1: 2 },
  menopause: { hormone_menopause: 4 },
  sleep_apnea: { sleep_recovery: 4 },
  depression_anxiety: { stress_mood: 3 },
  anemia: { energy_fatigue: 2 },
  vitamin_d: { energy_fatigue: 1 },
  on_glp1: { metabolic_glp1: 3 },
  considering_glp1: { metabolic_glp1: 4 },
  hormone_therapy: { hormone_menopause: 2 },
  testosterone_therapy: { mens_testosterone: 3 },
};

const GOAL_WEIGHTS: Record<string, Partial<Record<PathwayId, number>>> = {
  more_energy: { energy_fatigue: 2 },
  better_sleep: { sleep_recovery: 3 },
  weight_loss: { metabolic_glp1: 2 },
  understand_hormones: { hormone_menopause: 3 },
  understand_labs: { lab_interpretation: 4 },
  reduce_stress: { stress_mood: 3 },
  improve_mood: { stress_mood: 3 },
  improve_libido: { hormone_menopause: 1, mens_testosterone: 2 },
  metabolic_health: { metabolic_glp1: 3 },
  explore_glp1: { metabolic_glp1: 4 },
  preventive_baseline: { preventive_baseline: 4 },
  labs_to_ask: { energy_fatigue: 1, lab_interpretation: 2 },
  find_provider: { energy_fatigue: 1 },
};

function whyLabelForSymptom(value: string): string | null {
  const map: Record<string, string> = {
    low_energy: 'You selected low energy',
    brain_fog: 'You selected brain fog',
    poor_sleep: 'You selected poor sleep',
    hot_flashes: 'You selected hot flashes',
    night_sweats: 'You selected night sweats',
    snoring: 'You selected snoring',
    waking_tired: 'You selected waking up tired',
    weight_gain: 'You selected weight gain',
    low_libido: 'You selected low libido',
    anxiety: 'You selected anxiety or worry',
    low_mood: 'You selected low mood',
  };
  return map[value] ?? null;
}

export function computePathwayScores(intake: BodyPathIntake): ScoreMap {
  const scores = emptyScores();

  if (intake.primary_goal) {
    const mapped = GOAL_PRIMARY_MAP[intake.primary_goal];
    if (mapped) add(scores, mapped, 3);
  }

  for (const symptom of intake.symptoms ?? []) {
    if (symptom === 'none_symptoms') continue;
    const weights = SYMPTOM_WEIGHTS[symptom];
    if (weights) {
      for (const [pathway, pts] of Object.entries(weights)) {
        add(scores, pathway as PathwayId, pts);
      }
    }
  }

  for (const condition of intake.known_conditions ?? []) {
    if (condition.startsWith('none') || condition === 'not_sure_conditions') continue;
    const weights = CONDITION_WEIGHTS[condition];
    if (weights) {
      for (const [pathway, pts] of Object.entries(weights)) {
        add(scores, pathway as PathwayId, pts);
      }
    }
  }

  for (const goal of intake.goals ?? []) {
    const weights = GOAL_WEIGHTS[goal];
    if (weights) {
      for (const [pathway, pts] of Object.entries(weights)) {
        add(scores, pathway as PathwayId, pts);
      }
    }
  }

  if (intake.primary_goal === 'lab_interpretation' || intake.recent_labs?.startsWith('within')) {
    add(scores, 'lab_interpretation', 4);
  }
  if (intake.recent_labs === 'no' || intake.recent_labs === 'older') {
    add(scores, 'preventive_baseline', 2);
  }

  const age = intake.age_range;
  const sex = intake.sex_assigned_at_birth;
  if (age === '45_54' || age === '35_44') {
    if ((intake.symptoms ?? []).some((s) => ['hot_flashes', 'night_sweats', 'irregular_periods'].includes(s))) {
      add(scores, 'hormone_menopause', 3);
    }
  }
  if (sex === 'female' && (intake.symptoms ?? []).some((s) => ['hot_flashes', 'night_sweats'].includes(s))) {
    add(scores, 'hormone_menopause', 2);
  }
  if (sex === 'male') {
    if ((intake.symptoms ?? []).some((s) => ['low_libido', 'muscle_loss'].includes(s))) {
      add(scores, 'mens_testosterone', 2);
    }
    if (intake.primary_goal === 'mens_health_testosterone') {
      add(scores, 'mens_testosterone', 4);
    }
  }

  if (intake.duration === '3_12_months' || intake.duration === 'over_year') {
    add(scores, 'energy_fatigue', 1);
  }
  if (intake.trend === 'worse') {
    add(scores, 'energy_fatigue', 1);
  }

  return scores;
}

export function rankPathways(intake: BodyPathIntake): ScoredPathway[] {
  const scores = computePathwayScores(intake);
  const primaryBoost = intake.primary_goal ? GOAL_PRIMARY_MAP[intake.primary_goal] : undefined;

  const ranked = ALL_PATHWAY_IDS.map((pathway_id) => {
    const score = scores[pathway_id];
    const def = PATHWAY_DEFINITIONS[pathway_id];
    const confidence_band = bandFromScore(score);
    const why_signals: string[] = [];

    if (primaryBoost === pathway_id && intake.primary_goal) {
      why_signals.push('Matches your primary goal today');
    }
    for (const s of intake.symptoms ?? []) {
      const label = whyLabelForSymptom(s);
      if (label && SYMPTOM_WEIGHTS[s]?.[pathway_id]) {
        why_signals.push(label);
      }
    }
    if ((intake.goals ?? []).includes('labs_to_ask') && pathway_id === 'energy_fatigue') {
      why_signals.push('You want to know what labs to ask for');
    }
    if (intake.duration === '3_12_months') {
      why_signals.push('Symptoms have been going on for several months');
    }

    return {
      pathway_id,
      title: def.title,
      score,
      confidence_band,
      why_signals: why_signals.slice(0, 4),
      description: def.description,
      labs: def.labs,
      provider_types: def.provider_types,
      next_steps: def.next_steps,
    };
  })
    .filter((p) => p.score > 0)
    .sort((a, b) => {
      if (b.score !== a.score) return b.score - a.score;
      if (primaryBoost === a.pathway_id) return -1;
      if (primaryBoost === b.pathway_id) return 1;
      return 0;
    });

  return ranked;
}

export { bandLabel };
