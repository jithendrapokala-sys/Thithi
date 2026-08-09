import React from 'react';

interface IconProps {
  className?: string;
  size?: number;
}

export const GoldDefs: React.FC = () => (
  <svg width="0" height="0" className="absolute w-0 h-0 hidden" aria-hidden="true">
    <defs>
      <linearGradient id="gold-grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#F5D061" />
        <stop offset="35%" stopColor="#E5B233" />
        <stop offset="70%" stopColor="#B8860B" />
        <stop offset="100%" stopColor="#8B6508" />
      </linearGradient>
      <linearGradient id="gold-bright" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#FFF2B2" />
        <stop offset="50%" stopColor="#D4AF37" />
        <stop offset="100%" stopColor="#997010" />
      </linearGradient>
    </defs>
  </svg>
);

export const AriesIcon: React.FC<IconProps> = ({ className = "w-6 h-6", size }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="url(#gold-grad)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M12 21V9" />
    <path d="M12 9C12 5.5 9 3 6 3C3.5 3 2 4.5 2 7C2 10 5.5 11 8 11" />
    <path d="M12 9C12 5.5 15 3 18 3C20.5 3 22 4.5 22 7C22 10 18.5 11 16 11" />
  </svg>
);

export const TaurusIcon: React.FC<IconProps> = ({ className = "w-6 h-6", size }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="url(#gold-grad)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M6 3C6 7 8.5 9 12 9C15.5 9 18 7 18 3" />
    <circle cx="12" cy="15" r="6" />
  </svg>
);

export const GeminiIcon: React.FC<IconProps> = ({ className = "w-6 h-6", size }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="url(#gold-grad)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M4 4C10 6 14 6 20 4" />
    <path d="M4 20C10 18 14 18 20 20" />
    <path d="M8 5V19" />
    <path d="M16 5V19" />
  </svg>
);

export const CancerIcon: React.FC<IconProps> = ({ className = "w-6 h-6", size }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="url(#gold-grad)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="6" cy="9" r="3" />
    <circle cx="18" cy="15" r="3" />
    <path d="M9 9C15 9 18 6 18 3" />
    <path d="M15 15C9 15 6 18 6 21" />
  </svg>
);

export const LeoIcon: React.FC<IconProps> = ({ className = "w-6 h-6", size }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="url(#gold-grad)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="6" cy="16" r="3" />
    <path d="M8.5 14.5C10 11 11 8 13.5 8C16 8 17 10 17 12C17 15 14 17 14 19.5" />
    <circle cx="15.5" cy="20.5" r="1" fill="url(#gold-grad)" />
  </svg>
);

export const VirgoIcon: React.FC<IconProps> = ({ className = "w-6 h-6", size }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="url(#gold-grad)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M4 4V15C4 17 5.5 18.5 7.5 18.5C9.5 18.5 11 17 11 15V4" />
    <path d="M11 11V15C11 17 12.5 18.5 14.5 18.5C16.5 18.5 18 17 18 15V4" />
    <path d="M18 11V16C18 19 20 20 22 18" />
  </svg>
);

export const LibraIcon: React.FC<IconProps> = ({ className = "w-6 h-6", size }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="url(#gold-grad)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M4 20H20" />
    <path d="M4 15H20" />
    <path d="M9 15C9 12 10.5 9 12 9C13.5 9 15 12 15 15" />
    <circle cx="12" cy="6" r="2" />
  </svg>
);

export const ScorpioIcon: React.FC<IconProps> = ({ className = "w-6 h-6", size }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="url(#gold-grad)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M4 4V15" />
    <path d="M4 10C4 7.5 5.5 6 7.5 6C9.5 6 11 7.5 11 10V15" />
    <path d="M11 10C11 7.5 12.5 6 14.5 6C16.5 6 18 7.5 18 10V18L21 15" />
    <path d="M21 21L18 18" />
  </svg>
);

export const SagittariusIcon: React.FC<IconProps> = ({ className = "w-6 h-6", size }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="url(#gold-grad)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M5 19L19 5" />
    <path d="M12 5H19V12" />
    <path d="M9 9L15 15" />
  </svg>
);

export const CapricornIcon: React.FC<IconProps> = ({ className = "w-6 h-6", size }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="url(#gold-grad)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M4 4L8 14L12 4" />
    <path d="M12 4V15C12 18.5 15 20 17 20C19 20 20 18.5 20 17C20 15 17 15 17 17" />
  </svg>
);

export const AquariusIcon: React.FC<IconProps> = ({ className = "w-6 h-6", size }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="url(#gold-grad)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M3 9L6 6L9 9L12 6L15 9L18 6L21 9" />
    <path d="M3 17L6 14L9 17L12 14L15 17L18 14L21 17" />
  </svg>
);

export const PiscesIcon: React.FC<IconProps> = ({ className = "w-6 h-6", size }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="url(#gold-grad)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M4 12H20" />
    <path d="M7 4C5 8 5 16 7 20" />
    <path d="M17 4C19 8 19 16 17 20" />
  </svg>
);

export const VastuCompassIcon: React.FC<IconProps> = ({ className = "w-6 h-6", size }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="url(#gold-grad)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="12" cy="12" r="9" />
    <polygon points="12,4 15,12 12,20 9,12" fill="url(#gold-grad)" fillOpacity="0.2" />
    <circle cx="12" cy="12" r="2" fill="url(#gold-grad)" />
    <path d="M12 2V4" />
    <path d="M12 20V22" />
    <path d="M2 12H4" />
    <path d="M20 12H22" />
  </svg>
);

export const SacredGeometryWheelIcon: React.FC<IconProps> = ({ className = "w-6 h-6", size }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="url(#gold-grad)" strokeWidth="1.5" className={className}>
    <circle cx="12" cy="12" r="10" />
    <polygon points="12,2 20.66,17 3.34,17" />
    <polygon points="12,22 3.34,7 20.66,7" />
    <circle cx="12" cy="12" r="4" fill="url(#gold-grad)" fillOpacity="0.15" />
  </svg>
);

export const ZodiacMap: Record<string, React.FC<IconProps>> = {
  Aries: AriesIcon,
  Taurus: TaurusIcon,
  Gemini: GeminiIcon,
  Cancer: CancerIcon,
  Leo: LeoIcon,
  Virgo: VirgoIcon,
  Libra: LibraIcon,
  Scorpio: ScorpioIcon,
  Sagittarius: SagittariusIcon,
  Capricorn: CapricornIcon,
  Aquarius: AquariusIcon,
  Pisces: PiscesIcon,
};

export const getZodiacIcon = (name: string): React.FC<IconProps> => {
  return ZodiacMap[name] || AriesIcon;
};
