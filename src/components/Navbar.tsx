import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { Menu, X, Layers } from 'lucide-react';
import { ActiveSection } from '../types';

interface NavbarProps {
  activeSection: ActiveSection;
  onNavigate: (section: ActiveSection) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection: _, onNavigate }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (section: ActiveSection) => {
    onNavigate(section);
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-[#fdfbf7]/92 dark:bg-[#08080c]/92 backdrop-blur-xl border-b border-[#08080c]/10 dark:border-white/10 py-3.5 shadow-[0_10px_30px_-5px_rgba(60,45,25,0.07)] dark:shadow-[0_10px_30px_-5px_rgba(0,0,0,0.6)]'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <div onClick={() => handleNavClick('hero')} className="cursor-pointer">
          <Logo size="md" />
        </div>

        {/* Desktop Quick Shortcuts */}
        <nav className="hidden md:flex items-center gap-5 text-sm tracking-wide">
          <button
            onClick={() => handleNavClick('about')}
            className="text-[#08080c] dark:text-[#d4c4ad] hover:text-black dark:hover:text-[#ffffff] transition-colors flex items-center gap-1.5 cursor-pointer font-black uppercase text-xs tracking-wider"
          >
            <span>ABOUT ME</span>
          </button>
          
          <button
            onClick={() => handleNavClick('projects')}
            className="text-[#08080c] dark:text-[#d4c4ad] hover:text-black dark:hover:text-[#ffffff] transition-colors flex items-center gap-1.5 cursor-pointer font-black text-xs tracking-wider uppercase"
          >
            <Layers className="w-3.5 h-3.5 text-[#08080c] dark:text-[#d4c4ad]" />
            <span>PrismaX Resource Center</span>
          </button>

          <button
            onClick={() => handleNavClick('events')}
            className="text-[#08080c] dark:text-[#d4c4ad] hover:text-black dark:hover:text-[#ffffff] transition-colors flex items-center gap-1.5 cursor-pointer font-black text-xs tracking-wider uppercase"
          >
            <span>Events & Meetups</span>
          </button>
        </nav>

        {/* Mobile menu right side: Hamburger */}
        <div className="flex md:hidden items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl bg-[#efe8dc] dark:bg-[#1a1a26] border border-[#08080c]/15 dark:border-white/15 text-[#08080c] dark:text-[#f7f3eb] cursor-pointer shadow-2xs hover:bg-[#e2d6c3] dark:hover:bg-[#252535] transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#fdfbf7]/98 dark:bg-[#0c0c14]/98 backdrop-blur-2xl border-b border-[#08080c]/12 dark:border-white/15 px-5 py-4 space-y-2 animate-in fade-in slide-in-from-top-4 duration-200 text-left shadow-xl">
          <button
            onClick={() => handleNavClick('about')}
            className="block w-full text-left py-2 text-sm font-black uppercase text-[#08080c] dark:text-[#f7f3eb] hover:text-[#8a6d3b] dark:hover:text-[#d4c4ad] transition-colors"
          >
            ABOUT ME
          </button>
          <button
            onClick={() => handleNavClick('projects')}
            className="block w-full text-left py-2 text-sm font-black uppercase text-[#08080c] dark:text-[#f7f3eb] hover:text-[#8a6d3b] dark:hover:text-[#d4c4ad] transition-colors"
          >
            PrismaX Resource Center
          </button>
          <button
            onClick={() => handleNavClick('events')}
            className="block w-full text-left py-2 text-sm font-black uppercase text-[#08080c] dark:text-[#f7f3eb] hover:text-[#8a6d3b] dark:hover:text-[#d4c4ad] transition-colors"
          >
            Events & Partnerships
          </button>
        </div>
      )}
    </header>
  );
};
