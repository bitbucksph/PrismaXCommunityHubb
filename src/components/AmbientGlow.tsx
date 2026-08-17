import React, { useEffect, useState } from 'react';
import { useTheme } from '../context/ThemeContext';

export const AmbientGlow: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: -200, y: -200 });
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMove);
    return () => window.removeEventListener('mousemove', handleMove);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {/* Interactive mouse ambient glow */}
      <div
        className="absolute rounded-full transition-transform duration-500 ease-out blur-[110px] opacity-45"
        style={{
          left: `${mousePos.x}px`,
          top: `${mousePos.y}px`,
          width: '450px',
          height: '450px',
          background: isDark
            ? 'radial-gradient(circle, rgba(212, 196, 173, 0.18) 0%, rgba(30, 26, 42, 0.4) 50%, transparent 80%)'
            : 'radial-gradient(circle, rgba(212, 196, 173, 0.45) 0%, rgba(247, 243, 235, 0.25) 50%, transparent 80%)',
          transform: 'translate(-50%, -50%)',
        }}
      />

      {/* Top Center Aurora */}
      <div
        className={`absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] sm:w-[1100px] h-[550px] blur-[100px] animate-ambient-drift ${
          isDark
            ? 'bg-[radial-gradient(ellipse_at_top,_rgba(212,196,173,0.12)_0%,_rgba(35,30,48,0.35)_40%,_transparent_75%)]'
            : 'bg-[radial-gradient(ellipse_at_top,_rgba(255,255,255,0.95)_0%,_rgba(235,224,205,0.55)_40%,_transparent_75%)]'
        }`}
      />

      {/* Mid Left Subtle Flare */}
      <div
        className={`absolute top-[28%] -left-32 w-[550px] h-[550px] blur-[120px] animate-ambient-drift-rev ${
          isDark
            ? 'bg-[radial-gradient(circle,_rgba(28,28,42,0.45)_0%,_rgba(20,18,28,0.3)_50%,_transparent_75%)]'
            : 'bg-[radial-gradient(circle,_rgba(226,214,195,0.4)_0%,_rgba(240,232,220,0.25)_50%,_transparent_75%)]'
        }`}
      />

      {/* Bottom Right Soft Flare */}
      <div
        className={`absolute bottom-[10%] -right-20 w-[600px] h-[600px] blur-[140px] animate-ambient-drift ${
          isDark
            ? 'bg-[radial-gradient(circle,_rgba(212,196,173,0.09)_0%,_rgba(24,22,34,0.35)_50%,_transparent_75%)]'
            : 'bg-[radial-gradient(circle,_rgba(225,212,190,0.45)_0%,_rgba(245,238,228,0.25)_50%,_transparent_75%)]'
        }`}
      />

      {/* Fine Subtle Grain Texture Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.022] mix-blend-multiply pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
        }}
      />
    </div>
  );
};
