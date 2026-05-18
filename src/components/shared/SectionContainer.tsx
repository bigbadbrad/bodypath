import type { PropsWithChildren } from 'react';
import type { SxProps, Theme } from '@mui/material';
import { Box } from '@mui/material';

import { BP } from '@/components/home/bodypath/constants';

interface SectionContainerProps extends PropsWithChildren {
  sx?: SxProps<Theme>;
}

export function SectionContainer({ children, sx }: SectionContainerProps) {
  return (
    <Box
      sx={{
        maxWidth: BP.maxWidth,
        width: '100%',
        mx: 'auto',
        px: { xs: 2, md: 3 },
        boxSizing: 'border-box',
        ...sx,
      }}
    >
      {children}
    </Box>
  );
}
