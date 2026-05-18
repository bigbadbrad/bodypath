import { ArrowForward } from '@mui/icons-material';
import { Box, Button, Container, Typography } from '@mui/material';

export function CtaBand() {
  return (
    <Box
      component="section"
      sx={{
        py: { xs: 5, md: 6 },
        background: 'linear-gradient(135deg, #7A1F1C 0%, #B02A24 42%, #C94A42 72%, #B02A24 100%)',
      }}
    >
      <Container maxWidth={false} disableGutters sx={{ maxWidth: 1220, mx: 'auto', px: { xs: 2, md: 3 }, boxSizing: 'border-box', display: 'flex', flexDirection: { xs: 'column', md: 'row' }, alignItems: { xs: 'flex-start', md: 'center' }, justifyContent: 'space-between', gap: 2.5 }}>
        <Box>
          <Typography component="h2" sx={{ color: '#FFFFFF', fontWeight: 700, fontSize: { xs: '1.45rem', md: '2rem' }, mb: 0.5 }}>
            Ready to elevate patient care?
          </Typography>
          <Typography sx={{ color: 'rgba(255,255,255,0.9)', maxWidth: 600 }}>
            Discover the Replicate System and bring a better experience to your patients, starting with your next case.
          </Typography>
        </Box>
        <Button
          variant="contained"
          endIcon={<ArrowForward />}
          sx={{
            bgcolor: '#FFFFFF',
            color: '#8B1F1C',
            px: 3.2,
            py: 1.2,
            borderRadius: 7,
            textTransform: 'none',
            fontWeight: 700,
            boxShadow: '0 4px 20px rgba(0,0,0,0.12)',
            '&:hover': { bgcolor: '#FFF5F4' },
          }}
        >
          Request a Demo
        </Button>
      </Container>
    </Box>
  );
}
