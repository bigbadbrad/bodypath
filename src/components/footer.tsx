'use client';

import Link from 'next/link';
import { Box, Typography } from '@mui/material';

import { useBodyPathWidget } from '@/components/bodypath/BodyPathWidgetProvider';
import { BodypathIcon } from '@/components/bodypath-icon';

const links = [
  { label: 'How It Works', href: '/#how-it-works' },
  { label: 'Care Paths', href: '/#care-paths' },
  { label: 'For Partners', href: '/#partners' },
  { label: 'Find My Next Step', action: 'widget' as const },
  { label: 'Privacy Policy', href: '#' },
  { label: 'Terms of Use', href: '#' },
  { label: 'Contact', href: 'mailto:hello@getbodypath.com' },
];

export function Footer() {
  const { open } = useBodyPathWidget();

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
          {links.map((item) =>
            'action' in item && item.action === 'widget' ? (
              <Typography
                key={item.label}
                component="button"
                type="button"
                onClick={() => open('/')}
                sx={{
                  color: 'rgba(255,255,255,0.92)',
                  fontSize: '0.86rem',
                  textDecoration: 'none',
                  border: 'none',
                  background: 'none',
                  cursor: 'pointer',
                  p: 0,
                  font: 'inherit',
                  '&:hover': { color: '#fff' },
                }}
              >
                {item.label}
              </Typography>
            ) : (
              <Typography
                key={item.label}
                component={Link}
                href={item.href}
                sx={{ color: 'rgba(255,255,255,0.92)', fontSize: '0.86rem', textDecoration: 'none', '&:hover': { color: '#fff' } }}
              >
                {item.label}
              </Typography>
            )
          )}
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
