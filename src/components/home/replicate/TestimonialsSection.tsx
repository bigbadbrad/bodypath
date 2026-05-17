'use client';

import { FormatQuote } from '@mui/icons-material';
import { Avatar, Box, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { HomeSection } from './HomeSection';

const ROTATE_MS = 10_000;

const testimonials = [
  {
    quote:
      'Replicate has transformed how I treat patients. It is minimally invasive, efficient, and the outcomes are incredibly natural.',
    author: 'Dr. Jason Miller, DDS',
    role: 'Oral Surgeon',
    image: '/reviews/male1.webp',
  },
  {
    quote:
      'I had a tooth replaced in one visit with no drilling. It feels and looks just like my natural tooth. I could not be happier.',
    author: 'Sarah L.',
    role: 'Replicate Patient',
    image: '/reviews/female1.webp',
  },
  {
    quote:
      'Our referral workflow is simpler and patients appreciate avoiding multiple surgical visits. The portal keeps everyone aligned on design status.',
    author: 'Dr. Amanda Reyes, DMD',
    role: 'General Dentist',
    image: '/reviews/female1a.webp',
  },
  {
    quote:
      'From a prosthodontics standpoint, emergence profile and anatomy match what I would expect from ideal tooth form—without prepping adjacent teeth.',
    author: 'Dr. Robert Chen, DDS',
    role: 'Prosthodontist',
    image: '/reviews/male2.webp',
  },
  {
    quote:
      'I was nervous about losing a front tooth. The team walked me through the scan and I walked out same day with something that matched my smile.',
    author: 'Marcus T.',
    role: 'Replicate Patient',
    image: '/reviews/male2a.webp',
  },
  {
    quote:
      'For busy specialty practices, turnaround and predictability matter. Replicate fits cases where we want fewer operative steps and happy referring dentists.',
    author: 'Dr. Priya Nair, DDS',
    role: 'Periodontist',
    image: '/reviews/female2.webp',
  },
  {
    quote:
      'I explain treatment options every day. Patients grasp “custom from your scan” quickly—and they like hearing there is often no drilling into healthy neighbors.',
    author: 'Elena V., RDH',
    role: 'Dental Hygienist',
    image: '/reviews/female3.webp',
  },
  {
    quote:
      'We integrated case submission into our morning huddle. Fewer scheduling headaches and patients notice how streamlined the visit feels.',
    author: 'Dr. James Okonkwo, DDS',
    role: 'Practice Owner',
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
    <HomeSection title="What clinicians and patients say" titleAlign="center" backgroundColor="#FFFFFF">
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
              minWidth: 0,
            }}
          >
            <Avatar
              alt={`Portrait of ${item.author}`}
              src={item.image}
              imgProps={{ loading: 'lazy' }}
              sx={{ width: 72, height: 72, flexShrink: 0, bgcolor: '#E8EEF8' }}
            />
            <Box sx={{ minWidth: 0 }}>
              <FormatQuote sx={{ color: '#8FA8CA', mb: 0.3 }} />
              <Typography sx={{ color: '#24456F', fontSize: '0.96rem', lineHeight: 1.65, mb: 1.2 }}>{item.quote}</Typography>
              <Typography sx={{ color: '#0A2359', fontSize: '0.92rem', fontWeight: 700 }}>{item.author}</Typography>
              <Typography sx={{ color: '#5E7496', fontSize: '0.87rem' }}>{item.role}</Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </HomeSection>
  );
}
