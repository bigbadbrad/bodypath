import type { PrimaryGoal, StartPreference } from '../types';

export const PRIMARY_GOAL_OPTIONS: { value: PrimaryGoal; label: string }[] = [
  { value: 'fatigue', label: 'Low energy or fatigue' },
  { value: 'hormones_menopause', label: 'Hormones or menopause' },
  { value: 'metabolic_glp1', label: 'Weight, metabolism, or GLP-1 options' },
  { value: 'sleep_recovery', label: 'Sleep and recovery' },
  { value: 'stress_mood', label: 'Stress, mood, or burnout' },
  { value: 'mens_health_testosterone', label: "Testosterone or men's health" },
  { value: 'lab_interpretation', label: 'I have lab results I want to understand' },
  { value: 'general_uncertainty', label: "I'm not sure — I just don't feel right" },
];

export const SYMPTOM_OPTIONS: { value: string; label: string }[] = [
  { value: 'low_energy', label: 'Low energy' },
  { value: 'brain_fog', label: 'Brain fog' },
  { value: 'poor_sleep', label: 'Poor sleep' },
  { value: 'weight_gain', label: 'Weight gain' },
  { value: 'weight_loss', label: 'Weight loss without trying' },
  { value: 'hair_thinning', label: 'Hair thinning or hair loss' },
  { value: 'feeling_cold', label: 'Feeling cold often' },
  { value: 'feeling_hot', label: 'Feeling hot often' },
  { value: 'night_sweats', label: 'Night sweats' },
  { value: 'mood_changes', label: 'Mood changes' },
  { value: 'anxiety', label: 'Anxiety or worry' },
  { value: 'low_mood', label: 'Low mood' },
  { value: 'low_libido', label: 'Low libido' },
  { value: 'irregular_periods', label: 'Irregular periods' },
  { value: 'heavy_periods', label: 'Heavy periods' },
  { value: 'hot_flashes', label: 'Hot flashes' },
  { value: 'muscle_loss', label: 'Muscle loss or weakness' },
  { value: 'increased_thirst', label: 'Increased thirst' },
  { value: 'frequent_urination', label: 'Frequent urination' },
  { value: 'snoring', label: 'Snoring' },
  { value: 'waking_tired', label: 'Waking up tired' },
  { value: 'digestive', label: 'Digestive issues' },
  { value: 'cravings', label: 'Cravings or hunger changes' },
  { value: 'headaches', label: 'Headaches' },
  { value: 'joint_aches', label: 'Joint or muscle aches' },
  { value: 'skin_changes', label: 'Skin changes' },
  { value: 'none_symptoms', label: 'None of these / not sure' },
];

export const RED_FLAG_OPTIONS: { value: string; label: string }[] = [
  { value: 'chest_pain', label: 'Chest pain' },
  { value: 'trouble_breathing', label: 'Trouble breathing' },
  { value: 'fainting', label: 'Fainting or loss of consciousness' },
  { value: 'sudden_weakness', label: 'Sudden weakness or numbness' },
  { value: 'self_harm', label: 'Thoughts of self-harm' },
  { value: 'severe_pain', label: 'Severe pain' },
  { value: 'pregnancy_severe', label: 'Pregnancy with severe pain or bleeding' },
];

export const DURATION_OPTIONS = [
  { value: 'lt_2_weeks', label: 'Less than 2 weeks' },
  { value: '2_6_weeks', label: '2–6 weeks' },
  { value: '1_3_months', label: '1–3 months' },
  { value: '3_12_months', label: '3–12 months' },
  { value: 'over_year', label: 'More than a year' },
  { value: 'comes_goes', label: 'It comes and goes' },
  { value: 'not_sure', label: 'Not sure' },
];

export const TREND_OPTIONS = [
  { value: 'worse', label: 'Getting worse' },
  { value: 'same', label: 'About the same' },
  { value: 'improving', label: 'Improving' },
  { value: 'comes_goes', label: 'Comes and goes' },
  { value: 'not_sure', label: 'Not sure' },
];

export const AGE_RANGE_OPTIONS = [
  { value: 'under_18', label: 'Under 18' },
  { value: '18_24', label: '18–24' },
  { value: '25_34', label: '25–34' },
  { value: '35_44', label: '35–44' },
  { value: '45_54', label: '45–54' },
  { value: '55_64', label: '55–64' },
  { value: '65_plus', label: '65+' },
];

export const SEX_OPTIONS = [
  { value: 'female', label: 'Female' },
  { value: 'male', label: 'Male' },
];

export const PREGNANCY_OPTIONS = [
  { value: 'pregnant', label: 'Pregnant' },
  { value: 'postpartum', label: 'Postpartum within 12 months' },
  { value: 'trying', label: 'Trying to conceive' },
  { value: 'none', label: 'None of these' },
  { value: 'prefer_not', label: 'Prefer not to say' },
];

export const GOAL_OPTIONS = [
  { value: 'more_energy', label: 'More energy' },
  { value: 'better_sleep', label: 'Better sleep' },
  { value: 'weight_loss', label: 'Weight loss' },
  { value: 'understand_hormones', label: 'Understand my hormones' },
  { value: 'understand_labs', label: 'Understand my lab results' },
  { value: 'reduce_stress', label: 'Reduce stress' },
  { value: 'improve_mood', label: 'Improve mood' },
  { value: 'improve_libido', label: 'Improve libido' },
  { value: 'metabolic_health', label: 'Check metabolic health' },
  { value: 'explore_glp1', label: 'Explore GLP-1 options' },
  { value: 'preventive_baseline', label: 'Build a preventive health baseline' },
  { value: 'labs_to_ask', label: 'Know what labs to ask for' },
  { value: 'find_provider', label: 'Find the right provider or program' },
  { value: 'reassurance', label: 'I want reassurance' },
];

export const KNOWN_CONDITION_OPTIONS = [
  { value: 'thyroid', label: 'Thyroid condition' },
  { value: 'diabetes', label: 'Diabetes or prediabetes' },
  { value: 'high_cholesterol', label: 'High cholesterol' },
  { value: 'high_bp', label: 'High blood pressure' },
  { value: 'pcos', label: 'PCOS' },
  { value: 'menopause', label: 'Menopause or perimenopause' },
  { value: 'sleep_apnea', label: 'Sleep apnea' },
  { value: 'depression_anxiety', label: 'Depression or anxiety diagnosis' },
  { value: 'autoimmune', label: 'Autoimmune condition' },
  { value: 'anemia', label: 'Anemia or low iron history' },
  { value: 'vitamin_d', label: 'Vitamin D deficiency' },
  { value: 'on_glp1', label: 'Taking a GLP-1 medication' },
  { value: 'considering_glp1', label: 'Considering a GLP-1 medication' },
  { value: 'hormone_therapy', label: 'Taking hormone therapy' },
  { value: 'testosterone_therapy', label: 'Taking testosterone therapy' },
  { value: 'none_conditions', label: 'None of these' },
  { value: 'not_sure_conditions', label: 'Not sure' },
];

export const MEDICATION_OPTIONS = [
  { value: 'prescription', label: 'Prescription medications' },
  { value: 'blood_thinners', label: 'Blood thinners' },
  { value: 'diabetes_meds', label: 'Diabetes medications' },
  { value: 'thyroid_meds', label: 'Thyroid medication' },
  { value: 'hormone_therapy', label: 'Hormone therapy' },
  { value: 'testosterone_therapy', label: 'Testosterone therapy' },
  { value: 'psychiatric', label: 'Psychiatric medication' },
  { value: 'weight_loss_meds', label: 'Weight-loss medication' },
  { value: 'supplements_only', label: 'Supplements only' },
  { value: 'no_meds', label: 'No medications' },
  { value: 'prefer_not_meds', label: 'Prefer not to say' },
];

export const START_PREFERENCE_OPTIONS: { value: StartPreference; label: string }[] = [
  { value: 'labs_first', label: 'Labs first' },
  { value: 'provider_first', label: 'Provider first' },
  { value: 'lifestyle_first', label: 'Lifestyle first' },
  { value: 'open', label: "I'm open to the best next step" },
  { value: 'lowest_cost', label: 'Lowest-cost option' },
  { value: 'fastest', label: 'Fastest option' },
];

export const RECENT_LABS_OPTIONS = [
  { value: 'within_3_months', label: 'Yes, within the last 3 months' },
  { value: 'within_year', label: 'Yes, within the last year' },
  { value: 'older', label: 'Yes, but older than a year' },
  { value: 'no', label: 'No' },
  { value: 'not_sure', label: 'Not sure' },
];

export const EXISTING_LAB_OPTIONS = [
  { value: 'cbc', label: 'CBC' },
  { value: 'cmp', label: 'CMP' },
  { value: 'lipids', label: 'Lipid panel' },
  { value: 'a1c', label: 'A1C' },
  { value: 'glucose', label: 'Fasting glucose' },
  { value: 'tsh', label: 'TSH' },
  { value: 'free_t4', label: 'Free T4' },
  { value: 'ferritin', label: 'Ferritin / iron studies' },
  { value: 'vitamin_d', label: 'Vitamin D' },
  { value: 'b12', label: 'B12' },
  { value: 'testosterone', label: 'Testosterone' },
  { value: 'estradiol', label: 'Estradiol' },
  { value: 'fsh_lh', label: 'FSH / LH' },
  { value: 'cortisol', label: 'Cortisol' },
  { value: 'crp', label: 'CRP / inflammation marker' },
  { value: 'not_sure_labs', label: "I'm not sure" },
];

export const ACCESS_PREFERENCE_OPTIONS = [
  { value: 'lowest_cost', label: 'Lowest cost' },
  { value: 'fastest', label: 'Fastest answer' },
  { value: 'comprehensive', label: 'Most comprehensive' },
  { value: 'telehealth', label: 'Prefer telehealth' },
  { value: 'in_person', label: 'Prefer in-person doctor' },
  { value: 'labs_first_pref', label: 'Prefer labs first' },
  { value: 'cash_pay', label: 'Prefer not to use insurance' },
  { value: 'insurance', label: 'Want insurance-friendly options' },
  { value: 'not_sure_access', label: 'Not sure' },
];

export const READINESS_OPTIONS = [
  { value: 'today', label: 'Today' },
  { value: 'this_week', label: 'This week' },
  { value: 'this_month', label: 'This month' },
  { value: 'researching', label: 'Just researching' },
  { value: 'not_sure', label: 'Not sure' },
];

export const FEEDBACK_OPTIONS = [
  { value: 'yes', label: 'Yes' },
  { value: 'somewhat', label: 'Somewhat' },
  { value: 'not_really', label: 'Not really' },
];
