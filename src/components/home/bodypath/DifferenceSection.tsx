import { CheckCircleOutline } from '@mui/icons-material';
import { Box, Stack, Typography } from '@mui/material';

import { BodypathSection } from '@/components/home/bodypath/BodypathSection';
import { BP } from '@/components/home/bodypath/constants';

const bullets = [
  'Focused on next steps, not endless answers.',
  'Designed around labs, provider routing, and care decisions.',
  'Built to help users prepare for better conversations with clinicians.',
  'Transparent about what AI can and cannot do.',
  'Designed with privacy, data minimization, and health advertising rules in mind.',
];

export function DifferenceSection() {
  return (
    <BodypathSection
      title="Not another chatbot. A health decision layer."
      subtitle="BodyPath is designed to help you prepare for action: what to check, what to ask, and which type of care may fit. The goal is not endless AI conversation. The goal is a better next step."
    >
      <Box
        sx={{
          bgcolor: BP.white,
          borderRadius: BP.cardRadius,
          border: `1px solid ${BP.border}`,
          boxShadow: '0 8px 32px rgba(0,0,0,0.05)',
          p: { xs: 3, md: 4 },
          maxWidth: 720,
        }}
      >
        <Stack spacing={2}>
          {bullets.map((item) => (
            <Stack key={item} direction="row" spacing={1.5} alignItems="flex-start">
              <CheckCircleOutline sx={{ color: BP.accent, fontSize: 22, mt: 0.15, flexShrink: 0 }} />
              <Typography sx={{ color: BP.ink, fontSize: '0.98rem', lineHeight: 1.55 }}>{item}</Typography>
            </Stack>
          ))}
        </Stack>
      </Box>
    </BodypathSection>
  );
}
