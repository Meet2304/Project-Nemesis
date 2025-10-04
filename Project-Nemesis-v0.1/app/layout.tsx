import '@/styles/globals.css';
import { ReactNode } from 'react';

export const metadata = {
  title: 'Project Nemesis - Modern Court Management',
  description: 'Building a transparent, efficient, and accessible justice system for all.',
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
