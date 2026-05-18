import { GppGoodOutlined } from '@mui/icons-material';
import { Box, Stack, Typography } from '@mui/material';

import { BodypathSection } from '@/components/home/bodypath/BodypathSection';
import { BP } from '@/components/home/bodypath/constants';

const items = [
  'BodyPath does not provide emergency care.',
  'BodyPath does not diagnose, prescribe, or replace a licensed clinician.',
  'Recommendations are educational and should be reviewed with a qualified health professional.',
  'Users control what they share.',
  'Sensitive health data should not be used for ad targeting.',
  'Sponsored or partner options must be clearly labeled.',
];

export function TrustSafetySection() {
  return (
    <BodypathSection title="Built for responsible health navigation." titleAlign="center">
      <Box
        sx={{
          maxWidth: 720,
          mx: 'auto',
          bgcolor: BP.white,
          borderRadius: BP.cardRadius,
          border: `1px solid ${BP.border}`,
          boxShadow: '0 8px 32px rgba(0,0,0,0.05)',
          p: { xs: 3, md: 4 },
        }}
      >
        <Stack spacing={2}>
          {items.map((item) => (
            <Stack key={item} direction="row" spacing={1.5} alignItems="flex-start">
              <GppGoodOutlined sx={{ color: BP.accent, fontSize: 22, mt: 0.1, flexShrink: 0 }} />
              <Typography sx={{ color: BP.ink, fontSize: '0.95rem', lineHeight: 1.55 }}>{item}</Typography>
            </Stack>
          ))}
        </Stack>
      </Box>
      <Typography sx={{ color: BP.muted, fontSize: '0.95rem', lineHeight: 1.65, mt: 3, textAlign: 'center', maxWidth: 640, mx: 'auto' }}>
        We help organize information so you can make more informed decisions and have better conversations with
        healthcare professionals.
      </Typography>
    </BodypathSection>
  );
}
