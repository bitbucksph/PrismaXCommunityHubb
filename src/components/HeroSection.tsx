import React from 'react';
import { ActiveSection } from '../types';
import { 
  User, 
  ExternalLink, 
  Bot, 
  Layers, 
  Terminal,
  Activity
} from 'lucide-react';
import robotHeroImage from '../assets/images/profile.jpg2.jpeg';

interface HeroSectionProps {
  onNavigate: (section: ActiveSection) => void;
  onExploreEcosystem: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onNavigate,
  onExploreEcosystem,
}) => {
  const handleAboutMe = () => {
    onNavigate('about');
  };

  const handlePrismaxOfficial = () => {
    window.open('https://www.prismax.ai/', '_blank', 'noopener,noreferrer');
  };

  const handleRobotControlCenter = () => {
    window.open('https://app.prismax.ai/', '_blank', 'noopener,noreferrer');
  };

  const handleEcosystemRecap = () => {
    onExploreEcosystem();
  };

  return (
    <section
      id="hero"
      className="relative min-h-0 flex flex-col justify-between items-center pt-20 sm:pt-24 pb-6 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Main Cinematic Hero Card in Luxury Cream Glass */}
      <div className="w-full max-w-6xl my-auto">
        <div className="relative rounded-[2.5rem] glass-cream p-5 sm:p-7 lg:p-8 overflow-hidden group/hero text-[#08080c]">
          
          {/* Specular Top Glow Beam in Warm Ivory */}
          <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-3/4 h-40 bg-gradient-to-b from-white/90 to-transparent blur-2xl pointer-events-none" />

          {/* Luxury Corner Accents in Warm Bronze */}
          <div className="absolute top-4 left-4 w-4 h-4 border-t-2 border-l-2 border-[#8c785f]/50 pointer-events-none" />
          <div className="absolute top-4 right-4 w-4 h-4 border-t-2 border-r-2 border-[#8c785f]/50 pointer-events-none" />
          <div className="absolute bottom-4 left-4 w-4 h-4 border-b-2 border-l-2 border-[#8c785f]/50 pointer-events-none" />
          <div className="absolute bottom-4 right-4 w-4 h-4 border-b-2 border-r-2 border-[#8c785f]/50 pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center relative z-10">
            
            {/* Left Frame: Robot Workspace at Desk with Live Status Indicator */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative group w-full max-w-sm sm:max-w-md">
                {/* Ambient glow behind avatar frame */}
                <div className="absolute -inset-3 rounded-[2.8rem] bg-gradient-to-tr from-[#d4c4ad]/50 via-[#efe8dc]/40 to-[#ffffff]/60 dark:from-[#d4c4ad]/20 dark:via-[#1c1c28]/40 dark:to-transparent blur-2xl opacity-80 group-hover:opacity-100 transition duration-700 pointer-events-none" />
                
                {/* Precision Glass Frame with Luxury Bezel */}
                <div className="relative rounded-[2.5rem] p-2.5 bg-gradient-to-b from-[#ffffff] via-[#efe8dc] to-[#dfd3c0] dark:from-[#252538] dark:via-[#181826] dark:to-[#0f0f18] border border-[#08080c]/12 dark:border-white/15 shadow-[0_20px_50px_rgba(40,30,20,0.12)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden">
                  
                  {/* Image container */}
                  <div className="relative w-full h-[320px] sm:h-[370px] rounded-[2rem] overflow-hidden bg-[#08080c]">
                    <img
                      src={robotHeroImage}
                      alt="PrismaX Physical AI Robot at Desk with Teleoperation Control Center"
                      className="w-full h-full object-cover object-center filter contrast-105 brightness-95 group-hover:scale-105 transition-transform duration-700"
                    />

                    {/* Subtle cinematic gradient overlays */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#08080c]/90 via-transparent to-black/20" />

                    {/* Live Status Indicator in Obsidian Solid Pill */}
                    <div className="absolute bottom-3 left-3 right-3 p-2.5 sm:p-3 rounded-2xl bg-[#08080c]/95 backdrop-blur-xl border border-white/20 text-[#f7f3eb] shadow-2xl flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        {/* Pulsing Beacon Signal */}
                        <div className="relative flex items-center justify-center w-3 h-3">
                          <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
                        </div>
                        <div>
                          <div className="text-[11px] font-extrabold uppercase font-mono-code tracking-wider text-[#f7f3eb] flex items-center gap-1">
                            <span className="text-[#f7f3eb]">ROBOT CONTROL CENTER</span>
                          </div>
                          <div className="text-[9px] text-[#d4c2a5] font-mono-code font-semibold mt-0.5">
                            <span className="text-[#d4c2a5]">app.prismax.ai • Teleoperation Live</span>
                          </div>
                        </div>
                      </div>

                      <div className="px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-md bg-[#22222d] border border-white/10 text-[10px] font-mono-code font-bold text-[#d4c2a5] flex items-center gap-1.5">
                        <Activity className="w-3 h-3 text-emerald-400 animate-pulse" />
                        <span className="text-[#d4c2a5] font-extrabold tracking-wider">ONLINE</span>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>

            {/* Right Content: Tagline, Narrative & Classic Interactive Navigation Commands */}
            <div className="lg:col-span-7 space-y-4 text-left">
              
              {/* Header category badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#efe8dc] border border-[#08080c]/20 text-xs font-mono-code text-[#08080c] backdrop-blur-md shadow-2xs font-extrabold">
                <Terminal className="w-3.5 h-3.5 text-[#08080c]" />
                <span className="uppercase tracking-wider">ROBOT ■ DATA ■ INTELLIGENCE</span>
              </div>

              {/* Bold Primary Tagline & Heading with Stepped Highlight Boxes */}
              <div className="space-y-3">
                <div className="flex flex-col items-start space-y-1 select-none">
                  <div className="inline-block bg-[#c8bca6] px-3 sm:px-4 py-1 sm:py-1.5 shadow-xs border border-[#08080c]/20">
                    <h1 className="font-catalogue text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-[#08080c] uppercase tracking-wider leading-none">
                      THE
                    </h1>
                  </div>
                  <div className="inline-block bg-[#c8bca6] px-3 sm:px-4 py-1 sm:py-1.5 shadow-xs border border-[#08080c]/20">
                    <span className="font-catalogue text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-[#08080c] uppercase tracking-wider leading-none block">
                      STANDARD
                    </span>
                  </div>
                  <div className="inline-block bg-[#c8bca6] px-3 sm:px-4 py-1 sm:py-1.5 shadow-xs border border-[#08080c]/20">
                    <span className="font-catalogue text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-[#08080c] uppercase tracking-wider leading-none block">
                      STARTS WITH
                    </span>
                  </div>
                  <div className="inline-block bg-[#c8bca6] px-3 sm:px-4 py-1 sm:py-1.5 shadow-xs border border-[#08080c]/20">
                    <span className="font-catalogue text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-[#08080c] uppercase tracking-wider leading-none block">
                      YOU
                    </span>
                  </div>
                </div>
                
                {/* Description Text - Solid Dark High-Contrast Black */}
                <p className="text-xs sm:text-sm text-[#181824] font-bold leading-relaxed max-w-xl pt-1">
                  A personal portfolio and community resource hub by <span className="font-black text-[#08080c] underline decoration-[#08080c]/40">MikeOnChain</span>, built to help new members understand PrismaX and find official tools.
                </p>
              </div>

              {/* Classic Interactive Navigation Commands Panel */}
              <div className="pt-3.5 border-t border-[#08080c]/15 space-y-3">
                {/* Command Buttons Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  
                  {/* 1. ABOUT ME Command Button in Solid Obsidian */}
                  <button
                    onClick={handleAboutMe}
                    className="group flex items-center justify-between p-3 sm:p-3.5 rounded-2xl bg-[#08080c] text-[#f7f3eb] border border-[#08080c] shadow-[0_8px_20px_rgba(8,8,12,0.3)] hover:shadow-[0_12px_28px_rgba(8,8,12,0.45)] hover:bg-[#181824] transition-all hover:scale-[1.01] active:scale-98 cursor-pointer text-left"
                  >
                    <div className="flex items-center gap-2.5">
                      <div className="p-2 rounded-xl bg-[#22222e] text-[#d4c2a5]">
                        <User className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <div className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-[#f7f3eb]">
                          ABOUT ME
                        </div>
                        <div className="text-[10px] font-mono-code text-[#d4c2a5] font-semibold">
                          Profile & Milestones
                        </div>
                      </div>
                    </div>
                    <span className="text-xs font-mono-code text-[#d4c2a5] group-hover:translate-x-1 transition-transform font-bold">
                      →
                    </span>
                  </button>

                  {/* 2. OFFICIAL PRISMAX WEBSITE Command Button */}
                  <button
                    onClick={handlePrismaxOfficial}
                    className="group flex items-center justify-between p-3 sm:p-3.5 rounded-2xl bg-[#08080c] text-[#f7f3eb] border border-[#08080c] shadow-[0_8px_20px_rgba(8,8,12,0.3)] hover:shadow-[0_12px_28px_rgba(8,8,12,0.45)] hover:bg-[#181824] transition-all hover:scale-[1.01] active:scale-98 cursor-pointer text-left"
                  >
                    <div className="flex items-center gap-2.5">
                      <div className="p-2 rounded-xl bg-[#22222e] text-[#d4c2a5]">
                        <ExternalLink className="w-3.5 h-3.5 text-[#d4c2a5]" />
                      </div>
                      <div>
                        <div className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-[#f7f3eb]">
                          OFFICIAL PRISMAX WEBSITE
                        </div>
                        <div className="text-[10px] font-mono-code text-[#d4c2a5] font-semibold">
                          prismax.ai platform
                        </div>
                      </div>
                    </div>
                    <ExternalLink className="w-3.5 h-3.5 text-[#d4c2a5] group-hover:translate-x-0.5 transition-transform" />
                  </button>

                  {/* 3. ROBOT CONTROL CENTER Quick Trigger */}
                  <button
                    onClick={handleRobotControlCenter}
                    className="group flex items-center justify-between p-3 rounded-2xl bg-[#08080c] text-[#f7f3eb] border border-[#08080c] shadow-[0_8px_20px_rgba(8,8,12,0.3)] hover:shadow-[0_12px_28px_rgba(8,8,12,0.45)] hover:bg-[#181824] transition-all hover:scale-[1.01] active:scale-98 cursor-pointer text-left"
                  >
                    <div className="flex items-center gap-2.5">
                      <div className="p-1.5 rounded-lg bg-[#22222e] text-[#d4c2a5]">
                        <Bot className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <div className="text-xs font-black uppercase text-[#f7f3eb]">
                          ROBOT CONTROL CENTER
                        </div>
                        <div className="text-[10px] font-mono-code text-[#d4c2a5] font-semibold">
                          app.prismax.ai
                        </div>
                      </div>
                    </div>
                    <ExternalLink className="w-3.5 h-3.5 text-[#d4c2a5]" />
                  </button>

                  {/* 4. ECOSYSTEM RECAP Trigger */}
                  <button
                    onClick={handleEcosystemRecap}
                    className="group flex items-center justify-between p-3 rounded-2xl bg-[#08080c] text-[#f7f3eb] border border-[#08080c] shadow-[0_8px_20px_rgba(8,8,12,0.3)] hover:shadow-[0_12px_28px_rgba(8,8,12,0.45)] hover:bg-[#181824] transition-all hover:scale-[1.01] active:scale-98 cursor-pointer text-left"
                  >
                    <div className="flex items-center gap-2.5">
                      <div className="p-1.5 rounded-lg bg-[#22222e] text-[#d4c2a5]">
                        <Layers className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <div className="text-xs font-black uppercase text-[#f7f3eb]">
                          PrismaX Tools & Resources
                        </div>
                        <div className="text-[10px] font-mono-code text-[#d4c2a5] font-semibold">
                          Official Guides & Brandkit
                        </div>
                      </div>
                    </div>
                    <span className="text-xs font-mono-code text-[#d4c2a5] font-black">↓</span>
                  </button>

                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
