import { BenefitsYourPatientsWillFeel } from '@/components/home/replicate/BenefitsYourPatientsWillFeel';
import { CtaBand } from '@/components/home/replicate/CtaBand';
import { FeatureHighlights } from '@/components/home/replicate/FeatureHighlights';
import { HeroSection } from '@/components/home/bodypath/HeroSection';
import { HowItWorks } from '@/components/home/replicate/HowItWorks';
import { PortalSection } from '@/components/home/replicate/PortalSection';
import { SystemComparison } from '@/components/home/replicate/SystemComparison';
import { TestimonialsSection } from '@/components/home/replicate/TestimonialsSection';

export const metadata = {
  title: 'BodyPath',
  description: 'Understand your body. Find your best path forward.',
};

export default function Page() {
  return (
    <>
      <HeroSection />
      <FeatureHighlights />
      <SystemComparison />
      <HowItWorks />
      <BenefitsYourPatientsWillFeel />
      <PortalSection />
      <TestimonialsSection />
      <CtaBand />
    </>
  );
}
