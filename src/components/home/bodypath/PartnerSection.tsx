import Link from 'next/link';
import { ArrowForward } from '@mui/icons-material';
import { Box, Button, Typography } from '@mui/material';

import { BodypathSection } from '@/components/home/bodypath/BodypathSection';
import { BP } from '@/components/home/bodypath/constants';

const partnerCategories = [
  'GLP-1 / weight-care providers',
  'Menopause clinics',
  'Endocrinology groups',
  'Sleep programs',
  'Mental health platforms',
  'Nutrition coaching',
  'Testosterone / men’s health clinics',
  'Lab testing partners',
];

export function PartnerSection() {
  return (
    <BodypathSection
      id="partners"
      backgroundColor={BP.warmBg}
      title="Reach consumers when they are actively looking for the right next step."
      subtitle="BodyPath helps health providers, telehealth clinics, diagnostic companies, and coaching programs receive better-qualified consumer demand."
    >
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' },
          gap: 1.5,
          mb: 4,
        }}
      >
        {partnerCategories.map((category) => (
          <Box
            key={category}
            sx={{
              bgcolor: BP.white,
              borderRadius: 2,
              border: `1px solid ${BP.border}`,
              px: 2,
              py: 1.5,
            }}
          >
            <Typography sx={{ color: BP.ink, fontSize: '0.92rem', fontWeight: 600 }}>{category}</Typography>
          </Box>
        ))}
      </Box>
      <Button
        component={Link}
        href="mailto:partners@getbodypath.com"
        variant="outlined"
        endIcon={<ArrowForward />}
        sx={{
          borderColor: BP.accent,
          color: BP.accent,
          borderRadius: 999,
          px: 3,
          py: 1.2,
          textTransform: 'none',
          fontWeight: 600,
          '&:hover': { borderColor: BP.accentDark, bgcolor: 'rgba(176,42,36,0.06)' },
        }}
      >
        Become a BodyPath Partner
      </Button>
    </BodypathSection>
  );
}
