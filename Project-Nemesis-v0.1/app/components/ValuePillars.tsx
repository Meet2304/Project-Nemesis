'use client';

import { getLandingContent } from '@/lib/i18n';

export default function ValuePillars() {
  const content = getLandingContent('en');
  
  const pillars = [
    {
      key: 'transparency',
      title: content.pillars.transparency.title,
      desc: content.pillars.transparency.desc,
    },
    {
      key: 'efficiency',
      title: content.pillars.efficiency.title,
      desc: content.pillars.efficiency.desc,
    },
    {
      key: 'accessibility',
      title: content.pillars.accessibility.title,
      desc: content.pillars.accessibility.desc,
    },
    {
      key: 'trust',
      title: content.pillars.trust.title,
      desc: content.pillars.trust.desc,
    },
  ];

  return (
    <section className="py-16 px-6 bg-neutral-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-nemesis-navy">
          Our Core Values
        </h2>
        <ul className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 list-none m-0 p-0">
          {pillars.map((pillar) => (
            <li key={pillar.key} className="text-center">
              <h3 className="text-xl font-semibold mb-3 text-nemesis-navy">
                {pillar.title}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {pillar.desc}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
