'use client';

import { getLandingContent } from '@/lib/i18n';

export default function Footer() {
  const content = getLandingContent('en');
  const currentYear = new Date().getFullYear();
  const version = '0.1.0'; // Will be loaded from package.json in production

  return (
    <footer className="bg-nemesis-navy text-white py-8 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-neutral-300">
            <p>{content.footer.disclaimer}</p>
            <p className="mt-2">© {currentYear} Project Nemesis. All rights reserved.</p>
          </div>
          <div className="flex gap-6 items-center">
            <a
              href={`mailto:${content.footer.contactEmail}`}
              className="text-nemesis-gold hover:text-yellow-400 transition-colors font-medium"
            >
              {content.footer.contactLinkLabel}
            </a>
            <span className="text-neutral-400 text-sm">
              {content.footer.version} {version}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
