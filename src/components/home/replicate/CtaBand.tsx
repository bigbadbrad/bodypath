import { ArrowForward } from '@mui/icons-material';
import { Box, Button, Container, Typography } from '@mui/material';

export function CtaBand() {
  return (
    <Box component="section" sx={{ py: { xs: 5, md: 6 }, background: 'linear-gradient(90deg, #0A2460 0%, #0B2F71 40%, #0F5A8F 100%)' }}>
      <Container maxWidth={false} disableGutters sx={{ maxWidth: 1220, mx: 'auto', px: { xs: 2, md: 3 }, boxSizing: 'border-box', display: 'flex', flexDirection: { xs: 'column', md: 'row' }, alignItems: { xs: 'flex-start', md: 'center' }, justifyContent: 'space-between', gap: 2.5 }}>
        <Box>
          <Typography component="h2" sx={{ color: '#FFFFFF', fontWeight: 700, fontSize: { xs: '1.45rem', md: '2rem' }, mb: 0.5 }}>
            Ready to elevate patient care?
          </Typography>
          <Typography sx={{ color: '#D6E8FF', maxWidth: 600 }}>
            Discover the Replicate System and bring a better experience to your patients, starting with your next case.
          </Typography>
        </Box>
        <Button variant="contained" endIcon={<ArrowForward />} sx={{ bgcolor: '#FFFFFF', color: '#0B2A67', px: 3.2, py: 1.2, borderRadius: 7, textTransform: 'none', fontWeight: 700, '&:hover': { bgcolor: '#EAF2FF' } }}>
          Request a Demo
        </Button>
      </Container>
    </Box>
  );
}
