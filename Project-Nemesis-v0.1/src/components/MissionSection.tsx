import React from 'react';

/**
 * Mission Section Component
 * Displays the mission statement and core values of the judicial management system
 */
const MissionSection: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-judicial-navy mb-4">
            Our Mission
          </h2>
          <div className="w-24 h-1 bg-judicial-gold mx-auto mb-6"></div>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            To revolutionize judicial management through innovative technology, 
            ensuring transparency, efficiency, and accessibility for all stakeholders 
            in the justice system.
          </p>
        </div>

        {/* Core Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {/* Value 1 */}
          <div className="text-center p-6 bg-judicial-lightGray rounded-lg hover:shadow-lg transition-shadow duration-300">
            <div className="w-16 h-16 bg-judicial-navy rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-8 h-8 text-judicial-gold"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-judicial-navy mb-3">
              Transparency
            </h3>
            <p className="text-gray-600">
              Providing clear, accessible information to maintain trust in the judicial process
            </p>
          </div>

          {/* Value 2 */}
          <div className="text-center p-6 bg-judicial-lightGray rounded-lg hover:shadow-lg transition-shadow duration-300">
            <div className="w-16 h-16 bg-judicial-navy rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-8 h-8 text-judicial-gold"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-judicial-navy mb-3">
              Efficiency
            </h3>
            <p className="text-gray-600">
              Streamlining case management to reduce delays and improve justice delivery
            </p>
          </div>

          {/* Value 3 */}
          <div className="text-center p-6 bg-judicial-lightGray rounded-lg hover:shadow-lg transition-shadow duration-300">
            <div className="w-16 h-16 bg-judicial-navy rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-8 h-8 text-judicial-gold"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-judicial-navy mb-3">
              Accessibility
            </h3>
            <p className="text-gray-600">
              Making judicial services and information available to all citizens
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
