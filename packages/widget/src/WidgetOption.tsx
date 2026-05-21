import React from 'react';

import type { WidgetIconKey } from './icons';
import { WidgetIcon } from './icons';

export function WidgetOption({
  label,
  selected,
  onClick,
  iconKey = 'default',
}: {
  label: string;
  selected: boolean;
  onClick: () => void;
  iconKey?: WidgetIconKey;
}) {
  return (
    <div
      className={`service-item${selected ? ' selected' : ''}`}
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && onClick()}
    >
      <div className="service-icon-wrapper">
        <WidgetIcon name={iconKey} />
      </div>
      <div className="service-text">
        <div className="service-name">{label}</div>
      </div>
    </div>
  );
}
