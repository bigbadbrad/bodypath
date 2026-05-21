'use client';

import React, { cloneElement, isValidElement } from 'react';

import { useBodyPathWidget } from '@/components/bodypath/BodyPathWidgetProvider';

export function BodyPathWidgetTrigger({
  children,
  sourcePage = '/',
}: {
  children: React.ReactElement<{ onClick?: React.MouseEventHandler }>;
  sourcePage?: string;
}) {
  const { open } = useBodyPathWidget();

  const trigger = isValidElement(children)
    ? cloneElement(children, {
        onClick: (e: React.MouseEvent) => {
          children.props.onClick?.(e);
          open(sourcePage);
        },
      })
    : children;

  return trigger;
}
