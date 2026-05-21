'use client';

import { BodypathStartWidget } from '@bodypath/start-widget';
import { Box } from '@mui/material';

export interface BodyPathWidgetModalProps {
  open: boolean;
  onClose: () => void;
  sourcePage?: string;
}

/** Custom overlay modal — matches full-orbit /remiroof (no MUI Dialog). */
export function BodyPathWidgetModal({ open, onClose, sourcePage }: BodyPathWidgetModalProps) {
  if (!open) return null;

  return (
    <Box
      role="dialog"
      aria-modal="true"
      aria-label="BodyPath intake"
      sx={{
        position: 'fixed',
        inset: 0,
        zIndex: 1400,
        display: 'flex',
        alignItems: { xs: 'stretch', sm: 'center' },
        justifyContent: 'center',
        bgcolor: 'rgba(0,0,0,0.5)',
        p: { xs: 0, sm: 2 },
      }}
      onClick={onClose}
    >
      <Box
        className="bodypath-widget-modal-panel"
        sx={{
          maxWidth: { xs: '100%', sm: 560 },
          width: '100%',
          height: { xs: '100%', sm: 'auto' },
          maxHeight: { xs: '100%', sm: 'min(90vh, 720px)' },
          borderRadius: { xs: 0, sm: 2 },
          overflow: 'hidden',
          bgcolor: '#fff',
          boxShadow: { xs: 'none', sm: 24 },
          display: 'flex',
          flexDirection: 'column',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <BodypathStartWidget onClose={onClose} sourcePage={sourcePage} />
      </Box>
    </Box>
  );
}
