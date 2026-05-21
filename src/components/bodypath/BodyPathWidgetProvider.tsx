'use client';

import React, { createContext, useCallback, useContext, useState } from 'react';

import { BodyPathWidgetModal } from '@/components/bodypath/BodyPathWidgetModal';

type BodyPathWidgetContextValue = {
  open: (sourcePage?: string) => void;
  close: () => void;
};

const BodyPathWidgetContext = createContext<BodyPathWidgetContextValue | null>(null);

export function BodyPathWidgetProvider({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const [sourcePage, setSourcePage] = useState('/');

  const handleOpen = useCallback((page = '/') => {
    setSourcePage(page);
    setOpen(true);
  }, []);

  const handleClose = useCallback(() => setOpen(false), []);

  return (
    <BodyPathWidgetContext.Provider value={{ open: handleOpen, close: handleClose }}>
      {children}
      <BodyPathWidgetModal open={open} onClose={handleClose} sourcePage={sourcePage} />
    </BodyPathWidgetContext.Provider>
  );
}

export function useBodyPathWidget(): BodyPathWidgetContextValue {
  const ctx = useContext(BodyPathWidgetContext);
  if (!ctx) {
    throw new Error('useBodyPathWidget must be used within BodyPathWidgetProvider');
  }
  return ctx;
}
