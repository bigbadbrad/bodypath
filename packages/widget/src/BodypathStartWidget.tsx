'use client';

import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import '../widget.css';

import { buildBodyPathResult } from './engine/buildResults';
import { ResultsPanel } from './ResultsPanel';
import {
  ACCESS_PREFERENCE_OPTIONS,
  AGE_RANGE_OPTIONS,
  DURATION_OPTIONS,
  EXISTING_LAB_OPTIONS,
  GOAL_OPTIONS,
  KNOWN_CONDITION_OPTIONS,
  MEDICATION_OPTIONS,
  PREGNANCY_OPTIONS,
  PRIMARY_GOAL_OPTIONS,
  READINESS_OPTIONS,
  RECENT_LABS_OPTIONS,
  RED_FLAG_OPTIONS,
  SEX_OPTIONS,
  START_PREFERENCE_OPTIONS,
  SYMPTOM_OPTIONS,
  TREND_OPTIONS,
} from './config/options';
import type { BodyPathIntake, BodyPathResult, WidgetPhase } from './types';
import { hasCrisisFlags, hasRedFlags, validateIntakeStep } from './validation';
import { PRIMARY_GOAL_ICONS } from './icons';
import { WidgetOption } from './WidgetOption';

const INTAKE_STEPS = 10;

const STEP_TITLES = [
  'Start Your BodyPath',
  'Your Goal',
  'Symptoms',
  'Duration',
  'Context',
  'Goals',
  'Health History',
  'Medications',
  'Labs',
  'Preferences',
];

const initialIntake: BodyPathIntake = {
  symptoms: [],
  red_flags: [],
  goals: [],
  known_conditions: [],
  medications: [],
  existing_lab_types: [],
  access_preferences: [],
};

function toggleInList(list: string[] | undefined, value: string, max?: number): string[] {
  const current = list ?? [];
  if (current.includes(value)) return current.filter((v) => v !== value);
  if (max && current.length >= max) return current;
  if (value === 'none_symptoms' || value === 'none_conditions' || value === 'no_meds') {
    return [value];
  }
  const withoutNone = current.filter((v) => !v.startsWith('none') && v !== 'no_meds' && v !== 'not_sure_conditions');
  return [...withoutNone, value];
}

export interface BodypathStartWidgetProps {
  onClose?: () => void;
  sourcePage?: string;
}

export function BodypathStartWidget({ onClose, sourcePage }: BodypathStartWidgetProps): React.JSX.Element {
  const [phase, setPhase] = useState<WidgetPhase>('intake');
  const [currentStep, setCurrentStep] = useState(0);
  const [intake, setIntake] = useState<BodyPathIntake>(() => ({
    ...initialIntake,
    meta: { source_page: sourcePage },
  }));
  const [result, setResult] = useState<BodyPathResult | null>(null);
  const [stepErrors, setStepErrors] = useState<string[]>([]);
  const stepsContainerRef = useRef<HTMLDivElement>(null);

  const updateIntake = useCallback((updates: Partial<BodyPathIntake>) => {
    setIntake((prev) => ({ ...prev, ...updates }));
  }, []);

  useEffect(() => {
    const el = stepsContainerRef.current;
    if (el) el.scrollTop = 0;
  }, [currentStep, phase]);

  const headerTitle = useMemo(() => {
    if (phase === 'results') return 'Your BodyPath';
    if (phase === 'crisis') return 'Important';
    if (phase === 'safety') return 'Urgent symptoms';
    if (phase === 'minor') return 'BodyPath';
    return STEP_TITLES[currentStep] ?? 'Start Your BodyPath';
  }, [phase, currentStep]);

  const progressPct = phase === 'intake' ? (currentStep / (INTAKE_STEPS - 1)) * 100 : 100;

  const showPregnancy = intake.sex_assigned_at_birth === 'female';

  const goNext = useCallback(() => {
    const errs = validateIntakeStep(currentStep, intake);
    if (errs.length > 0) {
      setStepErrors(errs);
      return;
    }
    setStepErrors([]);

    if (currentStep === 2 && hasRedFlags(intake)) {
      if (hasCrisisFlags(intake)) {
        setPhase('crisis');
        return;
      }
      setPhase('safety');
      return;
    }

    if (currentStep === 4 && intake.age_range === 'under_18') {
      setPhase('minor');
      return;
    }

    if (currentStep < INTAKE_STEPS - 1) {
      setCurrentStep((s) => s + 1);
      return;
    }

    const built = buildBodyPathResult(intake);
    setResult(built);
    setPhase('results');
  }, [currentStep, intake]);

  const goBack = useCallback(() => {
    setStepErrors([]);
    if (phase === 'safety' || phase === 'crisis' || phase === 'minor') {
      setPhase('intake');
      setCurrentStep(2);
      return;
    }
    if (phase === 'results') {
      setPhase('intake');
      setCurrentStep(INTAKE_STEPS - 1);
      setResult(null);
      return;
    }
    setCurrentStep((s) => Math.max(0, s - 1));
  }, [phase]);

  const continuePastSafety = useCallback(() => {
    if (!intake.safety_acknowledged) {
      setStepErrors(['Please acknowledge before continuing.']);
      return;
    }
    setStepErrors([]);
    setPhase('intake');
    setCurrentStep(3);
  }, [intake.safety_acknowledged]);

  const isStepValid = validateIntakeStep(currentStep, intake).length === 0;

  const renderNav = (showNext = true, nextLabel = 'Next', onNext = goNext, nextDisabled?: boolean) => (
    <div className="widget-step-nav">
      {(currentStep > 0 || phase !== 'intake') && (
        <button type="button" className="secondary" onClick={goBack}>
          Back
        </button>
      )}
      {onClose && currentStep === 0 && phase === 'intake' && (
        <button type="button" className="secondary" onClick={onClose}>
          Close
        </button>
      )}
      {showNext && (
        <button type="button" disabled={nextDisabled ?? !isStepValid} onClick={onNext}>
          {nextLabel}
        </button>
      )}
    </div>
  );

  return (
    <div className="app-container booking-flow">
      <div className="layout-main-wrapper">
        <div className="shop-layout">
          <div className="widget-modal-container">
            <div className="widget-header-bar">
              <h3 className="widget-header-title">{headerTitle}</h3>
              {onClose && (
                <button type="button" className="widget-close-button" onClick={onClose} aria-label="Close">
                  &times;
                </button>
              )}
            </div>
            <div className="widget-progress-bar">
              <div className="widget-progress-fill" style={{ width: `${progressPct}%` }} />
            </div>

            <div className="widget-steps-container" ref={stepsContainerRef}>
              {phase === 'crisis' && (
                <div className="widget-step active">
                  <p style={{ fontSize: 14, lineHeight: 1.6 }}>
                    If you may hurt yourself or are in immediate danger, call emergency services now. In the U.S., call or
                    text <strong>988</strong> to reach the Suicide &amp; Crisis Lifeline.
                  </p>
                  <p style={{ fontSize: 14, lineHeight: 1.6, marginTop: 16 }}>
                    BodyPath is not for emergencies and cannot provide crisis care.
                  </p>
                  {renderNav(false)}
                  {onClose && (
                    <div className="widget-step-nav">
                      <button type="button" onClick={onClose}>
                        Close
                      </button>
                    </div>
                  )}
                </div>
              )}

              {phase === 'safety' && (
                <div className="widget-step active">
                  <p style={{ fontSize: 14, lineHeight: 1.6 }}>
                    Some of your answers may involve symptoms that should be evaluated urgently. BodyPath is not for
                    emergencies. Please call emergency services or seek urgent medical care now.
                  </p>
                  <div className="checkbox-row" style={{ marginTop: 20, display: 'flex', alignItems: 'flex-start', gap: 12 }}>
                    <input
                      type="checkbox"
                      id="bodypath-safety-ack"
                      className="widget-checkbox-large"
                      checked={!!intake.safety_acknowledged}
                      onChange={(e) => updateIntake({ safety_acknowledged: e.target.checked })}
                    />
                    <label htmlFor="bodypath-safety-ack" style={{ fontSize: 13 }}>
                      I understand BodyPath is not for urgent care and I want to continue for educational purposes.
                    </label>
                  </div>
                  {stepErrors.length > 0 && (
                    <div style={{ color: '#b91c1c', fontSize: 13, marginTop: 8 }}>{stepErrors[0]}</div>
                  )}
                  {renderNav(true, 'Continue', continuePastSafety, !intake.safety_acknowledged)}
                </div>
              )}

              {phase === 'minor' && (
                <div className="widget-step active">
                  <p style={{ fontSize: 14, lineHeight: 1.6 }}>
                    BodyPath is currently designed for adults. If you are under 18, please discuss symptoms with a parent or
                    guardian and a licensed clinician.
                  </p>
                  {renderNav(false)}
                  {onClose && (
                    <div className="widget-step-nav">
                      <button type="button" onClick={onClose}>
                        Close
                      </button>
                    </div>
                  )}
                </div>
              )}

              {phase === 'results' && result && (
                <div className="widget-step active">
                  <ResultsPanel
                    result={result}
                    intake={intake}
                    onUpdateIntake={updateIntake}
                    onEmailDone={() => setPhase('email_done')}
                  />
                  <div className="widget-step-nav">
                    <button type="button" className="secondary" onClick={goBack}>
                      Back
                    </button>
                    {onClose && (
                      <button type="button" onClick={onClose}>
                        Close
                      </button>
                    )}
                  </div>
                </div>
              )}

              {phase === 'email_done' && (
                <div className="widget-step active">
                  <div style={{ textAlign: 'center', margin: '20px 0' }}>
                    <h3>Sent!</h3>
                    <p>Check your inbox for your BodyPath summary.</p>
                  </div>
                  {onClose && (
                    <div className="widget-step-nav">
                      <button type="button" onClick={onClose}>
                        Close
                      </button>
                    </div>
                  )}
                </div>
              )}

              {phase === 'intake' && (
                <>
                  {/* Step 0 — Welcome */}
                  <div className={`widget-step${currentStep === 0 ? ' active' : ''}`}>
                    <p style={{ fontSize: 14, lineHeight: 1.6 }}>
                      Answer a few questions about your symptoms, goals, and health context. BodyPath will help organize what
                      may be worth exploring next — including common labs, care options, and provider types to consider.
                    </p>
                    <div className="checkbox-row" style={{ marginTop: 16, display: 'flex', alignItems: 'flex-start', gap: 12 }}>
                      <input
                        type="checkbox"
                        id="bodypath-edu"
                        className="widget-checkbox-large"
                        checked={!!intake.acknowledged_educational}
                        onChange={(e) => updateIntake({ acknowledged_educational: e.target.checked })}
                      />
                      <label htmlFor="bodypath-edu" style={{ fontSize: 13 }}>
                        I understand BodyPath is educational and not a diagnosis.
                      </label>
                    </div>
                    <div className="checkbox-row" style={{ marginTop: 12, display: 'flex', alignItems: 'flex-start', gap: 12 }}>
                      <input
                        type="checkbox"
                        id="bodypath-urgent"
                        className="widget-checkbox-large"
                        checked={!!intake.acknowledged_urgent}
                        onChange={(e) => updateIntake({ acknowledged_urgent: e.target.checked })}
                      />
                      <label htmlFor="bodypath-urgent" style={{ fontSize: 13 }}>
                        I understand urgent symptoms require urgent medical care.
                      </label>
                    </div>
                    {stepErrors.length > 0 && (
                      <div style={{ color: '#b91c1c', fontSize: 13, marginTop: 8 }}>{stepErrors[0]}</div>
                    )}
                    {renderNav(true, 'Start')}
                  </div>

                  {/* Step 1 — Primary goal */}
                  <div className={`widget-step${currentStep === 1 ? ' active' : ''}`}>
                    <h4>What do you want help understanding today?</h4>
                    <div className="service-list">
                      {PRIMARY_GOAL_OPTIONS.map((opt) => (
                        <WidgetOption
                          key={opt.value}
                          label={opt.label}
                          iconKey={PRIMARY_GOAL_ICONS[opt.value] ?? 'default'}
                          selected={intake.primary_goal === opt.value}
                          onClick={() => updateIntake({ primary_goal: opt.value })}
                        />
                      ))}
                    </div>
                    {stepErrors[0] && <div style={{ color: '#b91c1c', fontSize: 13, marginTop: 8 }}>{stepErrors[0]}</div>}
                    {renderNav()}
                  </div>

                  {/* Step 2 — Symptoms */}
                  <div className={`widget-step${currentStep === 2 ? ' active' : ''}`}>
                    <h4>Which symptoms or changes are you noticing?</h4>
                    <div className="service-list">
                      {SYMPTOM_OPTIONS.map((opt) => (
                        <WidgetOption
                          key={opt.value}
                          label={opt.label}
                          selected={(intake.symptoms ?? []).includes(opt.value)}
                          onClick={() => updateIntake({ symptoms: toggleInList(intake.symptoms, opt.value) })}
                        />
                      ))}
                    </div>
                    <h4 style={{ marginTop: 20, color: '#b91c1c' }}>Urgent symptoms (if any)</h4>
                    <div className="service-list">
                      {RED_FLAG_OPTIONS.map((opt) => (
                        <WidgetOption
                          key={opt.value}
                          label={opt.label}
                          iconKey="warning"
                          selected={(intake.red_flags ?? []).includes(opt.value)}
                          onClick={() =>
                            updateIntake({
                              red_flags: toggleInList(intake.red_flags, opt.value),
                            })
                          }
                        />
                      ))}
                    </div>
                    {stepErrors[0] && <div style={{ color: '#b91c1c', fontSize: 13, marginTop: 8 }}>{stepErrors[0]}</div>}
                    {renderNav()}
                  </div>

                  {/* Step 3 — Duration */}
                  <div className={`widget-step${currentStep === 3 ? ' active' : ''}`}>
                    <h4>How long has this been going on?</h4>
                    <div className="service-list">
                      {DURATION_OPTIONS.map((opt) => (
                        <WidgetOption
                          key={opt.value}
                          label={opt.label}
                          iconKey="calendar"
                          selected={intake.duration === opt.value}
                          onClick={() => updateIntake({ duration: opt.value })}
                        />
                      ))}
                    </div>
                    <h4 style={{ marginTop: 20 }}>Is this getting worse, improving, or staying about the same?</h4>
                    <div className="service-list">
                      {TREND_OPTIONS.map((opt) => (
                        <WidgetOption
                          key={opt.value}
                          label={opt.label}
                          selected={intake.trend === opt.value}
                          onClick={() => updateIntake({ trend: opt.value })}
                        />
                      ))}
                    </div>
                    {stepErrors[0] && <div style={{ color: '#b91c1c', fontSize: 13, marginTop: 8 }}>{stepErrors[0]}</div>}
                    {renderNav()}
                  </div>

                  {/* Step 4 — Context */}
                  <div className={`widget-step${currentStep === 4 ? ' active' : ''}`}>
                    <p style={{ fontSize: 14, marginBottom: 12 }}>A little context helps us personalize your BodyPath.</p>
                    <h4>Age range</h4>
                    <div className="service-list" style={{ gridTemplateColumns: '1fr 1fr' }}>
                      {AGE_RANGE_OPTIONS.map((opt) => (
                        <WidgetOption
                          key={opt.value}
                          label={opt.label}
                          selected={intake.age_range === opt.value}
                          onClick={() => updateIntake({ age_range: opt.value })}
                        />
                      ))}
                    </div>
                    <h4 style={{ marginTop: 16 }}>Sex</h4>
                    <div className="service-list" style={{ gridTemplateColumns: '1fr 1fr' }}>
                      {SEX_OPTIONS.map((opt) => (
                        <WidgetOption
                          key={opt.value}
                          label={opt.label}
                          iconKey="person"
                          selected={intake.sex_assigned_at_birth === opt.value}
                          onClick={() => updateIntake({ sex_assigned_at_birth: opt.value })}
                        />
                      ))}
                    </div>
                    {showPregnancy && (
                      <>
                        <h4 style={{ marginTop: 16 }}>Pregnancy / postpartum</h4>
                        <div className="service-list">
                          {PREGNANCY_OPTIONS.map((opt) => (
                            <WidgetOption
                              key={opt.value}
                              label={opt.label}
                              selected={intake.pregnancy_status === opt.value}
                              onClick={() => updateIntake({ pregnancy_status: opt.value })}
                            />
                          ))}
                        </div>
                      </>
                    )}
                    {stepErrors[0] && <div style={{ color: '#b91c1c', fontSize: 13, marginTop: 8 }}>{stepErrors[0]}</div>}
                    {renderNav()}
                  </div>

                  {/* Step 5 — Goals */}
                  <div className={`widget-step${currentStep === 5 ? ' active' : ''}`}>
                    <h4>What outcome matters most to you right now? (up to 3)</h4>
                    <div className="service-list">
                      {GOAL_OPTIONS.map((opt) => (
                        <WidgetOption
                          key={opt.value}
                          label={opt.label}
                          selected={(intake.goals ?? []).includes(opt.value)}
                          onClick={() => updateIntake({ goals: toggleInList(intake.goals, opt.value, 3) })}
                        />
                      ))}
                    </div>
                    {stepErrors[0] && <div style={{ color: '#b91c1c', fontSize: 13, marginTop: 8 }}>{stepErrors[0]}</div>}
                    {renderNav()}
                  </div>

                  {/* Step 6 — Known context */}
                  <div className={`widget-step${currentStep === 6 ? ' active' : ''}`}>
                    <h4>Do any of these apply to you?</h4>
                    <div className="service-list">
                      {KNOWN_CONDITION_OPTIONS.map((opt) => (
                        <WidgetOption
                          key={opt.value}
                          label={opt.label}
                          selected={(intake.known_conditions ?? []).includes(opt.value)}
                          onClick={() =>
                            updateIntake({
                              known_conditions: toggleInList(intake.known_conditions, opt.value),
                            })
                          }
                        />
                      ))}
                    </div>
                    {stepErrors[0] && <div style={{ color: '#b91c1c', fontSize: 13, marginTop: 8 }}>{stepErrors[0]}</div>}
                    {renderNav()}
                  </div>

                  {/* Step 7 — Medications */}
                  <div className={`widget-step${currentStep === 7 ? ' active' : ''}`}>
                    <h4>Are there any medications or constraints we should consider?</h4>
                    <div className="service-list">
                      {MEDICATION_OPTIONS.map((opt) => (
                        <WidgetOption
                          key={opt.value}
                          label={opt.label}
                          selected={(intake.medications ?? []).includes(opt.value)}
                          onClick={() => updateIntake({ medications: toggleInList(intake.medications, opt.value) })}
                        />
                      ))}
                    </div>
                    <h4 style={{ marginTop: 20 }}>Do you prefer to start with labs, a provider, or lifestyle steps?</h4>
                    <div className="service-list">
                      {START_PREFERENCE_OPTIONS.map((opt) => (
                        <WidgetOption
                          key={opt.value}
                          label={opt.label}
                          iconKey={
                            opt.value === 'labs_first'
                              ? 'labs'
                              : opt.value === 'provider_first'
                                ? 'provider'
                                : opt.value === 'lifestyle_first'
                                  ? 'goal'
                                  : 'default'
                          }
                          selected={intake.start_preference === opt.value}
                          onClick={() => updateIntake({ start_preference: opt.value })}
                        />
                      ))}
                    </div>
                    {stepErrors[0] && <div style={{ color: '#b91c1c', fontSize: 13, marginTop: 8 }}>{stepErrors[0]}</div>}
                    {renderNav()}
                  </div>

                  {/* Step 8 — Labs */}
                  <div className={`widget-step${currentStep === 8 ? ' active' : ''}`}>
                    <h4>Have you had recent bloodwork or lab results?</h4>
                    <div className="service-list">
                      {RECENT_LABS_OPTIONS.map((opt) => (
                        <WidgetOption
                          key={opt.value}
                          label={opt.label}
                          iconKey="labs"
                          selected={intake.recent_labs === opt.value}
                          onClick={() => updateIntake({ recent_labs: opt.value })}
                        />
                      ))}
                    </div>
                    {intake.recent_labs && intake.recent_labs !== 'no' && intake.recent_labs !== 'not_sure' && (
                      <>
                        <h4 style={{ marginTop: 20 }}>Which labs do you already have?</h4>
                        <div className="service-list" style={{ gridTemplateColumns: '1fr 1fr' }}>
                          {EXISTING_LAB_OPTIONS.map((opt) => (
                            <WidgetOption
                              key={opt.value}
                              label={opt.label}
                              selected={(intake.existing_lab_types ?? []).includes(opt.value)}
                              onClick={() =>
                                updateIntake({
                                  existing_lab_types: toggleInList(intake.existing_lab_types, opt.value),
                                })
                              }
                            />
                          ))}
                        </div>
                      </>
                    )}
                    {stepErrors[0] && <div style={{ color: '#b91c1c', fontSize: 13, marginTop: 8 }}>{stepErrors[0]}</div>}
                    {renderNav()}
                  </div>

                  {/* Step 9 — Preferences + readiness */}
                  <div className={`widget-step${currentStep === 9 ? ' active' : ''}`}>
                    <h4>What matters most when choosing a next step?</h4>
                    <div className="service-list" style={{ gridTemplateColumns: '1fr 1fr' }}>
                      {ACCESS_PREFERENCE_OPTIONS.map((opt) => (
                        <WidgetOption
                          key={opt.value}
                          label={opt.label}
                          selected={(intake.access_preferences ?? []).includes(opt.value)}
                          onClick={() =>
                            updateIntake({
                              access_preferences: toggleInList(intake.access_preferences, opt.value),
                            })
                          }
                        />
                      ))}
                    </div>
                    <h4 style={{ marginTop: 20 }}>How soon do you want to take action?</h4>
                    <div className="service-list">
                      {READINESS_OPTIONS.map((opt) => (
                        <WidgetOption
                          key={opt.value}
                          label={opt.label}
                          iconKey="readiness"
                          selected={intake.readiness === opt.value}
                          onClick={() => updateIntake({ readiness: opt.value as BodyPathIntake['readiness'] })}
                        />
                      ))}
                    </div>
                    {stepErrors[0] && <div style={{ color: '#b91c1c', fontSize: 13, marginTop: 8 }}>{stepErrors[0]}</div>}
                    {renderNav(true, 'See My BodyPath', goNext)}
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
