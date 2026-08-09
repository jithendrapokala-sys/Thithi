import React from 'react';

interface LogoProps {
  variant?: 'light' | 'dark' | 'footer' | 'compact';
  showTagline?: boolean;
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ 
  variant = 'light', 
  showTagline = true,
  className = '' 
}) => {
  const isDarkBg = variant === 'dark' || variant === 'footer';

  return (
    <div className={`inline-flex items-center gap-3.5 group cursor-pointer ${className}`}>
      {/* Emblem Icon Container */}
      <div className="relative flex-shrink-0">
        <div className={`w-11 h-11 rounded-xl p-[2px] shadow-md transition-all duration-300 group-hover:scale-105 ${
          isDarkBg
            ? 'bg-gradient-to-br from-[#FFF2B2] via-[#D4AF37] to-[#8B6508] shadow-[#D4AF37]/20'
            : 'bg-gradient-to-br from-[#FFF9E6] via-[#F4E2B0] to-[#D4AF37] shadow-[#D4AF37]/25'
        }`}>
          <div className={`w-full h-full rounded-[10px] flex items-center justify-center relative overflow-hidden ${
            isDarkBg ? 'bg-[#1C1608]' : 'bg-[#FFFDF9]'
          }`}>
            {/* Background subtle radial glow inside icon */}
            <div className="absolute inset-0 bg-radial from-[#D4AF37]/20 to-transparent opacity-60" />

            {/* Custom SVG Emblem: Thithi Sun & Moon Celestial Orbit + Astakon Star */}
            <svg viewBox="0 0 40 40" className="w-7 h-7 relative z-10 transition-transform duration-500 group-hover:rotate-12">
              <defs>
                <linearGradient id="logoGold" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#FFF2B2" />
                  <stop offset="50%" stopColor="#D4AF37" />
                  <stop offset="100%" stopColor="#8B6508" />
                </linearGradient>
                <linearGradient id="logoGlow" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#F5D061" />
                  <stop offset="100%" stopColor="#B8860B" />
                </linearGradient>
              </defs>

              {/* Outer Orbit Ring */}
              <circle cx="20" cy="20" r="17" fill="none" stroke="url(#logoGold)" strokeWidth="1.2" strokeDasharray="3 2.5" opacity="0.8" />

              {/* Interlocking Celestial Crescent (Moon - Thithi) */}
              <path 
                d="M 20 6 A 14 14 0 1 0 34 20 A 11 11 0 1 1 20 6 Z" 
                fill="url(#logoGold)" 
                opacity="0.85" 
              />

              {/* Central Sun Radiance (Surya) */}
              <circle cx="20" cy="20" r="4.5" fill="url(#logoGlow)" />

              {/* 8-Pointed Astakon Directional Rays */}
              <g stroke="url(#logoGold)" strokeWidth="1.2" strokeLinecap="round">
                <line x1="20" y1="9" x2="20" y2="12" />
                <line x1="20" y1="28" x2="20" y2="31" />
                <line x1="9" y1="20" x2="12" y2="20" />
                <line x1="28" y1="20" x2="31" y2="20" />
                <line x1="12.2" y1="12.2" x2="14.3" y2="14.3" />
                <line x1="25.7" y1="25.7" x2="27.8" y2="27.8" />
                <line x1="27.8" y1="12.2" x2="25.7" y2="14.3" />
                <line x1="14.3" y1="25.7" x2="12.2" y2="27.8" />
              </g>

              {/* Center Core Spark */}
              <circle cx="20" cy="20" r="1.5" fill="#FFFFFF" />
            </svg>
          </div>
        </div>
      </div>

      {/* Typography Brand Name & Subtext */}
      <div>
        <div className="flex items-baseline gap-1">
          <span className={`text-2xl font-bold font-serif tracking-tight transition-colors ${
            isDarkBg
              ? 'text-white group-hover:text-[#FFF2B2]'
              : 'text-[#2C220B] group-hover:text-[#8B6508]'
          }`}>
            thithi<span className="font-sans font-light text-[#D4AF37]">.in</span>
          </span>
        </div>

        {showTagline && (
          <p className={`text-[9.5px] font-semibold tracking-wider uppercase ${
            isDarkBg ? 'text-[#D4AF37]/90' : 'text-[#8B6508]'
          }`}>
            Astro-Business Strategy
          </p>
        )}
      </div>
    </div>
  );
};
