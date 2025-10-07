import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

/**
 * About Page
 * Information about the judicial management system and its purpose
 */
export default function About() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-grow">
        {/* Hero Section */}
        <section className="bg-judicial-navy text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl font-bold mb-6">About Project Nemesis</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Building the future of judicial administration through technology and innovation
            </p>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-judicial-navy mb-6">Our Story</h2>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Project Nemesis was born from a vision to transform the judicial system through 
                  cutting-edge technology. Recognizing the challenges faced by courts in managing 
                  increasing caseloads and complex administrative tasks, we set out to create a 
                  comprehensive solution that addresses these needs.
                </p>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Our platform combines case management, document handling, scheduling, and analytics 
                  into a unified system that serves judges, lawyers, clerks, and citizens alike.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Today, Project Nemesis stands as a testament to what technology can achieve when 
                  applied thoughtfully to serve justice and society.
                </p>
              </div>
              <div className="bg-judicial-lightGray p-8 rounded-lg">
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-judicial-navy rounded-full flex items-center justify-center">
                        <svg className="w-6 h-6 text-judicial-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-xl font-semibold text-judicial-navy mb-2">Innovation First</h3>
                      <p className="text-gray-600">Leveraging latest technologies for optimal performance</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-judicial-navy rounded-full flex items-center justify-center">
                        <svg className="w-6 h-6 text-judicial-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                        </svg>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-xl font-semibold text-judicial-navy mb-2">User-Centric Design</h3>
                      <p className="text-gray-600">Built with feedback from legal professionals</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-judicial-navy rounded-full flex items-center justify-center">
                        <svg className="w-6 h-6 text-judicial-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-xl font-semibold text-judicial-navy mb-2">Security & Compliance</h3>
                      <p className="text-gray-600">Meeting highest standards for data protection</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-judicial-navy mb-4">Our Leadership</h2>
              <div className="w-24 h-1 bg-judicial-gold mx-auto"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-24 h-24 bg-judicial-navy rounded-full mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-12 h-12 text-judicial-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-judicial-navy mb-2">Chief Justice Official</h3>
                <p className="text-judicial-gold font-medium mb-2">Project Director</p>
                <p className="text-gray-600">Leading the vision for digital transformation in judicial services</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-24 h-24 bg-judicial-navy rounded-full mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-12 h-12 text-judicial-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-judicial-navy mb-2">Technology Lead</h3>
                <p className="text-judicial-gold font-medium mb-2">Chief Technology Officer</p>
                <p className="text-gray-600">Overseeing technical architecture and system development</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-24 h-24 bg-judicial-navy rounded-full mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-12 h-12 text-judicial-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-judicial-navy mb-2">Legal Advisor</h3>
                <p className="text-judicial-gold font-medium mb-2">Head of Compliance</p>
                <p className="text-gray-600">Ensuring legal compliance and best practices implementation</p>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}
