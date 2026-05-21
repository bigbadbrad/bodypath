'use client';

import type { ReactNode } from 'react';
import Link from 'next/link';
import { ArrowForward } from '@mui/icons-material';
import type { ButtonProps } from '@mui/material';
import { Button } from '@mui/material';

import { useBodyPathWidget } from '@/components/bodypath/BodyPathWidgetProvider';
import { BP } from '@/components/home/bodypath/constants';

type CTAButtonProps = Omit<ButtonProps, 'href'> & {
  href?: string;
  /** When true (default), opens the BodyPath intake modal instead of navigating. */
  openWidget?: boolean;
  sourcePage?: string;
  children: ReactNode;
};

export function CTAButton({
  href,
  openWidget = true,
  sourcePage = '/',
  children,
  sx,
  ...rest
}: CTAButtonProps) {
  const { open } = useBodyPathWidget();
  const sharedSx = {
    bgcolor: BP.accent,
    color: '#fff',
    borderRadius: 999,
    px: 3,
    py: 1.35,
    textTransform: 'none',
    fontWeight: 600,
    fontSize: '0.95rem',
    boxShadow: 'none',
    '&:hover': { bgcolor: BP.accentDark, boxShadow: 'none' },
    ...sx,
  };

  if (openWidget && !href) {
    return (
      <Button
        variant="contained"
        endIcon={<ArrowForward />}
        onClick={() => open(sourcePage)}
        sx={sharedSx}
        {...rest}
      >
        {children}
      </Button>
    );
  }

  return (
    <Button
      component={Link}
      href={href ?? '/intake'}
      variant="contained"
      endIcon={<ArrowForward />}
      sx={sharedSx}
      {...rest}
    >
      {children}
    </Button>
  );
}
