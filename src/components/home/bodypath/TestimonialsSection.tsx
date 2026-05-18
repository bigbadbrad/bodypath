'use client';

import { FormatQuote } from '@mui/icons-material';
import { Avatar, Box, Typography } from '@mui/material';
import { useEffect, useState } from 'react';

import { BodypathSection } from '@/components/home/bodypath/BodypathSection';
import { BP } from '@/components/home/bodypath/constants';

const ROTATE_MS = 10_000;

const testimonials = [
  {
    quote:
      'I finally had a list of labs to discuss with my doctor instead of another generic AI paragraph. BodyPath helped me organize what mattered.',
    author: 'Jamie R.',
    role: 'BodyPath user',
    image: '/reviews/female1.webp',
  },
  {
    quote:
      'The signal map made it clearer that my fatigue could be thyroid, iron, sleep, or stress — and which paths were worth exploring first.',
    author: 'Alex M.',
    role: 'BodyPath user',
    image: '/reviews/male1.webp',
  },
  {
    quote:
      'I appreciated that it didn’t pretend to diagnose me. It gave possible next steps and questions to bring to a real clinician.',
    author: 'Priya K.',
    role: 'BodyPath user',
    image: '/reviews/female2.webp',
  },
  {
    quote:
      'As someone considering GLP-1, seeing baseline labs and provider options in one place saved me hours of scattered research.',
    author: 'Chris L.',
    role: 'BodyPath user',
    image: '/reviews/male2.webp',
  },
  {
    quote:
      'Perimenopause symptoms are confusing. BodyPath helped me understand which specialist types might fit before I booked anything.',
    author: 'Elena S.',
    role: 'BodyPath user',
    image: '/reviews/female3.webp',
  },
  {
    quote:
      'I used it to prep for my primary-care visit. My doctor said the lab list was thoughtful and saved us time in the appointment.',
    author: 'Marcus T.',
    role: 'BodyPath user',
    image: '/reviews/male3.webp',
  },
];

const PAIR_COUNT = testimonials.length / 2;

export function TestimonialsSection() {
  const [pairIndex, setPairIndex] = useState(0);

  useEffect(() => {
    if (PAIR_COUNT <= 1) return undefined;
    const id = window.setInterval(() => {
      setPairIndex((i) => (i + 1) % PAIR_COUNT);
    }, ROTATE_MS);
    return () => window.clearInterval(id);
  }, []);

  const sliceStart = pairIndex * 2;
  const visible = testimonials.slice(sliceStart, sliceStart + 2);

  return (
    <BodypathSection title="What clinicians and patients say" titleAlign="center" backgroundColor={BP.warmBg}>
      <Box
        aria-live="polite"
        sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' }, gap: 2.5 }}
      >
        {visible.map((item) => (
          <Box
            key={item.author}
            sx={{
              display: 'flex',
              gap: 1.8,
              alignItems: 'flex-start',
              bgcolor: BP.white,
              borderRadius: BP.cardRadius,
              border: `1px solid ${BP.border}`,
              boxShadow: '0 8px 28px rgba(0,0,0,0.05)',
              p: 2.5,
              minWidth: 0,
            }}
          >
            <Avatar
              alt={`Portrait of ${item.author}`}
              src={item.image}
              imgProps={{ loading: 'lazy' }}
              sx={{ width: 72, height: 72, flexShrink: 0, bgcolor: '#F3F0EC' }}
            />
            <Box sx={{ minWidth: 0 }}>
              <FormatQuote sx={{ color: BP.accent, mb: 0.3, opacity: 0.7 }} />
              <Typography sx={{ color: BP.ink, fontSize: '0.96rem', lineHeight: 1.65, mb: 1.2 }}>{item.quote}</Typography>
              <Typography sx={{ color: BP.ink, fontSize: '0.92rem', fontWeight: 700 }}>{item.author}</Typography>
              <Typography sx={{ color: BP.muted, fontSize: '0.87rem' }}>{item.role}</Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </BodypathSection>
  );
}
