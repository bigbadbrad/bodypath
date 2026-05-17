import Image from 'next/image';
import { ArrowForward, PlayCircleOutline } from '@mui/icons-material';
import { Box, Button, Stack, Typography } from '@mui/material';

export function HeroSection() {
  return (
    <Box
      component="section"
      sx={{
        background: 'linear-gradient(180deg, #F8FBFF 0%, #EEF5FF 100%)',
        pt: { xs: 10, md: 12 },
        pb: { xs: 6, md: 8 },
        overflow: 'visible',
      }}
    >
      {/* Same content width as MainNavbar Toolbar + HomeSection Container alignment */}
      <Box
        sx={{
          maxWidth: 1220,
          width: '100%',
          mx: 'auto',
          px: { xs: 2, md: 3 },
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: { xs: 'stretch', md: 'center' },
          gap: { xs: 4, md: 0 },
          boxSizing: 'border-box',
        }}
      >
        {/* Left 50% — copy */}
        <Box
          sx={{
            width: { xs: '100%', md: '50%' },
            flex: { md: '0 0 50%' },
            minWidth: 0,
            boxSizing: 'border-box',
            pr: { md: 3 },
          }}
        >
          <Typography sx={{ color: '#3AA5D7', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', mb: 1.5 }}>
            The Replicate System
          </Typography>
          <Typography component="h1" sx={{ color: '#0A2359', fontSize: { xs: '2.2rem', md: '3.4rem' }, lineHeight: 1.1, fontWeight: 700, maxWidth: 640 }}>
            Custom tooth replacement.
            <br />
            Designed from the anatomy
            <br />
            of <Box component="span" sx={{ color: '#2385D3' }}>every patient.</Box>
          </Typography>
          <Typography sx={{ color: '#4C5F7E', fontSize: '1.05rem', lineHeight: 1.7, mt: 2.5, maxWidth: 560 }}>
            Scan-based. Patient-specific. Placed immediately. A natural alternative to implants and bridges without drilling, fewer surgeries, and one-appointment placement.
          </Typography>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ mt: 4 }}>
            <Button variant="contained" endIcon={<ArrowForward />} sx={{ bgcolor: '#0C2A69', borderRadius: 7, px: 3.5, py: 1.3, textTransform: 'none', '&:hover': { bgcolor: '#15387D' } }}>
              Request a Demo
            </Button>
            <Button variant="outlined" endIcon={<PlayCircleOutline />} sx={{ borderColor: '#89A5CC', color: '#0C2A69', borderRadius: 7, px: 3.5, py: 1.3, textTransform: 'none' }}>
              See How It Works
            </Button>
          </Stack>
        </Box>

        {/* Right 50% — hero art, full image visible */}
        <Box
          sx={{
            width: { xs: '100%', md: '50%' },
            flex: { md: '0 0 50%' },
            minWidth: 0,
            boxSizing: 'border-box',
            display: 'flex',
            alignItems: 'center',
            justifyContent: { xs: 'center', md: 'flex-end' },
            pl: { md: 1 },
          }}
        >
          <Box sx={{ width: '100%', maxWidth: '100%', lineHeight: 0 }}>
            <Image
              src="/hero.png"
              alt="Patient-specific tooth replacement — digital design and placement"
              width={653}
              height={345}
              priority
              sizes="(max-width: 900px) 100vw, 50vw"
              style={{
                width: '100%',
                height: 'auto',
                display: 'block',
                objectFit: 'contain',
                objectPosition: 'right center',
              }}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
