import React from 'react';
import { DollarSign, TrendingUp, Users, Compass, CheckCircle2, ArrowRight, ShieldAlert, Sparkles } from 'lucide-react';
import { BUSINESS_PILLARS } from '../data/businessPillars';
import { GoldDefs } from './ZodiacIcons';

interface BusinessPillarsProps {
  onOpenAuditForm: () => void;
}

export const BusinessPillars: React.FC<BusinessPillarsProps> = ({ onOpenAuditForm }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'CashFlow':
        return <DollarSign className="w-6 h-6 text-[#B8860B]" />;
      case 'Growth':
        return <TrendingUp className="w-6 h-6 text-[#B8860B]" />;
      case 'Retention':
        return <Users className="w-6 h-6 text-[#B8860B]" />;
      case 'Productivity':
        return <Compass className="w-6 h-6 text-[#B8860B]" />;
      default:
        return <Sparkles className="w-6 h-6 text-[#B8860B]" />;
    }
  };

  return (
    <section id="pillars" className="py-20 bg-gradient-to-b from-[#FAF8F3] via-[#FFFDF9] to-[#FAF6EE] relative">
      <GoldDefs />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center space-y-3 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FFF2B2] border border-[#D4AF37] text-xs font-bold uppercase tracking-wider text-[#705615]">
            <Sparkles className="w-3.5 h-3.5 text-[#B8860B]" />
            <span>4 Core B2B Business Outcomes</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#221B0A]">
            Solving High-Stakes Enterprise Challenges
          </h2>
          
          <p className="text-base text-[#524422] max-w-2xl mx-auto">
            Traditional strategy consultants address symptoms. We align the underlying astronomical and energetic causes behind cash flow blockages, employee friction, and revenue plateaus.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {BUSINESS_PILLARS.map((pillar) => (
            <div
              key={pillar.id}
              className="bg-[#FFFDF9] rounded-2xl border-2 border-[#E2D1A6] hover:border-[#D4AF37] p-6 sm:p-8 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                
                {/* Pillar Header */}
                <div className="flex items-start justify-between">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#FFF5D6] to-[#F4E2B0] border border-[#D4AF37] flex items-center justify-center shadow-xs">
                    {getIcon(pillar.iconName)}
                  </div>
                  <span className="text-[11px] font-bold text-[#735409] bg-[#FFF2B2] px-2.5 py-1 rounded-full border border-[#E2D1A6]">
                    {pillar.metrics}
                  </span>
                </div>

                <div>
                  <h3 className="text-xl font-serif font-bold text-[#221B0A] group-hover:text-[#8B6508] transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-xs font-semibold text-[#735409] mt-0.5">
                    {pillar.subtitle}
                  </p>
                </div>

                {/* Problem vs Solution */}
                <div className="space-y-3 pt-2 text-xs">
                  <div className="p-3 rounded-xl bg-[#FFF5F5] border border-red-200 text-red-900">
                    <span className="font-bold flex items-center gap-1.5 text-red-700 mb-1">
                      <ShieldAlert className="w-3.5 h-3.5" /> Core Bottleneck:
                    </span>
                    <p className="text-red-800 leading-relaxed">{pillar.problem}</p>
                  </div>

                  <div className="p-3 rounded-xl bg-[#FAF6EE] border border-[#D4AF37]/60 text-[#221B0A]">
                    <span className="font-bold text-[#8B6508] block mb-1">
                      Astrological & Vastu Remedy:
                    </span>
                    <p className="text-[#4A3E1F] leading-relaxed">{pillar.astrologicalSolution}</p>
                  </div>
                </div>

                {/* Measurable Outcomes */}
                <div className="pt-2">
                  <h4 className="text-xs font-bold text-[#735409] uppercase tracking-wider mb-2">
                    Key Outcomes Achieved:
                  </h4>
                  <ul className="space-y-1.5">
                    {pillar.outcomes.map((outcome, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-[#3D3219]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#B8860B] shrink-0 mt-0.5" />
                        <span>{outcome}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>

              {/* Bottom Action Button */}
              <div className="pt-6 border-t border-[#E8DCB8] mt-6">
                <button
                  onClick={onOpenAuditForm}
                  className="w-full py-2.5 rounded-xl bg-[#FAF3DE] hover:bg-[#F5E8C4] border border-[#D4AF37] text-[#4A3E1F] font-bold text-xs transition-all flex items-center justify-center gap-2 group-hover:bg-gradient-to-r group-hover:from-[#8B6508] group-hover:to-[#B8860B] group-hover:text-white"
                >
                  <span>Audit {pillar.title.split(' ')[0]} for My Company</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#B8860B] group-hover:text-white" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
