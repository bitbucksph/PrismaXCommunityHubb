import React from 'react';
import { ActiveSection } from '../types';
import { Sparkles, ExternalLink, Cpu, CheckCircle } from 'lucide-react';
import mikeAvatar from '../assets/images/profile.jpg.png';
import { RunFranklinsRunCard } from './RunFranklinsRunCard';

interface AboutSectionProps {
  onNavigate: (section: ActiveSection) => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onNavigate: _onNavigate }) => {
  return (
    <section id="about" className="relative py-4 sm:py-6 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-6 items-start">
        
        {/* Left Column: Visual Portrait Showcase Card & Featured Arcade Game */}
        <div className="lg:col-span-5 space-y-3">
          {/* Portrait Showcase with Cream Glass Border */}
          <div className="relative rounded-[1.75rem] glass-cream p-2.5 shadow-[0_20px_45px_-10px_rgba(60,45,25,0.08)] dark:shadow-[0_20px_45px_-10px_rgba(0,0,0,0.6)] group">
            {/* Glowing Backdrop Aura */}
            <div className="absolute -inset-1 bg-gradient-to-tr from-[#d4c4ad]/50 via-[#efe8dc]/40 to-[#ffffff]/60 dark:from-[#d4c4ad]/20 dark:via-[#1c1c28]/40 dark:to-transparent blur-2xl opacity-75 group-hover:opacity-100 transition duration-700 pointer-events-none" />

            <div className="relative rounded-2xl overflow-hidden h-[290px] sm:h-[320px] bg-[#08080c]">
              <img
                src={mikeAvatar}
                alt="Mike (MikeOnChain) Profile"
                className="w-full h-full object-cover object-top filter contrast-105 brightness-95 group-hover:scale-105 transition-transform duration-700"
              />
              
              {/* Dynamic light vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#060609] via-[#060609]/25 to-transparent" />

              {/* Bottom floating details inside avatar: Current Role Stabilized */}
              <div className="absolute bottom-2 left-2.5 right-2.5 text-left">
                <div className="flex items-center gap-1 mb-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_6px_rgba(52,211,153,0.8)]" />
                  <span className="text-[9px] uppercase font-mono-code text-[#f7f3eb] font-bold tracking-wider drop-shadow-sm">
                    CURRENT ROLE
                  </span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="inline-block bg-[#c8bca6] px-1.5 py-0.5 shadow-2xs border border-[#08080c]/20">
                    <span className="font-catalogue text-xs sm:text-[13px] font-black text-[#08080c] tracking-normal leading-none block">
                      Stabilized
                    </span>
                  </div>
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0 drop-shadow-sm" />
                </div>
              </div>
            </div>
          </div>

          {/* RUN Franklin's RUN Game Showcase Card - Aligned with Skills & Capabilities */}
          <RunFranklinsRunCard />
        </div>

        {/* Right Column: About Me Bio, Skills & Capabilities */}
        <div className="lg:col-span-7 space-y-3.5 text-left">
          
          {/* About Me Narrative Card */}
          <div className="space-y-3 p-5 sm:p-6 rounded-3xl glass-cream border border-[#08080c]/15 text-[#08080c]">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#08080c]" />
              <h3 className="text-lg sm:text-xl font-black tracking-tight uppercase text-[#08080c] font-heading">
                ABOUT ME
              </h3>
            </div>
            
            <p className="text-sm sm:text-base text-[#08080c] leading-relaxed font-semibold">
              Hi, I'm <span className="font-black text-[#08080c]">Mike</span>. I'm a <span className="font-black text-[#08080c]">Stabilized Contributor</span> in the PrismaX community with a passion for Physical AI, robotics, and community building.
            </p>
            <p className="text-xs sm:text-sm text-[#1f1f2c] leading-relaxed font-medium">
              I joined PrismaX on April 17, 2025. Since then, I've focused on creating educational content, designing promotional graphics, building interactive community games, and developing web applications that help introduce more people to the PrismaX ecosystem. My goal is to make Physical AI easier to understand through creative, educational, and engaging content.
            </p>

            {/* Attached Portfolio Link Card */}
            <div className="pt-1">
              <a
                href="https://mikeweb3.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between p-3.5 rounded-2xl bg-[#efe8dc] hover:bg-[#08080c] text-[#08080c] hover:text-[#f7f3eb] border border-[#08080c]/20 hover:border-[#08080c] transition-all duration-300 shadow-xs hover:shadow-xl cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-[#ffffff] group-hover:bg-[#22222e] text-[#08080c] group-hover:text-[#d4c2a5] transition-colors shadow-2xs">
                    <ExternalLink className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs sm:text-sm font-black tracking-wide uppercase text-[#08080c] group-hover:text-white">
                      My Web3 Portfolio
                    </div>
                    <div className="text-[11px] font-mono-code text-[#383747] group-hover:text-[#d4c2a5] font-bold">
                      https://mikeweb3.vercel.app/
                    </div>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-[#08080c] group-hover:text-[#d4c2a5] group-hover:translate-x-0.5 transition-transform" />
              </a>
            </div>
          </div>

          {/* Skills & Capabilities Section Card */}
          <div className="space-y-3.5 p-5 sm:p-6 rounded-3xl glass-cream border border-[#08080c]/15 text-[#08080c]">
            <div className="flex items-center justify-between border-b border-[#08080c]/15 pb-2">
              <h4 className="text-xs uppercase tracking-[0.2em] font-mono-code font-black text-[#08080c]">
                SKILLS & CAPABILITIES
              </h4>
            </div>

            {/* Core Capability Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
              <div className="p-3 rounded-2xl bg-[#efe8dc]/90 border border-[#08080c]/15 hover:border-[#08080c]/40 transition-all shadow-2xs group">
                <div className="w-7 h-7 rounded-xl bg-[#08080c] text-[#f7f3eb] flex items-center justify-center mb-2 shadow-2xs">
                  <Cpu className="w-3.5 h-3.5" />
                </div>
                <h5 className="text-xs font-black text-[#08080c] font-heading leading-snug">
                  Web3 Community Management
                </h5>
                <p className="text-[10px] text-[#2d2d38] font-mono-code mt-1 font-bold leading-tight">
                  Discord & Telegram Moderation • Engagement
                </p>
              </div>

              <div className="p-3 rounded-2xl bg-[#efe8dc]/90 border border-[#08080c]/15 hover:border-[#08080c]/40 transition-all shadow-2xs group">
                <div className="w-7 h-7 rounded-xl bg-[#08080c] text-[#f7f3eb] flex items-center justify-center mb-2 shadow-2xs">
                  <Sparkles className="w-3.5 h-3.5" />
                </div>
                <h5 className="text-xs font-black text-[#08080c] font-heading leading-snug">
                  Ambassador Campaigns
                </h5>
                <p className="text-[10px] text-[#2d2d38] font-mono-code mt-1 font-bold leading-tight">
                  Program Support • Creator Tasks & Growth
                </p>
              </div>

              <div className="p-3 rounded-2xl bg-[#efe8dc]/90 border border-[#08080c]/15 hover:border-[#08080c]/40 transition-all shadow-2xs group">
                <div className="w-7 h-7 rounded-xl bg-[#08080c] text-[#f7f3eb] flex items-center justify-center mb-2 shadow-2xs">
                  <CheckCircle className="w-3.5 h-3.5" />
                </div>
                <h5 className="text-xs font-black text-[#08080c] font-heading leading-snug">
                  Crypto Community Engagement
                </h5>
                <p className="text-[10px] text-[#2d2d38] font-mono-code mt-1 font-bold leading-tight">
                  Member Education • Onboarding • AMAs
                </p>
              </div>
            </div>

            {/* Ecosystems Badges Grid */}
            <div className="space-y-2.5 pt-1">
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-mono-code font-black uppercase tracking-wider text-[#08080c]">
                  Ecosystems
                </span>
                <div className="h-px flex-1 bg-[#08080c]/15" />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
                {[
                  { name: 'DeFi', detail: 'Decentralized Finance', tag: 'FINANCE' },
                  { name: 'NFTs & Music NFTs', detail: 'Digital Collectibles & Audio', tag: 'CREATIVE' },
                  { name: 'GameFi & P2E', detail: 'Play-to-Earn Gaming', tag: 'GAMING' },
                  { name: 'DePIN', detail: 'Decentralized Infrastructure', tag: 'HARDWARE' },
                  { name: 'Web3 Wallets', detail: 'Self-Custody & Key Management', tag: 'SECURITY' },
                  { name: 'Web3 Domains', detail: 'Decentralized Naming & Identity', tag: 'IDENTITY' },
                ].map((eco, idx) => (
                  <div
                    key={idx}
                    className="p-2.5 rounded-xl bg-[#ffffff] border border-[#08080c]/18 hover:border-[#08080c]/40 transition-all flex items-center justify-between shadow-2xs"
                  >
                    <div className="min-w-0 pr-1.5 text-left">
                      <div className="text-[11px] font-black text-[#08080c] truncate">
                        {eco.name}
                      </div>
                      <div className="text-[9px] text-[#383747] font-mono-code truncate font-bold">
                        {eco.detail}
                      </div>
                    </div>
                    <span className="shrink-0 text-[8px] font-mono-code px-1.5 py-0.5 rounded bg-[#efe8dc] text-[#08080c] font-black border border-[#08080c]/20">
                      {eco.tag}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
