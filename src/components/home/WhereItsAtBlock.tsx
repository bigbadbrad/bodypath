'use client';

import type { FC } from 'react';
import { Box, Container, Typography } from '@mui/material';
import { Ultra } from 'next/font/google';
import Image from 'next/image';

const ultra = Ultra({ weight: '400', subsets: ['latin'] });

const ADDRESS_LINE = '5261 Schilling Rd, Coulterville, CA 95311';

/** Opens Google Maps (native app on many phones). */
const MAPS_OPEN_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(ADDRESS_LINE)}`;

function mapEmbedSrc(): string {
  const key = process.env.NEXT_PUBLIC_GOOGLE_MAPS_EMBED_KEY;
  if (key) {
    return `https://www.google.com/maps/embed/v1/place?key=${encodeURIComponent(key)}&q=${encodeURIComponent(ADDRESS_LINE)}&zoom=14`;
  }
  return `https://maps.google.com/maps?q=${encodeURIComponent(ADDRESS_LINE)}&hl=en&z=14&ie=UTF8&output=embed`;
}

export const WhereItsAtBlock: FC = () => {
  return (
    <Box sx={{ backgroundColor: '#FFFFFF', pt: { xs: 2, md: 4 }, pb: { xs: 6, md: 12 } }}>
      <Container maxWidth="md">
        <Typography
          component="p"
          sx={{
            fontSize: '0.875rem',
            fontWeight: 600,
            color: '#CD7A66',
            textTransform: 'uppercase',
            letterSpacing: '0.12em',
            mb: 1,
          }}
        >
          Coulterville, CA
        </Typography>
        <Typography
          component="h2"
          sx={{
            fontFamily: ultra.style.fontFamily,
            fontSize: '2rem',
            fontWeight: 600,
            color: '#111827',
            mb: 3,
          }}
        >
          Where It&apos;s At
        </Typography>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
          <Typography
            sx={{
              fontSize: '1.125rem',
              lineHeight: 1.7,
              textAlign: 'left',
              color: '#374151',
            }}
          >
            5261 SCHILLING RD.
            <br />
            COULTERVILLE, CA 95311
          </Typography>
          <Box>
            <Box
              sx={{
                position: 'relative',
                width: '100%',
                borderRadius: 1,
                overflow: 'hidden',
                boxShadow: '0 1px 3px 0 rgb(0 0 0 / 0.1)',
                aspectRatio: { xs: '4/3', sm: '16/10' },
                maxHeight: { xs: 320, sm: 420 },
                bgcolor: '#e5e7eb',
              }}
            >
              <Box
                component="iframe"
                title="Lucky Star Ranch on Google Maps"
                src={mapEmbedSrc()}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                sx={{
                  position: 'absolute',
                  inset: 0,
                  width: '100%',
                  height: '100%',
                  border: 0,
                  display: 'block',
                }}
              />
            </Box>
            <Typography
              component="a"
              href={MAPS_OPEN_URL}
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                display: 'inline-block',
                mt: 1.5,
                fontSize: '0.9375rem',
                fontWeight: 600,
                color: '#CD7A66',
                textDecoration: 'none',
                '&:hover': { textDecoration: 'underline' },
              }}
            >
              Open in Google Maps
            </Typography>
          </Box>
          <Box
            sx={{
              mt: 10,
              position: 'relative',
              width: '100%',
              borderRadius: 1,
              overflow: 'hidden',
              boxShadow: '0 1px 3px 0 rgb(0 0 0 / 0.1)',
              aspectRatio: '4/3',
            }}
          >
            <Image
              src="/map-to-lucky.png"
              alt="Map to Lucky Star Ranch"
              fill
              sizes="(max-width: 600px) 100vw, 768px"
              style={{ objectFit: 'contain' }}
            />
          </Box>
          <Typography
            component="h2"
            sx={{
              fontFamily: ultra.style.fontFamily,
              fontSize: '2rem',
              fontWeight: 600,
              color: '#111827',
              mb: 3,
              mt: 12,
            }}
          >
            Ranch Topography
          </Typography>
          <Box
            sx={{
              position: 'relative',
              width: '100%',
              borderRadius: 1,
              overflow: 'hidden',
              boxShadow: '0 1px 3px 0 rgb(0 0 0 / 0.1)',
              aspectRatio: '4/3',
            }}
          >
            <Image
              src="/map2.png"
              alt="Ranch topography map"
              fill
              sizes="(max-width: 600px) 100vw, 768px"
              style={{ objectFit: 'contain' }}
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
