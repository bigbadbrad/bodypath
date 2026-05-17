import { CheckCircleOutline } from '@mui/icons-material';
import { Box, Typography } from '@mui/material';
import { HomeSection } from './HomeSection';

const portalBenefits = [
  'Secure case submission',
  'Real-time design updates',
  'Collaborate with our expert team',
  'Designed for speed and simplicity',
];

export function PortalSection() {
  return (
    <HomeSection backgroundColor="#FFFFFF">
      <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1.2fr 1fr' }, gap: 3, alignItems: 'center' }}>
        <Box sx={{ border: '1px solid #DDE8F7', borderRadius: 2, p: 2, backgroundColor: '#F8FBFF' }}>
          <Box sx={{ border: '1px solid #D2E1F5', borderRadius: 1.5, backgroundColor: '#FFFFFF', overflow: 'hidden' }}>
            <Box sx={{ p: 1.3, borderBottom: '1px solid #E1ECF9', display: 'flex', alignItems: 'center', gap: 1 }}>
              <Box sx={{ width: 7, height: 7, borderRadius: '50%', backgroundColor: '#94B3DC' }} />
              <Typography sx={{ color: '#4C5F7E', fontSize: '0.8rem' }}>Replicate Portal - Placeholder</Typography>
            </Box>
            <Box sx={{ height: { xs: 180, md: 220 }, background: 'linear-gradient(120deg, #EEF5FF, #DDEBFA)' }} />
          </Box>
        </Box>
        <Box>
          <Typography component="h3" sx={{ color: '#0A2359', fontSize: { xs: '1.45rem', md: '1.85rem' }, fontWeight: 700, mb: 1.2 }}>
            Built for modern dental practices
          </Typography>
          <Typography sx={{ color: '#4C5F7E', mb: 2.2 }}>
            The Replicate Portal makes it easy to submit cases, track progress, and manage your workflow securely and efficiently from anywhere.
          </Typography>
          {portalBenefits.map((item) => (
            <Box key={item} sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
              <CheckCircleOutline sx={{ color: '#57B7E0', fontSize: 18 }} />
              <Typography sx={{ color: '#21416F', fontSize: '0.94rem' }}>{item}</Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </HomeSection>
  );
}
