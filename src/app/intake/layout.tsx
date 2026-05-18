import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Find My Next Step | BodyPath',
  description: 'Start your BodyPath intake — organize symptoms, labs, and possible care paths.',
};

export default function IntakeLayout({ children }: { children: React.ReactNode }) {
  return children;
}
