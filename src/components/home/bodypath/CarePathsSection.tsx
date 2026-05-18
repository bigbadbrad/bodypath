import {
  BedtimeOutlined,
  BoltOutlined,
  MonitorHeartOutlined,
  PsychologyOutlined,
  ScienceOutlined,
  WcOutlined,
} from '@mui/icons-material';
import { Box, Typography } from '@mui/material';

import { BodypathSection } from '@/components/home/bodypath/BodypathSection';
import { BP } from '@/components/home/bodypath/constants';

const carePaths = [
  {
    icon: BoltOutlined,
    title: 'GLP-1 readiness',
    body: 'Understand baseline labs, eligibility questions, side-effect planning, and provider options.',
  },
  {
    icon: PsychologyOutlined,
    title: 'Fatigue and brain fog',
    body: 'Explore common lab categories and care paths related to thyroid, anemia, vitamins, sleep, stress, and metabolic health.',
  },
  {
    icon: WcOutlined,
    title: 'Perimenopause and menopause',
    body: 'Organize symptoms and find appropriate women’s health providers.',
  },
  {
    icon: MonitorHeartOutlined,
    title: 'Metabolic health',
    body: 'Understand glucose, insulin resistance, lipids, liver markers, and weight-related care options.',
  },
  {
    icon: ScienceOutlined,
    title: 'Hormones and testosterone',
    body: 'Learn what to check before starting a hormone conversation.',
  },
  {
    icon: BedtimeOutlined,
    title: 'Sleep and stress',
    body: 'Decide whether to explore sleep care, mental health support, labs, or lifestyle programs.',
  },
];

export function CarePathsSection() {
  return (
    <BodypathSection
      id="care-paths"
      backgroundColor={BP.warmBg}
      title="Built for the health decisions people are making right now."
      titleAlign="center"
    >
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', lg: 'repeat(3, 1fr)' },
          gap: 2.5,
        }}
      >
        {carePaths.map(({ icon: Icon, title, body }) => (
          <Box
            key={title}
            sx={{
              bgcolor: BP.white,
              borderRadius: BP.cardRadius,
              border: `1px solid ${BP.border}`,
              boxShadow: '0 8px 28px rgba(0,0,0,0.05)',
              p: 3,
              height: '100%',
            }}
          >
            <Icon sx={{ fontSize: 32, color: BP.accent, mb: 1.5 }} />
            <Typography sx={{ color: BP.ink, fontWeight: 700, fontSize: '1.05rem', mb: 1 }}>{title}</Typography>
            <Typography sx={{ color: BP.muted, fontSize: '0.92rem', lineHeight: 1.6 }}>{body}</Typography>
          </Box>
        ))}
      </Box>
    </BodypathSection>
  );
}
