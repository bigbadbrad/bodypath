import { CRISIS_FLAG_IDS } from './types';
import type { BodyPathIntake } from './types';

export function hasRedFlags(intake: BodyPathIntake): boolean {
  return (intake.red_flags?.length ?? 0) > 0;
}

export function hasCrisisFlags(intake: BodyPathIntake): boolean {
  return (intake.red_flags ?? []).some((f) => (CRISIS_FLAG_IDS as readonly string[]).includes(f));
}

export function validateIntakeStep(step: number, intake: BodyPathIntake): string[] {
  const errs: string[] = [];

  switch (step) {
    case 0:
      if (!intake.acknowledged_educational) errs.push('Please confirm you understand BodyPath is educational guidance.');
      if (!intake.acknowledged_urgent) errs.push('Please confirm you understand urgent symptoms need urgent care.');
      break;
    case 1:
      if (!intake.primary_goal) errs.push('Select what you want help understanding today.');
      break;
    case 2: {
      const symptoms = intake.symptoms ?? [];
      const reds = intake.red_flags ?? [];
      if (symptoms.length === 0 && reds.length === 0) errs.push('Select at least one symptom or red-flag option.');
      break;
    }
    case 3:
      if (!intake.duration) errs.push('Tell us how long this has been going on.');
      if (!intake.trend) errs.push('Tell us whether symptoms are changing.');
      break;
    case 4:
      if (!intake.age_range) errs.push('Select your age range.');
      if (!intake.sex_assigned_at_birth) errs.push('Select sex.');
      break;
    case 5:
      if ((intake.goals?.length ?? 0) === 0) errs.push('Select at least one outcome (up to 3).');
      break;
    case 6:
      if ((intake.known_conditions?.length ?? 0) === 0) errs.push('Select any known health context or “None of these.”');
      break;
    case 7:
      if ((intake.medications?.length ?? 0) === 0) errs.push('Select medication context or “No medications.”');
      if (!intake.start_preference) errs.push('Tell us whether you prefer labs, a provider, or lifestyle steps first.');
      break;
    case 8:
      if (!intake.recent_labs) errs.push('Tell us if you have had recent bloodwork.');
      break;
    case 9:
      if ((intake.access_preferences?.length ?? 0) === 0) errs.push('Select what matters when choosing a next step.');
      if (!intake.readiness) errs.push('Tell us how soon you want to take action.');
      break;
    default:
      break;
  }

  return errs;
}
