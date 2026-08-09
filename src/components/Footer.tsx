import React from 'react';
import { Phone, Mail, MapPin, Sparkles, ShieldCheck, ArrowRight } from 'lucide-react';
import { VastuCompassIcon, GoldDefs } from './ZodiacIcons';
import { Logo } from './Logo';

interface FooterProps {
  onOpenAuditForm: () => void;
  onOpenConsultation: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenAuditForm, onOpenConsultation }) => {
  return (
    <footer className="bg-gradient-to-b from-[#221B0A] via-[#2C220B] to-[#1A1407] text-[#FFF5D6] pt-16 pb-12 border-t-4 border-[#D4AF37]">
      <GoldDefs />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Brand Info */}
          <div className="md:col-span-4 space-y-4">
            <Logo variant="footer" />

            <p className="text-xs text-[#E5D2A0] leading-relaxed">
              thithi.in provides proprietary B2B Astro-Business Optimization services synthesizing Vedic Astrology, KP System, BNN, Redbook, and Astro-Vastu for corporate scaling and cash flow optimization.
            </p>

            <div className="pt-2 flex items-center gap-2 text-xs text-[#D4AF37]">
              <ShieldCheck className="w-4 h-4 text-[#FFF2B2]" />
              <span>Registered Business Advisory & Astro-Vastu Firm</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-2 space-y-3">
            <h4 className="font-serif font-bold text-sm text-[#FFF2B2] uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs text-[#E5D2A0]">
              <li><a href="#services" className="hover:text-[#FFF2B2] transition-colors font-medium text-[#F5D061]">B2B Services</a></li>
              <li><a href="#methodologies" className="hover:text-[#FFF2B2] transition-colors">Vedic Business Dasha</a></li>
              <li><a href="#methodologies" className="hover:text-[#FFF2B2] transition-colors">KP Sub-Lord Timing</a></li>
              <li><a href="#methodologies" className="hover:text-[#FFF2B2] transition-colors">BNN Executive Synergy</a></li>
              <li><a href="#vastu-map" className="hover:text-[#FFF2B2] transition-colors">16-Zone Astro-Vastu</a></li>
            </ul>
          </div>

          {/* Focus Areas */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-serif font-bold text-sm text-[#FFF2B2] uppercase tracking-wider">
              Business Outcomes
            </h4>
            <ul className="space-y-2 text-xs text-[#E5D2A0]">
              <li><a href="#pillars" className="hover:text-[#FFF2B2] transition-colors">Cash Flow & Liquidity Boost</a></li>
              <li><a href="#pillars" className="hover:text-[#FFF2B2] transition-colors">Top-Line Scale & Launch Muhurats</a></li>
              <li><a href="#pillars" className="hover:text-[#FFF2B2] transition-colors">Employee Retention & Team Harmony</a></li>
              <li><a href="#vastu-map" className="hover:text-[#FFF2B2] transition-colors">CMD Seating & Office Power Zones</a></li>
              <li><a href="#zodiac" className="hover:text-[#FFF2B2] transition-colors">12-Zodiac Founder Profiles</a></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-serif font-bold text-sm text-[#FFF2B2] uppercase tracking-wider">
              Consultation Desk
            </h4>
            
            <ul className="space-y-2.5 text-xs text-[#E5D2A0]">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <a href="tel:+916303858703" className="hover:text-white transition-colors font-bold text-[#F5D061]">
                  +91 63038 58703 / 91-6303858703
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <a href="mailto:advisory@thithi.in" className="hover:text-white transition-colors">
                  advisory@thithi.in
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                <span>Indiranagar Executive Towers, Bengaluru & Worli Sea Face, Mumbai, India</span>
              </li>
            </ul>

            <button
              onClick={onOpenAuditForm}
              className="w-full py-2.5 mt-2 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#8B6508] text-white font-bold text-xs shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#FFF2B2]" />
              <span>Request Instant Business Audit</span>
            </button>
          </div>

        </div>

        {/* Bottom Disclaimer & Copyright */}
        <div className="pt-8 border-t border-[#423311] text-center text-xs text-[#A89258] space-y-2">
          <p>
            © {new Date().getFullYear()} thithi.in - B2B Business Astro-Consulting & Vedic Optimization. All Rights Reserved.
          </p>
          <p className="text-[10px] opacity-80 max-w-2xl mx-auto">
            Disclaimer: Astronomical alignments and Astro-Vastu recommendations serve as advisory tools for business optimization alongside standard management best practices.
          </p>
        </div>

      </div>
    </footer>
  );
};
