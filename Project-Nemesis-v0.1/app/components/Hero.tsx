'use client';

import { getLandingContent } from '@/lib/i18n';
import { track } from '@/lib/analyticsStub';

export default function Hero() {
  const content = getLandingContent('en');

  const handleCTAClick = () => {
    track('cta_click', { location: 'hero', label: content.hero.cta });
  };

  return (
    <section className="bg-nemesis-navy text-white py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
          {content.hero.mission}
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-neutral-200">
          {content.hero.tagline}
        </p>
        <button
          onClick={handleCTAClick}
          className="bg-nemesis-gold text-nemesis-navy font-semibold px-8 py-3 rounded-md hover:bg-yellow-400 focus:outline-none focus:ring-3 focus:ring-nemesis-gold focus:ring-offset-2 focus:ring-offset-nemesis-navy transition-colors"
          aria-label={content.hero.cta}
        >
          {content.hero.cta}
        </button>
      </div>
    </section>
  );
}
