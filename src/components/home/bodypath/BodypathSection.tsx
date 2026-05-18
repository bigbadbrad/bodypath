import type { PropsWithChildren, ReactNode } from 'react';
import type { SxProps, Theme } from '@mui/material';
import { Box, Typography } from '@mui/material';

import { BP } from '@/components/home/bodypath/constants';
import { SectionContainer } from '@/components/shared/SectionContainer';

interface BodypathSectionProps extends PropsWithChildren {
  id?: string;
  eyebrow?: string;
  title?: string;
  subtitle?: ReactNode;
  backgroundColor?: string;
  titleAlign?: 'left' | 'center';
  sectionSx?: SxProps<Theme>;
}

export function BodypathSection({
  id,
  eyebrow,
  title,
  subtitle,
  backgroundColor = BP.white,
  titleAlign = 'left',
  sectionSx,
  children,
}: BodypathSectionProps) {
  const sectionSxObject =
    sectionSx && typeof sectionSx === 'object' && !Array.isArray(sectionSx)
      ? (sectionSx as Record<string, unknown>)
      : undefined;

  return (
    <Box
      id={id}
      component="section"
      sx={{
        bgcolor: backgroundColor,
        py: { xs: 6, md: 8 },
        ...sectionSxObject,
      }}
    >
      <SectionContainer>
        {eyebrow ? (
          <Typography
            sx={{
              color: BP.accent,
              fontSize: '0.72rem',
              fontWeight: 700,
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              mb: 1.5,
              textAlign: titleAlign,
            }}
          >
            {eyebrow}
          </Typography>
        ) : null}
        {title ? (
          <Typography
            component="h2"
            sx={{
              color: BP.ink,
              fontSize: { xs: '1.75rem', md: '2.15rem' },
              fontWeight: 700,
              lineHeight: 1.15,
              letterSpacing: '-0.02em',
              mb: subtitle ? 2 : titleAlign === 'center' ? 4 : 3,
              textAlign: titleAlign,
              maxWidth: titleAlign === 'center' ? 720 : 640,
              ...(titleAlign === 'center' ? { mx: 'auto' } : {}),
            }}
          >
            {title}
          </Typography>
        ) : null}
        {subtitle ? (
          <Typography
            sx={{
              color: BP.muted,
              fontSize: { xs: '1rem', md: '1.05rem' },
              lineHeight: 1.65,
              maxWidth: titleAlign === 'center' ? 680 : 640,
              mb: 4,
              textAlign: titleAlign,
              ...(titleAlign === 'center' ? { mx: 'auto' } : {}),
            }}
          >
            {subtitle}
          </Typography>
        ) : null}
        {children}
      </SectionContainer>
    </Box>
  );
}
