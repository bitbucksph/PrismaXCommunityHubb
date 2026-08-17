import React, { useEffect, useState } from 'react';

interface Spark {
  id: number;
  x: number;
  y: number;
  size: number;
  color: string;
  vx: number;
  vy: number;
  alpha: number;
}

export const ClickSparkle: React.FC = () => {
  const [sparks, setSparks] = useState<Spark[]>([]);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      // Don't play if clicking inside an input or textarea
      const target = e.target as HTMLElement;
      if (target && (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA')) {
        return;
      }

      // Spawn deep obsidian black & warm luxury cream particle burst
      const colors = ['#08080c', '#151520', '#d4c4ad', '#efe8dc', '#fdfbf7'];
      const newSparks: Spark[] = [];
      const count = 12;

      for (let i = 0; i < count; i++) {
        const angle = (Math.PI * 2 * i) / count + (Math.random() - 0.5) * 0.5;
        const speed = 2 + Math.random() * 4;
        newSparks.push({
          id: Date.now() + Math.random() * 1000,
          x: e.clientX,
          y: e.clientY,
          size: 3 + Math.random() * 4,
          color: colors[Math.floor(Math.random() * colors.length)],
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          alpha: 1,
        });
      }

      setSparks((prev) => [...prev, ...newSparks]);
    };

    window.addEventListener('click', handleClick);
    return () => window.removeEventListener('click', handleClick);
  }, []);

  useEffect(() => {
    if (sparks.length === 0) return;

    const interval = setInterval(() => {
      setSparks((prev) =>
        prev
          .map((spark) => ({
            ...spark,
            x: spark.x + spark.vx,
            y: spark.y + spark.vy + 0.5, // slight gravity
            alpha: spark.alpha - 0.04,
            size: Math.max(0, spark.size - 0.1),
          }))
          .filter((spark) => spark.alpha > 0)
      );
    }, 16);

    return () => clearInterval(interval);
  }, [sparks.length]);

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden">
      {sparks.map((spark) => (
        <div
          key={spark.id}
          className="absolute rounded-full pointer-events-none shadow-sm"
          style={{
            left: `${spark.x}px`,
            top: `${spark.y}px`,
            width: `${spark.size}px`,
            height: `${spark.size}px`,
            backgroundColor: spark.color,
            opacity: spark.alpha,
            boxShadow: `0 0 8px ${spark.color}40`,
            transform: 'translate(-50%, -50%)',
          }}
        />
      ))}
    </div>
  );
};
