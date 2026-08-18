import React, { useState } from 'react';
import { ActiveSection, EcosystemLink } from '../types';
import { PRIMARY_LINKS } from '../data/portfolioData';
import { BRANDKIT_ASSETS } from '../data/brandkitAssets';
import { BrandkitGallery } from './BrandkitGallery';
import { 
  ExternalLink, 
  Copy, 
  Check, 
  Layers, 
  Sparkles, 
  Maximize2,
  Globe,
  Bot,
  BookOpen,
  FileText,
  Palette,
  Users,
  ArrowUpRight
} from 'lucide-react';

interface ProjectsSectionProps {
  onNavigate: (section: ActiveSection) => void;
  onSelectProject: (link: EcosystemLink) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  onNavigate: _onNavigate,
  onSelectProject,
}) => {
  const [filter, setFilter] = useState<'all' | 'core' | 'platform' | 'guide' | 'whitepaper' | 'community' | 'brandkit'>('all');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const filteredLinks = filter === 'all'
    ? PRIMARY_LINKS.filter((l) => l.category !== 'community')
    : PRIMARY_LINKS.filter((l) => l.category === filter);

  const communityLinks = PRIMARY_LINKS.filter((l) => l.category === 'community');

  const handleCopy = (e: React.MouseEvent, link: EcosystemLink) => {
    e.stopPropagation();
    navigator.clipboard.writeText(link.url);
    setCopiedId(link.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleFilterClick = (newFilter: 'all' | 'core' | 'platform' | 'guide' | 'whitepaper' | 'community' | 'brandkit') => {
    setFilter(newFilter);
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'core': return <Sparkles className="w-3.5 h-3.5" />;
      case 'platform': return <Bot className="w-3.5 h-3.5" />;
      case 'guide': return <BookOpen className="w-3.5 h-3.5" />;
      case 'whitepaper': return <FileText className="w-3.5 h-3.5" />;
      case 'community': return <Users className="w-3.5 h-3.5" />;
      case 'brandkit': return <Palette className="w-3.5 h-3.5" />;
      default: return <Layers className="w-3.5 h-3.5" />;
    }
  };

  return (
    <section id="projects" className="relative py-10 sm:py-14 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header in High Contrast Highlighted Banner Style */}
      <div className="text-center space-y-3 mb-6 sm:mb-8">
        <div className="flex flex-col items-center justify-center space-y-1.5 py-1">
          <div className="inline-block bg-[#c8bca6] dark:bg-[#c8bca6] px-3.5 sm:px-6 py-1 sm:py-2 shadow-xs border border-[#08080c]/15">
            <h2 className="font-catalogue text-base sm:text-2xl md:text-3xl lg:text-4xl font-black text-[#08080c] uppercase tracking-wider leading-snug text-center">
              PRISMAX TOOLS, RESOURCES,
            </h2>
          </div>
          <div className="inline-block bg-[#c8bca6] dark:bg-[#c8bca6] px-3.5 sm:px-6 py-1 sm:py-2 shadow-xs border border-[#08080c]/15">
            <span className="font-catalogue text-base sm:text-2xl md:text-3xl lg:text-4xl font-black text-[#08080c] uppercase tracking-wider leading-snug block text-center">
              AND INSIGHTS FOR NEW MEMBERS
            </span>
          </div>
        </div>
        <p className="text-sm sm:text-base md:text-lg text-[#08080c] dark:text-[#e4e2f0] max-w-3xl mx-auto font-medium leading-relaxed">
          A beginner friendly PrismaX Resource Center for understanding official tools and guides.
        </p>
      </div>

      {/* Category Filter Pills */}
      <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 mb-6 sm:mb-8">
        {[
          { id: 'core', label: 'PrismaX Official Website', icon: Sparkles },
          { id: 'platform', label: 'Robot Control Center', icon: Bot },
          { id: 'guide', label: 'PrismaX Role and Progression Guide', icon: BookOpen },
          { id: 'whitepaper', label: 'PrismaX Whitepaper', icon: FileText },
          { id: 'brandkit', label: 'PrismaX Brandkit', icon: Palette },
          { id: 'community', label: 'PrismaX Community Activities', icon: Users },
        ].map((tab) => {
          const Icon = tab.icon;
          const isActive = filter === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => handleFilterClick(filter === tab.id ? 'all' : (tab.id as 'core' | 'platform' | 'guide' | 'whitepaper' | 'community' | 'brandkit'))}
              className={`inline-flex items-center gap-2 px-4.5 sm:px-5 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm font-mono-code font-bold tracking-wider transition-all duration-300 cursor-pointer shadow-xs ${
                isActive
                  ? 'bg-[#08080c] dark:bg-[#f7f3eb] text-[#f7f3eb] dark:text-[#08080c] shadow-[0_4px_15px_rgba(8,8,12,0.25)] scale-105'
                  : 'bg-[#efe8dc] dark:bg-[#151522] text-[#08080c] dark:text-[#d4c4ad] hover:text-[#08080c] dark:hover:text-[#ffffff] hover:bg-[#e2d6c3] dark:hover:bg-[#202030] border border-[#08080c]/18 dark:border-white/10 backdrop-blur-md'
              }`}
            >
              <Icon className="w-4 h-4 shrink-0" />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* Card Display: Dedicated Side-by-Side for Core Official Website, Robot Control Center, or Grid */}
      {filter === 'core' ? (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
          {/* Card on Left */}
          <div className="lg:col-span-5 flex flex-col">
            {filteredLinks.map((link) => (
              <div
                key={link.id}
                onClick={() => {
                  onSelectProject(link);
                }}
                className="group relative flex-1 flex flex-col rounded-3xl glass-cream-card p-4 sm:p-5 overflow-hidden cursor-pointer"
              >
                {/* Ambient hover glow inside card */}
                <div className="absolute top-0 right-0 w-52 h-52 bg-[#d4c4ad]/25 dark:bg-[#d4c4ad]/10 rounded-full blur-3xl group-hover:bg-[#d4c4ad]/35 transition-all duration-500 pointer-events-none" />

                {/* Visual Preview Image */}
                {link.previewImage && (
                  <div className="relative rounded-2xl overflow-hidden mb-3.5 aspect-16/9 w-full bg-[#08080f] border border-[#08080c]/12 dark:border-white/10 group-hover:border-[#08080c]/30 dark:group-hover:border-white/25 transition-all">
                    <img
                      src={link.previewImage}
                      alt={link.title}
                      className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                      loading="lazy"
                      onError={(e) => {
                        (e.currentTarget as HTMLImageElement).src = 'https://i.imgur.com/s99rzD3.png';
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

                    {/* Floating Quick Action Buttons on top of image */}
                    <div className="absolute top-2.5 right-2.5 flex items-center gap-1.5 z-10">
                      <button
                        type="button"
                        onClick={(e) => handleCopy(e, link)}
                        title="Copy direct URL"
                        className="p-1.5 rounded-xl bg-black/60 backdrop-blur-md text-[#f7f3eb] hover:bg-black hover:text-white border border-white/20 transition-colors cursor-pointer"
                      >
                        {copiedId === link.id ? (
                          <Check className="w-3.5 h-3.5 text-emerald-400 font-bold" />
                        ) : (
                          <Copy className="w-3.5 h-3.5" />
                        )}
                      </button>

                      <button
                        type="button"
                        title="View detailed overview"
                        className="p-1.5 rounded-xl bg-black/60 backdrop-blur-md text-[#f7f3eb] hover:bg-black hover:text-white border border-white/20 transition-colors cursor-pointer"
                      >
                        <Maximize2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                )}

                {/* Content Details */}
                <div className="space-y-2.5 flex-1 flex flex-col justify-between relative z-10 text-left">
                  <div>
                    <h3 className="text-base sm:text-lg font-black text-[#08080c] group-hover:text-black transition-colors font-heading leading-tight">
                      {link.title}
                    </h3>
                    <p className="mt-1 text-xs text-[#1a1a24] leading-relaxed font-semibold">
                      {link.description}
                    </p>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-0.5">
                    {link.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded-md text-[10px] font-mono-code bg-[#efe8dc] text-[#08080c] font-black border border-[#08080c]/15"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="pt-3 mt-1.5 border-t border-[#08080c]/15 flex items-center">
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => {
                        e.stopPropagation();
                      }}
                      className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-3.5 rounded-xl bg-[#08080c] hover:bg-[#181824] text-[#f7f3eb] font-extrabold text-xs tracking-wider uppercase transition-all active:scale-95 shadow-[0_4px_12px_rgba(8,8,12,0.2)] border border-[#08080c] cursor-pointer group/btn"
                    >
                      <span className="font-heading font-black text-[#f7f3eb]">OFFICIAL LINK</span>
                      <ExternalLink className="w-3.5 h-3.5 text-[#d4c2a5] group-hover/btn:translate-x-0.5 transition-transform" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Descriptive Information Guide Box Beside the Card */}
          <div className="lg:col-span-7 rounded-3xl glass-cream-card p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden text-left border border-[#08080c]/12 shadow-sm">
            {/* Ambient background glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#d4c4ad]/20 rounded-full blur-3xl pointer-events-none" />

            <div className="space-y-4 relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono-code font-black bg-[#efe8dc] text-[#08080c] border border-[#08080c]/15">
                <Sparkles className="w-3.5 h-3.5 text-[#08080c]" />
                <span className="uppercase tracking-wider">ECOSYSTEM & COMMUNITY GUIDE</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-black text-[#08080c] font-heading leading-tight">
                PrismaX Community & Ecosystem Overview
              </h3>

              <div className="space-y-3.5 text-xs sm:text-sm text-[#1a1a24] font-medium leading-relaxed">
                <p>
                  PrismaX continues to grow through the development of new tools, community projects, contributor initiatives, and ongoing ecosystem activity. As more information is shared across official announcements, social platforms, documentation, and community discussions, finding the right resources becomes harder for both new and existing members.
                </p>
                <p>
                  This guide brings important information together in one organized place, making it easier to understand how the ecosystem is developing and where each resource fits. New members receive a clear starting point for learning about PrismaX, while experienced contributors gain a useful reference for following updates, exploring projects, and identifying ways to participate.
                </p>
                <p>
                  By connecting readers directly with official sources and presenting information in a clear structure, the guide reduces confusion, supports informed community involvement, and helps everyone stay connected with the progress of PrismaX.
                </p>
              </div>
            </div>

            <div className="pt-5 mt-4 border-t border-[#08080c]/12 flex flex-wrap items-center justify-between gap-3 relative z-10">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-xs font-mono-code font-bold text-[#08080c]">Official Source Verified</span>
              </div>
              <a
                href="https://www.prismax.ai/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-mono-code font-extrabold text-[#08080c] hover:underline"
              >
                <span>Visit prismax.ai</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      ) : filter === 'platform' ? (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
          {/* Card on Left */}
          <div className="lg:col-span-5 flex flex-col">
            {filteredLinks.map((link) => (
              <div
                key={link.id}
                onClick={() => {
                  onSelectProject(link);
                }}
                className="group relative flex-1 flex flex-col rounded-3xl glass-cream-card p-4 sm:p-5 overflow-hidden cursor-pointer"
              >
                {/* Ambient hover glow inside card */}
                <div className="absolute top-0 right-0 w-52 h-52 bg-[#d4c4ad]/25 rounded-full blur-3xl group-hover:bg-[#d4c4ad]/35 transition-all duration-500 pointer-events-none" />

                {/* Visual Preview Image */}
                {link.previewImage && (
                  <div className="relative rounded-2xl overflow-hidden mb-3.5 aspect-16/9 w-full bg-[#08080f] border border-[#08080c]/12 group-hover:border-[#08080c]/30 transition-all">
                    <img
                      src={link.previewImage}
                      alt={link.title}
                      className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                      loading="lazy"
                      onError={(e) => {
                        (e.currentTarget as HTMLImageElement).src = 'https://i.imgur.com/s99rzD3.png';
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

                    {/* Floating Quick Action Buttons on top of image */}
                    <div className="absolute top-2.5 right-2.5 flex items-center gap-1.5 z-10">
                      <button
                        type="button"
                        onClick={(e) => handleCopy(e, link)}
                        title="Copy direct URL"
                        className="p-1.5 rounded-xl bg-black/60 backdrop-blur-md text-[#f7f3eb] hover:bg-black hover:text-white border border-white/20 transition-colors cursor-pointer"
                      >
                        {copiedId === link.id ? (
                          <Check className="w-3.5 h-3.5 text-emerald-400 font-bold" />
                        ) : (
                          <Copy className="w-3.5 h-3.5" />
                        )}
                      </button>

                      <button
                        type="button"
                        title="View detailed overview"
                        className="p-1.5 rounded-xl bg-black/60 backdrop-blur-md text-[#f7f3eb] hover:bg-black hover:text-white border border-white/20 transition-colors cursor-pointer"
                      >
                        <Maximize2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                )}

                {/* Content Details */}
                <div className="space-y-2.5 flex-1 flex flex-col justify-between relative z-10 text-left">
                  <div>
                    <h3 className="text-base sm:text-lg font-black text-[#08080c] group-hover:text-black transition-colors font-heading leading-tight">
                      {link.title}
                    </h3>
                    <p className="mt-1 text-xs text-[#1a1a24] leading-relaxed font-semibold">
                      {link.description}
                    </p>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-0.5">
                    {link.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded-md text-[10px] font-mono-code bg-[#efe8dc] text-[#08080c] font-black border border-[#08080c]/12"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="pt-3 mt-1.5 border-t border-[#08080c]/15 flex items-center">
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => {
                        e.stopPropagation();
                      }}
                      className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-3.5 rounded-xl bg-[#08080c] hover:bg-[#181824] text-[#f7f3eb] font-extrabold text-xs tracking-wider uppercase transition-all active:scale-95 shadow-[0_4px_12px_rgba(8,8,12,0.2)] border border-[#08080c] cursor-pointer group/btn"
                    >
                      <span className="font-heading font-black text-[#f7f3eb]">OFFICIAL LINK</span>
                      <ExternalLink className="w-3.5 h-3.5 text-[#d4c2a5] group-hover/btn:translate-x-0.5 transition-transform" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Descriptive Information Guide Box Beside the Robot Control Center Card */}
          <div className="lg:col-span-7 rounded-3xl glass-cream-card p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden text-left border border-[#08080c]/12 shadow-sm">
            {/* Ambient background glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#d4c4ad]/20 rounded-full blur-3xl pointer-events-none" />

            <div className="space-y-4 relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono-code font-black bg-[#efe8dc] text-[#08080c] border border-[#08080c]/15">
                <Bot className="w-3.5 h-3.5 text-[#08080c]" />
                <span className="uppercase tracking-wider">ROBOT OPERATIONS & TELEMETRY</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-black text-[#08080c] font-heading leading-tight">
                About the Robot Control Center
              </h3>

              <div className="space-y-3.5 text-xs sm:text-sm text-[#1a1a24] font-medium leading-relaxed">
                <p>
                  The PrismaX Robot Control Center brings every essential robot system into one connected and organized dashboard. It provides a central space for tracking verification quality, monitoring active robot operations, reviewing mission objectives, and following network activity as each task develops.
                </p>
                <p>
                  Users receive a clear overview of robot status, current assignments, system performance, mission progress, and changes across the network. Each section of the interface presents important operational information in a simple and accessible format, helping users understand what is happening at every stage of a mission.
                </p>
                <p>
                  The dashboard also connects individual robot activity with the wider PrismaX ecosystem, showing how different systems work together to support coordinated operations. Whether reviewing verification results, checking mission updates, or observing network conditions, users remain informed through one consistent interface. The PrismaX Robot Control Center creates an engaging way to explore robot technology, understand operational processes, and follow the systems that support every PrismaX mission.
                </p>

                {/* Clearer Arm System Structure Announcement */}
                <div className="p-4 rounded-2xl bg-[#efe8dc]/90 border border-[#08080c]/15 space-y-2">
                  <p className="font-bold text-xs sm:text-sm text-[#08080c]">
                    The PrismaX arm system now has a clearer structure.
                  </p>
                  <div className="font-mono-code text-xs text-[#08080c] font-bold space-y-1">
                    <div>▪️ Training Arm Gold + Black</div>
                    <div>▪️ Arena Arm</div>
                    <div>▪️ Private Arm (invite-only)on active competition, and Private Arm remains invite-only. More structure. More room to grow.</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-5 mt-4 border-t border-[#08080c]/12 flex flex-wrap items-center justify-between gap-3 relative z-10">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-xs font-mono-code font-bold text-[#08080c]">Live Platform Active</span>
              </div>
              <a
                href="https://app.prismax.ai/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-mono-code font-extrabold text-[#08080c] hover:underline"
              >
                <span>Launch app.prismax.ai</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      ) : filter === 'guide' ? (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
          {/* Card on Left */}
          <div className="lg:col-span-5 flex flex-col">
            {filteredLinks.map((link) => (
              <div
                key={link.id}
                onClick={() => {
                  onSelectProject(link);
                }}
                className="group relative flex-1 flex flex-col rounded-3xl glass-cream-card p-4 sm:p-5 overflow-hidden cursor-pointer"
              >
                {/* Ambient hover glow inside card */}
                <div className="absolute top-0 right-0 w-52 h-52 bg-[#d4c4ad]/25 dark:bg-[#d4c4ad]/10 rounded-full blur-3xl group-hover:bg-[#d4c4ad]/35 transition-all duration-500 pointer-events-none" />

                {/* Visual Preview Image */}
                {link.previewImage && (
                  <div className="relative rounded-2xl overflow-hidden mb-3.5 aspect-16/9 w-full bg-[#08080f] border border-[#08080c]/12 dark:border-white/10 group-hover:border-[#08080c]/30 dark:group-hover:border-white/25 transition-all">
                    <img
                      src={link.previewImage}
                      alt={link.title}
                      className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

                    {/* Floating Quick Action Buttons on top of image */}
                    <div className="absolute top-2.5 right-2.5 flex items-center gap-1.5 z-10">
                      <button
                        type="button"
                        onClick={(e) => handleCopy(e, link)}
                        title="Copy direct URL"
                        className="p-1.5 rounded-xl bg-black/60 backdrop-blur-md text-[#f7f3eb] hover:bg-black hover:text-white border border-white/20 transition-colors cursor-pointer"
                      >
                        {copiedId === link.id ? (
                          <Check className="w-3.5 h-3.5 text-emerald-400 font-bold" />
                        ) : (
                          <Copy className="w-3.5 h-3.5" />
                        )}
                      </button>

                      <button
                        type="button"
                        title="View detailed overview"
                        className="p-1.5 rounded-xl bg-black/60 backdrop-blur-md text-[#f7f3eb] hover:bg-black hover:text-white border border-white/20 transition-colors cursor-pointer"
                      >
                        <Maximize2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                )}

                {/* Content Details */}
                <div className="space-y-2.5 flex-1 flex flex-col justify-between relative z-10 text-left">
                  <div>
                    <h3 className="text-base sm:text-lg font-black text-[#08080c] group-hover:text-black transition-colors font-heading leading-tight">
                      {link.title}
                    </h3>
                    <p className="mt-1 text-xs text-[#1a1a24] leading-relaxed font-semibold">
                      {link.description}
                    </p>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-0.5">
                    {link.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded-md text-[10px] font-mono-code bg-[#efe8dc] text-[#08080c] font-black border border-[#08080c]/12"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="pt-3 mt-1.5 border-t border-[#08080c]/15 flex items-center">
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => {
                        e.stopPropagation();
                      }}
                      className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-3.5 rounded-xl bg-[#08080c] hover:bg-[#181824] text-[#f7f3eb] font-extrabold text-xs tracking-wider uppercase transition-all active:scale-95 shadow-[0_4px_12px_rgba(8,8,12,0.2)] border border-[#08080c] cursor-pointer group/btn"
                    >
                      <span className="font-heading font-black text-[#f7f3eb]">OFFICIAL LINK</span>
                      <ExternalLink className="w-3.5 h-3.5 text-[#d4c2a5] group-hover/btn:translate-x-0.5 transition-transform" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Descriptive Information Guide Box Beside the Role Progression Guide Card */}
          <div className="lg:col-span-7 rounded-3xl glass-cream-card p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden text-left border border-[#08080c]/12 shadow-sm">
            {/* Ambient background glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#d4c4ad]/20 rounded-full blur-3xl pointer-events-none" />

            <div className="space-y-4 relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono-code font-black bg-[#efe8dc] text-[#08080c] border border-[#08080c]/15">
                <BookOpen className="w-3.5 h-3.5 text-[#08080c]" />
                <span className="uppercase tracking-wider">COMMUNITY ADVANCEMENT FRAMEWORK</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-black text-[#08080c] font-heading leading-tight">
                PrismaX Role Progression System
              </h3>

              <div className="space-y-3.5 text-xs sm:text-sm text-[#1a1a24] font-medium leading-relaxed">
                <p>
                  The PrismaX Role Progression Guide provides a clear path for members who want to grow through consistent participation and meaningful contributions. Members begin without a role and progress to Proactive by publishing at least four PrismaX-related content posts and participating in at least two community or regional activities.
                </p>
                <p>
                  Moving from Proactive to Stabilized requires at least six PrismaX-related posts and participation in three community or regional activities. The next stage, Stabilized to Navigational, requires at least eight PrismaX-related posts and participation in five internal community activities. Members must also host or assist with an external social event, such as a Twitter Space or AMA, and submit the event details through the official form.
                </p>
                <p>
                  Groundbreaker represents the highest PrismaX community role. Promotion to this level follows a manual review by sir Max | PrismaX, with attention given to the member’s contributions, involvement, consistency, and overall impact within the community.
                </p>
              </div>
            </div>

            <div className="pt-5 mt-4 border-t border-[#08080c]/12 flex flex-wrap items-center justify-between gap-3 relative z-10">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-xs font-mono-code font-bold text-[#08080c]">Official Playbook Verified</span>
              </div>
              <a
                href="https://app.notion.com/p/PrismaX-Role-Progression-Guide-EN-3679646a007a8054937cc7f8124ac4b5"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-mono-code font-extrabold text-[#08080c] hover:underline"
              >
                <span>Open Notion Guide</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      ) : filter === 'whitepaper' ? (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
          {/* Card on Left */}
          <div className="lg:col-span-5 flex flex-col">
            {filteredLinks.map((link) => (
              <div
                key={link.id}
                onClick={() => {
                  onSelectProject(link);
                }}
                className="group relative flex-1 flex flex-col rounded-3xl glass-cream-card p-4 sm:p-5 overflow-hidden cursor-pointer"
              >
                {/* Ambient hover glow inside card */}
                <div className="absolute top-0 right-0 w-52 h-52 bg-[#d4c4ad]/25 rounded-full blur-3xl group-hover:bg-[#d4c4ad]/35 transition-all duration-500 pointer-events-none" />

                {/* Visual Preview Image */}
                {link.previewImage && (
                  <div className="relative rounded-2xl overflow-hidden mb-3.5 aspect-16/9 w-full bg-[#08080f] border border-[#08080c]/12 group-hover:border-[#08080c]/30 transition-all">
                    <img
                      src={link.previewImage}
                      alt={link.title}
                      className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

                    {/* Floating Quick Action Buttons on top of image */}
                    <div className="absolute top-2.5 right-2.5 flex items-center gap-1.5 z-10">
                      <button
                        type="button"
                        onClick={(e) => handleCopy(e, link)}
                        title="Copy direct URL"
                        className="p-1.5 rounded-xl bg-black/60 backdrop-blur-md text-[#f7f3eb] hover:bg-black hover:text-white border border-white/20 transition-colors cursor-pointer"
                      >
                        {copiedId === link.id ? (
                          <Check className="w-3.5 h-3.5 text-emerald-400 font-bold" />
                        ) : (
                          <Copy className="w-3.5 h-3.5" />
                        )}
                      </button>

                      <button
                        type="button"
                        title="View detailed overview"
                        className="p-1.5 rounded-xl bg-black/60 backdrop-blur-md text-[#f7f3eb] hover:bg-black hover:text-white border border-white/20 transition-colors cursor-pointer"
                      >
                        <Maximize2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                )}

                {/* Content Details */}
                <div className="space-y-2.5 flex-1 flex flex-col justify-between relative z-10 text-left">
                  <div>
                    <h3 className="text-base sm:text-lg font-black text-[#08080c] group-hover:text-black transition-colors font-heading leading-tight">
                      {link.title}
                    </h3>
                    <p className="mt-1 text-xs text-[#1a1a24] leading-relaxed font-semibold">
                      {link.description}
                    </p>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-0.5">
                    {link.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded-md text-[10px] font-mono-code bg-[#efe8dc] text-[#08080c] font-black border border-[#08080c]/12"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="pt-3 mt-1.5 border-t border-[#08080c]/15 flex items-center">
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => {
                        e.stopPropagation();
                      }}
                      className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-3.5 rounded-xl bg-[#08080c] hover:bg-[#181824] text-[#f7f3eb] font-extrabold text-xs tracking-wider uppercase transition-all active:scale-95 shadow-[0_4px_12px_rgba(8,8,12,0.2)] border border-[#08080c] cursor-pointer group/btn"
                    >
                      <span className="font-heading font-black text-[#f7f3eb]">OFFICIAL LINK</span>
                      <ExternalLink className="w-3.5 h-3.5 text-[#d4c2a5] group-hover/btn:translate-x-0.5 transition-transform" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Descriptive Information Guide Box Beside the Whitepaper Card */}
          <div className="lg:col-span-7 rounded-3xl glass-cream-card p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden text-left border border-[#08080c]/12 shadow-sm">
            {/* Ambient background glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#d4c4ad]/20 rounded-full blur-3xl pointer-events-none" />

            <div className="space-y-4 relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono-code font-black bg-[#efe8dc] text-[#08080c] border border-[#08080c]/15">
                <FileText className="w-3.5 h-3.5 text-[#08080c]" />
                <span className="uppercase tracking-wider">WHITEPAPER & TECHNICAL FOUNDATION</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-black text-[#08080c] font-heading leading-tight">
                PrismaX Whitepaper Guide & Overview
              </h3>

              <div className="space-y-3.5 text-xs sm:text-sm text-[#1a1a24] font-medium leading-relaxed">
                <p>
                  The PrismaX whitepaper introduces the central ideas behind the project, including its mission, technical foundation, ecosystem structure, and plans for future development. This guide expands on those ideas and organizes them into clear sections that are easier to follow. Instead of presenting every concept through dense technical language, it explains the purpose of PrismaX, the problems it aims to address, and the systems supporting its growth.
                </p>
                <p>
                  Readers receive helpful context about how the project’s technology, tools, builders, contributors, and community members work together within the wider ecosystem. New members gain a clear starting point for understanding the project, while builders receive a structured overview of its technical direction and development goals. Community contributors also learn how participation, education, content, and collaboration support the progress of PrismaX.
                </p>
                <p>
                  By connecting each topic to the project’s wider mission, the guide helps readers understand the relationship between technology, ecosystem development, and community involvement. It serves as an accessible companion to the full whitepaper, giving readers the foundation needed to study the original document, follow project updates, and participate in informed discussions about the future of PrismaX.
                </p>
              </div>
            </div>

            <div className="pt-5 mt-4 border-t border-[#08080c]/12 flex flex-wrap items-center justify-between gap-3 relative z-10">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-xs font-mono-code font-bold text-[#08080c]">Official Document Verified</span>
              </div>
              <a
                href="https://app.prismax.ai/whitepaper#introduction"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-mono-code font-extrabold text-[#08080c] hover:underline"
              >
                <span>Read Full Whitepaper</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      ) : filter === 'community' ? (
        <div className="space-y-8">
          {/* Descriptive Information Guide Box About PrismaX Community Activities */}
          <div className="rounded-3xl glass-cream-card p-6 sm:p-8 relative overflow-hidden text-left border border-[#08080c]/12 dark:border-white/12 shadow-sm">
            {/* Ambient background glow */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#d4c4ad]/20 dark:bg-[#d4c4ad]/10 rounded-full blur-3xl pointer-events-none" />

            <div className="space-y-5 relative z-10">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs sm:text-sm font-mono-code font-black bg-[#efe8dc] text-[#08080c] border border-[#08080c]/15">
                <Users className="w-4 h-4 text-[#08080c]" />
                <span className="uppercase tracking-wider">COMMUNITY INITIATIVES & GLOBAL PARTICIPATION</span>
              </div>

              <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#08080c] font-heading leading-tight">
                PrismaX Community Activities & Contributor Ecosystem
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-5 text-sm sm:text-base text-[#1a1a24] font-medium leading-relaxed">
                <div className="p-5 rounded-2xl bg-[#efe8dc]/60 border border-[#08080c]/10 space-y-3">
                  <h4 className="font-bold text-base sm:text-lg text-[#08080c] flex items-center gap-2.5">
                    <Sparkles className="w-5 h-5 text-[#8a6d3b]" />
                    <span>Trivia Tango</span>
                  </h4>
                  <p className="text-sm sm:text-base leading-relaxed">
                    Trivia Tango is a weekly event hosted by Ms. Vivian every Tuesday at 18:30 UTC. The session brings community members together for a guided reading of the PrismaX whitepaper and a discussion of its key topics.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-[#efe8dc]/60 border border-[#08080c]/10 space-y-3">
                  <h4 className="font-bold text-base sm:text-lg text-[#08080c] flex items-center gap-2.5">
                    <Users className="w-5 h-5 text-[#8a6d3b]" />
                    <span>Fun Mode Karaoke Session</span>
                  </h4>
                  <p className="text-sm sm:text-base leading-relaxed">
                    Sing along with the PrismaX community during Fun Mode Karaoke Session, hosted by Ms. Vivian every Thursday at 18:00 UTC. Members gather to perform songs and spend time together.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-[#efe8dc]/60 border border-[#08080c]/10 space-y-3">
                  <h4 className="font-bold text-base sm:text-lg text-[#08080c] flex items-center gap-2.5">
                    <Sparkles className="w-5 h-5 text-[#8a6d3b]" />
                    <span>Content Clinic</span>
                  </h4>
                  <p className="text-sm sm:text-base leading-relaxed">
                    Content Clinic is a weekly event hosted by Ms. Vivian every Friday at 18:00 UTC. The session brings community members together to share their work, with selected content reviewed and highlighted by Ms. Vivian.
                  </p>
                </div>
              </div>

              <p className="text-sm sm:text-base text-[#1a1a24] font-medium leading-relaxed pt-2">
                Participating in these activities is a core requirement for progressing across community tiers from Proactive to Stabilized, Navigational, and Groundbreaker. Every verified contribution strengthens the PrismaX decentralized physical AI network.
              </p>
            </div>

            <div className="pt-5 mt-4 border-t border-[#08080c]/12 dark:border-white/10 flex flex-wrap items-center justify-between gap-3 relative z-10">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-xs font-mono-code font-bold text-[#08080c] dark:text-[#d4c4ad]">Ecosystem Programs Active</span>
              </div>
              <div className="flex items-center gap-4">
                <a
                  href="https://discord.com/invite/prismax"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-mono-code font-extrabold text-[#08080c] dark:text-[#f7f3eb] hover:underline"
                >
                  <span>Join Discord Community</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
                <a
                  href="https://x.com/PrismaX_AI"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-mono-code font-extrabold text-[#08080c] dark:text-[#f7f3eb] hover:underline"
                >
                  <span>Follow @PrismaX_AI</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

          {/* 3-Card Gallery Grid */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h4 className="font-catalogue text-lg sm:text-xl font-black text-[#08080c] dark:text-[#f7f3eb] uppercase tracking-wider">
                PRISMAX COMMUNITY ACTIVITY PILLARS
              </h4>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {communityLinks.map((link) => (
                <div
                  key={link.id}
                  onClick={() => onSelectProject(link)}
                  className="group relative flex flex-col rounded-3xl glass-cream border border-[#08080c]/15 p-4 sm:p-5 overflow-hidden cursor-pointer text-[#08080c] shadow-xs hover:shadow-xl transition-all"
                >
                  <div className="absolute top-0 right-0 w-52 h-52 bg-[#d4c4ad]/25 rounded-full blur-3xl group-hover:bg-[#d4c4ad]/35 transition-all duration-500 pointer-events-none" />

                  {link.previewImage && (
                    <div className="relative rounded-2xl overflow-hidden mb-3.5 aspect-16/9 w-full bg-[#08080f] border border-[#08080c]/15 group-hover:border-[#08080c]/35 transition-all">
                      <img
                        src={link.previewImage}
                        alt={link.title}
                        className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                        loading="lazy"
                        onError={(e) => {
                          (e.currentTarget as HTMLImageElement).src = 'https://i.imgur.com/s99rzD3.png';
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

                      <div className="absolute top-2.5 right-2.5 flex items-center gap-1.5 z-10">
                        <button
                          type="button"
                          onClick={(e) => handleCopy(e, link)}
                          title="Copy direct URL"
                          className="p-1.5 rounded-xl bg-black/60 backdrop-blur-md text-[#f7f3eb] hover:bg-black hover:text-white border border-white/20 transition-colors cursor-pointer"
                        >
                          {copiedId === link.id ? (
                            <Check className="w-3.5 h-3.5 text-emerald-400 font-bold" />
                          ) : (
                            <Copy className="w-3.5 h-3.5" />
                          )}
                        </button>

                        <button
                          type="button"
                          title="View detailed overview"
                          className="p-1.5 rounded-xl bg-black/60 backdrop-blur-md text-[#f7f3eb] hover:bg-black hover:text-white border border-white/20 transition-colors cursor-pointer"
                        >
                          <Maximize2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  )}

                  <div className="space-y-3.5 flex-1 flex flex-col justify-between relative z-10 text-left">
                    <div>
                      <div className="inline-block px-2.5 py-1 mb-2.5 rounded-md text-xs font-mono-code font-black uppercase tracking-wider bg-[#efe8dc] text-[#08080c] border border-[#08080c]/20 shadow-2xs">
                        {link.badge}
                      </div>
                      <h3 className="text-lg sm:text-xl font-black text-[#08080c] group-hover:text-black transition-colors font-heading leading-tight">
                        {link.title}
                      </h3>
                      <p className="mt-2.5 text-sm sm:text-[15px] text-[#1a1a24] leading-relaxed font-semibold">
                        {link.description}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-2 pt-1">
                      {link.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 rounded-md text-xs font-mono-code bg-[#efe8dc] text-[#08080c] font-black border border-[#08080c]/15 shadow-2xs"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>

                    <div className="pt-3.5 mt-2 border-t border-[#08080c]/15 flex items-center">
                      <a
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => {
                          e.stopPropagation();
                        }}
                        className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#08080c] hover:bg-[#181824] text-[#f7f3eb] font-extrabold text-xs sm:text-sm tracking-wider uppercase transition-all active:scale-95 shadow-[0_4px_12px_rgba(8,8,12,0.2)] border border-[#08080c] cursor-pointer group/btn"
                      >
                        <span className="font-heading font-black text-[#f7f3eb]">EXPLORE ACTIVITY</span>
                        <ExternalLink className="w-4 h-4 text-[#d4c2a5] group-hover/btn:translate-x-0.5 transition-transform" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        /* Standard Grid for All and Other Categories */
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {filteredLinks.map((link) => (
            <div
              key={link.id}
              onClick={() => {
                onSelectProject(link);
              }}
              className="group relative flex flex-col rounded-3xl glass-cream border border-[#08080c]/15 p-4 sm:p-5 overflow-hidden cursor-pointer text-[#08080c] shadow-xs hover:shadow-lg transition-all"
            >
              {/* Ambient hover glow inside card */}
              <div className="absolute top-0 right-0 w-52 h-52 bg-[#d4c4ad]/25 rounded-full blur-3xl group-hover:bg-[#d4c4ad]/35 transition-all duration-500 pointer-events-none" />

              {/* Visual Preview Image */}
              {link.previewImage && (
                <div className="relative rounded-2xl overflow-hidden mb-3.5 aspect-16/9 w-full bg-[#08080f] border border-[#08080c]/15 group-hover:border-[#08080c]/30 transition-all">
                  <img
                    src={link.previewImage}
                    alt={link.title}
                    className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                    loading="lazy"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).src = 'https://i.imgur.com/s99rzD3.png';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

                  {/* Floating Quick Action Buttons on top of image */}
                  <div className="absolute top-2.5 right-2.5 flex items-center gap-1.5 z-10">
                    <button
                      type="button"
                      onClick={(e) => handleCopy(e, link)}
                      title="Copy direct URL"
                      className="p-1.5 rounded-xl bg-black/60 backdrop-blur-md text-[#f7f3eb] hover:bg-black hover:text-white border border-white/20 transition-colors cursor-pointer"
                    >
                      {copiedId === link.id ? (
                        <Check className="w-3.5 h-3.5 text-emerald-400 font-bold" />
                      ) : (
                        <Copy className="w-3.5 h-3.5" />
                      )}
                    </button>

                    <button
                      type="button"
                      title="View detailed overview"
                      className="p-1.5 rounded-xl bg-black/60 backdrop-blur-md text-[#f7f3eb] hover:bg-black hover:text-white border border-white/20 transition-colors cursor-pointer"
                    >
                      <Maximize2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              )}

              {!link.previewImage && (
                /* Top Bar if no image */
                <div className="flex items-center justify-end mb-3 relative z-10 gap-1.5">
                  <button
                    type="button"
                    onClick={(e) => handleCopy(e, link)}
                    title="Copy direct URL"
                    className="p-1.5 rounded-xl bg-[#efe8dc] text-[#08080c] hover:bg-[#08080c] hover:text-[#f7f3eb] border border-[#08080c]/15 transition-colors cursor-pointer"
                  >
                    {copiedId === link.id ? (
                      <Check className="w-3.5 h-3.5 text-emerald-600 font-bold" />
                    ) : (
                      <Copy className="w-3.5 h-3.5" />
                    )}
                  </button>

                  <button
                    type="button"
                    title="View detailed overview"
                    className="p-1.5 rounded-xl bg-[#efe8dc] text-[#08080c] hover:bg-[#08080c] hover:text-[#f7f3eb] border border-[#08080c]/15 transition-colors cursor-pointer"
                  >
                    <Maximize2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              )}

              {/* Content Details */}
              <div className="space-y-2.5 flex-1 flex flex-col justify-between relative z-10 text-left">
                <div>
                  <h3 className="text-base sm:text-lg font-black text-[#08080c] group-hover:text-black transition-colors font-heading leading-tight">
                    {link.title}
                  </h3>
                  <p className="mt-1 text-xs sm:text-[13px] text-[#1a1a24] leading-relaxed font-semibold">
                    {link.description}
                  </p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 pt-0.5">
                  {link.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded-md text-[10px] font-mono-code bg-[#efe8dc] text-[#08080c] font-black border border-[#08080c]/15"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="pt-3 mt-1.5 border-t border-[#08080c]/15 flex items-center">
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => {
                      e.stopPropagation();
                    }}
                    className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-3.5 rounded-xl bg-[#08080c] hover:bg-[#181824] text-[#f7f3eb] font-extrabold text-xs tracking-wider uppercase transition-all active:scale-95 shadow-[0_4px_12px_rgba(8,8,12,0.2)] border border-[#08080c] cursor-pointer group/btn"
                  >
                    <span className="font-heading font-black text-[#f7f3eb]">OFFICIAL LINK</span>
                    <ExternalLink className="w-3.5 h-3.5 text-[#d4c2a5] group-hover/btn:translate-x-0.5 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Community Activities Section (Shown when viewing all) */}
      {filter === 'all' && (
        <div className="mt-10 space-y-5">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-2">
            <div className="flex items-center gap-3 flex-wrap">
              <h3 className="font-catalogue text-base sm:text-lg md:text-xl font-black text-[#08080c] dark:text-[#f7f3eb] uppercase tracking-wider">
                PRISMAX COMMUNITY ACTIVITIES
              </h3>
              <a
                href="https://discord.com/invite/prismax"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-1 sm:py-1.5 rounded-full text-xs font-mono-code font-bold bg-[#08080c] dark:bg-white text-[#f7f3eb] dark:text-[#08080c] hover:opacity-85 transition-opacity shadow-sm"
              >
                <span>Join Community</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
            <span className="self-start sm:self-auto px-3.5 py-1 sm:py-1.5 rounded-full text-xs font-mono-code font-bold bg-[#efe8dc] dark:bg-[#1a1a2a] text-[#08080c] dark:text-[#f7f3eb] border border-[#08080c]/12 dark:border-white/10">
              3 Key Pillars
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {communityLinks.map((link) => (
              <div
                key={link.id}
                onClick={() => onSelectProject(link)}
                className="group relative flex flex-col rounded-3xl glass-cream border border-[#08080c]/15 p-4 sm:p-5 overflow-hidden cursor-pointer text-[#08080c] shadow-xs hover:shadow-xl transition-all"
              >
                <div className="absolute top-0 right-0 w-52 h-52 bg-[#d4c4ad]/25 rounded-full blur-3xl group-hover:bg-[#d4c4ad]/35 transition-all duration-500 pointer-events-none" />

                {link.previewImage && (
                  <div className="relative rounded-2xl overflow-hidden mb-3.5 aspect-16/9 w-full bg-[#08080f] border border-[#08080c]/15 group-hover:border-[#08080c]/35 transition-all">
                    <img
                      src={link.previewImage}
                      alt={link.title}
                      className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

                    <div className="absolute top-2.5 right-2.5 flex items-center gap-1.5 z-10">
                      <button
                        type="button"
                        onClick={(e) => handleCopy(e, link)}
                        title="Copy direct URL"
                        className="p-1.5 rounded-xl bg-black/60 backdrop-blur-md text-[#f7f3eb] hover:bg-black hover:text-white border border-white/20 transition-colors cursor-pointer"
                      >
                        {copiedId === link.id ? (
                          <Check className="w-3.5 h-3.5 text-emerald-400 font-bold" />
                        ) : (
                          <Copy className="w-3.5 h-3.5" />
                        )}
                      </button>

                      <button
                        type="button"
                        title="View detailed overview"
                        className="p-1.5 rounded-xl bg-black/60 backdrop-blur-md text-[#f7f3eb] hover:bg-black hover:text-white border border-white/20 transition-colors cursor-pointer"
                      >
                        <Maximize2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                )}

                <div className="space-y-3.5 flex-1 flex flex-col justify-between relative z-10 text-left">
                  <div>
                    <div className="inline-block px-2.5 py-1 mb-2.5 rounded-md text-xs font-mono-code font-black uppercase tracking-wider bg-[#efe8dc] text-[#08080c] border border-[#08080c]/20 shadow-2xs">
                      {link.badge}
                    </div>
                    <h3 className="text-lg sm:text-xl font-black text-[#08080c] group-hover:text-black transition-colors font-heading leading-tight">
                      {link.title}
                    </h3>
                    <p className="mt-2.5 text-sm sm:text-[15px] text-[#1a1a24] leading-relaxed font-semibold">
                      {link.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-1">
                    {link.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-md text-xs font-mono-code bg-[#efe8dc] text-[#08080c] font-black border border-[#08080c]/15 shadow-2xs"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  <div className="pt-3.5 mt-2 border-t border-[#08080c]/15 flex items-center">
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => {
                        e.stopPropagation();
                      }}
                      className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#08080c] hover:bg-[#181824] text-[#f7f3eb] font-extrabold text-xs sm:text-sm tracking-wider uppercase transition-all active:scale-95 shadow-[0_4px_12px_rgba(8,8,12,0.2)] border border-[#08080c] cursor-pointer group/btn"
                    >
                      <span className="font-heading font-black text-[#f7f3eb]">EXPLORE ACTIVITY</span>
                      <ExternalLink className="w-4 h-4 text-[#d4c2a5] group-hover/btn:translate-x-0.5 transition-transform" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 13-Image Brandkit Gallery (Shown when PrismaX Brandkit filter is active or viewing all) */}
      {(filter === 'brandkit' || filter === 'all') && (
        <BrandkitGallery assets={BRANDKIT_ASSETS} />
      )}
    </section>
  );
};
