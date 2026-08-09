import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Sparkles } from 'lucide-react';
import { GoldDefs } from './ZodiacIcons';

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: 'How does Business Astrology differ from personal horoscopes?',
      a: 'Business astrology focuses specifically on financial houses (2nd, 6th, 10th, 11th), corporate chart incorporation times, and sub-lord timing for commercial contracts, cash flow, employee retention, and market expansion. It treats the company as a living entity.'
    },
    {
      q: 'Does Astro-Vastu require breaking walls or structural demolition?',
      a: 'No! At thithi.in, we specialize in 100% non-demolition Astro-Vastu. We neutralize energy imbalances using elemental metal strips (copper, brass, aluminum), directional pyramids, color spectrum shifts, and strategic furniture/desk relocation.'
    },
    {
      q: 'What information do you need to perform a corporate audit?',
      a: 'We require the Founder/CEO’s Date, Time, and Place of Birth, the Company Incorporation Date (if available), current Office floorplan layout with direction facing, and a list of key executive names for BNN compatibility screening.'
    },
    {
      q: 'How fast do Redbook (Lal Kitab) remedies show results for delayed payments?',
      a: 'Redbook remedies are fast-acting, practical remedies. Clients typically notice significant movement in stuck receivables, vendor disputes, or cash flow stalls within 21 to 45 days of implementing the prescribed elemental upay.'
    },
    {
      q: 'Is our corporate data kept confidential?',
      a: 'Absolutely. We sign a formal Non-Disclosure Agreement (NDA) with all B2B enterprise clients. Your business numbers, birth details, and internal challenges remain strictly confidential.'
    },
    {
      q: 'Can Astro-Vastu help with employee turnover and team friction?',
      a: 'Yes. High attrition often stems from an afflicted North-West (Vayu/HR Zone) or seating department heads in elementally conflicting directions (e.g. placing Sales in Water zone or Finance in Fire zone). Re-organizing seating resolves internal toxicity rapidly.'
    }
  ];

  return (
    <section id="faq" className="py-20 bg-gradient-to-b from-[#FFFDF9] via-[#FAF6EE] to-[#FAF8F3] border-b border-[#E8DCB8] relative">
      <GoldDefs />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title */}
        <div className="text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FFF2B2] border border-[#D4AF37] text-xs font-bold uppercase tracking-wider text-[#705615]">
            <HelpCircle className="w-3.5 h-3.5 text-[#B8860B]" />
            <span>Frequently Asked Questions</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#221B0A]">
            Answers for Business Leaders
          </h2>
          
          <p className="text-base text-[#524422] max-w-xl mx-auto">
            Everything you need to know about our data-driven astronomical and Astro-Vastu consulting methodology.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="bg-[#FFFDF9] rounded-2xl border border-[#E2D1A6] hover:border-[#D4AF37] shadow-sm overflow-hidden transition-all"
            >
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full p-5 text-left flex items-center justify-between gap-4 focus:outline-none"
              >
                <span className="font-serif font-bold text-base text-[#221B0A]">
                  {faq.q}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-[#B8860B] transition-transform duration-300 ${
                    openIndex === idx ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {openIndex === idx && (
                <div className="px-5 pb-5 pt-0 text-sm text-[#4A3E1F] leading-relaxed border-t border-[#E8DCB8]/60 mt-1">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
