import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import MissionSection from '@/components/MissionSection';
import WorkSection from '@/components/WorkSection';
import NewsSection from '@/components/NewsSection';
import Footer from '@/components/Footer';

/**
 * Home Page (Landing Page)
 * Main entry point of the judicial management system
 */
export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <MissionSection />
      <WorkSection />
      <NewsSection />
      <Footer />
    </main>
  );
}
