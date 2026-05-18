import { Box, Typography } from '@mui/material';

import { BodypathSection } from '@/components/home/bodypath/BodypathSection';
import { BP } from '@/components/home/bodypath/constants';
import { SignalDemoCard } from '@/components/home/bodypath/SignalDemoCard';

const steps = [
  {
    num: '1',
    title: 'Share what’s going on',
    body: 'Symptoms, goals, risk factors, medications, and existing labs if you have them.',
  },
  {
    num: '2',
    title: 'Get an organized signal map',
    body: 'BodyPath groups your information into relevant themes like metabolic, hormone, thyroid, sleep, stress, and nutrition.',
  },
  {
    num: '3',
    title: 'See possible next steps',
    body: 'Learn which labs, questions, provider types, or care programs may fit your situation.',
  },
  {
    num: '4',
    title: 'Choose a care path',
    body: 'Compare lab testing, telehealth providers, specialty clinics, coaching, or primary-care follow-up.',
  },
];

export function HowItWorksSection() {
  return (
    <BodypathSection
      id="how-it-works"
      title="One intake. Multiple possible paths."
      titleAlign="center"
    >
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', lg: '1fr 1fr' },
          gap: { xs: 4, lg: 5 },
          alignItems: 'start',
        }}
      >
        <Box sx={{ display: 'grid', gap: 2 }}>
          {steps.map((step) => (
            <Box
              key={step.num}
              sx={{
                display: 'flex',
                gap: 2,
                bgcolor: BP.white,
                borderRadius: BP.cardRadius,
                border: `1px solid ${BP.border}`,
                boxShadow: '0 4px 20px rgba(0,0,0,0.04)',
                p: 2.5,
              }}
            >
              <Box
                sx={{
                  width: 36,
                  height: 36,
                  borderRadius: '50%',
                  bgcolor: BP.accent,
                  color: '#fff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 700,
                  fontSize: '0.95rem',
                  flexShrink: 0,
                }}
              >
                {step.num}
              </Box>
              <Box>
                <Typography sx={{ color: BP.ink, fontWeight: 700, fontSize: '1rem', mb: 0.5 }}>{step.title}</Typography>
                <Typography sx={{ color: BP.muted, fontSize: '0.92rem', lineHeight: 1.6 }}>{step.body}</Typography>
              </Box>
            </Box>
          ))}
        </Box>
        <SignalDemoCard />
      </Box>
    </BodypathSection>
  );
}
