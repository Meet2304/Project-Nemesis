import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';

/**
 * Resources Page
 * Provides access to various resources, documentation, and helpful materials
 */
export default function Resources() {
  const resourceCategories = [
    {
      id: 1,
      title: 'Documentation',
      description: 'Comprehensive guides and documentation for using the system',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      resources: [
        { name: 'User Guide', link: '#' },
        { name: 'Administrator Manual', link: '#' },
        { name: 'API Documentation', link: '#' },
        { name: 'Quick Start Guide', link: '#' },
      ],
    },
    {
      id: 2,
      title: 'Training Materials',
      description: 'Video tutorials and training resources for all user levels',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      ),
      resources: [
        { name: 'Video Tutorials', link: '#' },
        { name: 'Webinar Recordings', link: '#' },
        { name: 'Training Schedule', link: '#' },
        { name: 'Certification Program', link: '#' },
      ],
    },
    {
      id: 3,
      title: 'Forms & Templates',
      description: 'Downloadable forms and document templates',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      resources: [
        { name: 'Case Filing Forms', link: '#' },
        { name: 'Document Templates', link: '#' },
        { name: 'Report Templates', link: '#' },
        { name: 'Request Forms', link: '#' },
      ],
    },
    {
      id: 4,
      title: 'Legal Resources',
      description: 'Legal references, statutes, and procedural guidelines',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      resources: [
        { name: 'Statutes & Acts', link: '#' },
        { name: 'Procedural Rules', link: '#' },
        { name: 'Case Law Database', link: '#' },
        { name: 'Legal Dictionary', link: '#' },
      ],
    },
    {
      id: 5,
      title: 'Support Resources',
      description: 'Help desk, FAQs, and troubleshooting guides',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
      resources: [
        { name: 'FAQs', link: '#' },
        { name: 'Troubleshooting Guide', link: '#' },
        { name: 'Contact Support', link: '#' },
        { name: 'Submit a Ticket', link: '#' },
      ],
    },
    {
      id: 6,
      title: 'Downloads',
      description: 'Software, plugins, and additional tools',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
        </svg>
      ),
      resources: [
        { name: 'Desktop Application', link: '#' },
        { name: 'Mobile App (iOS)', link: '#' },
        { name: 'Mobile App (Android)', link: '#' },
        { name: 'Browser Extensions', link: '#' },
      ],
    },
  ];

  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-grow">
        {/* Hero Section */}
        <section className="bg-judicial-navy text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl font-bold mb-6">Resources & Support</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Access comprehensive resources, documentation, and support materials
            </p>
          </div>
        </section>

        {/* Resources Grid */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {resourceCategories.map((category) => (
                <div
                  key={category.id}
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
                >
                  <div className="text-judicial-navy mb-4">{category.icon}</div>
                  <h2 className="text-2xl font-semibold text-judicial-navy mb-3">
                    {category.title}
                  </h2>
                  <p className="text-gray-600 mb-6">{category.description}</p>
                  <ul className="space-y-2">
                    {category.resources.map((resource, index) => (
                      <li key={index}>
                        <Link
                          href={resource.link}
                          className="text-judicial-gold hover:text-judicial-navy transition-colors inline-flex items-center"
                        >
                          <svg
                            className="w-4 h-4 mr-2"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                          {resource.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Help Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-judicial-navy text-white rounded-lg p-12 text-center">
              <h2 className="text-3xl font-bold mb-4">Need Additional Help?</h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Our support team is available 24/7 to assist you with any questions or issues
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="#"
                  className="bg-judicial-gold text-judicial-navy px-8 py-3 rounded-md font-semibold hover:bg-yellow-500 transition-all duration-300 shadow-md"
                >
                  Contact Support
                </Link>
                <Link
                  href="#"
                  className="bg-transparent border-2 border-judicial-gold text-judicial-gold px-8 py-3 rounded-md font-semibold hover:bg-judicial-gold hover:text-judicial-navy transition-all duration-300"
                >
                  Schedule Training
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}
