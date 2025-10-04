'use client';

import { getLandingContent } from '@/lib/i18n';

export default function NavBar() {
  const content = getLandingContent('en');

  return (
    <nav aria-label="Primary" className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <ul className="flex gap-6 list-none m-0 p-0">
          <li>
            <a href="#home" className="text-nemesis-navy hover:text-nemesis-gold transition-colors font-medium">
              {content.nav.home}
            </a>
          </li>
          <li>
            <a href="#about" className="text-nemesis-navy hover:text-nemesis-gold transition-colors font-medium">
              {content.nav.about}
            </a>
          </li>
          <li>
            <a href="#contact" className="text-nemesis-navy hover:text-nemesis-gold transition-colors font-medium">
              {content.nav.contact}
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
