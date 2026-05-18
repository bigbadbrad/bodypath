import { Box, Typography } from '@mui/material';

import { BP } from '@/components/home/bodypath/constants';
import { SectionContainer } from '@/components/shared/SectionContainer';
import { CTAButton } from '@/components/shared/CTAButton';

export function FinalCTASection() {
  return (
    <Box
      component="section"
      sx={{
        py: { xs: 6, md: 7 },
        background: 'linear-gradient(135deg, #7A1F1C 0%, #B02A24 42%, #C94A42 72%, #B02A24 100%)',
      }}
    >
      <SectionContainer>
        <Box sx={{ textAlign: { xs: 'left', md: 'center' }, maxWidth: 640, mx: { md: 'auto' } }}>
          <Typography
            component="h2"
            sx={{ color: '#fff', fontWeight: 700, fontSize: { xs: '1.75rem', md: '2.1rem' }, mb: 1.5, lineHeight: 1.15 }}
          >
            Start with your signal.
          </Typography>
          <Typography sx={{ color: 'rgba(255,255,255,0.9)', fontSize: '1.05rem', lineHeight: 1.65, mb: 3 }}>
            Answer a few questions and get a clearer sense of what to check, what to ask, and where to go next.
          </Typography>
          <CTAButton
            sx={{
              bgcolor: '#fff',
              color: BP.accentDark,
              '&:hover': { bgcolor: '#FFF5F4', color: BP.accentDark },
            }}
          >
            Find My Next Step
          </CTAButton>
          <Typography sx={{ color: 'rgba(255,255,255,0.75)', fontSize: '0.8rem', mt: 2 }}>
            Not emergency care. Not a diagnosis. For informational purposes only.
          </Typography>
        </Box>
      </SectionContainer>
    </Box>
  );
}
