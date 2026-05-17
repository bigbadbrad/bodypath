import type { SvgIconComponent } from '@mui/icons-material';
import { AutoFixHigh, HealthAndSafety, NoCrash, Timer } from '@mui/icons-material';
import { Box, Typography } from '@mui/material';
import { HomeSection } from './HomeSection';

const benefits: { Icon: SvgIconComponent; title: string; body: string }[] = [
  { Icon: NoCrash, title: 'No drilling', body: 'Preserves anatomy and healthy bone.' },
  { Icon: AutoFixHigh, title: 'Natural tooth-like shape', body: 'Anatomically designed for function and esthetics.' },
  { Icon: HealthAndSafety, title: 'No damage to healthy teeth', body: 'Unlike bridges, preserve what is healthy.' },
  { Icon: Timer, title: 'Designed for one-visit placement', body: 'Less time in the chair. Faster return to life.' },
];

export function BenefitsYourPatientsWillFeel() {
  return (
    <HomeSection
      title="Benefits Your Patients Will Feel"
      titleAlign="center"
      backgroundColor="#FFFFFF"
      sectionSx={{ py: { xs: 10, md: 13 } }}
    >
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' },
          columnGap: { xs: 3, md: 4 },
          rowGap: { xs: 3, sm: 3.5 },
        }}
      >
        {benefits.map(({ Icon, title, body }) => (
          <Box key={title} sx={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', gap: 1.75, minWidth: 0 }}>
            <Icon sx={{ flexShrink: 0, fontSize: 40, color: '#55B4DF', mt: 0.15 }} />
            <Box sx={{ minWidth: 0 }}>
              <Typography sx={{ color: '#0A2359', fontWeight: 700, fontSize: '0.95rem', mb: 0.5, lineHeight: 1.35 }}>
                {title}
              </Typography>
              <Typography sx={{ color: '#4C5F7E', fontSize: '0.9rem', lineHeight: 1.5 }}>
                {body}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </HomeSection>
  );
}
