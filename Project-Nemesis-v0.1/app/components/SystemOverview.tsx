'use client';

import { useState, useEffect } from 'react';

interface SystemDomain {
  name: string;
  summary: string;
}

interface SystemOverviewProps {
  domains: SystemDomain[];
}

export default function SystemOverview({ domains }: SystemOverviewProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Simulate lazy loading
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  if (!isLoaded) {
    return (
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div role="status" aria-live="polite" className="text-center text-gray-600">
            Loading system overview...
          </div>
        </div>
      </section>
    );
  }

  return (
    <section aria-labelledby="system-overview-heading" className="py-16 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 id="system-overview-heading" className="text-3xl font-bold text-center mb-12 text-nemesis-navy">
          System Domains
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {domains.map((domain) => (
            <div key={domain.name} className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-3 text-nemesis-navy">
                {domain.name}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {domain.summary}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
