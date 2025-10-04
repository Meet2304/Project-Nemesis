'use client';

export default function SkipLink() {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:bg-nemesis-gold focus:text-nemesis-navy focus:px-4 focus:py-2 focus:rounded-md focus:font-semibold focus:ring-3 focus:ring-nemesis-navy"
    >
      Skip to main content
    </a>
  );
}
