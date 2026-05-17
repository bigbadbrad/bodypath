import type { PropsWithChildren, ReactNode } from 'react';
import type { SxProps, Theme } from '@mui/material/styles';
import { Box, Container, Typography } from '@mui/material';

interface HomeSectionProps extends PropsWithChildren {
  eyebrow?: string;
  title?: string;
  subtitle?: ReactNode;
  backgroundColor?: string;
  /** Heading alignment for eyebrow, title, and subtitle. */
  titleAlign?: 'left' | 'center';
  /** Merged onto the outer section `Box` (e.g. extra vertical padding). */
  sectionSx?: SxProps<Theme>;
}

export function HomeSection({ eyebrow, title, subtitle, backgroundColor = '#FFFFFF', titleAlign = 'left', sectionSx, children }: HomeSectionProps) {
  const sectionSxObject =
    sectionSx && typeof sectionSx === 'object' && !Array.isArray(sectionSx)
      ? (sectionSx as Record<string, unknown>)
      : undefined;

  return (
    <Box
      component="section"
      sx={{
        backgroundColor,
        py: { xs: 6, md: 8 },
        ...sectionSxObject,
      } satisfies SxProps<Theme>}
    >
      <Container maxWidth={false} disableGutters sx={{ maxWidth: 1220, mx: 'auto', px: { xs: 2, md: 3 }, boxSizing: 'border-box' }}>
        {eyebrow ? (
          <Typography
            sx={{
              color: '#3AA5D7',
              fontSize: '0.75rem',
              fontWeight: 700,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              mb: 1,
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
              color: '#0A2359',
              fontSize: { xs: '1.8rem', md: '2.2rem' },
              fontWeight: 700,
              mb: titleAlign === 'center' ? 4 : 1,
              textAlign: titleAlign,
            }}
          >
            {title}
          </Typography>
        ) : null}
        {subtitle ? (
          <Typography
            sx={{
              color: '#4C5F7E',
              fontSize: '1rem',
              lineHeight: 1.6,
              maxWidth: 700,
              mb: 4,
              textAlign: titleAlign,
              ...(titleAlign === 'center' ? { mx: 'auto' } : {}),
            }}
          >
            {subtitle}
          </Typography>
        ) : null}
        {children}
      </Container>
    </Box>
  );
}
