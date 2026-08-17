import React, { useState, useEffect } from 'react';
import { ActiveSection, EcosystemLink } from './types';
import { PRIMARY_LINKS } from './data/portfolioData';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ProjectsSection } from './components/ProjectsSection';
import { EventsPartnershipsSection } from './components/EventsPartnershipsSection';
import { ProjectModal } from './components/ProjectModal';
import { CustomCursor } from './components/CustomCursor';
import { ClickSparkle } from './components/ClickSparkle';
import { AmbientGlow } from './components/AmbientGlow';
import { Logo } from './components/Logo';
import { ArrowUp } from 'lucide-react';

export default function App() {
  const [activeSection, setActiveSection] = useState<ActiveSection>('hero');
  const [selectedProject, setSelectedProject] = useState<EcosystemLink | null>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Scroll listener for section tracking & progress
  useEffect(() => {
    const handleScroll = () => {
      const winScroll = document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      setScrollProgress(scrolled);
      setShowScrollTop(winScroll > 400);

      // Section tracking
      const sections: ActiveSection[] = ['events', 'projects', 'about', 'hero'];
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= window.innerHeight * 0.45) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigate = (section: ActiveSection) => {
    setActiveSection(section);
    const el = document.getElementById(section);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen bg-[#fbf8f2] dark:bg-[#08080c] text-[#08080c] dark:text-[#f7f3eb] font-sans selection:bg-[#08080c] dark:selection:bg-[#d4c4ad] selection:text-[#f7f3eb] dark:selection:text-[#08080c] transition-colors duration-400">
      {/* Ambient Lighting & Luxury Glow Background */}
      <AmbientGlow />

      {/* Interactive Click Sparks */}
      <ClickSparkle />

      {/* Smooth Custom Cursor */}
      <CustomCursor />

      {/* Top Scroll Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-1 z-50 bg-[#efe8dc]/70 dark:bg-white/5">
        <div
          className="h-full bg-gradient-to-r from-[#08080c] via-[#8a6d3b] to-[#d4c4ad] dark:from-[#f7f3eb] dark:via-[#d4c4ad] dark:to-[#8a6d3b] shadow-[0_0_10px_rgba(212,196,173,0.5)] transition-all duration-100"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Primary Sticky Navbar with Dark/Light Mode Toggle */}
      <Navbar
        activeSection={activeSection}
        onNavigate={handleNavigate}
      />

      {/* Main Content Sections */}
      <main className="relative z-10 space-y-4 sm:space-y-6">
        {/* Slide 1: Hero Section */}
        <HeroSection
          onNavigate={handleNavigate}
          onExploreEcosystem={() => handleNavigate('projects')}
        />

        {/* Slide 2: About Me Section */}
        <AboutSection onNavigate={handleNavigate} />

        {/* Slide 3: Recap Projects & 6 Core Links */}
        <ProjectsSection
          onNavigate={handleNavigate}
          onSelectProject={(link) => setSelectedProject(link)}
        />

        {/* Slide 4: PrismaX Events, Meetups, and Partnerships (10 Image Gallery) */}
        <EventsPartnershipsSection />
      </main>

      {/* Footer in Warm Cream / Obsidian */}
      <footer className="relative z-10 border-t border-[#08080c]/12 dark:border-white/10 bg-[#efe8dc]/90 dark:bg-[#0c0c14]/90 backdrop-blur-md pt-8 pb-14 px-4 sm:px-6 lg:px-8 text-center text-xs text-[#08080c] dark:text-[#a09eb5]">
        <div className="max-w-6xl mx-auto flex flex-col items-center justify-center space-y-5">
          <Logo size="md" />

          {/* User Requested Footer Text */}
          <div className="pt-2 border-t border-[#08080c]/10 dark:border-white/10 text-center w-full">
            <p className="text-xs sm:text-sm text-[#08080c] dark:text-[#d4c4ad] font-medium max-w-4xl mx-auto leading-relaxed">
              Built by <strong className="font-black text-[#08080c] dark:text-[#f7f3eb]">MikeOnChain</strong> for the PrismaX community. This independent resource hub provides guides, tools, and trusted links. Visit <a href="https://www.prismax.ai/" target="_blank" rel="noopener noreferrer" className="underline font-bold hover:text-black dark:hover:text-white">prismax.ai</a> for official information. © 2026 MikeOnChain.
            </p>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Floating Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-20 right-6 z-30 p-3 rounded-full bg-[#fdfbf7] dark:bg-[#181826] border border-[#08080c]/15 dark:border-white/15 text-[#08080c] dark:text-[#f7f3eb] hover:bg-[#08080c] dark:hover:bg-[#f7f3eb] hover:text-[#f7f3eb] dark:hover:text-[#08080c] shadow-[0_10px_25px_rgba(0,0,0,0.15)] dark:shadow-[0_10px_25px_rgba(0,0,0,0.5)] transition-all duration-300 hover:scale-110 cursor-pointer"
          title="Scroll to top"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      )}

      {/* Interactive Detail Modal for Links */}
      <ProjectModal
        link={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}
