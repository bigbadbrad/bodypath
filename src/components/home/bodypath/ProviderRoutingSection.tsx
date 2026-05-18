import { Box, Chip, Typography } from '@mui/material';

import { BodypathSection } from '@/components/home/bodypath/BodypathSection';
import { BP } from '@/components/home/bodypath/constants';

const routingOptions = [
  'Lab testing',
  'GLP-1 provider',
  'Menopause specialist',
  'Endocrinologist',
  'Sleep program',
  'Mental health provider',
  'Nutrition coach',
  'Testosterone clinic',
  'Primary care',
];

export function ProviderRoutingSection() {
  return (
    <BodypathSection
      backgroundColor={BP.warmBg}
      title="Find the right kind of help faster."
      subtitle="Depending on your situation, BodyPath may suggest different care paths. Recommendations are for informational purposes only and are not a diagnosis or prescription."
    >
      <Typography sx={{ color: BP.muted, fontSize: '1rem', lineHeight: 1.65, mb: 3, maxWidth: 720 }}>
        BodyPath may suggest lab testing, a GLP-1 provider, menopause specialist, endocrinologist, sleep program,
        mental health provider, nutrition coach, testosterone clinic, or primary care — based on what you share in
        your intake.
      </Typography>
      <Box
        sx={{
          bgcolor: BP.white,
          borderRadius: BP.cardRadius,
          border: `1px solid ${BP.border}`,
          boxShadow: '0 8px 28px rgba(0,0,0,0.05)',
          p: { xs: 2.5, md: 3 },
        }}
      >
        <Typography sx={{ color: BP.ink, fontWeight: 700, fontSize: '0.9rem', mb: 2 }}>
          Example care paths BodyPath may suggest
        </Typography>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
          {routingOptions.map((label) => (
            <Chip
              key={label}
              label={label}
              sx={{
                bgcolor: '#F7F4F0',
                color: BP.ink,
                fontWeight: 600,
                fontSize: '0.82rem',
                border: `1px solid ${BP.border}`,
                borderRadius: 999,
              }}
            />
          ))}
        </Box>
      </Box>
      <Typography sx={{ color: BP.muted, fontSize: '0.82rem', mt: 2.5, fontStyle: 'italic' }}>
        If you may be experiencing a medical emergency, call 911 or seek emergency care immediately. BodyPath does not
        provide emergency care.
      </Typography>
    </BodypathSection>
  );
}
