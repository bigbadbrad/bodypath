import type { PathwayId } from '../types';

export interface PathwayDefinition {
  pathway_id: PathwayId;
  title: string;
  description: string;
  labs: string[];
  provider_types: string[];
  next_steps: string[];
}

export const PATHWAY_DEFINITIONS: Record<PathwayId, PathwayDefinition> = {
  energy_fatigue: {
    pathway_id: 'energy_fatigue',
    title: 'Energy & Fatigue',
    description:
      'Fatigue can be influenced by sleep, stress, nutrient status, thyroid function, metabolic health, medications, and mental health. Labs can help identify common contributors, but a clinician should evaluate persistent or worsening fatigue.',
    labs: ['CBC', 'CMP', 'TSH', 'Free T4', 'Ferritin / iron studies', 'Vitamin D', 'B12', 'A1C'],
    provider_types: ['Primary care', 'Preventive health provider', 'Endocrinology if thyroid/metabolic signals are strong'],
    next_steps: ['Discuss a baseline fatigue panel', 'Review sleep and stress patterns', 'Schedule a clinician visit if symptoms persist'],
  },
  thyroid_signals: {
    pathway_id: 'thyroid_signals',
    title: 'Thyroid Signals',
    description:
      'Thyroid hormones help regulate energy, temperature, metabolism, and other body functions. Symptoms alone cannot determine thyroid status, but labs are commonly used to evaluate thyroid function.',
    labs: ['TSH', 'Free T4', 'Thyroid antibodies (optional)'],
    provider_types: ['Primary care', 'Endocrinology', 'Thyroid-focused telehealth'],
    next_steps: ['Ask about TSH and Free T4', 'Bring symptom timeline to your visit'],
  },
  metabolic_glp1: {
    pathway_id: 'metabolic_glp1',
    title: 'Metabolic Health / GLP-1 Readiness',
    description:
      'Metabolic health includes blood sugar, lipids, weight-related risk, and liver/kidney markers. People exploring GLP-1 medication often benefit from baseline labs and provider review.',
    labs: ['A1C', 'Fasting glucose', 'Lipid panel', 'CMP'],
    provider_types: ['GLP-1 telehealth provider', 'Primary care', 'Endocrinology', 'Nutrition coaching'],
    next_steps: ['Review baseline metabolic labs', 'Discuss GLP-1 eligibility with a licensed provider'],
  },
  hormone_menopause: {
    pathway_id: 'hormone_menopause',
    title: 'Hormone Changes / Menopause',
    description:
      'Perimenopause and menopause can affect sleep, mood, weight, energy, and menstrual patterns. Labs may help rule out other contributors, but hormone levels should be interpreted with clinical context.',
    labs: ['TSH', 'CBC', 'CMP', 'Lipids', 'A1C', 'Vitamin D (optional)'],
    provider_types: ['Menopause clinic', 'OB-GYN', 'Primary care', 'Hormone-focused telehealth'],
    next_steps: ['Track cycle and symptom patterns', 'Discuss menopause-focused care options'],
  },
  sleep_recovery: {
    pathway_id: 'sleep_recovery',
    title: 'Sleep & Recovery',
    description:
      'Sleep problems can cause fatigue, mood changes, cravings, and brain fog. If snoring or waking unrefreshed is present, a sleep evaluation may be a strong next step.',
    labs: ['Fatigue baseline labs if symptoms persist'],
    provider_types: ['Sleep medicine', 'Primary care', 'Sleep study provider', 'Behavioral sleep program'],
    next_steps: ['Consider a sleep evaluation', 'Track sleep quality for 1–2 weeks'],
  },
  stress_mood: {
    pathway_id: 'stress_mood',
    title: 'Stress, Mood & Burnout',
    description:
      'Stress and mood can affect sleep, energy, appetite, and physical symptoms. It can also overlap with thyroid, nutrient, sleep, and metabolic factors.',
    labs: ['CBC', 'TSH', 'Vitamin D', 'B12', 'Ferritin if fatigue present'],
    provider_types: ['Mental health provider', 'Primary care', 'Therapy platform', 'Stress/recovery coaching'],
    next_steps: ['Discuss mood and stress with a professional', 'Rule out contributing physical factors with labs if appropriate'],
  },
  mens_testosterone: {
    pathway_id: 'mens_testosterone',
    title: "Men's Hormone / Testosterone Signals",
    description:
      'Low testosterone symptoms can overlap with sleep, stress, thyroid, metabolic health, and mood. Lab testing and clinician review are important before considering treatment.',
    labs: ['Total testosterone', 'CBC', 'CMP', 'Lipids', 'A1C', 'TSH'],
    provider_types: ["Men's health clinic", 'Primary care', 'Endocrinology'],
    next_steps: ['Discuss testosterone labs with a clinician', 'Review sleep and stress contributors'],
  },
  lab_interpretation: {
    pathway_id: 'lab_interpretation',
    title: 'Lab Interpretation / Biomarker Review',
    description:
      'If you already have labs, a clinician review is often the best next step. BodyPath can help identify missing baseline labs and questions to ask.',
    labs: ['Review existing panel', 'Identify gaps in baseline testing'],
    provider_types: ['Primary care', 'Preventive health provider', 'Relevant specialist depending on results'],
    next_steps: ['Bring labs to a licensed clinician', 'Note which markers you want explained'],
  },
  preventive_baseline: {
    pathway_id: 'preventive_baseline',
    title: 'Preventive Baseline',
    description:
      'Baseline labs can help you understand general metabolic, organ-function, nutrient, and cardiovascular markers.',
    labs: ['CBC', 'CMP', 'Lipid panel', 'A1C', 'TSH', 'Vitamin D', 'B12'],
    provider_types: ['Preventive health provider', 'Primary care'],
    next_steps: ['Discuss a preventive baseline panel', 'Set a plan for retesting over time'],
  },
};

export const GOAL_PRIMARY_MAP: Partial<Record<string, PathwayId>> = {
  fatigue: 'energy_fatigue',
  hormones_menopause: 'hormone_menopause',
  metabolic_glp1: 'metabolic_glp1',
  sleep_recovery: 'sleep_recovery',
  stress_mood: 'stress_mood',
  mens_health_testosterone: 'mens_testosterone',
  lab_interpretation: 'lab_interpretation',
  general_uncertainty: 'preventive_baseline',
};
