import React, { useState } from 'react';
import { EcosystemLink } from '../types';
import { 
  X, 
  ExternalLink, 
  Copy, 
  Check, 
  Sparkles, 
  ShieldCheck, 
  Globe, 
  QrCode,
  Bot,
  BookOpen,
  FileText 
} from 'lucide-react';

interface ProjectModalProps {
  link: EcosystemLink | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ link, onClose }) => {
  const [copied, setCopied] = useState(false);
  const [showQR, setShowQR] = useState(false);

  if (!link) return null;

  const handleCopy = () => {
    navigator.clipboard.writeText(link.url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleClose = () => {
    onClose();
  };

  // Generate QR code URL via reliable public QR endpoint for direct mobile scanning
  const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&color=08080c&bgcolor=efe8dc&data=${encodeURIComponent(link.url)}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        onClick={handleClose}
        className="fixed inset-0 bg-[#08080c]/60 dark:bg-[#000000]/80 backdrop-blur-md transition-opacity"
      />

      {/* Modal Card in Luxury Cream / Obsidian Glass */}
      <div className="relative w-full max-w-2xl rounded-3xl bg-[#fdfbf7] dark:bg-[#11111a] border border-[#08080c]/15 dark:border-white/15 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.35)] dark:shadow-[0_25px_60px_-15px_rgba(0,0,0,0.8)] overflow-hidden z-10 my-auto animate-in fade-in zoom-in-95 duration-200 text-left">
        
        {/* Header Preview Image */}
        <div className="relative h-52 sm:h-60 overflow-hidden bg-[#08080c]">
          <img
            src={link.previewImage}
            alt={link.title}
            className="w-full h-full object-cover filter contrast-110 brightness-95"
            onError={(e) => {
              (e.currentTarget as HTMLImageElement).src = 'https://i.imgur.com/s99rzD3.png';
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#fdfbf7] dark:from-[#11111a] via-transparent to-black/30" />

          {/* Close button */}
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 p-2.5 rounded-full bg-[#08080c]/80 dark:bg-white/15 backdrop-blur-md text-[#f7f3eb] hover:bg-[#08080c] dark:hover:bg-white/25 hover:scale-105 transition-all cursor-pointer shadow-md"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 sm:p-8 space-y-6 text-[#08080c] dark:text-[#f7f3eb]">
          <div>
            <h3 className="text-2xl sm:text-3xl font-black text-[#08080c] dark:text-[#ffffff] font-heading">
              {link.title}
            </h3>
            <p className="mt-2 text-sm sm:text-base text-[#1c1c24] dark:text-[#e4e1f0] leading-relaxed font-medium">
              {link.description}
            </p>
          </div>

          {/* Special Editorial Guide Note for PrismaX Official Website */}
          {link.id === 'prismax-official' && (
            <div className="p-4 sm:p-5 rounded-2xl bg-[#f7f3eb] dark:bg-[#181826] border border-[#08080c]/15 dark:border-white/12 text-xs sm:text-[13px] text-[#2d2d38] dark:text-[#dcd9e8] leading-relaxed font-medium space-y-2.5">
              <div className="flex items-center gap-2 text-xs font-mono-code font-black text-[#08080c] dark:text-[#f7f3eb] uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-[#08080c] dark:text-[#d4c4ad]" />
                <span>COMMUNITY RESOURCE DIRECTORY</span>
              </div>
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
          )}

          {/* Special Operational Overview Note for Robot Control Center */}
          {link.id === 'robot-control-center' && (
            <div className="p-4 sm:p-5 rounded-2xl bg-[#f7f3eb] dark:bg-[#181826] border border-[#08080c]/15 dark:border-white/12 text-xs sm:text-[13px] text-[#2d2d38] dark:text-[#dcd9e8] leading-relaxed font-medium space-y-2.5">
              <div className="flex items-center gap-2 text-xs font-mono-code font-black text-[#08080c] dark:text-[#f7f3eb] uppercase tracking-wider">
                <Bot className="w-3.5 h-3.5 text-[#08080c] dark:text-[#d4c4ad]" />
                <span>ROBOT CONTROL CENTER OVERVIEW</span>
              </div>
              <p>
                The PrismaX Robot Control Center brings every essential robot system into one connected and organized dashboard. It provides a central space for tracking verification quality, monitoring active robot operations, reviewing mission objectives, and following network activity as each task develops.
              </p>
              <p>
                Users receive a clear overview of robot status, current assignments, system performance, mission progress, and changes across the network. Each section of the interface presents important operational information in a simple and accessible format, helping users understand what is happening at every stage of a mission.
              </p>
              <p>
                The dashboard also connects individual robot activity with the wider PrismaX ecosystem, showing how different systems work together to support coordinated operations. Whether reviewing verification results, checking mission updates, or observing network conditions, users remain informed through one consistent interface. The PrismaX Robot Control Center creates an engaging way to explore robot technology, understand operational processes, and follow the systems that support every PrismaX mission.
              </p>
              <div className="pt-2 border-t border-[#08080c]/12 dark:border-white/10 space-y-1.5 font-mono-code text-xs text-[#08080c] dark:text-[#f7f3eb]">
                <p className="font-bold">The PrismaX arm system now has a clearer structure.</p>
                <div className="text-[#383747] dark:text-[#d4c4ad] font-semibold space-y-0.5">
                  <div>▪️ Training Arm Gold + Black</div>
                  <div>▪️ Arena Arm</div>
                  <div>▪️ Private Arm (invite-only)on active competition, and Private Arm remains invite-only. More structure. More room to grow.</div>
                </div>
              </div>
            </div>
          )}

          {/* Special Role Progression Guide Note */}
          {link.id === 'role-progression-guide' && (
            <div className="p-4 sm:p-5 rounded-2xl bg-[#f7f3eb] dark:bg-[#181826] border border-[#08080c]/15 dark:border-white/12 text-xs sm:text-[13px] text-[#2d2d38] dark:text-[#dcd9e8] leading-relaxed font-medium space-y-2.5">
              <div className="flex items-center gap-2 text-xs font-mono-code font-black text-[#08080c] dark:text-[#f7f3eb] uppercase tracking-wider">
                <BookOpen className="w-3.5 h-3.5 text-[#08080c] dark:text-[#d4c4ad]" />
                <span>ROLE PROGRESSION FRAMEWORK OVERVIEW</span>
              </div>
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
          )}

          {/* Special Whitepaper Guide Note */}
          {link.id === 'prismax-whitepaper' && (
            <div className="p-4 sm:p-5 rounded-2xl bg-[#f7f3eb] dark:bg-[#181826] border border-[#08080c]/15 dark:border-white/12 text-xs sm:text-[13px] text-[#2d2d38] dark:text-[#dcd9e8] leading-relaxed font-medium space-y-2.5">
              <div className="flex items-center gap-2 text-xs font-mono-code font-black text-[#08080c] dark:text-[#f7f3eb] uppercase tracking-wider">
                <FileText className="w-3.5 h-3.5 text-[#08080c] dark:text-[#d4c4ad]" />
                <span>WHITEPAPER & FOUNDATIONAL GUIDE</span>
              </div>
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
          )}

          {/* Key Features List */}
          <div className="space-y-2.5">
            <div className="text-xs uppercase tracking-wider font-mono-code font-black text-[#08080c] dark:text-[#f7f3eb] flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[#08080c] dark:text-[#d4c4ad]" />
              <span>CORE ARCHITECTURAL HIGHLIGHTS</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {link.features.map((feat, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-xl bg-[#efe8dc] dark:bg-[#181826] border border-[#08080c]/12 dark:border-white/10 text-xs text-[#08080c] dark:text-[#dcd9e8] flex items-start gap-2 font-bold"
                >
                  <ShieldCheck className="w-3.5 h-3.5 text-[#08080c] dark:text-[#d4c4ad] shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* QR Code toggle box */}
          {showQR && (
            <div className="p-4 rounded-2xl bg-[#efe8dc] dark:bg-[#181826] border border-[#08080c]/15 dark:border-white/15 flex flex-col sm:flex-row items-center gap-4 animate-in fade-in duration-200">
              <div className="p-2 bg-[#ffffff] rounded-xl shrink-0 border border-[#08080c]/15 shadow-2xs">
                <img src={qrUrl} alt="QR Code" className="w-28 h-28" />
              </div>
              <div className="text-center sm:text-left space-y-1">
                <div className="text-xs font-black text-[#08080c] dark:text-[#f7f3eb]">Scan to open on Mobile</div>
                <div className="text-[11px] text-[#08080c] dark:text-[#a09eb5] font-mono-code break-all font-bold">{link.url}</div>
                <div className="text-[10px] text-[#08080c] dark:text-[#d4c4ad] pt-1 font-black">Point your phone camera to launch directly</div>
              </div>
            </div>
          )}

          {/* Action Row */}
          <div className="flex flex-wrap items-center gap-3 pt-2 border-t border-[#08080c]/12 dark:border-white/10">
            {/* Direct Launch Button */}
            <a
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-6 rounded-xl bg-[#08080c] dark:bg-[#f7f3eb] hover:bg-[#181824] dark:hover:bg-[#ffffff] text-[#f7f3eb] dark:text-[#08080c] font-black text-xs uppercase tracking-wider shadow-[0_6px_20px_rgba(8,8,12,0.25)] dark:shadow-[0_6px_20px_rgba(0,0,0,0.5)] transition-all hover:scale-[1.02] active:scale-98 cursor-pointer"
            >
              <Globe className="w-4 h-4 text-[#d4c2a5] dark:text-[#08080c]" />
              <span>Launch Official Destination</span>
              <ExternalLink className="w-4 h-4 text-[#d4c2a5] dark:text-[#08080c]" />
            </a>

            {/* Copy Link Button */}
            <button
              type="button"
              onClick={handleCopy}
              className="inline-flex items-center gap-2 py-3 px-4 rounded-xl bg-[#efe8dc] dark:bg-[#1c1c2c] hover:bg-[#e2d6c3] dark:hover:bg-[#252538] text-[#08080c] dark:text-[#f7f3eb] text-xs font-black border border-[#08080c]/15 dark:border-white/15 transition-colors cursor-pointer"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400" /> : <Copy className="w-4 h-4" />}
              <span>{copied ? 'Copied' : 'Copy URL'}</span>
            </button>

            {/* QR Code toggle */}
            <button
              type="button"
              onClick={() => setShowQR(!showQR)}
              className="p-3 rounded-xl bg-[#efe8dc] dark:bg-[#1c1c2c] hover:bg-[#e2d6c3] dark:hover:bg-[#252538] text-[#08080c] dark:text-[#f7f3eb] border border-[#08080c]/15 dark:border-white/15 transition-colors cursor-pointer"
              title="Toggle Mobile QR Code"
            >
              <QrCode className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
