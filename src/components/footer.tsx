'use client';

import Link from 'next/link';
import { Box, Typography } from '@mui/material';

import { BodypathIcon } from '@/components/bodypath-icon';

const links = [
  { label: 'How It Works', href: '/#how-it-works' },
  { label: 'Care Paths', href: '/#care-paths' },
  { label: 'For Partners', href: '/#partners' },
  { label: 'Find My Next Step', href: '/intake' },
  { label: 'Privacy Policy', href: '#' },
  { label: 'Terms of Use', href: '#' },
  { label: 'Contact', href: 'mailto:hello@getbodypath.com' },
];

export function Footer() {
  return (
    <Box component="footer" sx={{ color: '#FFFFFF', bgcolor: '#B02A24' }}>
      <Box
        sx={{
          maxWidth: 1220,
          mx: 'auto',
          px: { xs: 2, md: 3 },
          py: 4.5,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
        }}
      >
        <Box sx={{ mb: 2.2, lineHeight: 0, height: { xs: 72, md: 96 } }}>
          <BodypathIcon color="#ffffff" height="100%" />
        </Box>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2.2, mb: 1.8, justifyContent: 'center' }}>
          {links.map((item) => (
            <Typography
              key={item.label}
              component={Link}
              href={item.href}
              sx={{ color: 'rgba(255,255,255,0.92)', fontSize: '0.86rem', textDecoration: 'none', '&:hover': { color: '#fff' } }}
            >
              {item.label}
            </Typography>
          ))}
        </Box>
        <Typography sx={{ color: 'rgba(255,255,255,0.85)', fontSize: '0.82rem', maxWidth: 720, lineHeight: 1.55 }}>
          BodyPath provides educational health navigation and care-path information. BodyPath does not provide medical
          diagnosis, treatment, emergency care, or prescriptions. Always consult a qualified healthcare professional for
          medical advice. If you may be experiencing a medical emergency, call 911 or seek emergency care immediately.
        </Typography>
      </Box>
    </Box>
  );
}
