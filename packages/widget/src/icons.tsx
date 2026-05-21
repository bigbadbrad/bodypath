import React from 'react';

const SIZE = 27;

function Svg({ children, color = '#B02A24' }: { children: React.ReactNode; color?: string }) {
  return (
    <svg
      width={SIZE}
      height={SIZE}
      viewBox="0 0 24 24"
      fill={color}
      aria-hidden
      style={{ display: 'block', flexShrink: 0 }}
    >
      {children}
    </svg>
  );
}

export type WidgetIconKey =
  | 'default'
  | 'energy'
  | 'hormones'
  | 'metabolic'
  | 'sleep'
  | 'stress'
  | 'labs'
  | 'general'
  | 'calendar'
  | 'person'
  | 'warning'
  | 'check'
  | 'email'
  | 'science'
  | 'shield'
  | 'provider'
  | 'goal'
  | 'medication'
  | 'access'
  | 'readiness'
  | 'disclaimer';

const ICONS: Record<WidgetIconKey, React.FC<{ color?: string }>> = {
  default: ({ color }) => (
    <Svg color={color}>
      <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm0 2a8 8 0 1 1 0 16 8 8 0 0 1 0-16zm0 3h2v6h-2V7zm0 8h2v2h-2v-2z" />
    </Svg>
  ),
  energy: ({ color }) => (
    <Svg color={color}>
      <path d="M15.67 4H14V2h-4v2H8.33L7 10h10l-1.33-6zM6 20h12v-2H6v2zm2-4h8v-6H8v6z" />
    </Svg>
  ),
  hormones: ({ color }) => (
    <Svg color={color}>
      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
    </Svg>
  ),
  metabolic: ({ color }) => (
    <Svg color={color}>
      <path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z" />
    </Svg>
  ),
  sleep: ({ color }) => (
    <Svg color={color}>
      <path d="M9.27 3.48C5.81 4.97 3.5 8.48 3.5 12.5 3.5 17.75 7.75 22 13 22c4.79 0 8.86-3.44 9.65-8.01.11-.7-.55-1.24-1.21-.97-1.12.45-2.34.68-3.59.68-4.97 0-9-4.03-9-9 0-1.25.23-2.47.68-3.59.27-.66-.27-1.32-.97-1.21C12.94 3.64 10.47 2.5 9.27 3.48z" />
    </Svg>
  ),
  stress: ({ color }) => (
    <Svg color={color}>
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
    </Svg>
  ),
  labs: ({ color }) => (
    <Svg color={color}>
      <path d="M19.8 18.4 14 10.6V4.4c.9-.3 1.5-1.1 1.5-2.1 0-1.2-1-2.2-2.2-2.2-.6 0-1.2.3-1.6.7L9.2 2.7 7.8 4.1 9 5.3V10.6L3.2 18.4c-.5.7-.4 1.7.2 2.3.6.6 1.6.7 2.3l2.8 2.8c.4.4.9.6 1.4.6s1-.2 1.4-.6l2.8-2.8c.6-.6.7-1.6.2-2.3zM9 4.4c0-.6.4-1 1-1s1 .4 1 1-.4 1-1 1-1-.4-1-1z" />
    </Svg>
  ),
  general: ({ color }) => (
    <Svg color={color}>
      <path d="M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm-1 2h2v6h-2V8z" />
    </Svg>
  ),
  calendar: ({ color }) => (
    <Svg color={color}>
      <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zM5 8V6h14v2H5z" />
    </Svg>
  ),
  person: ({ color }) => (
    <Svg color={color}>
      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
    </Svg>
  ),
  warning: ({ color }) => (
    <Svg color={color}>
      <path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z" />
    </Svg>
  ),
  check: ({ color }) => (
    <Svg color={color}>
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
    </Svg>
  ),
  email: ({ color }) => (
    <Svg color={color}>
      <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5 5L4 8V6l8 5 8-5v2z" />
    </Svg>
  ),
  science: ({ color }) => (
    <Svg color={color}>
      <path d="M19.8 18.4 14 10.6V4.4c.9-.3 1.5-1.1 1.5-2.1 0-1.2-1-2.2-2.2-2.2-.6 0-1.2.3-1.6.7L9.2 2.7 7.8 4.1 9 5.3V10.6L3.2 18.4c-.5.7-.4 1.7.2 2.3.6.6 1.6.7 2.3l2.8 2.8c.4.4.9.6 1.4.6s1-.2 1.4-.6l2.8-2.8c.6-.6.7-1.6.2-2.3z" />
    </Svg>
  ),
  shield: ({ color }) => (
    <Svg color={color}>
      <path d="M12 1 3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 2.18 7 3.12v5.7c0 4.54-2.8 8.65-7 9.82-4.2-1.17-7-5.28-7-9.82V6.3l7-3.12z" />
    </Svg>
  ),
  provider: ({ color }) => (
    <Svg color={color}>
      <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 10c-2.33 0-4.31-1.46-5.11-3.5h10.22c-.8 2.04-2.78 3.5-5.11 3.5z" />
    </Svg>
  ),
  goal: ({ color }) => (
    <Svg color={color}>
      <path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27z" />
    </Svg>
  ),
  medication: ({ color }) => (
    <Svg color={color}>
      <path d="M6 3h12v2.25H6V3zm0 3.75h12v8.5c0 1.24-1 2.25-2.25 2.25h-7.5C7 17.5 6 16.5 6 15.25V6.75zm6 10.5c1.86 0 3.41-1.28 3.86-3H8.14c.45 1.72 2 3 3.86 3z" />
    </Svg>
  ),
  access: ({ color }) => (
    <Svg color={color}>
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
    </Svg>
  ),
  readiness: ({ color }) => (
    <Svg color={color}>
      <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67V7z" />
    </Svg>
  ),
  disclaimer: ({ color }) => (
    <Svg color={color}>
      <path d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z" />
    </Svg>
  ),
};

export function WidgetIcon({ name, color }: { name: WidgetIconKey; color?: string }) {
  const Icon = ICONS[name] ?? ICONS.default;
  return <Icon color={color} />;
}

export const PRIMARY_GOAL_ICONS: Record<string, WidgetIconKey> = {
  fatigue: 'energy',
  hormones_menopause: 'hormones',
  metabolic_glp1: 'metabolic',
  sleep_recovery: 'sleep',
  stress_mood: 'stress',
  mens_health_testosterone: 'person',
  lab_interpretation: 'labs',
  general_uncertainty: 'general',
};
