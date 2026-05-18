'use client';

import Link from 'next/link';
import { ArrowBack } from '@mui/icons-material';
import { Box, Button, Checkbox, FormControlLabel, TextField, Typography } from '@mui/material';
import { useState } from 'react';

import { BP } from '@/components/home/bodypath/constants';
import { SectionContainer } from '@/components/shared/SectionContainer';
import { CTAButton } from '@/components/shared/CTAButton';

export default function IntakePage() {
  const [email, setEmail] = useState('');
  const [consent, setConsent] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !consent) return;
    setSubmitted(true);
  };

  return (
    <Box component="main" sx={{ bgcolor: BP.white, minHeight: '60vh', py: { xs: 6, md: 10 } }}>
      <SectionContainer sx={{ maxWidth: 560 }}>
        <Typography
          component={Link}
          href="/"
          sx={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 0.5,
            color: BP.muted,
            fontSize: '0.9rem',
            textDecoration: 'none',
            mb: 4,
            '&:hover': { color: BP.accent },
          }}
        >
          <ArrowBack sx={{ fontSize: 18 }} />
          Back to home
        </Typography>

        <Typography
          component="h1"
          sx={{ color: BP.ink, fontWeight: 700, fontSize: { xs: '2rem', md: '2.4rem' }, lineHeight: 1.15, mb: 2 }}
        >
          Find My Next Step
        </Typography>
        <Typography sx={{ color: BP.muted, fontSize: '1.05rem', lineHeight: 1.65, mb: 4 }}>
          BodyPath will guide you through a short intake about symptoms, goals, labs, and care preferences. This first
          version is coming soon — leave your email and we&apos;ll notify you when it&apos;s ready.
        </Typography>

        {submitted ? (
          <Box
            sx={{
              bgcolor: BP.warmBg,
              borderRadius: BP.cardRadius,
              border: `1px solid ${BP.border}`,
              p: 3,
            }}
          >
            <Typography sx={{ color: BP.ink, fontWeight: 600, mb: 1 }}>You&apos;re on the list.</Typography>
            <Typography sx={{ color: BP.muted, fontSize: '0.95rem', lineHeight: 1.6 }}>
              We&apos;ll reach out when the full intake is live. In the meantime, explore care paths on the homepage.
            </Typography>
            <Box sx={{ mt: 3 }}>
              <CTAButton href="/" sx={{ bgcolor: BP.accent, color: '#fff' }}>
                Back to BodyPath
              </CTAButton>
            </Box>
          </Box>
        ) : (
          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{
              bgcolor: BP.warmBg,
              borderRadius: BP.cardRadius,
              border: `1px solid ${BP.border}`,
              p: { xs: 2.5, md: 3 },
            }}
          >
            <TextField
              fullWidth
              required
              type="email"
              label="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              sx={{ mb: 2, bgcolor: BP.white, borderRadius: 1 }}
            />
            <FormControlLabel
              control={<Checkbox checked={consent} onChange={(e) => setConsent(e.target.checked)} sx={{ color: BP.accent, '&.Mui-checked': { color: BP.accent } }} />}
              label={
                <Typography sx={{ color: BP.muted, fontSize: '0.82rem', lineHeight: 1.5 }}>
                  I agree to receive updates about BodyPath and optional follow-up about relevant care paths. I understand
                  BodyPath is not emergency care and does not provide medical diagnosis.
                </Typography>
              }
              sx={{ alignItems: 'flex-start', mb: 3, ml: 0 }}
            />
            <Button
              type="submit"
              variant="contained"
              disabled={!email || !consent}
              sx={{
                bgcolor: BP.accent,
                borderRadius: 999,
                px: 3,
                py: 1.2,
                textTransform: 'none',
                fontWeight: 600,
                '&:hover': { bgcolor: BP.accentDark },
                '&.Mui-disabled': { bgcolor: '#E0D6D4', color: '#9A8A88' },
              }}
            >
              Notify me
            </Button>
          </Box>
        )}

        <Typography sx={{ color: BP.muted, fontSize: '0.8rem', mt: 3, lineHeight: 1.5 }}>
          Not emergency care. Not a diagnosis. For informational purposes only.
        </Typography>
      </SectionContainer>
    </Box>
  );
}
