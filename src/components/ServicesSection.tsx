import React, { useState } from 'react';
import { 
  Sparkles, 
  CheckCircle2, 
  Compass, 
  Clock, 
  Users, 
  Zap, 
  ShieldCheck, 
  FileSearch, 
  ArrowRight, 
  Phone, 
  ChevronRight, 
  Layers, 
  BadgeCheck,
  Building2,
  Calendar
} from 'lucide-react';
import { SERVICES_DATA } from '../data/servicesData';
import { ServiceItem } from '../types';
import { GoldDefs } from './ZodiacIcons';

interface ServicesSectionProps {
  onSelectService?: (serviceTitle: string) => void;
  onOpenConsultation: () => void;
  onOpenAuditForm: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ 
  onSelectService, 
  onOpenConsultation, 
  onOpenAuditForm 
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedServiceDetail, setSelectedServiceDetail] = useState<ServiceItem | null>(null);

  const categories = [
    { label: 'All Services', value: 'All' },
    { label: 'Cash Flow & Liquidity', value: 'CashFlow' },
    { label: 'Office & Factory Vastu', value: 'Vastu' },
    { label: 'Launch & Deal Muhurat', value: 'Muhurat' },
    { label: 'Executive Synergy', value: 'Executive' },
    { label: 'Corporate Retainer', value: 'Retainer' },
  ];

  const filteredServices = selectedCategory === 'All'
    ? SERVICES_DATA
    : SERVICES_DATA.filter(s => s.category === selectedCategory);

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'FileSearch': return <FileSearch className="w-6 h-6 text-[#B8860B]" />;
      case 'Compass': return <Compass className="w-6 h-6 text-[#B8860B]" />;
      case 'Clock': return <Clock className="w-6 h-6 text-[#B8860B]" />;
      case 'Users': return <Users className="w-6 h-6 text-[#B8860B]" />;
      case 'Zap': return <Zap className="w-6 h-6 text-[#B8860B]" />;
      case 'ShieldCheck': return <ShieldCheck className="w-6 h-6 text-[#B8860B]" />;
      default: return <Sparkles className="w-6 h-6 text-[#B8860B]" />;
    }
  };

  const handleBookService = (serviceTitle: string) => {
    if (onSelectService) {
      onSelectService(serviceTitle);
    }
    const leadFormEl = document.getElementById('lead-capture');
    if (leadFormEl) {
      leadFormEl.scrollIntoView({ behavior: 'smooth' });
    } else {
      onOpenConsultation();
    }
  };

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-[#FFFDF9] via-[#FAF6EE] to-[#F4EBD9] border-b border-[#E8DCB8] relative">
      <GoldDefs />

      {/* Ambient background glows */}
      <div className="absolute top-10 right-10 w-80 h-80 bg-radial from-[#D4AF37]/10 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-radial from-[#F5D061]/15 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Title */}
        <div className="text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FFF2B2] border border-[#D4AF37] text-xs font-bold uppercase tracking-wider text-[#705615]">
            <Layers className="w-3.5 h-3.5 text-[#B8860B]" />
            <span>Structured Corporate Astro-Consulting Scope</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#221B0A]">
            B2B Astro-Business Services & Advisory Solutions
          </h2>

          <p className="text-base text-[#524422] max-w-2xl mx-auto leading-relaxed">
            Tailored astrological diagnostic frameworks, non-demolition spatial energy grids, and high-precision timing models engineered specifically for corporate expansion, cash flow, and executive stability.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setSelectedCategory(cat.value)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-200 border ${
                selectedCategory === cat.value
                  ? 'bg-gradient-to-r from-[#8B6508] to-[#D4AF37] text-white border-[#D4AF37] shadow-md shadow-[#D4AF37]/20 scale-105'
                  : 'bg-[#FFFDF9] hover:bg-[#FAF3DE] text-[#4A3E1F] border border-[#E2D1A6]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className={`bg-[#FFFDF9] rounded-2xl p-6 sm:p-7 border flex flex-col justify-between transition-all duration-300 relative group hover:-translate-y-1 hover:shadow-xl ${
                service.popular
                  ? 'border-2 border-[#D4AF37] shadow-lg shadow-[#D4AF37]/15 bg-gradient-to-b from-[#FFFDF9] via-[#FAF6EE] to-[#FFFDF9]'
                  : 'border-[#E2D1A6] shadow-sm hover:border-[#D4AF37]/80'
              }`}
            >
              {service.popular && (
                <div className="absolute -top-3.5 left-6 bg-gradient-to-r from-[#8B6508] to-[#D4AF37] text-white text-[10px] font-bold uppercase tracking-wider px-3 py-0.5 rounded-full shadow-sm flex items-center gap-1">
                  <Sparkles className="w-3 h-3 text-[#FFF2B2]" /> Most Requested
                </div>
              )}

              <div className="space-y-5">
                {/* Header Icon + Price */}
                <div className="flex items-start justify-between gap-3 pt-1">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#FFF9E6] via-[#FAF0D0] to-[#E2D1A6] p-0.5 shadow-sm border border-[#D4AF37]/40 flex items-center justify-center">
                    <div className="w-full h-full bg-[#FFFDF9] rounded-[10px] flex items-center justify-center">
                      {getServiceIcon(service.iconName)}
                    </div>
                  </div>

                  {service.priceTag && (
                    <span className="px-3 py-1 rounded-full bg-[#FAF3DE] border border-[#E2D1A6] text-xs font-bold text-[#8B6508]">
                      {service.priceTag}
                    </span>
                  )}
                </div>

                {/* Title & Subtitle */}
                <div className="space-y-1">
                  <h3 className="text-xl font-serif font-bold text-[#221B0A] group-hover:text-[#8B6508] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs font-semibold text-[#8B6508]">
                    {service.subtitle}
                  </p>
                </div>

                {/* Description */}
                <p className="text-xs text-[#524422] leading-relaxed">
                  {service.description}
                </p>

                {/* Key Deliverables */}
                <div className="space-y-2 pt-2 border-t border-[#E8DCB8]">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#735409] block">
                    Core Deliverables:
                  </span>
                  <ul className="space-y-1.5 text-xs text-[#3D3219]">
                    {service.keyDeliverables.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#B8860B] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Ideal For & Turnaround */}
                <div className="pt-2 text-[11px] text-[#685526] space-y-1 bg-[#FAF6EE] p-3 rounded-xl border border-[#E8DCB8]">
                  <p><strong>Ideal For:</strong> {service.idealFor}</p>
                  <p className="flex items-center gap-1.5 text-[#8B6508] font-semibold pt-0.5">
                    <Clock className="w-3 h-3 text-[#B8860B]" />
                    <span>Turnaround: {service.turnaroundTime}</span>
                  </p>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-6 border-t border-[#E8DCB8] mt-6 flex items-center gap-2">
                <button
                  onClick={() => handleBookService(service.title)}
                  className="flex-1 py-3 rounded-xl bg-gradient-to-r from-[#8B6508] via-[#B8860B] to-[#D4AF37] text-white font-bold text-xs shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-1.5"
                >
                  <Calendar className="w-3.5 h-3.5 text-[#FFF2B2]" />
                  <span>Request This Service</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#FFF2B2]" />
                </button>

                <button
                  onClick={() => setSelectedServiceDetail(service)}
                  className="p-3 rounded-xl bg-[#FAF3DE] hover:bg-[#F5E8C4] border border-[#E2D1A6] text-[#685526] text-xs font-semibold"
                  title="View Details"
                >
                  Details
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Quick Consultation Call Banner with Updated Phone */}
        <div className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-[#2C220B] via-[#423311] to-[#221B0A] text-[#FFF5D6] border-2 border-[#D4AF37] shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
          <div className="space-y-2 text-center md:text-left relative z-10">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFF2B2]/10 border border-[#D4AF37]/40 text-xs font-semibold text-[#F5D061]">
              <BadgeCheck className="w-4 h-4 text-[#F5D061]" />
              <span>Direct Founder Confidential Hotline</span>
            </div>
            <h3 className="text-2xl font-serif font-bold text-white">
              Need a Custom Astro-Business Strategy Package?
            </h3>
            <p className="text-xs text-[#E5D2A0] max-w-xl">
              Speak directly with our Chief Astro-Strategist to tailor a bespoke engagement for your corporate restructuring, multi-office Vastu grid, or capital raise timing.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 relative z-10 shrink-0 w-full md:w-auto">
            <a
              href="tel:+916303858703"
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-[#FAF3DE] hover:bg-[#FFFDF9] text-[#2C220B] font-bold text-xs shadow-md border border-[#D4AF37] flex items-center justify-center gap-2 transition-all"
            >
              <Phone className="w-4 h-4 text-[#B8860B]" />
              <span>Call +91 63038 58703</span>
            </a>

            <button
              onClick={onOpenConsultation}
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#8B6508] text-white font-bold text-xs shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-[#FFF2B2]" />
              <span>Book 1-on-1 Consultation</span>
            </button>
          </div>
        </div>

      </div>

      {/* Service Detail Modal */}
      {selectedServiceDetail && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-[#FFFDF9] rounded-2xl border-2 border-[#D4AF37] shadow-2xl max-w-2xl w-full p-6 sm:p-8 space-y-6 relative animate-scale-up">
            <button 
              onClick={() => setSelectedServiceDetail(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-[#FAF3DE] text-[#4A3E1F] hover:bg-[#F5E8C4] border border-[#E2D1A6]"
            >
              ✕
            </button>

            <div className="space-y-2 border-b border-[#E8DCB8] pb-4">
              <span className="px-3 py-1 rounded-full bg-[#FFF2B2] text-xs font-bold uppercase tracking-wider text-[#705615]">
                {selectedServiceDetail.category} Service
              </span>
              <h3 className="text-2xl font-serif font-bold text-[#221B0A]">
                {selectedServiceDetail.title}
              </h3>
              <p className="text-xs font-semibold text-[#8B6508]">
                {selectedServiceDetail.subtitle}
              </p>
            </div>

            <p className="text-sm text-[#524422] leading-relaxed">
              {selectedServiceDetail.description}
            </p>

            <div className="space-y-3 p-4 rounded-xl bg-[#FAF6EE] border border-[#E2D1A6]">
              <span className="text-xs font-bold text-[#8B6508] uppercase block">Detailed Deliverables Checklist:</span>
              <ul className="space-y-2 text-xs text-[#3D3219]">
                {selectedServiceDetail.keyDeliverables.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#B8860B] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid grid-cols-2 gap-4 text-xs">
              <div className="p-3 rounded-xl bg-[#FAF3DE] border border-[#E8DCB8]">
                <span className="text-[10px] text-[#735409] uppercase font-bold block">Ideal Target Audience</span>
                <p className="font-semibold text-[#221B0A] mt-1">{selectedServiceDetail.idealFor}</p>
              </div>

              <div className="p-3 rounded-xl bg-[#FAF3DE] border border-[#E8DCB8]">
                <span className="text-[10px] text-[#735409] uppercase font-bold block">Estimated Delivery Time</span>
                <p className="font-semibold text-[#8B6508] mt-1">{selectedServiceDetail.turnaroundTime}</p>
              </div>
            </div>

            <div className="pt-4 border-t border-[#E8DCB8] flex items-center justify-between">
              <span className="text-sm font-bold text-[#8B6508]">
                Investment: {selectedServiceDetail.priceTag}
              </span>

              <button
                onClick={() => {
                  const title = selectedServiceDetail.title;
                  setSelectedServiceDetail(null);
                  handleBookService(title);
                }}
                className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#8B6508] to-[#B8860B] text-white font-bold text-xs shadow-md"
              >
                Proceed to Request
              </button>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};
