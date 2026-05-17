'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Box, Typography } from '@mui/material';

const links = ['Solution', 'How It Works', 'Clinical Benefits', 'For Dentists', 'Company', 'Privacy Policy', 'Terms of Use', 'Contact'];

export function Footer() {
  return (
    <Box component="footer" sx={{ color: '#FFFFFF', background: 'linear-gradient(90deg, #071D4E 0%, #06255E 40%, #0A4A7F 100%)' }}>
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
        <Box sx={{ mb: 2.2, lineHeight: 0 }}>
          <Image
            src="/icon-white-transparent.png"
            alt="Replicate icon"
            width={1094}
            height={725}
            style={{ height: 'clamp(56px, 12vw, 96px)', width: 'auto', maxWidth: 'min(100%, 280px)', objectFit: 'contain' }}
          />
        </Box>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2.2, mb: 1.8, justifyContent: 'center' }}>
          {links.map((item) => (
            <Typography key={item} component={Link} href="#" sx={{ color: '#DFEAFF', fontSize: '0.86rem', textDecoration: 'none' }}>
              {item}
            </Typography>
          ))}
        </Box>
        <Typography sx={{ color: '#BFD4F7', fontSize: '0.82rem', maxWidth: 640 }}>
          The Replicate System is not available for distribution in the U.S.
        </Typography>
      </Box>
    </Box>
  );
}
