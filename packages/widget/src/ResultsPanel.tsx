import React, { useState } from 'react';

import { bandLabel } from './engine/scoring';
import type { BodyPathIntake, BodyPathResult } from './types';
import { FEEDBACK_OPTIONS } from './config/options';

function isValidEmail(email: string): boolean {
  const s = email.trim();
  if (!s || s.includes('@@')) return false;
  const parts = s.split('@');
  return parts.length === 2 && !!parts[0]?.length && !!parts[1]?.includes('.');
}

export function ResultsPanel({
  result,
  intake,
  onUpdateIntake,
  onEmailDone,
}: {
  result: BodyPathResult;
  intake: BodyPathIntake;
  onUpdateIntake: (u: Partial<BodyPathIntake>) => void;
  onEmailDone: () => void;
}) {
  const [showEmail, setShowEmail] = useState(false);

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!intake.email?.trim() || !isValidEmail(intake.email)) return;
    onEmailDone();
  };

  return (
    <div>
      <p style={{ fontSize: 14, color: '#5C6470', lineHeight: 1.6, marginTop: 0 }}>
        Based on your answers, these are the health areas that may be most worth exploring next.
      </p>
      <p style={{ fontSize: 12, color: '#5C6470', fontStyle: 'italic' }}>{result.safety_disclaimer}</p>

      <div style={{ marginTop: 20 }}>
        <h4 style={{ marginBottom: 12 }}>Top pathways</h4>
        {result.top_pathways.map((pathway) => (
          <div
            key={pathway.pathway_id}
            style={{
              border: '1px solid #E8E4DF',
              borderRadius: 12,
              padding: 16,
              marginBottom: 12,
              background: '#fff',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', gap: 8, flexWrap: 'wrap' }}>
              <strong style={{ fontSize: 15 }}>{pathway.title}</strong>
              <span style={{ fontSize: 12, fontWeight: 700, color: '#B02A24' }}>{bandLabel(pathway.confidence_band)}</span>
            </div>
            <p style={{ fontSize: 13, color: '#5C6470', lineHeight: 1.55, margin: '10px 0' }}>{pathway.description}</p>
            {pathway.why_signals.length > 0 && (
              <>
                <div style={{ fontSize: 12, fontWeight: 700, marginBottom: 6 }}>Why this came up</div>
                <ul style={{ margin: 0, paddingLeft: 18, fontSize: 13, color: '#1A1A1A' }}>
                  {pathway.why_signals.map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ul>
              </>
            )}
            <div style={{ fontSize: 12, fontWeight: 700, marginTop: 12, marginBottom: 6 }}>Common labs to discuss</div>
            <p style={{ fontSize: 13, margin: 0 }}>{pathway.labs.join(' · ')}</p>
          </div>
        ))}
      </div>

      <div
        style={{
          background: '#FAF8F5',
          border: '1px solid #E8E4DF',
          borderRadius: 12,
          padding: 16,
          marginTop: 8,
        }}
      >
        <h4 style={{ marginTop: 0 }}>{result.primary_next_step.title}</h4>
        <p style={{ fontSize: 14, color: '#5C6470', lineHeight: 1.55 }}>{result.primary_next_step.body}</p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 12 }}>
          {result.monetization_ctas.map((cta) => (
            <button
              key={cta.label}
              type="button"
              style={{
                padding: '10px 16px',
                borderRadius: 999,
                border: 'none',
                background: '#B02A24',
                color: '#fff',
                fontSize: 14,
                fontWeight: 600,
                cursor: 'pointer',
              }}
            >
              {cta.label}
            </button>
          ))}
        </div>
      </div>

      {result.lab_recommendations.length > 0 && (
        <div style={{ marginTop: 20 }}>
          <h4>Lab recommendations</h4>
          {result.lab_recommendations.map((group) => (
            <div key={group.category} style={{ marginBottom: 10 }}>
              <div style={{ fontSize: 13, fontWeight: 700 }}>{group.category}</div>
              <p style={{ fontSize: 13, margin: '4px 0' }}>{group.items.join(' · ')}</p>
            </div>
          ))}
          <p style={{ fontSize: 12, color: '#5C6470' }}>These are common labs people discuss with a clinician when exploring this pathway.</p>
        </div>
      )}

      {result.provider_recommendations.length > 0 && (
        <div style={{ marginTop: 20 }}>
          <h4>Care options to consider</h4>
          {result.provider_recommendations.map((p) => (
            <div key={p.type} style={{ marginBottom: 8, fontSize: 13 }}>
              <strong>{p.type}</strong> — {p.why}
            </div>
          ))}
        </div>
      )}

      <div style={{ marginTop: 20 }}>
        <h4>Learn more</h4>
        {result.education_cards.map((card) => (
          <div key={card.title} style={{ marginBottom: 10, fontSize: 13 }}>
            <strong>{card.title}</strong>
            <p style={{ margin: '4px 0', color: '#5C6470' }}>{card.body}</p>
          </div>
        ))}
      </div>

      <p style={{ fontSize: 11, color: '#5C6470', marginTop: 16 }}>
        BodyPath may earn revenue when you purchase testing or connect with partner services. Recommendations should still be
        reviewed with a licensed clinician.
      </p>

      {!showEmail ? (
        <div style={{ marginTop: 20 }}>
          <h4>Want a copy of your BodyPath?</h4>
          <p style={{ fontSize: 13, color: '#5C6470' }}>Email is optional. We&apos;ll only use it to send your summary and updates you request.</p>
          <button
            type="button"
            className="secondary"
            style={{
              marginTop: 8,
              padding: '10px 18px',
              borderRadius: 6,
              border: 'none',
              background: '#ccc',
              cursor: 'pointer',
            }}
            onClick={() => setShowEmail(true)}
          >
            Send My BodyPath
          </button>
        </div>
      ) : (
        <form onSubmit={handleEmailSubmit} style={{ marginTop: 20 }}>
          <div className="widget-form-group">
            <label htmlFor="bodypath-email">Email</label>
            <input
              id="bodypath-email"
              type="email"
              className="widget-input-single-line"
              value={intake.email ?? ''}
              onChange={(e) => onUpdateIntake({ email: e.target.value })}
            />
          </div>
          <div className="checkbox-row" style={{ marginBottom: 12 }}>
            <input
              type="checkbox"
              id="bodypath-email-consent"
              className="widget-checkbox-large"
              checked={!!intake.email_consent}
              onChange={(e) => onUpdateIntake({ email_consent: e.target.checked })}
            />
            <label htmlFor="bodypath-email-consent" style={{ fontSize: 13, marginLeft: 16 }}>
              I agree to receive my BodyPath summary and optional follow-up about relevant care paths.
            </label>
          </div>
          <button type="submit" disabled={!intake.email?.trim() || !isValidEmail(intake.email ?? '') || !intake.email_consent}>
            Send My BodyPath
          </button>
        </form>
      )}

      <div style={{ marginTop: 24 }}>
        <h4>Was this useful?</h4>
        <div className="service-list" style={{ gridTemplateColumns: '1fr 1fr 1fr' }}>
          {FEEDBACK_OPTIONS.map((opt) => (
            <div
              key={opt.value}
              className={`service-item${intake.feedback === opt.value ? ' selected' : ''}`}
              onClick={() => onUpdateIntake({ feedback: opt.value })}
              role="button"
              tabIndex={0}
            >
              <div className="service-text">
                <div className="service-name">{opt.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
