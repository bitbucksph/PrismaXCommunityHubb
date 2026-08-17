import React, { useState } from 'react';
import { 
  Calendar, 
  MapPin, 
  ExternalLink, 
  Maximize2, 
  X, 
  Copy, 
  Check,
  Sparkles,
  Layers,
  Users,
  Handshake
} from 'lucide-react';

export interface GalleryEventItem {
  id: string;
  title: string;
  category: 'PrismaX Sponsors BASS Stanford SBC 2026' | 'PrismaX at BETA@Berkeley Hackathon 2026' | 'Robots & Rollups - #NYTechWeek Event';
  date: string;
  location: string;
  description: string;
  imageUrl: string;
  tags: string[];
  partnerOrHost?: string;
  externalLink?: string;
}

export const EVENTS_GALLERY_DATA: GalleryEventItem[] = [
  {
    id: 'event-1',
    title: 'PrismaX Sponsors BASS Stanford SBC 2026',
    category: 'PrismaX Sponsors BASS Stanford SBC 2026',
    date: 'February 2026',
    location: 'Stanford University, CA',
    description: 'PrismaX officially sponsors BASS at the Stanford Blockchain Conference (SBC 2026), connecting decentralized infrastructure, data validation, and autonomous physical AI robotics.',
    imageUrl: 'https://i.imgur.com/ADuCfDm.png',
    tags: ['Stanford SBC', 'BASS 2026', 'Sponsorship', 'Physical AI'],
    partnerOrHost: 'Stanford Blockchain Club & PrismaX',
    externalLink: 'https://www.prismax.ai/'
  },
  {
    id: 'event-2',
    title: 'Stanford SBC 2026 Keynote & Robotics Panel',
    category: 'PrismaX Sponsors BASS Stanford SBC 2026',
    date: 'February 2026',
    location: 'Stanford University, CA',
    description: 'Special session at Stanford SBC 2026 exploring data infrastructure, decentralized physical AI models, and real-time robotic teleoperation.',
    imageUrl: 'https://i.imgur.com/erFvHH2.png',
    tags: ['Stanford SBC', 'Keynote', 'Robotics', 'DePIN'],
    partnerOrHost: 'Stanford Blockchain Club & PrismaX',
    externalLink: 'https://app.prismax.ai/'
  },
  {
    id: 'event-3',
    title: 'BASS Stanford SBC 2026 Technology Exhibition',
    category: 'PrismaX Sponsors BASS Stanford SBC 2026',
    date: 'February 2026',
    location: 'Stanford University, CA',
    description: 'Official exhibition and presentation booth demonstrating physical AI breakthroughs, hardware telemetry, and developer grant programs.',
    imageUrl: 'https://i.imgur.com/uZMFyhj.png',
    tags: ['Stanford SBC', 'Exhibition', 'Physical AI', 'Hardware'],
    partnerOrHost: 'Stanford Blockchain Club & PrismaX',
    externalLink: 'https://www.prismax.ai/'
  },
  {
    id: 'event-berkeley-1',
    title: 'PrismaX at BETA@Berkeley Hackathon 2026 — Live Testing',
    category: 'PrismaX at BETA@Berkeley Hackathon 2026',
    date: 'Spring 2026',
    location: 'UC Berkeley, CA',
    description: 'PrismaX robotics live teleoperation test bench and hardware showcase at BETA@Berkeley Hackathon 2026.',
    imageUrl: 'https://i.imgur.com/cAZw7Ut.png',
    tags: ['BETA Berkeley', 'Hackathon 2026', 'Robotics', 'Physical AI', 'UC Berkeley'],
    partnerOrHost: 'BETA@Berkeley & PrismaX',
    externalLink: 'https://www.prismax.ai/'
  },
  {
    id: 'event-berkeley-2',
    title: 'PrismaX at BETA@Berkeley Hackathon 2026 — Hardware Cell',
    category: 'PrismaX at BETA@Berkeley Hackathon 2026',
    date: 'Spring 2026',
    location: 'UC Berkeley, CA',
    description: 'Autonomous arm precision manipulation and telemetry benchmarks at UC Berkeley.',
    imageUrl: 'https://i.imgur.com/6mzYLSA.png',
    tags: ['BETA Berkeley', 'Hackathon 2026', 'Robotics', 'Teleoperation', 'UC Berkeley'],
    partnerOrHost: 'BETA@Berkeley & PrismaX',
    externalLink: 'https://app.prismax.ai/'
  },
  {
    id: 'event-berkeley-3',
    title: 'PrismaX at BETA@Berkeley Hackathon 2026 — Keynote & Demo',
    category: 'PrismaX at BETA@Berkeley Hackathon 2026',
    date: 'Spring 2026',
    location: 'UC Berkeley, CA',
    description: 'Interactive presentation demonstrating the PrismaX neural data collection pipeline and physical AI integration.',
    imageUrl: 'https://i.imgur.com/BfBg7CJ.png',
    tags: ['BETA Berkeley', 'Hackathon 2026', 'Physical AI', 'Keynote', 'UC Berkeley'],
    partnerOrHost: 'BETA@Berkeley & PrismaX',
    externalLink: 'https://www.prismax.ai/'
  },
  {
    id: 'event-berkeley-4',
    title: 'PrismaX at BETA@Berkeley Hackathon 2026 — Teleoperation Lab',
    category: 'PrismaX at BETA@Berkeley Hackathon 2026',
    date: 'Spring 2026',
    location: 'UC Berkeley, CA',
    description: 'Hands-on operator telemetry benchmarking with real-time feedback loops and optical positioning sensors.',
    imageUrl: 'https://i.imgur.com/JeOxuNc.png',
    tags: ['BETA Berkeley', 'Hackathon 2026', 'Robotics', 'Teleoperation', 'UC Berkeley'],
    partnerOrHost: 'BETA@Berkeley & PrismaX',
    externalLink: 'https://app.prismax.ai/'
  },
  {
    id: 'event-berkeley-5',
    title: 'PrismaX at BETA@Berkeley Hackathon 2026 — Builder Workshop',
    category: 'PrismaX at BETA@Berkeley Hackathon 2026',
    date: 'Spring 2026',
    location: 'UC Berkeley, CA',
    description: 'Developer breakout session focusing on robotic control APIs, data labeling SDKs, and neural mission verification.',
    imageUrl: 'https://i.imgur.com/5fMa1VF.png',
    tags: ['BETA Berkeley', 'Hackathon 2026', 'Developer Workshop', 'APIs', 'UC Berkeley'],
    partnerOrHost: 'BETA@Berkeley & PrismaX',
    externalLink: 'https://www.prismax.ai/'
  },
  {
    id: 'event-berkeley-6',
    title: 'PrismaX at BETA@Berkeley Hackathon 2026 — Arena Display',
    category: 'PrismaX at BETA@Berkeley Hackathon 2026',
    date: 'Spring 2026',
    location: 'UC Berkeley, CA',
    description: 'Arena arm live demonstration executing spatial pick-and-place task trajectories with high precision.',
    imageUrl: 'https://i.imgur.com/oABfCx6.png',
    tags: ['BETA Berkeley', 'Hackathon 2026', 'Arena Arm', 'Physical AI', 'UC Berkeley'],
    partnerOrHost: 'BETA@Berkeley & PrismaX',
    externalLink: 'https://app.prismax.ai/'
  },
  {
    id: 'event-berkeley-7',
    title: 'PrismaX at BETA@Berkeley Hackathon 2026 — Student & Founder Gathering',
    category: 'PrismaX at BETA@Berkeley Hackathon 2026',
    date: 'Spring 2026',
    location: 'UC Berkeley, CA',
    description: 'Collaborative networking session connecting Berkeley engineering researchers with the PrismaX ecosystem team.',
    imageUrl: 'https://i.imgur.com/axChTCZ.png',
    tags: ['BETA Berkeley', 'Hackathon 2026', 'Community', 'Networking', 'UC Berkeley'],
    partnerOrHost: 'BETA@Berkeley & PrismaX',
    externalLink: 'https://www.prismax.ai/'
  },
  {
    id: 'event-berkeley-8',
    title: 'PrismaX at BETA@Berkeley Hackathon 2026 — Optical Rig Assembly',
    category: 'PrismaX at BETA@Berkeley Hackathon 2026',
    date: 'Spring 2026',
    location: 'UC Berkeley, CA',
    description: 'Multi-camera spatial sensor array calibration and physical AI neural training telemetry demonstration.',
    imageUrl: 'https://i.imgur.com/wzIT6w3.png',
    tags: ['BETA Berkeley', 'Hackathon 2026', 'Hardware', 'Optical Tracking', 'UC Berkeley'],
    partnerOrHost: 'BETA@Berkeley & PrismaX',
    externalLink: 'https://app.prismax.ai/'
  },
  {
    id: 'event-berkeley-9',
    title: 'PrismaX at BETA@Berkeley Hackathon 2026 — Sensor Array Demo',
    category: 'PrismaX at BETA@Berkeley Hackathon 2026',
    date: 'Spring 2026',
    location: 'UC Berkeley, CA',
    description: 'Detailed presentation on sensor fusion, edge computing nodes, and distributed robotic data pipelines.',
    imageUrl: 'https://i.imgur.com/ihTSggk.png',
    tags: ['BETA Berkeley', 'Hackathon 2026', 'Sensor Fusion', 'Robotics', 'UC Berkeley'],
    partnerOrHost: 'BETA@Berkeley & PrismaX',
    externalLink: 'https://www.prismax.ai/'
  },
  {
    id: 'event-berkeley-10',
    title: 'PrismaX at BETA@Berkeley Hackathon 2026 — Telemetry Station',
    category: 'PrismaX at BETA@Berkeley Hackathon 2026',
    date: 'Spring 2026',
    location: 'UC Berkeley, CA',
    description: 'Live control dashboard station displaying real-time robotic joint angles, torque feedback, and network stats.',
    imageUrl: 'https://i.imgur.com/PagRofM.png',
    tags: ['BETA Berkeley', 'Hackathon 2026', 'Telemetry', 'Dashboard', 'UC Berkeley'],
    partnerOrHost: 'BETA@Berkeley & PrismaX',
    externalLink: 'https://app.prismax.ai/'
  },
  {
    id: 'event-berkeley-11',
    title: 'PrismaX at BETA@Berkeley Hackathon 2026 — Research Round Table',
    category: 'PrismaX at BETA@Berkeley Hackathon 2026',
    date: 'Spring 2026',
    location: 'UC Berkeley, CA',
    description: 'Academic symposium discussing verified physical AI datasets, open-source benchmarks, and decentralized robotics.',
    imageUrl: 'https://i.imgur.com/PaCQVdB.png',
    tags: ['BETA Berkeley', 'Hackathon 2026', 'Research', 'Symposium', 'UC Berkeley'],
    partnerOrHost: 'BETA@Berkeley & PrismaX',
    externalLink: 'https://www.prismax.ai/'
  },
  {
    id: 'event-berkeley-12',
    title: 'PrismaX at BETA@Berkeley Hackathon 2026 — Hardware Showcase',
    category: 'PrismaX at BETA@Berkeley Hackathon 2026',
    date: 'Spring 2026',
    location: 'UC Berkeley, CA',
    description: 'Hands-on review of modular robotics hardware components, end-effectors, and gold/black training arm editions.',
    imageUrl: 'https://i.imgur.com/XkGtLCA.png',
    tags: ['BETA Berkeley', 'Hackathon 2026', 'Hardware', 'Physical AI', 'UC Berkeley'],
    partnerOrHost: 'BETA@Berkeley & PrismaX',
    externalLink: 'https://www.prismax.ai/'
  },
  {
    id: 'event-berkeley-13',
    title: 'PrismaX at BETA@Berkeley Hackathon 2026 — Ecosystem Keynote',
    category: 'PrismaX at BETA@Berkeley Hackathon 2026',
    date: 'Spring 2026',
    location: 'UC Berkeley, CA',
    description: 'Closing symposium spotlighting the convergence of blockchain incentives and large physical AI models.',
    imageUrl: 'https://i.imgur.com/1d0pWaQ.png',
    tags: ['BETA Berkeley', 'Hackathon 2026', 'Ecosystem', 'Keynote', 'UC Berkeley'],
    partnerOrHost: 'BETA@Berkeley & PrismaX',
    externalLink: 'https://www.prismax.ai/'
  },
  {
    id: 'event-nytech-1',
    title: '',
    category: 'Robots & Rollups - #NYTechWeek Event',
    date: 'June 2026',
    location: 'New York City, NY',
    description: '',
    imageUrl: 'https://i.imgur.com/9NQOv7w.png',
    tags: ['NYTechWeek', 'a16z', 'Robots & Rollups', 'Physical AI', 'Crypto'],
    partnerOrHost: 'PrismaX & a16z NY Tech Week',
    externalLink: 'https://www.prismax.ai/'
  },
  {
    id: 'event-nytech-2',
    title: '',
    category: 'Robots & Rollups - #NYTechWeek Event',
    date: 'June 2026',
    location: 'New York City, NY',
    description: '',
    imageUrl: 'https://i.imgur.com/57cghKk.png',
    tags: ['NYTechWeek', 'a16z', 'Physical AI', 'Robotics', 'DePIN'],
    partnerOrHost: 'PrismaX & a16z NY Tech Week',
    externalLink: 'https://www.prismax.ai/'
  },
  {
    id: 'event-nytech-3',
    title: '',
    category: 'Robots & Rollups - #NYTechWeek Event',
    date: 'June 2026',
    location: 'New York City, NY',
    description: '',
    imageUrl: 'https://i.imgur.com/CAdskz9.png',
    tags: ['NYTechWeek', 'a16z', 'Robots & Rollups', 'Crypto Layer'],
    partnerOrHost: 'PrismaX & a16z NY Tech Week',
    externalLink: 'https://www.prismax.ai/'
  },
  {
    id: 'event-nytech-4',
    title: '',
    category: 'Robots & Rollups - #NYTechWeek Event',
    date: 'June 2026',
    location: 'New York City, NY',
    description: '',
    imageUrl: 'https://i.imgur.com/LA11tkw.png',
    tags: ['NYTechWeek', 'a16z', 'Founders', 'Physical AI'],
    partnerOrHost: 'PrismaX & a16z NY Tech Week',
    externalLink: 'https://www.prismax.ai/'
  },
  {
    id: 'event-nytech-5',
    title: '',
    category: 'Robots & Rollups - #NYTechWeek Event',
    date: 'June 2026',
    location: 'New York City, NY',
    description: '',
    imageUrl: 'https://i.imgur.com/hhpsYSv.png',
    tags: ['NYTechWeek', 'a16z', 'Robotics Hub', 'Physical AI'],
    partnerOrHost: 'PrismaX & a16z NY Tech Week',
    externalLink: 'https://www.prismax.ai/'
  },
  {
    id: 'event-nytech-6',
    title: '',
    category: 'Robots & Rollups - #NYTechWeek Event',
    date: 'June 2026',
    location: 'New York City, NY',
    description: '',
    imageUrl: 'https://i.imgur.com/ERq1lDi.png',
    tags: ['NYTechWeek', 'a16z', 'Robots & Rollups', 'Machine Learning'],
    partnerOrHost: 'PrismaX & a16z NY Tech Week',
    externalLink: 'https://www.prismax.ai/'
  },
  {
    id: 'event-nytech-7',
    title: '',
    category: 'Robots & Rollups - #NYTechWeek Event',
    date: 'June 2026',
    location: 'New York City, NY',
    description: '',
    imageUrl: 'https://i.imgur.com/rJuUxBJ.png',
    tags: ['NYTechWeek', 'a16z', 'Rollups', 'Data Pipeline'],
    partnerOrHost: 'PrismaX & a16z NY Tech Week',
    externalLink: 'https://www.prismax.ai/'
  },
  {
    id: 'event-nytech-8',
    title: '',
    category: 'Robots & Rollups - #NYTechWeek Event',
    date: 'June 2026',
    location: 'New York City, NY',
    description: '',
    imageUrl: 'https://i.imgur.com/rF4XEFf.png',
    tags: ['NYTechWeek', 'a16z', 'VIP Community', 'Physical AI'],
    partnerOrHost: 'PrismaX & a16z NY Tech Week',
    externalLink: 'https://www.prismax.ai/'
  }
];

export const EventsPartnershipsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeModalItem, setActiveModalItem] = useState<GalleryEventItem | null>(null);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const categories = [
    { id: 'all', label: `All Highlights (${EVENTS_GALLERY_DATA.length})`, icon: Layers },
    { id: 'PrismaX Sponsors BASS Stanford SBC 2026', label: 'PrismaX Sponsors BASS Stanford SBC 2026', icon: Sparkles },
    { id: 'PrismaX at BETA@Berkeley Hackathon 2026', label: 'PrismaX at BETA@Berkeley Hackathon 2026', icon: Users },
    { id: 'Robots & Rollups - #NYTechWeek Event', label: 'Robots & Rollups - #NYTechWeek Event', icon: Handshake },
  ];

  const filteredItems = selectedCategory === 'all'
    ? EVENTS_GALLERY_DATA
    : EVENTS_GALLERY_DATA.filter(item => item.category === selectedCategory);

  const handleCopyLink = (e: React.MouseEvent, item: GalleryEventItem) => {
    e.stopPropagation();
    navigator.clipboard.writeText(item.imageUrl);
    setCopiedId(item.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <section id="events" className="relative py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      {/* Ambient background glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-96 bg-[#d4c4ad]/20 dark:bg-[#d4c4ad]/10 rounded-full blur-3xl pointer-events-none" />

      {/* Section Header */}
      <div className="text-center space-y-3.5 mb-8 relative z-10">
        {/* Editorial Highlighted Header from Reference */}
        <div className="flex flex-col items-center justify-center space-y-1.5 py-1">
          <div className="inline-block bg-[#c8bca6] dark:bg-[#c8bca6] px-3.5 sm:px-6 py-1 sm:py-2 shadow-xs border border-[#08080c]/15">
            <h2 className="font-catalogue text-base sm:text-2xl md:text-3xl lg:text-4xl font-black text-[#08080c] uppercase tracking-wider leading-snug text-center">
              PRISMAX EVENTS, MEETUPS,
            </h2>
          </div>
          <div className="inline-block bg-[#c8bca6] dark:bg-[#c8bca6] px-3.5 sm:px-6 py-1 sm:py-2 shadow-xs border border-[#08080c]/15">
            <span className="font-catalogue text-base sm:text-2xl md:text-3xl lg:text-4xl font-black text-[#08080c] uppercase tracking-wider leading-snug block text-center">
              AND PARTNERSHIPS
            </span>
          </div>
        </div>
        <p className="text-sm sm:text-base md:text-lg text-[#08080c] dark:text-[#e4e2f0] max-w-3xl mx-auto font-medium leading-relaxed">
          PrismaX events create opportunities for meaningful conversations around robotics, physical AI, blockchain technology, research, investment, and community development.
        </p>

        {/* Category Filter Bar */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 pt-4 pb-2">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`inline-flex items-center gap-2.5 px-4.5 sm:px-5 py-2.5 sm:py-3 rounded-2xl text-xs sm:text-sm font-mono-code font-bold transition-all duration-200 cursor-pointer shadow-xs ${
                  isActive
                    ? 'bg-[#08080c] dark:bg-[#ffffff] text-[#f7f3eb] dark:text-[#08080c] shadow-md scale-102 border border-transparent'
                    : 'bg-[#efe8dc]/90 dark:bg-[#181826]/90 text-[#08080c] dark:text-[#c4c2d4] hover:bg-[#e4dbcc] dark:hover:bg-[#222234] border border-[#08080c]/12 dark:border-white/12'
                }`}
              >
                <Icon className={`w-4 h-4 shrink-0 ${isActive ? 'text-[#d4c2a5] dark:text-[#8a6d3b]' : 'text-[#08080c] dark:text-[#d4c4ad]'}`} />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Gallery Grid with Full Front Details */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            onClick={() => setActiveModalItem(item)}
            className="group relative flex flex-col justify-between rounded-3xl bg-[#08080c]/95 dark:bg-[#0a0a12]/95 backdrop-blur-xl p-3.5 sm:p-4 overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-2xl hover:-translate-y-1.5 border border-white/12 text-left text-[#f7f3eb]"
          >
            {/* Ambient hover glow inside card */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-[#d4c4ad]/15 dark:bg-[#d4c4ad]/10 rounded-full blur-2xl group-hover:bg-[#d4c4ad]/25 transition-all pointer-events-none" />

            <div className="space-y-3.5">
              {/* 16:9 Image Preview Frame */}
              <div className="relative rounded-2xl overflow-hidden aspect-16/9 w-full bg-[#08080f] border border-white/10 shadow-xs">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent pointer-events-none" />

                {/* Action Buttons Top Right */}
                <div className="absolute top-2.5 right-2.5 flex items-center gap-1.5 z-10">
                  <button
                    type="button"
                    onClick={(e) => handleCopyLink(e, item)}
                    title="Copy direct image link"
                    className="p-1.5 rounded-xl bg-black/65 backdrop-blur-md text-[#f7f3eb] hover:bg-black hover:text-white border border-white/20 transition-colors cursor-pointer"
                  >
                    {copiedId === item.id ? (
                      <Check className="w-3.5 h-3.5 text-emerald-400 font-bold" />
                    ) : (
                      <Copy className="w-3.5 h-3.5" />
                    )}
                  </button>

                  <button
                    type="button"
                    title="Zoom and view details"
                    className="p-1.5 rounded-xl bg-black/65 backdrop-blur-md text-[#f7f3eb] hover:bg-black hover:text-white border border-white/20 transition-colors cursor-pointer"
                  >
                    <Maximize2 className="w-3.5 h-3.5" />
                  </button>
                </div>

                {/* Location & Date Overlay on Image Bottom */}
                <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between text-[11px] font-mono-code text-[#efe8dc] font-bold">
                  <div className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span className="truncate max-w-[140px] text-[#efe8dc]">{item.location}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-[#d4c2a5] shrink-0" />
                    <span className="text-[#d4c2a5]">{item.date}</span>
                  </div>
                </div>
              </div>

              {/* Full Details on Front of Card - Cream Color Typography */}
              <div className="space-y-2.5 px-0.5 text-left">
                {/* Category Pill */}
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md text-[10px] font-mono-code font-bold bg-[#181824] text-[#d4c4ad] border border-white/12">
                  <span className="truncate max-w-[240px] text-[#d4c4ad]">{item.category}</span>
                </div>

                {/* Title in Cream */}
                {item.title ? (
                  <h3 className="font-bold text-sm sm:text-base text-[#f7f3eb] group-hover:text-[#d4c4ad] transition-colors leading-snug">
                    {item.title}
                  </h3>
                ) : null}

                {/* Full Description in Cream/Tan */}
                {item.description ? (
                  <p className="text-xs sm:text-[13px] text-[#d4c4ad] font-medium leading-relaxed line-clamp-3">
                    {item.description}
                  </p>
                ) : null}

                {/* Tags in Cream */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded-md text-[10px] font-mono-code font-bold bg-[#181824] text-[#d4c4ad] border border-white/10 shadow-2xs"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox / Fullscreen Modal */}
      {activeModalItem && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-fadeIn"
          onClick={() => setActiveModalItem(null)}
        >
          <div 
            className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl bg-[#08080c] border border-white/20 p-5 sm:p-7 shadow-2xl text-left text-[#f7f3eb]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setActiveModalItem(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-[#1c1c2b] text-[#f7f3eb] hover:scale-105 transition-transform cursor-pointer z-20 shadow-md border border-white/15"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="space-y-4">
              {/* Full Featured Image */}
              <div className="relative rounded-2xl overflow-hidden aspect-16/9 w-full bg-[#08080f] border border-white/15 shadow-md">
                <img
                  src={activeModalItem.imageUrl}
                  alt={activeModalItem.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Metadata Header */}
              <div className="flex flex-wrap items-center justify-between gap-2.5 pt-1">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono-code font-black bg-[#181824] text-[#f7f3eb] border border-white/15">
                  <span>{activeModalItem.category}</span>
                </div>

                <div className="flex items-center gap-4 text-xs font-mono-code font-bold text-[#d4c4ad]">
                  <div className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                    <span>{activeModalItem.location}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-[#d4c4ad]" />
                    <span>{activeModalItem.date}</span>
                  </div>
                </div>
              </div>

              {/* Title and Detailed Narrative in Cream */}
              {(activeModalItem.title || activeModalItem.description || activeModalItem.partnerOrHost) && (
                <div className="space-y-2">
                  {activeModalItem.title ? (
                    <h3 className="text-xl sm:text-2xl font-black text-[#f7f3eb] font-heading">
                      {activeModalItem.title}
                    </h3>
                  ) : null}
                  {activeModalItem.description ? (
                    <p className="text-sm sm:text-base text-[#d4c4ad] font-medium leading-relaxed">
                      {activeModalItem.description}
                    </p>
                  ) : null}
                  {activeModalItem.partnerOrHost && (
                    <p className="text-xs font-mono-code font-black text-[#efe8dc] pt-1">
                      Host / Partner Entity: <span className="underline text-[#d4c4ad]">{activeModalItem.partnerOrHost}</span>
                    </p>
                  )}
                </div>
              )}

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 pt-1">
                {activeModalItem.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded-lg text-[10px] font-mono-code bg-[#181824] text-[#d4c4ad] font-black border border-white/10"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
