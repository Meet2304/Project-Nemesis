import React from 'react';
import Link from 'next/link';

interface NewsArticle {
  id: number;
  title: string;
  date: string;
  excerpt: string;
  category: string;
}

/**
 * News Section Component
 * Displays recent news articles and updates from the judicial system
 */
const NewsSection: React.FC = () => {
  const newsArticles: NewsArticle[] = [
    {
      id: 1,
      title: 'New Digital Filing System Launched',
      date: 'October 5, 2025',
      excerpt: 'Courts across the region now accept electronic filings, reducing paperwork and processing time significantly.',
      category: 'Technology',
    },
    {
      id: 2,
      title: 'Annual Judicial Conference Announced',
      date: 'October 1, 2025',
      excerpt: 'Leading legal experts to gather for discussions on modernizing court procedures and judicial efficiency.',
      category: 'Events',
    },
    {
      id: 3,
      title: 'Case Management System Update',
      date: 'September 28, 2025',
      excerpt: 'Latest update includes enhanced search capabilities and improved user interface for better accessibility.',
      category: 'Updates',
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-judicial-navy mb-4">Latest News</h2>
          <div className="w-24 h-1 bg-judicial-gold mx-auto mb-6"></div>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Stay updated with the latest developments and announcements
          </p>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {newsArticles.map((article) => (
            <article
              key={article.id}
              className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              {/* Category Badge */}
              <div className="bg-judicial-navy text-judicial-gold px-4 py-2 text-sm font-semibold">
                {article.category}
              </div>
              
              {/* Content */}
              <div className="p-6">
                <div className="text-gray-500 text-sm mb-2 flex items-center">
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
                </div>
                
                <h3 className="text-xl font-semibold text-judicial-navy mb-3 hover:text-judicial-gold transition-colors cursor-pointer">
                  {article.title}
                </h3>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {article.excerpt}
                </p>
                
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
            </article>
          ))}
        </div>

        {/* View All News Link */}
        <div className="text-center mt-12">
          <Link
            href="/news"
            className="inline-block bg-judicial-gold text-judicial-navy px-8 py-3 rounded-md font-semibold hover:bg-yellow-500 transition-all duration-300 shadow-md hover:shadow-lg"
          >
            View All News
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
