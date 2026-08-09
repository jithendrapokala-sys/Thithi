import React, { useState } from 'react';
import { Sparkles, CheckCircle2, ArrowRight, BookOpen, Compass, Shield, Zap } from 'lucide-react';
import { METHODOLOGIES } from '../data/methodologyData';
import { SacredGeometryWheelIcon, GoldDefs } from './ZodiacIcons';

interface MethodologiesProps {
  onSelectMethodology?: (id: string) => void;
  onOpenAuditForm: () => void;
}

export const Methodologies: React.FC<MethodologiesProps> = ({ onOpenAuditForm }) => {
  const [activeTab, setActiveTab] = useState<string>(METHODOLOGIES[0].id);

  const currentMethodology = METHODOLOGIES.find(m => m.id === activeTab) || METHODOLOGIES[0];

  return (
    <section id="methodologies" className="py-20 bg-gradient-to-b from-[#FFFDF9] via-[#FAF6EE] to-[#FAF8F3] border-b border-[#E8DCB8] relative">
      <GoldDefs />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FFF2B2] border border-[#D4AF37] text-xs font-bold uppercase tracking-wider text-[#705615]">
            <SacredGeometryWheelIcon className="w-4 h-4" />
            <span>5 Ancient Systems • Modern Corporate Execution</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#221B0A]">
            The 5 Core Astrological Methodologies of <span className="text-[#B8860B]">thithi.in</span>
          </h2>
          
          <p className="text-base text-[#524422] max-w-2xl mx-auto">
            We do not rely on generic horoscopes. We synthesize 5 proven, high-precision astronomical systems to give your enterprise complete strategic clarity.
          </p>
        </div>

        {/* Methodologies Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {METHODOLOGIES.map((m) => (
            <button
              key={m.id}
              onClick={() => setActiveTab(m.id)}
              className={`px-5 py-3 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 ${
                activeTab === m.id
                  ? 'bg-gradient-to-r from-[#8B6508] via-[#B8860B] to-[#D4AF37] text-white shadow-lg shadow-[#D4AF37]/25 scale-105 border border-[#D4AF37]'
                  : 'bg-[#FFFDF9] text-[#4A3E1F] border border-[#E2D1A6] hover:bg-[#FAF0D0] hover:border-[#D4AF37]'
              }`}
            >
              <Sparkles className={`w-3.5 h-3.5 ${activeTab === m.id ? 'text-[#FFF2B2]' : 'text-[#B8860B]'}`} />
              <span>{m.title}</span>
            </button>
          ))}
        </div>

        {/* Active Methodology Detailed Card */}
        <div className="bg-[#FFFDF9] rounded-2xl border-2 border-[#D4AF37]/50 shadow-xl p-6 sm:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Col: Explanation & Impact */}
            <div className="lg:col-span-8 space-y-6">
              
              <div className="space-y-1">
                <span className="text-xs font-bold text-[#8B6508] uppercase tracking-wider bg-[#FFF2B2] px-2.5 py-1 rounded border border-[#E2D1A6]">
                  {currentMethodology.sanskritTerm}
                </span>
                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#221B0A] pt-2">
                  {currentMethodology.title}
                </h3>
                <p className="text-sm font-semibold text-[#735409]">
                  {currentMethodology.subtitle}
                </p>
              </div>

              <p className="text-sm sm:text-base text-[#4A3E1F] leading-relaxed">
                {currentMethodology.description}
              </p>

              {/* Business Impact Bullet List */}
              <div className="space-y-3 pt-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#735409] flex items-center gap-2">
                  <Zap className="w-4 h-4 text-[#B8860B]" />
                  <span>Direct Corporate Impact & Measurable Outcomes:</span>
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {currentMethodology.businessImpact.map((impact, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-[#FAF6EE] border border-[#E2D1A6]">
                      <CheckCircle2 className="w-4 h-4 text-[#B8860B] shrink-0 mt-0.5" />
                      <span className="text-xs font-medium text-[#221B0A] leading-tight">{impact}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Right Col: Key Astrological Tools Box */}
            <div className="lg:col-span-4 bg-gradient-to-b from-[#FAF3DE] to-[#F4EBD9] p-6 rounded-2xl border border-[#D4AF37]/60 space-y-4">
              <h4 className="font-serif font-bold text-base text-[#221B0A] flex items-center gap-2 border-b border-[#E8DCB8] pb-3">
                <BookOpen className="w-4 h-4 text-[#B8860B]" />
                <span>Proprietary Analysis Tools</span>
              </h4>

              <ul className="space-y-2.5">
                {currentMethodology.keyTools.map((tool, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-xs font-semibold text-[#4A3E1F]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#B8860B]" />
                    <span>{tool}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-3 border-t border-[#E8DCB8]">
                <button
                  onClick={onOpenAuditForm}
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-[#8B6508] to-[#B8860B] text-white text-xs font-bold shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2"
                >
                  <span>Apply {currentMethodology.title} to My Business</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#FFF2B2]" />
                </button>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
