import React, { useState } from 'react';
import { Calendar, Clock, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';
import { GoldDefs } from './ZodiacIcons';

interface MuhuratFinderProps {
  onOpenAuditForm: () => void;
}

export const MuhuratFinder: React.FC<MuhuratFinderProps> = ({ onOpenAuditForm }) => {
  const [eventType, setEventType] = useState('Contract Signing');
  const [targetMonth, setTargetMonth] = useState('August 2026');

  const muhuratData = [
    {
      date: '14th August 2026',
      timeWindow: '09:15 AM - 11:30 AM IST (Abhijit & Guru Hora)',
      nakshatra: 'Pushya Nakshatra (Sub-Lord Mercury)',
      favorableFor: 'High-Ticket B2B Contract Signing & Agreement Execution',
      rating: '10/10 Excellent (Sub-Lord 2, 11 Active)'
    },
    {
      date: '21st August 2026',
      timeWindow: '02:00 PM - 04:15 PM IST (Shukra & Budh Hora)',
      nakshatra: 'Rohini Nakshatra (Sub-Lord Venus)',
      favorableFor: 'Product Launch, GTM Campaigns & Brand Unveiling',
      rating: '9.5/10 Highly Favorable (Sub-Lord 1, 10 Active)'
    },
    {
      date: '28th August 2026',
      timeWindow: '10:00 AM - 12:45 PM IST (Surya Hora)',
      nakshatra: 'Uttara Phalguni (Sub-Lord Jupiter)',
      favorableFor: 'CMD Seating Placement, Office Opening & Board Meetings',
      rating: '9.8/10 Sovereign Power (Sub-Lord 1, 9, 10 Active)'
    }
  ];

  return (
    <section id="muhurat" className="py-20 bg-gradient-to-b from-[#FAF8F3] via-[#FFFDF9] to-[#FAF6EE] border-b border-[#E8DCB8] relative">
      <GoldDefs />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FFF2B2] border border-[#D4AF37] text-xs font-bold uppercase tracking-wider text-[#705615]">
            <Calendar className="w-3.5 h-3.5 text-[#B8860B]" />
            <span>KP Stellar Timing Engine</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#221B0A]">
            Auspicious Commercial Muhurat Finder
          </h2>
          
          <p className="text-base text-[#524422] max-w-2xl mx-auto">
            Signing a deal during an unfavorable sub-lord period can cause unexpected delays or payment disputes. Use our KP Sub-Lord timing engine to pick winning commercial dates.
          </p>
        </div>

        {/* Filter Controls */}
        <div className="max-w-3xl mx-auto bg-[#FFFDF9] rounded-2xl border-2 border-[#D4AF37]/50 shadow-md p-6 mb-10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="w-full sm:w-1/2">
            <label className="block text-xs font-semibold text-[#4A3E1F] mb-1">Commercial Event Type</label>
            <select
              value={eventType}
              onChange={(e) => setEventType(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl bg-[#FAF8F3] border border-[#E2D1A6] text-xs font-semibold text-[#221B0A] focus:outline-none focus:border-[#B8860B]"
            >
              <option value="Contract Signing">High-Ticket Contract Signing</option>
              <option value="Product Launch">Product Launch & Campaign GTM</option>
              <option value="CMD Desk Setup">CMD / Founder Desk Setup</option>
              <option value="Key Hiring">C-Suite Key Personnel Hiring</option>
              <option value="Office Opening">New Branch / Office Opening</option>
            </select>
          </div>

          <div className="w-full sm:w-1/2">
            <label className="block text-xs font-semibold text-[#4A3E1F] mb-1">Target Horizon</label>
            <select
              value={targetMonth}
              onChange={(e) => setTargetMonth(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl bg-[#FAF8F3] border border-[#E2D1A6] text-xs font-semibold text-[#221B0A] focus:outline-none focus:border-[#B8860B]"
            >
              <option value="August 2026">August 2026</option>
              <option value="September 2026">September 2026</option>
              <option value="October 2026">October 2026</option>
            </select>
          </div>
        </div>

        {/* Muhurat Results List */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {muhuratData.map((m, idx) => (
            <div
              key={idx}
              className="bg-[#FFFDF9] rounded-2xl border-2 border-[#E2D1A6] hover:border-[#D4AF37] p-6 shadow-md hover:shadow-xl transition-all space-y-4 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between border-b border-[#E8DCB8] pb-3">
                  <span className="font-serif font-bold text-lg text-[#8B6508]">
                    {m.date}
                  </span>
                  <span className="text-[10px] font-bold text-[#735409] bg-[#FFF2B2] px-2 py-0.5 rounded border border-[#D4AF37]">
                    {m.rating}
                  </span>
                </div>

                <div className="space-y-2 text-xs">
                  <div className="flex items-center gap-2 text-[#4A3E1F]">
                    <Clock className="w-4 h-4 text-[#B8860B] shrink-0" />
                    <span className="font-medium">{m.timeWindow}</span>
                  </div>

                  <div className="flex items-center gap-2 text-[#4A3E1F]">
                    <Sparkles className="w-4 h-4 text-[#B8860B] shrink-0" />
                    <span className="font-medium">{m.nakshatra}</span>
                  </div>

                  <div className="p-3 rounded-xl bg-[#FAF6EE] border border-[#E2D1A6] text-[#221B0A]">
                    <span className="font-bold text-[#735409] block mb-0.5">Best For:</span>
                    <span>{m.favorableFor}</span>
                  </div>
                </div>
              </div>

              <button
                onClick={onOpenAuditForm}
                className="w-full py-2.5 rounded-xl bg-[#FAF3DE] hover:bg-[#F5E8C4] border border-[#D4AF37] text-[#4A3E1F] font-bold text-xs transition-all flex items-center justify-center gap-1.5"
              >
                <span>Request Custom Kundali Muhurat</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#B8860B]" />
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
