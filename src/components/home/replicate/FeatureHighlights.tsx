import type { SvgIconComponent } from '@mui/icons-material';
import { AccessTime, DesktopWindows, MonitorHeart, Psychology } from '@mui/icons-material';
import { Box, Typography } from '@mui/material';
import { HomeSection } from './HomeSection';

const items: { Icon: SvgIconComponent; title: string; body: string }[] = [
  { Icon: Psychology, title: 'Custom-designed from patient anatomy', body: 'CBCT + intraoral scan driven precision.' },
  { Icon: AccessTime, title: 'Immediate placement workflow', body: 'One-appointment tooth replacement.' },
  { Icon: MonitorHeart, title: 'For specialists and general dentists', body: 'Simple workflow. Broad clinical fit.' },
  { Icon: DesktopWindows, title: 'Browser-based design portal', body: 'Secure, scalable, and accessible anywhere.' },
];

export function FeatureHighlights() {
  return (
    <HomeSection
      backgroundColor="#FFFFFF"
      sectionSx={{
        pt: { xs: 9, md: 11 },
        pb: { xs: 9, md: 11 },
      }}
    >
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' },
          columnGap: { xs: 3, md: 4 },
          rowGap: { xs: 3, sm: 3.5 },
        }}
      >
        {items.map(({ Icon, title, body }) => (
          <Box key={title} sx={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', gap: 1.75, minWidth: 0 }}>
            <Icon
              sx={{
                flexShrink: 0,
                fontSize: 40,
                color: '#55B4DF',
                mt: 0.15,
              }}
            />
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
