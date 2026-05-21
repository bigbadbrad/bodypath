'use client';

import type { ReactNode } from 'react';
import { ArrowForward } from '@mui/icons-material';
import type { ButtonProps } from '@mui/material';
import { Button } from '@mui/material';

import { useBodyPathWidget } from '@/components/bodypath/BodyPathWidgetProvider';
import { BP } from '@/components/home/bodypath/constants';

type BodyPathStartButtonProps = Omit<ButtonProps, 'onClick'> & {
  children: ReactNode;
  sourcePage?: string;
};

export function BodyPathStartButton({
  children,
  sourcePage = '/',
  sx,
  variant = 'contained',
  endIcon = <ArrowForward />,
  ...rest
}: BodyPathStartButtonProps) {
  const { open } = useBodyPathWidget();

  return (
    <Button
      variant={variant}
      endIcon={endIcon}
      onClick={() => open(sourcePage)}
      sx={{
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
      }}
      {...rest}
    >
      {children}
    </Button>
  );
}
