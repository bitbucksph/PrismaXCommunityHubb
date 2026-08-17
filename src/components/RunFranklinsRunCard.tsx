import React, { useState } from 'react';
import { ExternalLink, Play, Sparkles } from 'lucide-react';

export const RunFranklinsRunCard: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="p-4 sm:p-5 rounded-3xl glass-cream border border-[#08080c]/12 dark:border-white/12 shadow-sm hover:shadow-xl transition-all duration-500 text-left relative overflow-hidden group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Ambient background glow */}
      <div className="absolute -top-12 -right-12 w-44 h-44 bg-[#08080c]/5 dark:bg-white/5 rounded-full blur-2xl group-hover:bg-[#d4c2a5]/30 dark:group-hover:bg-[#38bdf8]/20 transition-all duration-700 pointer-events-none" />

      {/* Header Description */}
      <div className="mb-3">
        <p className="text-xs sm:text-[13px] text-[#08080c] font-semibold leading-relaxed">
          I built RUN Franklin’s a retro arcade game starring the PrismaX Runner robot inside a cyber-lab maze.
        </p>
      </div>

      {/* Visual Arcade Screen Mockup / Graphic */}
      <div className="relative rounded-2xl bg-[#08080f] border border-[#222235] overflow-hidden mb-3 group-hover:border-[#3d3d5c] transition-colors aspect-16/9 sm:h-44 w-full flex items-center justify-center">
        <img
          src="https://i.imgur.com/Zcxhwip.png"
          alt="RUN Franklin's RUN Arcade Game"
          className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
          loading="lazy"
        />

        {/* Hover Play Overlay */}
        <div className={`absolute inset-0 bg-[#06060c]/70 backdrop-blur-xs flex items-center justify-center gap-2 transition-opacity duration-300 z-20 ${isHovered ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
          <div className="px-3.5 py-1.5 rounded-xl bg-[#38bdf8] text-[#040914] font-heading font-extrabold text-xs flex items-center gap-1.5 shadow-[0_0_20px_rgba(56,189,248,0.6)]">
            <Play className="w-3.5 h-3.5 fill-current" />
            LAUNCH ARCADE
          </div>
        </div>
      </div>

      {/* Title */}
      <div className="mb-3">
        <h4 className="text-sm sm:text-base font-black font-heading text-[#08080c] flex items-center gap-1.5">
          <span>RUN Franklin's RUN</span>
          <Sparkles className="w-3.5 h-3.5 text-[#08080c]" />
        </h4>
      </div>

      {/* Action Button linking to https://run-franklins-run.vercel.app/ */}
      <a
        href="https://run-franklins-run.vercel.app/"
        target="_blank"
        rel="noopener noreferrer"
        className="w-full flex items-center justify-center gap-2 px-3.5 py-2.5 rounded-2xl bg-[#08080c] hover:bg-[#181824] text-[#f7f3eb] font-heading font-extrabold text-xs sm:text-sm tracking-wide shadow-md hover:shadow-xl hover:scale-[1.01] transition-all duration-300 border border-[#08080c] cursor-pointer group/btn"
      >
        <div className="flex items-center gap-2 text-[#d4c2a5] group-hover/btn:text-[#38bdf8] font-mono-code text-xs sm:text-[13px] font-bold transition-colors">
          <span>run-franklins-run.vercel.app</span>
          <ExternalLink className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
        </div>
      </a>
    </div>
  );
};
