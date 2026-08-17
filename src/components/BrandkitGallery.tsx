import React, { useState, useRef } from 'react';
import { BrandAsset } from '../data/brandkitAssets';
import { Download, Eye, X, Check, Copy, Sparkles, Layers, Image as ImageIcon, ExternalLink } from 'lucide-react';

interface BrandkitAssetRendererProps {
  asset: BrandAsset;
  className?: string;
}

export async function downloadExternalImage(imageUrl: string, filename: string) {
  try {
    const response = await fetch(imageUrl, { mode: 'cors' });
    const blob = await response.blob();
    const blobUrl = window.URL.createObjectURL(blob);
    const downloadLink = document.createElement('a');
    downloadLink.href = blobUrl;
    downloadLink.download = filename;
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
    setTimeout(() => window.URL.revokeObjectURL(blobUrl), 1000);
  } catch (_err) {
    // Fallback direct window open or anchor
    const downloadLink = document.createElement('a');
    downloadLink.href = imageUrl;
    downloadLink.download = filename;
    downloadLink.target = '_blank';
    downloadLink.rel = 'noopener noreferrer';
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  }
}

export const BrandkitAssetRenderer: React.FC<BrandkitAssetRendererProps> = ({ asset, className = '' }) => {
  const [imgError, setImgError] = useState(false);

  if (asset.renderType === 'image' && asset.imageUrl && !imgError) {
    return (
      <div className={`relative w-full h-full flex items-center justify-center overflow-hidden rounded-xl ${className}`}>
        <img
          src={asset.imageUrl}
          alt={asset.name}
          className="max-h-full max-w-full w-auto h-auto object-contain rounded-xl filter drop-shadow-md group-hover:scale-102 transition-transform duration-500"
          onError={() => setImgError(true)}
          loading="eager"
        />
      </div>
    );
  }

  const svgType = asset.svgType;
  switch (svgType) {
    case 'monogram-dark':
      return (
        <svg viewBox="0 0 960 540" className={`w-full h-full ${className}`} xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id="specimenBg" cx="0%" cy="100%" r="85%">
              <stop offset="0%" stopColor="#8a705c" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#d9cec1" stopOpacity="0" />
            </radialGradient>
          </defs>
          <rect width="960" height="540" fill="#d0c4b4" rx="28" />
          <rect width="960" height="540" fill="url(#specimenBg)" rx="28" />
          {/* Layered White Prisms on the left */}
          <g transform="translate(0, 0)" opacity="0.9">
            <polygon points="140,0 260,0 480,540 360,540" fill="#f5f0e9" opacity="0.95" />
            <polygon points="60,0 180,0 400,540 280,540" fill="#eae3d7" opacity="0.8" />
            <polygon points="-20,0 100,0 320,540 200,540" fill="#dfd7ca" opacity="0.7" />
            <polygon points="-100,0 20,0 240,540 120,540" fill="#d4cbbe" opacity="0.6" />
          </g>
          {/* Subtle horizontal baseline guide */}
          <line x1="0" y1="410" x2="960" y2="410" stroke="#000000" strokeWidth="1" opacity="0.15" />
          {/* Main Typographic Lockup */}
          <g transform="translate(540, 310)">
            <text x="0" y="50" fontFamily="Playfair Display, Cinzel, serif" fontSize="118" fontWeight="800" fill="#141416" letterSpacing="-0.02em">
              Pr\sma<tspan fontSize="78" dy="-35">(x)</tspan>
            </text>
          </g>
          {/* Subtitle */}
          <text x="542" y="470" fontFamily="Plus Jakarta Sans, sans-serif" fontSize="24" fontWeight="600" fill="#141416" letterSpacing="-0.02em">
            The bridge between
          </text>
          <text x="542" y="500" fontFamily="Plus Jakarta Sans, sans-serif" fontSize="24" fontWeight="600" fill="#141416" letterSpacing="-0.02em">
            robotics and mainstream adoption
          </text>
          {/* Watermark in corner */}
          <text x="910" y="510" textAnchor="end" fontFamily="JetBrains Mono, monospace" fontSize="14" fontWeight="700" fill="#141416" opacity="0.6">
            prismax.ai
          </text>
        </svg>
      );

    case 'monogram-light':
      return (
        <svg viewBox="0 0 400 400" className={`w-full h-full ${className}`} xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="monoLightDark" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#08080c" />
              <stop offset="60%" stopColor="#252538" />
              <stop offset="100%" stopColor="#8a6d3b" />
            </linearGradient>
          </defs>
          <rect width="400" height="400" fill="#f7f3eb" rx="40" />
          <polygon points="200,45 355,200 200,355 45,200" fill="none" stroke="#08080c" strokeWidth="8" opacity="0.25" strokeLinejoin="round" />
          <polygon points="200,75 325,200 200,325 75,200" fill="none" stroke="url(#monoLightDark)" strokeWidth="12" strokeLinejoin="round" />
          <path d="M200,75 L200,325 M75,200 L325,200" stroke="#8a6d3b" strokeWidth="3" strokeDasharray="4 6" opacity="0.5" />
          <path d="M140,140 L260,260 M260,140 L140,260" stroke="#08080c" strokeWidth="18" strokeLinecap="round" />
          <circle cx="200" cy="200" r="14" fill="#f7f3eb" stroke="#08080c" strokeWidth="5" />
          <circle cx="200" cy="200" r="5" fill="#8a6d3b" />
        </svg>
      );

    case 'wordmark-dark':
      return (
        <svg viewBox="0 0 800 200" className={`w-full h-full ${className}`} xmlns="http://www.w3.org/2000/svg">
          <rect width="800" height="200" fill="#08080c" rx="24" />
          {/* Subtle grid lines */}
          <line x1="60" y1="100" x2="140" y2="100" stroke="#d4c4ad" strokeWidth="2" opacity="0.4" />
          <polygon points="100,50 145,100 100,150 55,100" fill="none" stroke="#d4c4ad" strokeWidth="6" />
          <path d="M85,85 L115,115 M115,85 L85,115" stroke="#f7f3eb" strokeWidth="6" strokeLinecap="round" />
          <text x="180" y="122" fontFamily="Syne, Space Grotesk, sans-serif" fontSize="72" fontWeight="900" fill="#f7f3eb" letterSpacing="4">
            PRISMA
          </text>
          <text x="560" y="122" fontFamily="Syne, Space Grotesk, sans-serif" fontSize="82" fontWeight="900" fill="#d4c4ad" letterSpacing="2">
            X
          </text>
          <text x="184" y="152" fontFamily="JetBrains Mono, monospace" fontSize="13" fontWeight="700" fill="#a09eb5" letterSpacing="6">
            PHYSICAL AI • AUTONOMOUS SYSTEMS
          </text>
        </svg>
      );

    case 'wordmark-light':
      return (
        <svg viewBox="0 0 800 200" className={`w-full h-full ${className}`} xmlns="http://www.w3.org/2000/svg">
          <rect width="800" height="200" fill="#f7f3eb" rx="24" />
          <polygon points="100,50 145,100 100,150 55,100" fill="none" stroke="#08080c" strokeWidth="6" />
          <path d="M85,85 L115,115 M115,85 L85,115" stroke="#8a6d3b" strokeWidth="6" strokeLinecap="round" />
          <text x="180" y="122" fontFamily="Syne, Space Grotesk, sans-serif" fontSize="72" fontWeight="900" fill="#08080c" letterSpacing="4">
            PRISMA
          </text>
          <text x="560" y="122" fontFamily="Syne, Space Grotesk, sans-serif" fontSize="82" fontWeight="900" fill="#8a6d3b" letterSpacing="2">
            X
          </text>
          <text x="184" y="152" fontFamily="JetBrains Mono, monospace" fontSize="13" fontWeight="700" fill="#585566" letterSpacing="6">
            PHYSICAL AI • AUTONOMOUS SYSTEMS
          </text>
        </svg>
      );

    case 'emblem-3d-neural':
      return (
        <svg viewBox="0 0 500 500" className={`w-full h-full ${className}`} xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id="prismBgGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#4338ca" stopOpacity="0.4" />
              <stop offset="50%" stopColor="#d4c4ad" stopOpacity="0.15" />
              <stop offset="100%" stopColor="transparent" />
            </radialGradient>
            <linearGradient id="facetA" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#f7f3eb" />
              <stop offset="100%" stopColor="#93c5fd" />
            </linearGradient>
            <linearGradient id="facetB" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#d4c4ad" />
              <stop offset="100%" stopColor="#6366f1" />
            </linearGradient>
            <linearGradient id="facetC" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1e1b4b" />
              <stop offset="100%" stopColor="#08080c" />
            </linearGradient>
          </defs>
          <rect width="500" height="500" fill="#0c0c16" rx="40" />
          <circle cx="250" cy="250" r="210" fill="url(#prismBgGlow)" />
          {/* Geometric 3D Prism Faces */}
          <polygon points="250,70 390,190 250,250" fill="url(#facetA)" opacity="0.9" />
          <polygon points="250,70 110,190 250,250" fill="url(#facetB)" opacity="0.85" />
          <polygon points="110,190 250,250 250,430 110,310" fill="url(#facetC)" stroke="#d4c4ad" strokeWidth="2" />
          <polygon points="390,190 250,250 250,430 390,310" fill="#181828" stroke="#d4c4ad" strokeWidth="2" />
          {/* Refraction Beam overlay */}
          <line x1="70" y1="250" x2="430" y2="250" stroke="#f7f3eb" strokeWidth="3" strokeDasharray="6 8" opacity="0.7" />
          <circle cx="250" cy="250" r="18" fill="#f7f3eb" filter="drop-shadow(0 0 10px #d4c4ad)" />
          <circle cx="250" cy="250" r="6" fill="#08080c" />
        </svg>
      );

    case 'robot-teleop':
      return (
        <svg viewBox="0 0 400 400" className={`w-full h-full ${className}`} xmlns="http://www.w3.org/2000/svg">
          <rect width="400" height="400" fill="#0a0a10" rx="36" />
          <circle cx="200" cy="200" r="130" fill="none" stroke="#d4c4ad" strokeWidth="3" strokeDasharray="8 6" opacity="0.4" />
          <circle cx="200" cy="200" r="90" fill="none" stroke="#f7f3eb" strokeWidth="2" opacity="0.3" />
          {/* Robot Head Geometry */}
          <rect x="140" y="140" width="120" height="110" rx="20" fill="#181826" stroke="#d4c4ad" strokeWidth="6" />
          {/* Visor */}
          <rect x="155" y="165" width="90" height="28" rx="8" fill="#08080c" stroke="#60a5fa" strokeWidth="2" />
          <line x1="165" y1="179" x2="235" y2="179" stroke="#60a5fa" strokeWidth="4" strokeLinecap="round" />
          {/* Antennas */}
          <line x1="170" y1="140" x2="155" y2="105" stroke="#d4c4ad" strokeWidth="5" strokeLinecap="round" />
          <circle cx="155" cy="105" r="7" fill="#d4c4ad" />
          <line x1="230" y1="140" x2="245" y2="105" stroke="#d4c4ad" strokeWidth="5" strokeLinecap="round" />
          <circle cx="245" cy="105" r="7" fill="#d4c4ad" />
          {/* Telemetry Dots */}
          <circle cx="175" cy="220" r="5" fill="#10b981" />
          <circle cx="200" cy="220" r="5" fill="#10b981" />
          <circle cx="225" cy="220" r="5" fill="#10b981" />
        </svg>
      );

    case 'twitter-banner':
      return (
        <svg viewBox="0 0 1500 500" className={`w-full h-full ${className}`} xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id="twGlow" cx="20%" cy="50%" r="60%">
              <stop offset="0%" stopColor="rgba(212,196,173,0.3)" />
              <stop offset="100%" stopColor="transparent" />
            </radialGradient>
          </defs>
          <rect width="1500" height="500" fill="#08080c" />
          <rect width="1500" height="500" fill="url(#twGlow)" />
          {/* Isometric grid lines */}
          <g stroke="#ffffff" strokeWidth="1" opacity="0.08">
            <line x1="0" y1="100" x2="1500" y2="100" />
            <line x1="0" y1="250" x2="1500" y2="250" />
            <line x1="0" y1="400" x2="1500" y2="400" />
            <line x1="300" y1="0" x2="300" y2="500" />
            <line x1="750" y1="0" x2="750" y2="500" />
            <line x1="1200" y1="0" x2="1200" y2="500" />
          </g>
          {/* Large Monogram Mark on Left */}
          <polygon points="250,120 370,250 250,380 130,250" fill="none" stroke="#d4c4ad" strokeWidth="10" />
          <path d="M190,190 L310,310 M310,190 L190,310" stroke="#f7f3eb" strokeWidth="14" strokeLinecap="round" />
          {/* Headline Typography */}
          <text x="460" y="240" fontFamily="Syne, Space Grotesk, sans-serif" fontSize="86" fontWeight="900" fill="#f7f3eb" letterSpacing="4">
            PRISMA<tspan fill="#d4c4ad">X</tspan>
          </text>
          <text x="465" y="300" fontFamily="Plus Jakarta Sans, sans-serif" fontSize="28" fontWeight="600" fill="#a09eb5" letterSpacing="2">
            The Autonomous Physical AI &amp; Robotics Network
          </text>
          {/* Badge */}
          <rect x="465" y="335" width="230" height="42" rx="21" fill="#181828" stroke="#d4c4ad" strokeWidth="2" />
          <text x="580" y="362" textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="14" fontWeight="800" fill="#d4c4ad" letterSpacing="2">
            VERIFIED ECOSYSTEM
          </text>
        </svg>
      );

    case 'discord-banner':
      return (
        <svg viewBox="0 0 960 540" className={`w-full h-full ${className}`} xmlns="http://www.w3.org/2000/svg">
          <rect width="960" height="540" fill="#0c0c18" rx="20" />
          <circle cx="480" cy="270" r="260" fill="rgba(88,101,242,0.15)" />
          <polygon points="480,100 580,210 480,320 380,210" fill="none" stroke="#d4c4ad" strokeWidth="8" />
          <path d="M430,160 L530,260 M530,160 L430,260" stroke="#f7f3eb" strokeWidth="10" strokeLinecap="round" />
          <text x="480" y="390" textAnchor="middle" fontFamily="Syne, sans-serif" fontSize="48" fontWeight="900" fill="#f7f3eb" letterSpacing="3">
            PRISMA<tspan fill="#d4c4ad">X</tspan> COMMUNITY
          </text>
          <text x="480" y="430" textAnchor="middle" fontFamily="Plus Jakarta Sans, sans-serif" fontSize="20" fontWeight="600" fill="#a09eb5" letterSpacing="1">
            Global Contributor &amp; Builder Headquarters
          </text>
        </svg>
      );

    case 'contributor-badge':
      return (
        <svg viewBox="0 0 400 400" className={`w-full h-full ${className}`} xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="badgeGold" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#fef08a" />
              <stop offset="50%" stopColor="#d4c4ad" />
              <stop offset="100%" stopColor="#854d0e" />
            </linearGradient>
          </defs>
          <rect width="400" height="400" fill="#10101a" rx="40" />
          {/* Hexagon Shield */}
          <polygon points="200,40 335,115 335,285 200,360 65,285 65,115" fill="#18182c" stroke="url(#badgeGold)" strokeWidth="10" strokeLinejoin="round" />
          <polygon points="200,65 310,130 310,270 200,335 90,270 90,130" fill="none" stroke="#d4c4ad" strokeWidth="3" opacity="0.4" />
          {/* Center Prism */}
          <polygon points="200,120 260,190 200,260 140,190" fill="none" stroke="#f7f3eb" strokeWidth="6" />
          <path d="M170,160 L230,220 M230,160 L170,220" stroke="url(#badgeGold)" strokeWidth="7" strokeLinecap="round" />
          <text x="200" y="295" textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="13" fontWeight="900" fill="#f7f3eb" letterSpacing="3">
            VERIFIED BUILDER
          </text>
        </svg>
      );

    case 'franklin-mascot':
      return (
        <svg viewBox="0 0 400 400" className={`w-full h-full ${className}`} xmlns="http://www.w3.org/2000/svg">
          <rect width="400" height="400" fill="#141422" rx="40" />
          {/* Arcade glow */}
          <circle cx="200" cy="200" r="140" fill="rgba(244,63,94,0.15)" />
          {/* Franklin CRT head */}
          <rect x="110" y="100" width="180" height="150" rx="24" fill="#08080c" stroke="#f43f5e" strokeWidth="8" />
          {/* CRT Screen */}
          <rect x="130" y="120" width="140" height="110" rx="14" fill="#1e1b4b" stroke="#818cf8" strokeWidth="3" />
          {/* Pixel Eyes */}
          <rect x="155" y="150" width="24" height="24" rx="4" fill="#38bdf8" />
          <rect x="221" y="150" width="24" height="24" rx="4" fill="#38bdf8" />
          {/* Smile line */}
          <path d="M170,195 Q200,215 230,195" stroke="#f43f5e" strokeWidth="5" fill="none" strokeLinecap="round" />
          {/* Bot Neck & Body */}
          <rect x="175" y="250" width="50" height="20" fill="#f43f5e" />
          <rect x="130" y="270" width="140" height="70" rx="16" fill="#18182c" stroke="#d4c4ad" strokeWidth="5" />
          <text x="200" y="315" textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="16" fontWeight="900" fill="#f7f3eb">
            FRANKLIN
          </text>
        </svg>
      );

    case 'depin-glyph':
      return (
        <svg viewBox="0 0 400 400" className={`w-full h-full ${className}`} xmlns="http://www.w3.org/2000/svg">
          <rect width="400" height="400" fill="#090912" rx="40" />
          {/* Network Connected Nodes */}
          <g stroke="#d4c4ad" strokeWidth="3" opacity="0.6">
            <line x1="200" y1="80" x2="90" y2="180" />
            <line x1="200" y1="80" x2="310" y2="180" />
            <line x1="90" y1="180" x2="130" y2="310" />
            <line x1="310" y1="180" x2="270" y2="310" />
            <line x1="130" y1="310" x2="270" y2="310" />
            <line x1="200" y1="200" x2="200" y2="80" />
            <line x1="200" y1="200" x2="90" y2="180" />
            <line x1="200" y1="200" x2="310" y2="180" />
            <line x1="200" y1="200" x2="130" y2="310" />
            <line x1="200" y1="200" x2="270" y2="310" />
          </g>
          {/* Central Hub Node */}
          <circle cx="200" cy="200" r="26" fill="#08080c" stroke="#f7f3eb" strokeWidth="6" />
          <circle cx="200" cy="200" r="10" fill="#d4c4ad" />
          {/* Edge Nodes */}
          <circle cx="200" cy="80" r="14" fill="#08080c" stroke="#d4c4ad" strokeWidth="4" />
          <circle cx="90" cy="180" r="14" fill="#08080c" stroke="#d4c4ad" strokeWidth="4" />
          <circle cx="310" cy="180" r="14" fill="#08080c" stroke="#d4c4ad" strokeWidth="4" />
          <circle cx="130" cy="310" r="14" fill="#08080c" stroke="#d4c4ad" strokeWidth="4" />
          <circle cx="270" cy="310" r="14" fill="#08080c" stroke="#d4c4ad" strokeWidth="4" />
          <text x="200" y="365" textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="13" fontWeight="800" fill="#f7f3eb" letterSpacing="2">
            DePIN PHYSICAL AI CONSENSUS
          </text>
        </svg>
      );

    case 'editorial-type-lockup':
      return (
        <svg viewBox="0 0 800 450" className={`w-full h-full ${className}`} xmlns="http://www.w3.org/2000/svg">
          <rect width="800" height="450" fill="#fbf8f2" rx="28" />
          <rect x="25" y="25" width="750" height="400" fill="none" stroke="#08080c" strokeWidth="2" opacity="0.2" rx="16" />
          <text x="60" y="85" fontFamily="JetBrains Mono, monospace" fontSize="13" fontWeight="800" fill="#8a6d3b" letterSpacing="4">
            SPECIMEN NO. 01 • CATALOGUE BOLD &amp; VERSATILE SANS-SERIF
          </text>
          <text x="60" y="175" fontFamily="Unbounded, Syne, Space Grotesk, sans-serif" fontSize="52" fontWeight="900" fill="#08080c" letterSpacing="3">
            PRISMAX AI
          </text>
          <text x="60" y="235" fontFamily="Unbounded, Space Grotesk, sans-serif" fontSize="24" fontWeight="700" fill="#585566" letterSpacing="1">
            Autonomous Cybernetics &amp; Machine Mind
          </text>
          <line x1="60" y1="275" x2="740" y2="275" stroke="#08080c" strokeWidth="2" opacity="0.15" />
          <text x="60" y="325" fontFamily="Plus Jakarta Sans, sans-serif" fontSize="15" fontWeight="600" fill="#08080c">
            Typography identity: Catalogue BOLD &amp; versatile sans-serif designed for next-gen physical AI robotics.
          </text>
          <text x="60" y="375" fontFamily="JetBrains Mono, monospace" fontSize="13" fontWeight="700" fill="#8a6d3b">
            Aa Bb Cc Dd Ee Ff Gg Hh Ii Jj Kk Ll Mm Nn Oo Pp Qq Rr Ss Tt Uu Vv Ww Xx Yy Zz 0123456789
          </text>
        </svg>
      );

    case 'favicon-applet':
      return (
        <svg viewBox="0 0 400 400" className={`w-full h-full ${className}`} xmlns="http://www.w3.org/2000/svg">
          <rect width="400" height="400" fill="#08080c" rx="90" />
          <polygon points="200,60 330,190 200,320 70,190" fill="none" stroke="#d4c4ad" strokeWidth="20" strokeLinejoin="round" />
          <path d="M140,130 L260,250 M260,130 L140,250" stroke="#f7f3eb" strokeWidth="26" strokeLinecap="round" />
          <circle cx="200" cy="190" r="16" fill="#8a6d3b" />
        </svg>
      );

    default:
      return (
        <svg viewBox="0 0 400 400" className={`w-full h-full ${className}`} xmlns="http://www.w3.org/2000/svg">
          <rect width="400" height="400" fill="#08080c" rx="30" />
          <polygon points="200,70 320,190 200,310 80,190" fill="none" stroke="#d4c4ad" strokeWidth="10" />
          <path d="M140,130 L260,250 M260,130 L140,250" stroke="#f7f3eb" strokeWidth="16" strokeLinecap="round" />
        </svg>
      );
  }
};

// Helper to convert SVG to downloadable PNG in the browser
export function downloadSvgAsPng(svgElement: SVGElement, filename: string, scale = 2) {
  const svgString = new XMLSerializer().serializeToString(svgElement);
  const svgBlob = new Blob([svgString], { type: 'image/svg+xml;charset=utf-8' });
  const blobURL = window.URL.createObjectURL(svgBlob);
  
  const image = new Image();
  image.onload = () => {
    const canvas = document.createElement('canvas');
    const bbox = svgElement.getBoundingClientRect();
    const width = (bbox.width || 600) * scale;
    const height = (bbox.height || 600) * scale;
    canvas.width = width;
    canvas.height = height;
    
    const context = canvas.getContext('2d');
    if (context) {
      context.imageSmoothingEnabled = true;
      context.imageSmoothingQuality = 'high';
      context.drawImage(image, 0, 0, width, height);
      
      const pngUrl = canvas.toDataURL('image/png');
      const downloadLink = document.createElement('a');
      downloadLink.href = pngUrl;
      downloadLink.download = filename;
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
    }
    window.URL.revokeObjectURL(blobURL);
  };
  image.src = blobURL;
}

interface BrandkitGalleryProps {
  assets: BrandAsset[];
}

export const BrandkitGallery: React.FC<BrandkitGalleryProps> = ({ assets }) => {
  const [selectedAsset, setSelectedAsset] = useState<BrandAsset | null>(null);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [downloadingId, setDownloadingId] = useState<string | null>(null);
  const svgRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  const handleDownload = async (asset: BrandAsset) => {
    setDownloadingId(asset.id);
    if (asset.renderType === 'image' && asset.imageUrl) {
      await downloadExternalImage(asset.imageUrl, asset.downloadFilename);
    } else {
      const container = svgRefs.current[asset.id];
      if (container) {
        const svg = container.querySelector('svg');
        if (svg) {
          downloadSvgAsPng(svg, asset.downloadFilename, 3);
        }
      }
    }
    setTimeout(() => {
      setDownloadingId(null);
    }, 1200);
  };

  const handleCopySpec = (asset: BrandAsset) => {
    navigator.clipboard.writeText(`${asset.name} (${asset.dimensions}) - ${asset.description}`);
    setCopiedId(asset.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="mt-8 space-y-6">
      {/* Brandkit Gallery Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-2">
        <div className="flex items-center gap-3 flex-wrap">
          <h3 className="font-catalogue text-base sm:text-lg md:text-xl font-black text-[#08080c] dark:text-[#f7f3eb] uppercase tracking-wider">
            PRISMAX BRANDKIT
          </h3>
          <a
            href="https://www.prismax.ai/brand-kit#typography"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3.5 py-1 sm:py-1.5 rounded-full text-xs font-mono-code font-bold bg-[#08080c] dark:bg-white text-[#f7f3eb] dark:text-[#08080c] hover:opacity-85 transition-opacity shadow-sm"
          >
            <span>Official Guidelines</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>

      {/* 13-Asset Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {assets.map((asset, index) => (
          <div
            key={asset.id}
            className="group relative flex flex-col rounded-3xl bg-[#ffffff]/95 dark:bg-[#131320]/95 backdrop-blur-xl border border-[#08080c]/12 dark:border-white/12 p-4 sm:p-5 overflow-hidden transition-all duration-300 hover:shadow-xl text-left text-[#08080c] dark:text-[#f7f3eb]"
          >
            {/* Asset Preview Frame */}
            <div
              ref={(el) => {
                svgRefs.current[asset.id] = el;
              }}
              className="relative rounded-2xl overflow-hidden mb-3.5 flex items-center justify-center p-0 border-0 shadow-none"
              style={{ backgroundColor: asset.bgColor, minHeight: '190px' }}
            >
              <BrandkitAssetRenderer asset={asset} className="max-h-48 w-full h-full object-contain group-hover:scale-102 transition-transform duration-500" />
            </div>

            {/* Action Buttons: View PNG & Download PNG */}
            <div className="grid grid-cols-2 gap-2.5 mt-auto">
              {/* View PNG Button */}
              <button
                type="button"
                onClick={() => setSelectedAsset(asset)}
                className="inline-flex items-center justify-center gap-2 py-2.5 px-3.5 rounded-xl bg-[#efe8dc] dark:bg-[#161624] hover:bg-[#e2d6c3] dark:hover:bg-[#202032] text-[#08080c] dark:text-[#f7f3eb] text-xs sm:text-sm font-black border border-[#08080c]/15 dark:border-white/15 transition-all active:scale-95 cursor-pointer shadow-xs"
              >
                <Eye className="w-4 h-4 text-[#8a6d3b] dark:text-[#d4c4ad]" />
                <span>View PNG</span>
              </button>

              {/* Download PNG Button */}
              <button
                type="button"
                onClick={() => handleDownload(asset)}
                disabled={downloadingId === asset.id}
                className="inline-flex items-center justify-center gap-2 py-2.5 px-3.5 rounded-xl bg-[#08080c] dark:bg-[#f7f3eb] hover:bg-[#1c1c28] dark:hover:bg-white text-[#f7f3eb] dark:text-[#08080c] text-xs sm:text-sm font-black transition-all active:scale-95 shadow-[0_4px_12px_rgba(8,8,12,0.15)] cursor-pointer"
              >
                {downloadingId === asset.id ? (
                  <Check className="w-4 h-4 text-emerald-400" />
                ) : (
                  <Download className="w-4 h-4 text-[#d4c4ad] dark:text-[#8a6d3b]" />
                )}
                <span>{downloadingId === asset.id ? 'Saved!' : 'Download PNG'}</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal for "View PNG" Inspection */}
      {selectedAsset && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-fadeIn"
          onClick={() => setSelectedAsset(null)}
        >
          <div
            className="relative w-full max-w-2xl bg-[#fbf8f2] dark:bg-[#0c0c16] rounded-3xl p-6 sm:p-8 border border-[#08080c]/20 dark:border-white/20 shadow-2xl space-y-5 text-left max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-end">
              <button
                type="button"
                onClick={() => setSelectedAsset(null)}
                className="p-2 rounded-full bg-[#efe8dc] dark:bg-[#1a1a2a] text-[#08080c] dark:text-[#f7f3eb] hover:bg-[#08080c] dark:hover:bg-white hover:text-white dark:hover:text-[#08080c] transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Asset High-Res Display Frame */}
            <div
              className="rounded-2xl p-4 flex items-center justify-center border-0 shadow-none overflow-hidden"
              style={{ backgroundColor: selectedAsset.bgColor, minHeight: '280px' }}
            >
              <BrandkitAssetRenderer asset={selectedAsset} className="max-h-72 w-full object-contain" />
            </div>

            {/* Details & Specs */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs font-mono-code">
              <div className="p-3 rounded-xl bg-[#efe8dc] dark:bg-[#141420] border border-[#08080c]/10 dark:border-white/10">
                <span className="text-[#88859a] block font-bold text-[10px]">DIMENSIONS</span>
                <span className="text-[#08080c] dark:text-[#f7f3eb] font-black">{selectedAsset.dimensions}</span>
              </div>
              <div className="p-3 rounded-xl bg-[#efe8dc] dark:bg-[#141420] border border-[#08080c]/10 dark:border-white/10">
                <span className="text-[#88859a] block font-bold text-[10px]">ASPECT RATIO</span>
                <span className="text-[#08080c] dark:text-[#f7f3eb] font-black">{selectedAsset.aspectRatio}</span>
              </div>
              <div className="p-3 rounded-xl bg-[#efe8dc] dark:bg-[#141420] border border-[#08080c]/10 dark:border-white/10 col-span-2 sm:col-span-1">
                <span className="text-[#88859a] block font-bold text-[10px]">FORMAT</span>
                <span className="text-[#08080c] dark:text-[#f7f3eb] font-black">PNG (lossless raster)</span>
              </div>
            </div>

            {/* Modal Actions */}
            <div className="flex items-center justify-end gap-3 pt-4 border-t border-[#08080c]/15 dark:border-white/10">
              <button
                type="button"
                onClick={() => setSelectedAsset(null)}
                className="py-2.5 px-4 rounded-xl bg-[#efe8dc] dark:bg-[#1a1a2a] text-[#08080c] dark:text-[#f7f3eb] text-xs font-black cursor-pointer hover:bg-[#e2d6c3] dark:hover:bg-[#252538] transition-colors"
              >
                Close Preview
              </button>

              <button
                type="button"
                onClick={() => {
                  handleDownload(selectedAsset);
                }}
                className="py-2.5 px-5 rounded-xl bg-[#08080c] dark:bg-[#f7f3eb] text-[#f7f3eb] dark:text-[#08080c] text-xs font-black inline-flex items-center gap-2 hover:bg-[#1a1a26] dark:hover:bg-white transition-all shadow-md cursor-pointer"
              >
                <Download className="w-4 h-4 text-[#d4c4ad] dark:text-[#8a6d3b]" />
                <span>Download High-Res PNG</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
