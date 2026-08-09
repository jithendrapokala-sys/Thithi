import React from 'react';
import { CheckCircle2, Sparkles, ArrowRight, ShieldCheck, Zap } from 'lucide-react';
import { PRICING_PLANS } from '../data/pricingPlans';
import { GoldDefs } from './ZodiacIcons';

interface PricingPackagesProps {
  onOpenAuditForm: () => void;
  onOpenConsultation: () => void;
}

export const PricingPackages: React.FC<PricingPackagesProps> = ({ onOpenAuditForm, onOpenConsultation }) => {
  return (
    <section id="pricing" className="py-20 bg-gradient-to-b from-[#FAF8F3] via-[#FFFDF9] to-[#FAF6EE] border-b border-[#E8DCB8] relative">
      <GoldDefs />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title */}
        <div className="text-center space-y-3 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FFF2B2] border border-[#D4AF37] text-xs font-bold uppercase tracking-wider text-[#705615]">
            <Sparkles className="w-3.5 h-3.5 text-[#B8860B]" />
            <span>Transparent Corporate Engagement Tiers</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#221B0A]">
            Astro-Consulting Engagement Packages
          </h2>
          
          <p className="text-base text-[#524422] max-w-2xl mx-auto">
            Select the advisory plan aligned with your business scale. From single-session founder diagnostics to quarterly boardroom retainer advisory.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {PRICING_PLANS.map((plan) => (
            <div
              key={plan.id}
              className={`bg-[#FFFDF9] rounded-2xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 relative ${
                plan.popular
                  ? 'border-2 border-[#D4AF37] shadow-2xl shadow-[#D4AF37]/20 scale-105 z-10 bg-gradient-to-b from-[#FFFDF9] to-[#FAF4E5]'
                  : 'border border-[#E2D1A6] shadow-md hover:shadow-xl'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#8B6508] to-[#D4AF37] text-white text-[10px] font-bold uppercase tracking-widest px-4 py-1 rounded-full shadow-sm flex items-center gap-1">
                  <Zap className="w-3 h-3 text-[#FFF2B2]" /> Most Requested Corporate Package
                </div>
              )}

              <div className="space-y-6">
                
                <div className="space-y-1">
                  <h3 className="text-xl font-serif font-bold text-[#221B0A]">
                    {plan.name}
                  </h3>
                  <p className="text-xs text-[#685526] font-medium leading-relaxed">
                    {plan.tagline}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#FAF6EE] border border-[#E2D1A6] flex items-baseline gap-2">
                  <span className="text-3xl font-serif font-bold text-[#8B6508]">
                    {plan.price}
                  </span>
                  <span className="text-xs text-[#735409] font-medium">
                    / {plan.period}
                  </span>
                </div>

                <div className="space-y-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#735409]">
                    Package Deliverables:
                  </span>
                  <ul className="space-y-2.5">
                    {plan.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs text-[#3D3219]">
                        <CheckCircle2 className="w-4 h-4 text-[#B8860B] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>

              <div className="pt-8 border-t border-[#E8DCB8] mt-6 space-y-3">
                <p className="text-[11px] text-[#735409] font-medium italic text-center">
                  Best For: {plan.bestFor}
                </p>

                <button
                  onClick={plan.id === 'founder-audit' ? onOpenConsultation : onOpenAuditForm}
                  className={`w-full py-3.5 rounded-xl font-bold text-xs shadow-md transition-all flex items-center justify-center gap-2 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-[#8B6508] via-[#B8860B] to-[#D4AF37] text-white shadow-lg shadow-[#D4AF37]/30 hover:shadow-xl'
                      : 'bg-[#FAF3DE] hover:bg-[#F5E8C4] text-[#4A3E1F] border border-[#D4AF37]'
                  }`}
                >
                  <span>{plan.ctaText}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          ))}
        </div>

        <div className="mt-12 text-center text-xs text-[#685526] flex items-center justify-center gap-2">
          <ShieldCheck className="w-4 h-4 text-[#B8860B]" />
          <span>All packages include strict NDA & non-disclosure corporate confidentiality guarantees.</span>
        </div>

      </div>
    </section>
  );
};
