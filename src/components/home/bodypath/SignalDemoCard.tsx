import { ArrowForward } from '@mui/icons-material';
import { Box, Typography } from '@mui/material';

import { BP } from '@/components/home/bodypath/constants';

const steps = ['Symptoms', 'Signal Map', 'Care Path'] as const;

const examplePills = ['Fatigue', 'Thyroid / Iron / Sleep / Stress', 'Labs + provider options'];

export function SignalDemoCard() {
  return (
    <Box
      sx={{
        bgcolor: BP.white,
        borderRadius: BP.cardRadius,
        border: `1px solid ${BP.border}`,
        boxShadow: '0 12px 40px rgba(0,0,0,0.06)',
        p: { xs: 2.5, md: 3 },
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1, flexWrap: 'wrap', mb: 3 }}>
        {steps.map((step, i) => (
          <Box key={step} sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Typography
              sx={{
                fontSize: '0.8rem',
                fontWeight: 700,
                color: i === 0 ? '#fff' : BP.ink,
                bgcolor: i === 0 ? BP.accent : '#F3F0EC',
                px: 1.75,
                py: 0.75,
                borderRadius: 999,
              }}
            >
              {step}
            </Typography>
            {i < steps.length - 1 ? (
              <ArrowForward sx={{ fontSize: 16, color: BP.muted, display: { xs: 'none', sm: 'block' } }} />
            ) : null}
          </Box>
        ))}
      </Box>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 1, justifyContent: 'center' }}>
        {examplePills.map((pill, i) => (
          <Box key={pill} sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Typography
              sx={{
                fontSize: '0.78rem',
                fontWeight: 600,
                color: BP.ink,
                bgcolor: '#F7F4F0',
                border: `1px solid ${BP.border}`,
                px: 1.5,
                py: 0.6,
                borderRadius: 999,
              }}
            >
              {pill}
            </Typography>
            {i < examplePills.length - 1 ? (
              <ArrowForward sx={{ fontSize: 14, color: BP.accent }} />
            ) : null}
          </Box>
        ))}
      </Box>
    </Box>
  );
}
