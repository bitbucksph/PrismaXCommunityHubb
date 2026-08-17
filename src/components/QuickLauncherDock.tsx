import React, { useState } from 'react';
import { PRIMARY_LINKS } from '../data/portfolioData';
import { ExternalLink, ChevronUp, ChevronDown } from 'lucide-react';

export const QuickLauncherDock: React.FC = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-30 max-w-4xl w-[94%] sm:w-auto">
      <div className="rounded-2xl bg-[#fdfbf7]/95 backdrop-blur-2xl border border-[#0d0d12]/15 shadow-[0_10px_35px_rgba(70,50,25,0.12),0_2px_8px_rgba(0,0,0,0.04)] p-2.5 transition-all duration-300">
        
        {/* Dock Header Bar */}
        <div className="flex items-center justify-between gap-4 px-2 sm:px-3 py-1">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#b8a68d] animate-pulse" />
            <span className="text-[11px] font-mono-code font-extrabold uppercase tracking-wider text-[#08080c]">
              Quick Ecosystem Hub
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="hidden sm:inline-block text-[10px] font-mono-code text-[#5c5a6d] font-bold">
              Tools & Resources
            </span>
            <button
              onClick={() => {
                setExpanded(!expanded);
              }}
              className="p-1.5 rounded-lg bg-[#efe8dc] text-[#08080c] hover:bg-[#08080c] hover:text-[#f7f3eb] border border-[#08080c]/10 transition-colors cursor-pointer"
              title={expanded ? 'Minimize Dock' : 'Expand Resources'}
            >
              {expanded ? <ChevronDown className="w-3.5 h-3.5" /> : <ChevronUp className="w-3.5 h-3.5" />}
            </button>
          </div>
        </div>

        {/* Quick Icon Links Row / Expanded Panel */}
        <div className={`pt-2 transition-all duration-300 ${expanded ? 'block' : 'hidden sm:block'}`}>
          <div className="grid grid-cols-2 sm:grid-cols-6 gap-1.5">
            {PRIMARY_LINKS.map((link) => (
              <a
                key={link.id}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between sm:justify-center gap-1.5 p-2 rounded-xl bg-[#efe8dc]/80 hover:bg-[#08080c] border border-[#08080c]/10 hover:border-[#08080c] text-left transition-all hover:scale-105 group cursor-pointer shadow-2xs"
                title={link.title}
              >
                <div className="truncate">
                  <div className="text-[10px] font-bold text-[#08080c] group-hover:text-[#f7f3eb] truncate">
                    {link.title.replace('PrismaX ', '').replace(' Mike', '')}
                  </div>
                  <div className="text-[8px] font-mono-code text-[#5c5a6d] group-hover:text-[#d4c4ad] truncate font-semibold">
                    {link.badge}
                  </div>
                </div>
                <ExternalLink className="w-3 h-3 text-[#5c5a6d] group-hover:text-[#d4c4ad] shrink-0" />
              </a>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};
