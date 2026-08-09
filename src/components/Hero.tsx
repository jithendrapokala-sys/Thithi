import React, { useState } from 'react';
import { Sparkles, Calendar, ArrowRight, ShieldCheck, TrendingUp, Users, DollarSign, Compass, ChevronRight, Award, Phone } from 'lucide-react';
import { SacredGeometryWheelIcon, VastuCompassIcon, GoldDefs } from './ZodiacIcons';

interface HeroProps {
  onOpenAuditForm: () => void;
  onOpenConsultation: () => void;
}


export const Hero: React.FC<HeroProps> = ({ onOpenAuditForm, onOpenConsultation }) => {
  const [activeHouse, setActiveHouse] = useState<number>(2);

  const housesInfo = [
    { house: 1, title: '1st House (Lagna)', focus: 'Founder Energy & CEO Authority', desc: 'Governs founder vision, health, leadership power, and executive decision-making speed.' },
    { house: 2, title: '2nd House (Dhana Bhava)', focus: 'Cash Flow & Liquid Assets', desc: 'Directly controls immediate liquid bank balances, treasury reserves, and receivables velocity.' },
    { house: 3, title: '3rd House (Vikrama)', focus: 'Sales Outbound & Marketing Drive', desc: 'Governs GTM aggressive marketing campaigns, contract negotiations, and short travels.' },
    { house: 4, title: '4th House (Sukha Bhava)', focus: 'Office Vastu & Physical Infrastructure', desc: 'Governs physical office property, factory real estate, plant machinery, and workplace peace.' },
    { house: 6, title: '6th House (Rina & Shatru)', focus: 'Debt Management & Competitor Dominance', desc: 'Controls working capital loans, legal disputes, tax compliance, and vendor settlement.' },
    { house: 10, title: '10th House (Karma Bhava)', focus: 'Market Authority & Brand Reputation', desc: 'Determines executive reputation, government tenders, industry awards, and board status.' },
    { house: 11, title: '11th House (Labha Bhava)', focus: 'Top-Line Profit & Venture Capital', desc: 'Directly governs net profit margins, massive revenue windfalls, investor equity & returns.' },
    { house: 12, title: '12th House (Vyaya)', focus: 'Overseas Expansion & Export Royalties', desc: 'Governs cross-border trade, international licensing, cloud infrastructure cost optimization.' }
  ];

  const currentHouseData = housesInfo.find(h => h.house === activeHouse) || housesInfo[1];

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-to-b from-[#FFFDF9] via-[#FAF6EE] to-[#F4EBD9] border-b border-[#E8DCB8]">
      <GoldDefs />

      {/* Decorative Golden Ambient Lights & Radial Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-radial from-[#F5D061]/20 via-[#D4AF37]/5 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -top-10 -right-20 w-96 h-96 bg-radial from-[#E5B233]/15 to-transparent rounded-full blur-2xl pointer-events-none" />
      <div className="absolute bottom-0 -left-20 w-80 h-80 bg-radial from-[#D4AF37]/10 to-transparent rounded-full blur-2xl pointer-events-none" />

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#D4AF3712_1px,transparent_1px),linear-gradient(to_bottom,#D4AF3712_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Hero Copy & Value Proposition */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Tagline Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-[#FFF5D6] via-[#FAF0D0] to-[#FFF5D6] border border-[#D4AF37]/40 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#B8860B] animate-ping" />
              <span className="text-xs font-semibold uppercase tracking-wider text-[#705615]">
                Vedic • KP • BNN • Redbook • Astro-Vastu
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold font-serif text-[#221B0A] leading-[1.18] tracking-tight">
              Align Business Strategy with Cosmic Cycles.
              <span className="block mt-2 bg-gradient-to-r from-[#8B6508] via-[#B8860B] to-[#DAA520] bg-clip-text text-transparent font-serif">
                Optimize Cash Flow, Scale & Productivity.
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-base md:text-lg text-[#524422] max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              thithi.in provides an elite Astro-Consulting platform for business owners, CEOs, and investors. Combine precise astronomical planetary timing with non-demolition office Vastu to unlock blocked capital, enhance executive retention, and drive top-line growth.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                onClick={onOpenAuditForm}
                className="w-full sm:w-auto px-7 py-4 rounded-xl bg-gradient-to-r from-[#8B6508] via-[#B8860B] to-[#D4AF37] text-white font-semibold text-sm shadow-xl shadow-[#D4AF37]/25 hover:shadow-2xl hover:shadow-[#D4AF37]/40 hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2 group"
              >
                <Sparkles className="w-4 h-4 text-[#FFF2B2] animate-bounce" />
                <span>Get Instant AI Business Audit</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-[#FFF2B2]" />
              </button>

              <button
                onClick={onOpenConsultation}
                className="w-full sm:w-auto px-6 py-4 rounded-xl bg-[#FFFDF9] hover:bg-[#FAF3DE] text-[#4A3E1F] border border-[#D4AF37]/60 font-semibold text-sm shadow-sm transition-all flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4 text-[#B8860B]" />
                <span>Book Founder 1-on-1 Consultation</span>
              </button>
            </div>

            {/* Micro Trust Indicators */}
            <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-y-2 gap-x-6 text-xs text-[#685526] font-medium border-t border-[#E8DCB8]/60">
              <a href="tel:+916303858703" className="flex items-center gap-1.5 font-bold text-[#8B6508] hover:underline">
                <Phone className="w-4 h-4 text-[#B8860B]" />
                <span>Hotline: +91 63038 58703</span>
              </a>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#B8860B]" />
                <span>100% Confidential B2B Advisory</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Award className="w-4 h-4 text-[#B8860B]" />
                <span>Non-Demolition Vastu</span>
              </div>
            </div>

            {/* Key Business Stats Strip */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
              <div className="bg-[#FFFDF9]/90 border border-[#E2D1A6] rounded-xl p-3 text-center shadow-xs">
                <p className="text-xl sm:text-2xl font-bold font-serif text-[#735409]">350+</p>
                <p className="text-[11px] text-[#635123] font-medium">Corporate Audits</p>
              </div>
              <div className="bg-[#FFFDF9]/90 border border-[#E2D1A6] rounded-xl p-3 text-center shadow-xs">
                <p className="text-xl sm:text-2xl font-bold font-serif text-[#735409]">98.4%</p>
                <p className="text-[11px] text-[#635123] font-medium">Retention Boost</p>
              </div>
              <div className="bg-[#FFFDF9]/90 border border-[#E2D1A6] rounded-xl p-3 text-center shadow-xs">
                <p className="text-xl sm:text-2xl font-bold font-serif text-[#735409]">3.4x</p>
                <p className="text-[11px] text-[#635123] font-medium">Cash Flow Velocity</p>
              </div>
              <div className="bg-[#FFFDF9]/90 border border-[#E2D1A6] rounded-xl p-3 text-center shadow-xs">
                <p className="text-xl sm:text-2xl font-bold font-serif text-[#735409]">₹120Cr+</p>
                <p className="text-[11px] text-[#635123] font-medium">Capital Unblocked</p>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive 12-House Corporate Horoscope Wheel Widget */}
          <div className="lg:col-span-5">
            <div className="relative bg-gradient-to-b from-[#FFFDF9] to-[#FAF4E5] rounded-2xl p-6 border-2 border-[#D4AF37]/50 shadow-2xl shadow-[#D4AF37]/15">
              
              {/* Header inside Widget */}
              <div className="flex items-center justify-between pb-4 border-b border-[#E8DCB8]">
                <div className="flex items-center gap-2">
                  <VastuCompassIcon className="w-5 h-5" />
                  <h3 className="font-serif font-bold text-base text-[#221B0A]">
                    12-House Corporate Horoscope Grid
                  </h3>
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider bg-[#FFF2B2] text-[#735409] px-2 py-0.5 rounded border border-[#D4AF37]">
                  Interactive
                </span>
              </div>

              {/* Wheel / House selector grid */}
              <div className="py-4">
                <p className="text-xs text-[#5E4D25] mb-3 text-center">
                  Click a house to explore how planetary houses directly govern core business functions:
                </p>

                <div className="grid grid-cols-4 gap-2">
                  {housesInfo.map((h) => (
                    <button
                      key={h.house}
                      onClick={() => setActiveHouse(h.house)}
                      className={`p-2.5 rounded-xl border text-center transition-all ${
                        activeHouse === h.house
                          ? 'bg-gradient-to-r from-[#8B6508] to-[#B8860B] text-white border-[#D4AF37] shadow-md shadow-[#D4AF37]/20 scale-105 font-bold'
                          : 'bg-[#FFFDF9] text-[#4A3E1F] border-[#E2D1A6] hover:bg-[#FAF0D0] hover:border-[#D4AF37]'
                      }`}
                    >
                      <span className="block text-xs font-serif font-bold">H-{h.house}</span>
                      <span className="block text-[9px] truncate opacity-90">{h.title.split(' ')[0]}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Active House Insight Card */}
              <div className="mt-2 p-4 bg-[#FAF3DE] border border-[#D4AF37]/60 rounded-xl space-y-1.5 transition-all">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-[#735409] uppercase tracking-wide">
                    {currentHouseData.title}
                  </span>
                  <span className="text-[10px] text-[#8B6508] font-medium bg-[#FFF9E6] px-2 py-0.5 rounded border border-[#E2D1A6]">
                    Core Pillar
                  </span>
                </div>
                <h4 className="font-bold text-sm text-[#2C220B]">
                  {currentHouseData.focus}
                </h4>
                <p className="text-xs text-[#4A3D1E] leading-relaxed">
                  {currentHouseData.desc}
                </p>
              </div>

              {/* CTA inside Widget */}
              <div className="mt-4 pt-3 border-t border-[#E8DCB8] flex items-center justify-between text-xs">
                <span className="text-[#685526] font-medium">Want your full company chart analyzed?</span>
                <button
                  onClick={onOpenAuditForm}
                  className="text-[#8B6508] font-bold hover:text-[#B8860B] flex items-center gap-1 underline underline-offset-2"
                >
                  Start Audit <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
