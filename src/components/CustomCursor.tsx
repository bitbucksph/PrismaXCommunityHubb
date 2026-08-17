import React, { useEffect, useState } from 'react';

export const CustomCursor: React.FC = () => {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [trailingPos, setTrailingPos] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only enable custom cursor for pointer-fine devices (desktop)
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const handleMouseMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement;
      if (
        target &&
        (target.tagName === 'BUTTON' ||
          target.tagName === 'A' ||
          target.closest('button') ||
          target.closest('a') ||
          target.getAttribute('role') === 'button')
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [isVisible]);

  useEffect(() => {
    let animationFrameId: number;
    const smoothFollow = () => {
      setTrailingPos((prev) => ({
        x: prev.x + (pos.x - prev.x) * 0.22,
        y: prev.y + (pos.y - prev.y) * 0.22,
      }));
      animationFrameId = requestAnimationFrame(smoothFollow);
    };
    animationFrameId = requestAnimationFrame(smoothFollow);
    return () => cancelAnimationFrame(animationFrameId);
  }, [pos]);

  if (!isVisible) return null;

  return (
    <>
      {/* Precision center dot */}
      <div
        className="pointer-events-none fixed z-50 rounded-full transition-transform duration-75 ease-out bg-[#08080c] dark:bg-[#f7f3eb]"
        style={{
          left: `${pos.x}px`,
          top: `${pos.y}px`,
          width: '6px',
          height: '6px',
          transform: `translate(-50%, -50%) scale(${isHovered ? 0.6 : 1})`,
          boxShadow: '0 0 8px rgba(8, 8, 12, 0.4)',
        }}
      />
      {/* Trailing soft halo ring */}
      <div
        className="pointer-events-none fixed z-50 rounded-full transition-all duration-150 ease-out border border-[#08080c]/25 dark:border-white/30"
        style={{
          left: `${trailingPos.x}px`,
          top: `${trailingPos.y}px`,
          width: isHovered ? '42px' : '28px',
          height: isHovered ? '42px' : '28px',
          backgroundColor: isHovered ? 'rgba(212, 196, 173, 0.2)' : 'transparent',
          transform: 'translate(-50%, -50%)',
          boxShadow: isHovered ? '0 0 20px rgba(212, 196, 173, 0.25)' : 'none',
        }}
      />
    </>
  );
};
