import { Box, Typography } from '@mui/material';

import { BodypathSection } from '@/components/home/bodypath/BodypathSection';
import { BP } from '@/components/home/bodypath/constants';

const painPoints = [
  '“I don’t know which symptoms matter.”',
  '“I don’t know what labs to ask for.”',
  '“I don’t know whether this is metabolic, hormonal, sleep-related, or stress-related.”',
  '“I don’t know which provider type is right.”',
];

export function ProblemSection() {
  return (
    <BodypathSection
      backgroundColor={BP.warmBg}
      title="Health answers are everywhere. Clear next steps are harder to find."
      subtitle="One search says it could be hormones. Another says thyroid. TikTok says cortisol. Your labs look “normal,” but you still feel off. BodyPath helps organize the noise into a clearer set of possible next steps."
    >
      <Typography sx={{ color: BP.muted, fontSize: '1rem', lineHeight: 1.65, mb: 3, maxWidth: 640 }}>
        Consumers are surrounded by AI answers, telehealth ads, lab tests, supplements, and specialist clinics. BodyPath
        helps turn confusion into an organized plan.
      </Typography>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' },
          gap: 2,
        }}
      >
        {painPoints.map((point) => (
          <Box
            key={point}
            sx={{
              bgcolor: BP.white,
              borderRadius: BP.cardRadius,
              border: `1px solid ${BP.border}`,
              boxShadow: '0 4px 20px rgba(0,0,0,0.04)',
              p: 2.5,
            }}
          >
            <Typography sx={{ color: BP.ink, fontSize: '0.95rem', fontWeight: 600, lineHeight: 1.5 }}>{point}</Typography>
          </Box>
        ))}
      </Box>
    </BodypathSection>
  );
}
