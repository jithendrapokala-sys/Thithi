import React, { useState, useEffect } from 'react';
import { Phone, Sparkles, Menu, X, Compass, Calendar, ChevronRight } from 'lucide-react';
import { GoldDefs, VastuCompassIcon } from './ZodiacIcons';
import { Logo } from './Logo';

interface NavbarProps {
  onOpenAuditForm: () => void;
  onOpenConsultation: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenAuditForm, onOpenConsultation }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Methodologies', href: '#methodologies' },
    { name: 'Business Pillars', href: '#pillars' },
    { name: 'AI Business Audit', href: '#ai-audit' },
    { name: 'Zodiac Matrix', href: '#zodiac' },
    { name: 'Office Vastu', href: '#vastu-map' },
    { name: 'Case Studies', href: '#case-studies' },
    { name: 'Packages', href: '#pricing' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-[#FAF8F3]/95 backdrop-blur-md shadow-md shadow-[#D4AF37]/10 border-b border-[#E8DCB8]' 
        : 'bg-[#FAF8F3]/80 backdrop-blur-sm border-b border-[#E8DCB8]/60'
    }`}>
      <GoldDefs />
      
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-[#8B6508] via-[#D4AF37] to-[#8B6508] text-white py-1 px-4 text-xs text-center font-medium tracking-wide flex items-center justify-center gap-2 shadow-inner">
        <Sparkles className="w-3.5 h-3.5 animate-pulse text-[#FFF2B2]" />
        <span>Vedic • KP System • BNN • Redbook • Astro-Vastu for Corporate Scaling</span>
        <span className="hidden sm:inline-block text-[#FFF2B2] font-semibold">| Confidential B2B Advisory</span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <a href="#" className="flex items-center gap-3">
            <Logo variant="light" />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center gap-5">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs font-semibold text-[#4A3E1F] hover:text-[#B8860B] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#D4AF37] hover:after:w-full after:transition-all after:duration-300"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action CTA Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="tel:+916303858703"
              className="flex items-center gap-1.5 text-xs font-bold text-[#68531A] hover:text-[#8B6508] bg-[#FAF3DE] hover:bg-[#F5E8C4] border border-[#E2D1A6] px-3.5 py-2 rounded-xl transition-all shadow-sm"
            >
              <Phone className="w-3.5 h-3.5 text-[#B8860B]" />
              <span>+91 63038 58703</span>
            </a>

            <button
              onClick={onOpenAuditForm}
              className="relative group overflow-hidden rounded-xl p-[1px] font-semibold text-xs transition-all shadow-md shadow-[#D4AF37]/20 hover:shadow-lg hover:shadow-[#D4AF37]/30"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-[#F5D061] via-[#D4AF37] to-[#8B6508] rounded-xl transition-all group-hover:opacity-90"></span>
              <span className="relative flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-[#2C220B] to-[#423311] rounded-[11px] text-[#FFF5D6] group-hover:bg-opacity-95 transition-all">
                <Sparkles className="w-4 h-4 text-[#F5D061]" />
                <span>Instant AI Business Audit</span>
              </span>
            </button>
          </div>


          {/* Mobile Menu Toggle */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={onOpenAuditForm}
              className="sm:hidden px-3 py-1.5 bg-gradient-to-r from-[#D4AF37] to-[#8B6508] text-white text-xs font-semibold rounded-lg shadow-sm"
            >
              Audit
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#4A3E1F] hover:text-[#8B6508] focus:outline-none"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FAF8F3] border-b border-[#E8DCB8] px-4 pt-2 pb-6 space-y-3 shadow-xl">
          <div className="grid grid-cols-2 gap-2 pb-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-medium text-[#4A3E1F] hover:text-[#B8860B] p-2 rounded-lg bg-[#FAF3DE] border border-[#E8DCB8] text-center"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-2 border-t border-[#E8DCB8] space-y-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAuditForm();
              }}
              className="w-full flex items-center justify-center gap-2 py-3 bg-gradient-to-r from-[#D4AF37] to-[#8B6508] text-white rounded-xl font-medium text-sm shadow-md"
            >
              <Sparkles className="w-4 h-4 text-[#FFF2B2]" />
              <span>Get Instant AI Business Audit</span>
            </button>
            
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenConsultation();
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 bg-[#FAF3DE] text-[#4A3E1F] border border-[#D4AF37] rounded-xl font-medium text-sm"
            >
              <Calendar className="w-4 h-4 text-[#B8860B]" />
              <span>Book Founder 1-on-1 Session</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
