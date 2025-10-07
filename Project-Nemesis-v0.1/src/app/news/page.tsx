import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';

interface NewsArticle {
  id: number;
  title: string;
  date: string;
  excerpt: string;
  content: string;
  category: string;
  author: string;
}

/**
 * News Page
 * Displays all news articles and updates
 */
export default function News() {
  const newsArticles: NewsArticle[] = [
    {
      id: 1,
      title: 'New Digital Filing System Launched',
      date: 'October 5, 2025',
      excerpt: 'Courts across the region now accept electronic filings, reducing paperwork and processing time significantly.',
      content: 'The launch of our new digital filing system marks a significant milestone in judicial modernization...',
      category: 'Technology',
      author: 'Admin Team',
    },
    {
      id: 2,
      title: 'Annual Judicial Conference Announced',
      date: 'October 1, 2025',
      excerpt: 'Leading legal experts to gather for discussions on modernizing court procedures and judicial efficiency.',
      content: 'This years annual conference will focus on leveraging technology for better judicial outcomes...',
      category: 'Events',
      author: 'Events Team',
    },
    {
      id: 3,
      title: 'Case Management System Update',
      date: 'September 28, 2025',
      excerpt: 'Latest update includes enhanced search capabilities and improved user interface for better accessibility.',
      content: 'Version 2.0 of our case management system brings powerful new features and improvements...',
      category: 'Updates',
      author: 'Development Team',
    },
    {
      id: 4,
      title: 'Training Program for Court Staff',
      date: 'September 25, 2025',
      excerpt: 'Comprehensive training program launched to help court staff maximize the use of digital tools.',
      content: 'Our new training initiative will ensure all staff members are proficient in using the system...',
      category: 'Training',
      author: 'HR Department',
    },
    {
      id: 5,
      title: 'Security Enhancements Implemented',
      date: 'September 20, 2025',
      excerpt: 'New security measures added to protect sensitive judicial data and ensure system integrity.',
      content: 'We have implemented state-of-the-art security protocols to safeguard all information...',
      category: 'Security',
      author: 'Security Team',
    },
    {
      id: 6,
      title: 'Public Portal Launch',
      date: 'September 15, 2025',
      excerpt: 'Citizens can now access case information and submit documents online through our new public portal.',
      content: 'The public portal represents a major step forward in making judicial services accessible to all...',
      category: 'Launch',
      author: 'Public Relations',
    },
  ];

  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-grow">
        {/* Hero Section */}
        <section className="bg-judicial-navy text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl font-bold mb-6">Latest News & Updates</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Stay informed about the latest developments, announcements, and improvements
            </p>
          </div>
        </section>

        {/* News Grid */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {newsArticles.map((article) => (
                <article
                  key={article.id}
                  className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  {/* Category Badge */}
                  <div className="bg-judicial-navy text-judicial-gold px-4 py-2 text-sm font-semibold">
                    {article.category}
                  </div>
                  
                  {/* Content */}
                  <div className="p-6">
                    <div className="text-gray-500 text-sm mb-2 flex items-center justify-between">
                      <span className="flex items-center">
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
                            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                          />
                        </svg>
                        {article.date}
                      </span>
                    </div>
                    
                    <h2 className="text-xl font-semibold text-judicial-navy mb-3 hover:text-judicial-gold transition-colors">
                      {article.title}
                    </h2>
                    
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {article.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">By {article.author}</span>
                      <Link
                        href={`/news/${article.id}`}
                        className="text-judicial-gold hover:text-judicial-navy font-medium inline-flex items-center transition-colors"
                      >
                        Read More
                        <svg
                          className="w-4 h-4 ml-2"
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
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* Pagination (Placeholder) */}
            <div className="mt-12 flex justify-center">
              <nav className="flex space-x-2">
                <button className="px-4 py-2 bg-white border border-gray-300 rounded-md hover:bg-gray-50 transition-colors">
                  Previous
                </button>
                <button className="px-4 py-2 bg-judicial-navy text-white rounded-md">
                  1
                </button>
                <button className="px-4 py-2 bg-white border border-gray-300 rounded-md hover:bg-gray-50 transition-colors">
                  2
                </button>
                <button className="px-4 py-2 bg-white border border-gray-300 rounded-md hover:bg-gray-50 transition-colors">
                  3
                </button>
                <button className="px-4 py-2 bg-white border border-gray-300 rounded-md hover:bg-gray-50 transition-colors">
                  Next
                </button>
              </nav>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}
