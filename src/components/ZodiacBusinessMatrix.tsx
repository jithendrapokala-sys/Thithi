import React, { useState } from 'react';
import { Sparkles, Calendar, Compass, DollarSign, Users, Award } from 'lucide-react';
import { ZODIAC_DATA } from '../data/zodiacData';
import { getZodiacIcon, GoldDefs } from './ZodiacIcons';

interface ZodiacBusinessMatrixProps {
  onSelectZodiac?: (zodiacName: string) => void;
  onOpenAuditForm: () => void;
}

export const ZodiacBusinessMatrix: React.FC<ZodiacBusinessMatrixProps> = ({ onOpenAuditForm }) => {
  const [selectedZodiac, setSelectedZodiac] = useState<string>('Leo');

  const currentZodiac = ZODIAC_DATA.find(z => z.name === selectedZodiac) || ZODIAC_DATA[0];
  const IconComponent = getZodiacIcon(currentZodiac.name);

  return (
    <section id="zodiac" className="py-20 bg-gradient-to-b from-[#FAF8F3] via-[#FFFDF9] to-[#FAF6EE] border-b border-[#E8DCB8] relative">
      <GoldDefs />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FFF2B2] border border-[#D4AF37] text-xs font-bold uppercase tracking-wider text-[#705615]">
            <Sparkles className="w-3.5 h-3.5 text-[#B8860B]" />
            <span>12-Zodiac Executive Profile & Strategy Grid</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#221B0A]">
            Founder Zodiac Business Profiles
          </h2>
          
          <p className="text-base text-[#524422] max-w-2xl mx-auto">
            Every founder operates under specific planetary element dynamics. Select your Zodiac sign below to unlock tailored cash flow outlooks, team management styles, and optimal office Vastu directions.
          </p>
        </div>

        {/* 12 Zodiac Grid Selectors */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3 mb-10">
          {ZODIAC_DATA.map((z) => {
            const ZIcon = getZodiacIcon(z.name);
            const isSelected = selectedZodiac === z.name;

            return (
              <button
                key={z.id}
                onClick={() => setSelectedZodiac(z.name)}
                className={`p-3.5 rounded-xl border text-center transition-all duration-300 flex flex-col items-center justify-center gap-1.5 ${
                  isSelected
                    ? 'bg-gradient-to-r from-[#8B6508] via-[#B8860B] to-[#D4AF37] text-white border-[#D4AF37] shadow-lg shadow-[#D4AF37]/30 scale-105 font-bold'
                    : 'bg-[#FFFDF9] text-[#4A3E1F] border-[#E2D1A6] hover:bg-[#FAF0D0] hover:border-[#D4AF37]'
                }`}
              >
                <div className={`p-1.5 rounded-lg ${isSelected ? 'bg-white/20' : 'bg-[#FAF3DE]'}`}>
                  <ZIcon className={`w-5 h-5 ${isSelected ? 'text-white' : 'text-[#B8860B]'}`} />
                </div>
                <span className="text-xs font-serif font-bold">{z.name}</span>
                <span className="text-[9px] opacity-80">{z.sanskritName.split(' ')[0]}</span>
              </button>
            );
          })}
        </div>

        {/* Detailed Selected Zodiac Card */}
        <div className="bg-[#FFFDF9] rounded-2xl border-2 border-[#D4AF37]/60 shadow-xl p-6 sm:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left: Icon & Badge */}
            <div className="lg:col-span-4 bg-gradient-to-b from-[#FFF5D6] via-[#FAF0D0] to-[#F4EBD9] p-6 rounded-2xl border border-[#D4AF37]/60 text-center space-y-4">
              <div className="w-20 h-20 mx-auto rounded-2xl bg-[#FFFDF9] border-2 border-[#D4AF37] flex items-center justify-center shadow-md">
                <IconComponent className="w-12 h-12" />
              </div>

              <div>
                <h3 className="text-2xl font-serif font-bold text-[#221B0A]">
                  {currentZodiac.name}
                </h3>
                <p className="text-xs font-semibold text-[#8B6508]">
                  {currentZodiac.sanskritName} • {currentZodiac.element} Element
                </p>
              </div>

              <div className="pt-2 border-t border-[#E8DCB8] space-y-2 text-xs text-[#524422]">
                <div>
                  <span className="font-bold text-[#735409]">Ruling Planet:</span> {currentZodiac.rulingPlanet}
                </div>
                <div>
                  <span className="font-bold text-[#735409]">Auspicious Days:</span> {currentZodiac.luckyBusinessDays.join(', ')}
                </div>
                <div>
                  <span className="font-bold text-[#735409]">Power Colors:</span> {currentZodiac.auspiciousColors.join(', ')}
                </div>
              </div>

              <button
                onClick={onOpenAuditForm}
                className="w-full py-2.5 rounded-xl bg-gradient-to-r from-[#8B6508] to-[#B8860B] text-white font-bold text-xs shadow-md transition-all hover:scale-[1.02]"
              >
                Get {currentZodiac.name} Founder Audit
              </button>
            </div>

            {/* Right: Detailed B2B Strategy Cards */}
            <div className="lg:col-span-8 space-y-4">
              
              <div className="p-4 rounded-xl bg-[#FAF6EE] border border-[#E2D1A6] space-y-1">
                <div className="flex items-center gap-2 font-bold text-[#8B6508] text-xs uppercase tracking-wider">
                  <Award className="w-4 h-4 text-[#B8860B]" />
                  <span>Core Business Trait & Executive Strength</span>
                </div>
                <p className="text-sm font-medium text-[#221B0A] leading-relaxed">
                  {currentZodiac.businessTrait}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                
                <div className="p-4 rounded-xl bg-[#FAF6EE] border border-[#E2D1A6] space-y-1">
                  <div className="flex items-center gap-2 font-bold text-[#8B6508] uppercase tracking-wider">
                    <DollarSign className="w-4 h-4 text-[#B8860B]" />
                    <span>Cash Flow Outlook</span>
                  </div>
                  <p className="text-[#3D3219] leading-relaxed">
                    {currentZodiac.cashFlowOutlook}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#FAF6EE] border border-[#E2D1A6] space-y-1">
                  <div className="flex items-center gap-2 font-bold text-[#8B6508] uppercase tracking-wider">
                    <Users className="w-4 h-4 text-[#B8860B]" />
                    <span>Team Management Style</span>
                  </div>
                  <p className="text-[#3D3219] leading-relaxed">
                    {currentZodiac.teamManagementStyle}
                  </p>
                </div>

              </div>

              <div className="p-4 rounded-xl bg-[#FAF3DE] border border-[#D4AF37] space-y-1">
                <div className="flex items-center gap-2 font-bold text-[#735409] text-xs uppercase tracking-wider">
                  <Compass className="w-4 h-4 text-[#B8860B]" />
                  <span>Ideal Office Direction & Seating Vastu</span>
                </div>
                <p className="text-sm font-semibold text-[#221B0A]">
                  {currentZodiac.idealOfficeDirection}
                </p>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
