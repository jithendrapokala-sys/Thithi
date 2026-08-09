import React from 'react';
import { Award, TrendingUp, CheckCircle2, ArrowRight, Quote } from 'lucide-react';
import { CASE_STUDIES } from '../data/caseStudies';
import { GoldDefs } from './ZodiacIcons';

interface CaseStudiesProps {
  onOpenAuditForm: () => void;
}

export const CaseStudies: React.FC<CaseStudiesProps> = ({ onOpenAuditForm }) => {
  return (
    <section id="case-studies" className="py-20 bg-gradient-to-b from-[#FFFDF9] via-[#FAF6EE] to-[#FAF8F3] border-b border-[#E8DCB8] relative">
      <GoldDefs />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title */}
        <div className="text-center space-y-3 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FFF2B2] border border-[#D4AF37] text-xs font-bold uppercase tracking-wider text-[#705615]">
            <Award className="w-3.5 h-3.5 text-[#B8860B]" />
            <span>Proven Corporate ROI & Client Impact</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#221B0A]">
            B2B Client Transformation Case Studies
          </h2>
          
          <p className="text-base text-[#524422] max-w-2xl mx-auto">
            See how enterprise founders and managing directors achieved measurable revenue turnarounds, liquidity boosts, and employee retention through thithi.in Astro-Business Advisory.
          </p>
        </div>

        {/* Case Studies Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {CASE_STUDIES.map((study) => (
            <div
              key={study.id}
              className="bg-[#FFFDF9] rounded-2xl border-2 border-[#E2D1A6] hover:border-[#D4AF37] p-6 sm:p-8 shadow-md hover:shadow-xl transition-all flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                
                <div className="flex items-center justify-between border-b border-[#E8DCB8] pb-3">
                  <div>
                    <span className="text-[10px] font-bold text-[#8B6508] uppercase tracking-wider">
                      {study.industry}
                    </span>
                    <h3 className="text-lg font-serif font-bold text-[#221B0A]">
                      {study.companyType}
                    </h3>
                  </div>
                  <span className="text-[10px] font-semibold text-[#735409] bg-[#FFF2B2] px-2.5 py-1 rounded-full border border-[#D4AF37]">
                    {study.timeToImpact}
                  </span>
                </div>

                <div className="space-y-2 text-xs">
                  <div className="p-3 rounded-xl bg-[#FFF5F5] border border-red-200 text-red-900">
                    <span className="font-bold text-red-700 block mb-0.5">Initial Challenge:</span>
                    <span>{study.initialChallenge}</span>
                  </div>

                  <div className="p-3 rounded-xl bg-[#FAF6EE] border border-[#D4AF37]/60 text-[#221B0A]">
                    <span className="font-bold text-[#8B6508] block mb-0.5">Astro-Intervention:</span>
                    <span>{study.astroIntervention}</span>
                  </div>
                </div>

                {/* Measurable Results */}
                <div className="pt-2 space-y-2">
                  <h4 className="text-xs font-bold text-[#735409] uppercase tracking-wider">
                    Measurable Impact:
                  </h4>
                  <div className="space-y-2">
                    {study.results.map((res, idx) => (
                      <div key={idx} className="p-2.5 rounded-xl bg-[#FFFDF9] border border-[#E2D1A6] flex items-center justify-between">
                        <span className="text-sm font-bold font-serif text-[#8B6508]">{res.metric}</span>
                        <span className="text-[11px] text-[#524422] font-medium">{res.description}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Testimonial Quote */}
                <div className="pt-2 p-3.5 rounded-xl bg-[#FAF3DE] border border-[#D4AF37] relative space-y-1">
                  <Quote className="w-4 h-4 text-[#B8860B] opacity-40" />
                  <p className="text-xs italic text-[#3D3219] leading-relaxed">
                    "{study.testimonial}"
                  </p>
                  <p className="text-[10px] font-bold text-[#735409] text-right">
                    — {study.authorTitle}
                  </p>
                </div>

              </div>

              <button
                onClick={onOpenAuditForm}
                className="w-full py-2.5 rounded-xl bg-gradient-to-r from-[#8B6508] to-[#B8860B] text-white font-bold text-xs shadow-md transition-all hover:scale-[1.02] flex items-center justify-center gap-1.5"
              >
                <span>Request Similar Audit for Your Enterprise</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#FFF2B2]" />
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
