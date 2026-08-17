import React, { useState, useEffect } from 'react';
import prismaxLogo from '../assets/images/logo.png1.png';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  size = 'md',
  showText = true,
}) => {
  const [transparentLogoLight, setTransparentLogoLight] = useState<string | null>(null);
  const [transparentLogoDark, setTransparentLogoDark] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(true);

  useEffect(() => {
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.src = prismaxLogo;

    img.onload = () => {
      try {
        const canvas = document.createElement('canvas');
        canvas.width = img.naturalWidth || img.width;
        canvas.height = img.naturalHeight || img.height;
        const ctx = canvas.getContext('2d', { willReadFrequently: true });

        if (!ctx) {
          setIsProcessing(false);
          return;
        }

        ctx.drawImage(img, 0, 0);
        const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const data = imgData.data;

        // Create light mode version (dark letters #08080c on transparent)
        const lightCanvas = document.createElement('canvas');
        lightCanvas.width = canvas.width;
        lightCanvas.height = canvas.height;
        const lightCtx = lightCanvas.getContext('2d');
        const lightImgData = lightCtx?.createImageData(canvas.width, canvas.height);

        // Process pixels: remove black/dark background and create alpha mask
        for (let i = 0; i < data.length; i += 4) {
          const r = data[i];
          const g = data[i + 1];
          const b = data[i + 2];
          // Perceived brightness
          const brightness = 0.299 * r + 0.587 * g + 0.114 * b;

          // Background threshold (dark background)
          if (brightness < 40) {
            // Completely transparent background
            data[i + 3] = 0;
            if (lightImgData) lightImgData.data[i + 3] = 0;
          } else {
            // Smooth alpha feathering for anti-aliasing
            const alpha = Math.min(255, Math.max(0, (brightness - 35) * (255 / 75)));
            data[i + 3] = Math.round(alpha);

            if (lightImgData) {
              // Set dark obsidian text #08080c for light theme
              lightImgData.data[i] = 8;
              lightImgData.data[i + 1] = 8;
              lightImgData.data[i + 2] = 12;
              lightImgData.data[i + 3] = Math.round(alpha);
            }
          }
        }

        ctx.putImageData(imgData, 0, 0);
        setTransparentLogoDark(canvas.toDataURL('image/png'));

        if (lightCtx && lightImgData) {
          lightCtx.putImageData(lightImgData, 0, 0);
          setTransparentLogoLight(lightCanvas.toDataURL('image/png'));
        }

        setIsProcessing(false);
      } catch {
        setIsProcessing(false);
      }
    };

    img.onerror = () => {
      setIsProcessing(false);
    };
  }, []);

  // Sizing configurations - medium balanced proportions
  const config = {
    sm: {
      img: 'h-7 sm:h-8 w-auto max-w-[160px]',
      titleText: 'text-xs sm:text-sm tracking-wider',
      subText: 'text-[10px] sm:text-[11px]',
      gap: 'gap-3',
      borderPl: 'pl-3',
    },
    md: {
      img: 'h-9 sm:h-10 md:h-11 w-auto max-w-[205px]',
      titleText: 'text-base sm:text-lg tracking-wide',
      subText: 'text-xs sm:text-[13px]',
      gap: 'gap-3.5',
      borderPl: 'pl-3.5',
    },
    lg: {
      img: 'h-12 sm:h-14 md:h-16 w-auto max-w-[260px]',
      titleText: 'text-xl sm:text-2xl tracking-wide',
      subText: 'text-sm sm:text-base',
      gap: 'gap-4.5',
      borderPl: 'pl-4.5',
    },
  }[size];

  return (
    <div className={`inline-flex items-center ${config.gap} select-none group cursor-pointer ${className}`}>
      {/* Official PrismaX Logo Asset - 100% Transparent PNG */}
      <div className="relative flex items-center justify-center shrink-0 bg-transparent transition-transform duration-300 group-hover:scale-105">
        {transparentLogoDark ? (
          <>
            {/* Light Mode: Crisp Dark Transparent Logo */}
            <img
              src={transparentLogoLight || transparentLogoDark}
              alt="Prisma(x) Logo"
              className={`${config.img} relative z-10 object-contain dark:hidden transition-all duration-300 filter drop-shadow-[0_1px_1px_rgba(0,0,0,0.05)]`}
            />
            {/* Dark Mode: Crisp Cream/White Transparent Logo */}
            <img
              src={transparentLogoDark}
              alt="Prisma(x) Logo"
              className={`${config.img} relative z-10 object-contain hidden dark:block transition-all duration-300 filter drop-shadow-[0_2px_8px_rgba(0,0,0,0.4)]`}
            />
          </>
        ) : isProcessing ? (
          /* Smooth CSS Blend during canvas processing */
          <img
            src={prismaxLogo}
            alt="Prisma(x) Logo"
            className={`${config.img} object-contain mix-blend-screen invert dark:invert-0`}
          />
        ) : (
          /* Clean Vector Fallback */
          <div className="flex items-baseline font-serif tracking-tight">
            <span className="text-2xl sm:text-3xl font-black text-[#08080c] dark:text-[#f7f3eb]">
              Pr<span className="inline-block transform -skew-x-12 mx-0.5">\</span>sma
            </span>
            <span className="text-base sm:text-lg font-bold text-[#8a6d3b] dark:text-[#d4c4ad] ml-0.5">
              (x)
            </span>
          </div>
        )}
      </div>

      {/* Brand Typography Lockup */}
      {showText && (
        <div className={`flex flex-col text-left border-l border-[#08080c]/20 dark:border-white/20 ${config.borderPl}`}>
          <div className="flex items-baseline">
            <span className="font-heading font-extrabold text-[#08080c] dark:text-[#f7f3eb] text-lg sm:text-xl md:text-2xl leading-tight transition-colors duration-300 group-hover:text-[#8a6d3b] dark:group-hover:text-[#d4c4ad]">
              Community Hub
            </span>
          </div>
          <span className={`font-mono-code font-bold text-[#6a5d4d] dark:text-[#a09eb5] ${config.subText} tracking-wider mt-0.5 group-hover:text-[#08080c] dark:group-hover:text-[#f7f3eb] transition-colors duration-300 flex items-center gap-1.5`}>
            <span>by Mikeonchain</span>
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 dark:bg-emerald-400 inline-block shadow-[0_0_6px_rgba(5,150,105,0.7)]" />
          </span>
        </div>
      )}
    </div>
  );
};



