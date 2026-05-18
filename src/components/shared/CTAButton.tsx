import type { ReactNode } from 'react';
import Link from 'next/link';
import { ArrowForward } from '@mui/icons-material';
import type { ButtonProps } from '@mui/material';
import { Button } from '@mui/material';

import { BP } from '@/components/home/bodypath/constants';

type CTAButtonProps = Omit<ButtonProps, 'href'> & {
  href?: string;
  children: ReactNode;
};

export function CTAButton({ href = '/intake', children, sx, ...rest }: CTAButtonProps) {
  return (
    <Button
      component={Link}
      href={href}
      variant="contained"
      endIcon={<ArrowForward />}
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
