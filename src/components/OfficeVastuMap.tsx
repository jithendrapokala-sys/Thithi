import React, { useState } from 'react';
import { VastuCompassIcon, GoldDefs } from './ZodiacIcons';
import { VASTU_ZONES } from '../data/vastuZones';
import { Compass, ShieldAlert, CheckCircle2, Sparkles, Building2 } from 'lucide-react';

interface OfficeVastuMapProps {
  onOpenAuditForm: () => void;
}

export const OfficeVastuMap: React.FC<OfficeVastuMapProps> = ({ onOpenAuditForm }) => {
  const [activeZoneCode, setActiveZoneCode] = useState<string>('NE');

  const currentZone = VASTU_ZONES.find(z => z.code === activeZoneCode) || VASTU_ZONES[1];

  return (
    <section id="vastu-map" className="py-20 bg-gradient-to-b from-[#FFFDF9] via-[#FAF6EE] to-[#FAF8F3] border-b border-[#E8DCB8] relative">
      <GoldDefs />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title */}
        <div className="text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FFF2B2] border border-[#D4AF37] text-xs font-bold uppercase tracking-wider text-[#705615]">
            <VastuCompassIcon className="w-4 h-4" />
            <span>Non-Demolition Astro-Vastu Corporate Blueprint</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#221B0A]">
            16-Zone Office Vastu Directional Guide
          </h2>
          
          <p className="text-base text-[#524422] max-w-2xl mx-auto">
            Click any direction on the office compass floorplan below to see ideal department placements, common Vastu doshas causing cash leakages, and non-demolition remedies.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Compass / Directional Floorplan Selector Box */}
          <div className="lg:col-span-5 bg-[#FFFDF9] rounded-2xl border-2 border-[#D4AF37]/60 shadow-xl p-6 sm:p-8 text-center space-y-6">
            <h3 className="font-serif font-bold text-lg text-[#221B0A] flex items-center justify-center gap-2 border-b border-[#E8DCB8] pb-3">
              <Compass className="w-5 h-5 text-[#B8860B]" />
              <span>Interactive Office Compass Grid</span>
            </h3>

            {/* 8 Direction Grid Layout */}
            <div className="grid grid-cols-3 gap-2.5 max-w-sm mx-auto">
              
              {/* Top Row: NW, N, NE */}
              <button
                onClick={() => setActiveZoneCode('NW')}
                className={`p-3 rounded-xl border text-xs font-bold transition-all ${
                  activeZoneCode === 'NW'
                    ? 'bg-gradient-to-r from-[#8B6508] to-[#B8860B] text-white border-[#D4AF37] shadow-md scale-105'
                    : 'bg-[#FAF6EE] text-[#4A3E1F] border-[#E2D1A6] hover:bg-[#FAF0D0]'
                }`}
              >
                NW (Air)
                <span className="block text-[9px] font-normal opacity-80">HR / Motion</span>
              </button>

              <button
                onClick={() => setActiveZoneCode('N')}
                className={`p-3 rounded-xl border text-xs font-bold transition-all ${
                  activeZoneCode === 'N'
                    ? 'bg-gradient-to-r from-[#8B6508] to-[#B8860B] text-white border-[#D4AF37] shadow-md scale-105'
                    : 'bg-[#FAF6EE] text-[#4A3E1F] border-[#E2D1A6] hover:bg-[#FAF0D0]'
                }`}
              >
                NORTH
                <span className="block text-[9px] font-normal opacity-80">Kuber / Sales</span>
              </button>

              <button
                onClick={() => setActiveZoneCode('NE')}
                className={`p-3 rounded-xl border text-xs font-bold transition-all ${
                  activeZoneCode === 'NE'
                    ? 'bg-gradient-to-r from-[#8B6508] to-[#B8860B] text-white border-[#D4AF37] shadow-md scale-105'
                    : 'bg-[#FAF6EE] text-[#4A3E1F] border-[#E2D1A6] hover:bg-[#FAF0D0]'
                }`}
              >
                NE (Ishan)
                <span className="block text-[9px] font-normal opacity-80">Vision / Strategy</span>
              </button>

              {/* Middle Row: W, Center, E */}
              <button
                onClick={() => setActiveZoneCode('W')}
                className={`p-3 rounded-xl border text-xs font-bold transition-all ${
                  activeZoneCode === 'W'
                    ? 'bg-gradient-to-r from-[#8B6508] to-[#B8860B] text-white border-[#D4AF37] shadow-md scale-105'
                    : 'bg-[#FAF6EE] text-[#4A3E1F] border-[#E2D1A6] hover:bg-[#FAF0D0]'
                }`}
              >
                WEST
                <span className="block text-[9px] font-normal opacity-80">Gains / Ops</span>
              </button>

              <div className="p-3 rounded-xl bg-gradient-to-br from-[#FFF5D6] to-[#F4E2B0] border border-[#D4AF37] text-xs font-bold text-[#735409] flex flex-col items-center justify-center">
                <Building2 className="w-4 h-4 text-[#B8860B]" />
                <span className="text-[10px] uppercase font-serif">Brahmasthan</span>
              </div>

              <button
                onClick={() => setActiveZoneCode('E')}
                className={`p-3 rounded-xl border text-xs font-bold transition-all ${
                  activeZoneCode === 'E'
                    ? 'bg-gradient-to-r from-[#8B6508] to-[#B8860B] text-white border-[#D4AF37] shadow-md scale-105'
                    : 'bg-[#FAF6EE] text-[#4A3E1F] border-[#E2D1A6] hover:bg-[#FAF0D0]'
                }`}
              >
                EAST
                <span className="block text-[9px] font-normal opacity-80">Surya / PR</span>
              </button>

              {/* Bottom Row: SW, S, SE */}
              <button
                onClick={() => setActiveZoneCode('SW')}
                className={`p-3 rounded-xl border text-xs font-bold transition-all ${
                  activeZoneCode === 'SW'
                    ? 'bg-gradient-to-r from-[#8B6508] to-[#B8860B] text-white border-[#D4AF37] shadow-md scale-105'
                    : 'bg-[#FAF6EE] text-[#4A3E1F] border-[#E2D1A6] hover:bg-[#FAF0D0]'
                }`}
              >
                SW (Pitru)
                <span className="block text-[9px] font-normal opacity-80">CMD / Stability</span>
              </button>

              <button
                onClick={() => setActiveZoneCode('S')}
                className={`p-3 rounded-xl border text-xs font-bold transition-all ${
                  activeZoneCode === 'S'
                    ? 'bg-gradient-to-r from-[#8B6508] to-[#B8860B] text-white border-[#D4AF37] shadow-md scale-105'
                    : 'bg-[#FAF6EE] text-[#4A3E1F] border-[#E2D1A6] hover:bg-[#FAF0D0]'
                }`}
              >
                SOUTH
                <span className="block text-[9px] font-normal opacity-80">Mars / Defense</span>
              </button>

              <button
                onClick={() => setActiveZoneCode('SE')}
                className={`p-3 rounded-xl border text-xs font-bold transition-all ${
                  activeZoneCode === 'SE'
                    ? 'bg-gradient-to-r from-[#8B6508] to-[#B8860B] text-white border-[#D4AF37] shadow-md scale-105'
                    : 'bg-[#FAF6EE] text-[#4A3E1F] border-[#E2D1A6] hover:bg-[#FAF0D0]'
                }`}
              >
                SE (Agni)
                <span className="block text-[9px] font-normal opacity-80">Accounts / Liquidity</span>
              </button>

            </div>

            <p className="text-xs text-[#685526] italic">
              Click any direction block above to view specific department rules and non-demolition remedies.
            </p>
          </div>

          {/* Detailed Direction Card */}
          <div className="lg:col-span-7 bg-[#FFFDF9] rounded-2xl border-2 border-[#D4AF37]/60 shadow-xl p-6 sm:p-8 space-y-5">
            
            <div className="p-4 rounded-xl bg-gradient-to-r from-[#FFF5D6] to-[#FAF0D0] border border-[#D4AF37] flex items-center justify-between">
              <div>
                <span className="text-[10px] font-bold text-[#8B6508] uppercase tracking-wider">
                  Direction Zone: {currentZone.direction}
                </span>
                <h3 className="text-xl font-serif font-bold text-[#221B0A]">
                  {currentZone.name}
                </h3>
              </div>
              <span className="text-xs font-semibold text-[#735409] bg-[#FFF2B2] px-3 py-1 rounded-full border border-[#E2D1A6]">
                Element: {currentZone.element}
              </span>
            </div>

            <div className="p-4 rounded-xl bg-[#FAF6EE] border border-[#E2D1A6] space-y-1">
              <span className="text-xs font-bold text-[#8B6508] uppercase tracking-wider flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#B8860B]" /> Ideal Office Placement:
              </span>
              <p className="text-sm font-semibold text-[#221B0A]">
                {currentZone.idealDepartment}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div className="p-4 rounded-xl bg-[#FFF5F5] border border-red-200 text-red-900 space-y-1">
                <span className="font-bold flex items-center gap-1.5 text-red-700">
                  <ShieldAlert className="w-3.5 h-3.5" /> Avoid Placement / Dosha:
                </span>
                <p className="text-red-800 leading-relaxed">{currentZone.avoidPlacement}</p>
              </div>

              <div className="p-4 rounded-xl bg-[#FAF6EE] border border-[#E2D1A6] space-y-1">
                <span className="font-bold text-[#8B6508] block">
                  Business Impact:
                </span>
                <p className="text-[#3D3219] leading-relaxed">{currentZone.impactOnBusiness}</p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-[#FAF3DE] border border-[#D4AF37] space-y-1">
              <span className="text-xs font-bold text-[#735409] uppercase tracking-wider flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-[#B8860B]" /> Non-Demolition Astro-Vastu Remedy:
              </span>
              <p className="text-xs text-[#221B0A] font-medium leading-relaxed">
                {currentZone.remedy}
              </p>
            </div>

            <div className="pt-2 text-right">
              <button
                onClick={onOpenAuditForm}
                className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#8B6508] to-[#B8860B] text-white font-bold text-xs shadow-md transition-all hover:scale-[1.02]"
              >
                Request On-Site / Virtual Office Floorplan Vastu Audit
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
