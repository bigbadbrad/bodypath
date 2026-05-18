import { CarePathsSection } from '@/components/home/bodypath/CarePathsSection';
import { DifferenceSection } from '@/components/home/bodypath/DifferenceSection';
import { FinalCTASection } from '@/components/home/bodypath/FinalCTASection';
import { HeroSection } from '@/components/home/bodypath/HeroSection';
import { HowItWorksSection } from '@/components/home/bodypath/HowItWorksSection';
import { PartnerSection } from '@/components/home/bodypath/PartnerSection';
import { ProblemSection } from '@/components/home/bodypath/ProblemSection';
import { ProviderRoutingSection } from '@/components/home/bodypath/ProviderRoutingSection';
import { TestimonialsSection } from '@/components/home/bodypath/TestimonialsSection';
import { TrustSafetySection } from '@/components/home/bodypath/TrustSafetySection';

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      name: 'BodyPath',
      url: 'https://getbodypath.com',
      description:
        'BodyPath is an AI health navigation service that helps consumers organize symptoms, labs, and care-path options.',
    },
    {
      '@type': 'WebSite',
      name: 'BodyPath',
      url: 'https://getbodypath.com',
    },
  ],
};

export const metadata = {
  title: 'BodyPath | AI Health Navigator for Symptoms, Labs, and Care Paths',
  description:
    'BodyPath helps you organize symptoms, understand which labs may matter, and find the right care path — from lab testing to telehealth and specialty providers.',
  alternates: {
    canonical: 'https://getbodypath.com/',
  },
  openGraph: {
    title: 'BodyPath | Understand what your body is trying to tell you',
    description: 'An AI health navigator for symptoms, labs, and care paths.',
    url: 'https://getbodypath.com/',
    siteName: 'BodyPath',
    type: 'website',
  },
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <HeroSection />
      <ProblemSection />
      <HowItWorksSection />
      <CarePathsSection />
      <DifferenceSection />
      <ProviderRoutingSection />
      <TrustSafetySection />
      <TestimonialsSection />
      <PartnerSection />
      <FinalCTASection />
    </>
  );
}
