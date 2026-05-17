'use client';

// Suppress React 19 ref warnings from MUI v5 (harmless; upgrade to MUI v6 for full support)
if (typeof window !== 'undefined' && process.env.NODE_ENV === 'development') {
  const originalError = console.error;
  console.error = (...args: unknown[]) => {
    if (typeof args[0] === 'string' && args[0].includes('Accessing element.ref was removed in React 19')) {
      return;
    }
    originalError.apply(console, args);
  };
}

import Link from 'next/link';
import { ArrowDropDown, ArrowForward } from '@mui/icons-material';
import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material';

import { BodypathLogo } from '@/components/bodypath-logo';

const navItems = ['Solution', 'How It Works', 'Clinical Benefits', 'For Dentists', 'Company'];

export function MainNavbar() {

  return (
    <AppBar
      elevation={0}
      sx={{
        backgroundColor: 'rgba(255,255,255,0.95)',
        backgroundImage: 'none',
        boxShadow: 'none',
        borderTop: 'none',
        borderBottom: '1px solid #DFE8F6',
        backdropFilter: 'blur(8px)',
      }}
    >
      <Toolbar
        sx={{
          maxWidth: 1220,
          width: '100%',
          mx: 'auto',
          minHeight: { xs: 72, md: 84 },
          px: { xs: 2, md: 3 },
          display: 'flex',
          justifyContent: 'space-between',
          gap: 2,
        }}
      >
        <Box component={Link} href="/" sx={{ lineHeight: 0, textDecoration: 'none', display: 'inline-flex', alignItems: 'center' }}>
          <BodypathLogo height={44} />
        </Box>
        <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 2.2 }}>
          {navItems.map((item) => (
            <Typography
              key={item}
              component="button"
              sx={{
                border: 'none',
                bgcolor: 'transparent',
                color: '#163767',
                fontSize: '0.92rem',
                fontWeight: 500,
                display: 'inline-flex',
                alignItems: 'center',
                cursor: 'pointer',
                p: 0,
              }}
            >
              {item}
              {item !== 'How It Works' && item !== 'Clinical Benefits' ? <ArrowDropDown sx={{ fontSize: 18 }} /> : null}
            </Typography>
          ))}
          <Button variant="contained" endIcon={<ArrowForward />} sx={{ bgcolor: '#0C2A69', borderRadius: 7, px: 2.7, py: 1.05, textTransform: 'none', fontWeight: 700, '&:hover': { bgcolor: '#15387D' } }}>
            Request a Demo
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
