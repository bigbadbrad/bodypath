/**
 * BodyPath Start Widget — intake & results types
 */

export type PrimaryGoal =
  | 'fatigue'
  | 'hormones_menopause'
  | 'metabolic_glp1'
  | 'sleep_recovery'
  | 'stress_mood'
  | 'mens_health_testosterone'
  | 'lab_interpretation'
  | 'general_uncertainty';

export type PathwayId =
  | 'energy_fatigue'
  | 'thyroid_signals'
  | 'metabolic_glp1'
  | 'hormone_menopause'
  | 'sleep_recovery'
  | 'stress_mood'
  | 'mens_testosterone'
  | 'lab_interpretation'
  | 'preventive_baseline';

export type ConfidenceBand = 'strong' | 'worth_exploring' | 'possible' | 'lower';

export type StartPreference = 'labs_first' | 'provider_first' | 'lifestyle_first' | 'open' | 'lowest_cost' | 'fastest';

export type Readiness = 'today' | 'this_week' | 'this_month' | 'researching' | 'not_sure';

export interface BodyPathIntakeMeta {
  source_page?: string;
}

export interface BodyPathIntake {
  meta?: BodyPathIntakeMeta;
  acknowledged_educational?: boolean;
  acknowledged_urgent?: boolean;
  primary_goal?: PrimaryGoal;
  symptoms?: string[];
  red_flags?: string[];
  duration?: string;
  trend?: string;
  age_range?: string;
  sex_assigned_at_birth?: string;
  pregnancy_status?: string;
  goals?: string[];
  known_conditions?: string[];
  medications?: string[];
  start_preference?: StartPreference;
  recent_labs?: string;
  existing_lab_types?: string[];
  access_preferences?: string[];
  readiness?: Readiness;
  safety_acknowledged?: boolean;
  email?: string;
  email_consent?: boolean;
  feedback?: string;
}

export interface ScoredPathway {
  pathway_id: PathwayId;
  title: string;
  score: number;
  confidence_band: ConfidenceBand;
  why_signals: string[];
  description: string;
  labs: string[];
  provider_types: string[];
  next_steps: string[];
}

export interface BodyPathResult {
  user_goal?: PrimaryGoal;
  red_flag_status: 'none' | 'urgent' | 'crisis';
  top_pathways: ScoredPathway[];
  secondary_pathways: ScoredPathway[];
  primary_next_step: {
    title: string;
    body: string;
    cta_label: string;
    cta_type: 'labs' | 'provider' | 'sleep' | 'email';
  };
  lab_recommendations: { category: string; items: string[] }[];
  provider_recommendations: { type: string; why: string }[];
  education_cards: { title: string; body: string }[];
  monetization_ctas: { label: string; type: string }[];
  safety_disclaimer: string;
}

export type WidgetPhase = 'intake' | 'safety' | 'crisis' | 'minor' | 'results' | 'email_done';

export const RED_FLAG_IDS = [
  'chest_pain',
  'trouble_breathing',
  'fainting',
  'sudden_weakness',
  'self_harm',
  'severe_pain',
  'pregnancy_severe',
] as const;

export const CRISIS_FLAG_IDS = ['self_harm'] as const;
