import { getLandingContent } from '@/lib/i18n';
import Hero from '@/app/components/Hero';
import NavBar from '@/app/components/NavBar';
import SkipLink from '@/app/components/SkipLink';
import ValuePillars from '@/app/components/ValuePillars';
import SystemOverview from '@/app/components/SystemOverview';
import Footer from '@/app/components/Footer';

export default function LandingPage() {
  const content = getLandingContent('en');

  // Prepare domains from i18n content
  const domains = [
    {
      name: content.domains['case-intake'].name,
      summary: content.domains['case-intake'].summary,
    },
    {
      name: content.domains.scheduling.name,
      summary: content.domains.scheduling.summary,
    },
    {
      name: content.domains['digital-records'].name,
      summary: content.domains['digital-records'].summary,
    },
    {
      name: content.domains['public-access'].name,
      summary: content.domains['public-access'].summary,
    },
  ];

  return (
    <>
      <SkipLink />
      <NavBar />
      <main id="main-content">
        <Hero />
        <ValuePillars />
        <SystemOverview domains={domains} />
      </main>
      <Footer />
    </>
  );
}
