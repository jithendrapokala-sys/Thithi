import React, { useState } from 'react';
import { Sparkles, ArrowRight, ShieldCheck, DollarSign, TrendingUp, Users, Compass, CheckCircle2, RefreshCw } from 'lucide-react';
import { AstroAuditResult } from '../types';
import { ZODIAC_DATA } from '../data/zodiacData';
import { GoldDefs } from './ZodiacIcons';

interface AstroAuditToolProps {
  onReportGenerated: (report: AstroAuditResult) => void;
}

export const AstroAuditTool: React.FC<AstroAuditToolProps> = ({ onReportGenerated }) => {
  const [companyName, setCompanyName] = useState('TechVision Enterprise');
  const [industry, setIndustry] = useState('B2B Software & SaaS');
  const [founderZodiac, setFounderZodiac] = useState('Leo');
  const [officeDirection, setOfficeDirection] = useState('East');
  const [primaryFocus, setPrimaryFocus] = useState('Cash Flow & Scale');
  const [employeeCount, setEmployeeCount] = useState('10-50 employees');

  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<AstroAuditResult | null>(null);

  const handleRunAudit = async () => {
    setLoading(true);
    setResult(null);

    try {
      const response = await fetch('/api/astro-audit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          companyName,
          industry,
          founderZodiac,
          officeDirection,
          primaryFocus,
          employeeCount
        })
      });

      const data = await response.json();
      if (data.success && data.auditReport) {
        setResult(data.auditReport);
        onReportGenerated(data.auditReport);
      }
    } catch (err) {
      console.error('AI Audit error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="ai-audit" className="py-20 bg-gradient-to-b from-[#FFFDF9] via-[#FAF6EE] to-[#FAF8F3] border-b border-[#E8DCB8] relative">
      <GoldDefs />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title */}
        <div className="text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FFF2B2] border border-[#D4AF37] text-xs font-bold uppercase tracking-wider text-[#705615]">
            <Sparkles className="w-3.5 h-3.5 text-[#B8860B] animate-spin" />
            <span>Interactive AI Business Diagnostic Engine</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#221B0A]">
            Generate Your Instant Astro-Business Audit
          </h2>
          
          <p className="text-base text-[#524422] max-w-2xl mx-auto">
            Test our Gemini AI-powered business horoscope engine below. Enter your company parameters to generate a 4-point instant diagnostic report on Cash Flow, Scale, Retention, and Astro-Vastu.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Controls Form Box */}
          <div className="lg:col-span-5 bg-[#FFFDF9] rounded-2xl border-2 border-[#D4AF37]/60 shadow-xl p-6 sm:p-8 space-y-4">
            <h3 className="font-serif font-bold text-lg text-[#221B0A] border-b border-[#E8DCB8] pb-3 flex items-center justify-between">
              <span>Company Parameters</span>
              <span className="text-[10px] font-bold text-[#8B6508] bg-[#FFF2B2] px-2 py-0.5 rounded">Live Test</span>
            </h3>

            <div className="space-y-3">
              <div>
                <label className="block text-xs font-semibold text-[#4A3E1F] mb-1">Company Name</label>
                <input
                  type="text"
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl bg-[#FAF8F3] border border-[#E2D1A6] text-xs font-medium text-[#221B0A] focus:outline-none focus:border-[#B8860B]"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-[#4A3E1F] mb-1">Industry</label>
                  <select
                    value={industry}
                    onChange={(e) => setIndustry(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-[#FAF8F3] border border-[#E2D1A6] text-xs font-medium text-[#221B0A] focus:outline-none focus:border-[#B8860B]"
                  >
                    <option value="B2B Software & SaaS">B2B Software & SaaS</option>
                    <option value="Manufacturing & Auto">Manufacturing & Auto</option>
                    <option value="Retail & E-commerce">Retail & E-commerce</option>
                    <option value="Financial & Advisory">Financial & Advisory</option>
                    <option value="Real Estate & Infra">Real Estate & Infra</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#4A3E1F] mb-1">Founder Zodiac</label>
                  <select
                    value={founderZodiac}
                    onChange={(e) => setFounderZodiac(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-[#FAF8F3] border border-[#E2D1A6] text-xs font-medium text-[#221B0A] focus:outline-none focus:border-[#B8860B]"
                  >
                    {ZODIAC_DATA.map((z) => (
                      <option key={z.id} value={z.name}>{z.name}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-[#4A3E1F] mb-1">Office Direction</label>
                  <select
                    value={officeDirection}
                    onChange={(e) => setOfficeDirection(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-[#FAF8F3] border border-[#E2D1A6] text-xs font-medium text-[#221B0A] focus:outline-none focus:border-[#B8860B]"
                  >
                    <option value="North">North (Money)</option>
                    <option value="North-East">North-East (Vision)</option>
                    <option value="East">East (Reputation)</option>
                    <option value="South-East">South-East (Liquidity)</option>
                    <option value="South-West">South-West (Stability)</option>
                    <option value="West">West (Gains)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#4A3E1F] mb-1">Primary Focus</label>
                  <select
                    value={primaryFocus}
                    onChange={(e) => setPrimaryFocus(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-[#FAF8F3] border border-[#E2D1A6] text-xs font-medium text-[#221B0A] focus:outline-none focus:border-[#B8860B]"
                  >
                    <option value="Cash Flow & Scale">Cash Flow & Scale</option>
                    <option value="Top-Line Revenue">Top-Line Revenue</option>
                    <option value="Employee Attrition">Employee Attrition</option>
                    <option value="Office Vastu Alignment">Office Vastu Alignment</option>
                  </select>
                </div>
              </div>

              <button
                onClick={handleRunAudit}
                disabled={loading}
                className="w-full py-3.5 mt-2 rounded-xl bg-gradient-to-r from-[#8B6508] via-[#B8860B] to-[#D4AF37] text-white font-bold text-xs shadow-md hover:shadow-xl transition-all flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {loading ? (
                  <>
                    <RefreshCw className="w-4 h-4 animate-spin text-[#FFF2B2]" />
                    <span>Calculating Astronomical Alignment...</span>
                  </>
                ) : (
                  <>
                    <Sparkles className="w-4 h-4 text-[#FFF2B2]" />
                    <span>Run Instant AI Business Diagnostic</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#FFF2B2]" />
                  </>
                )}
              </button>

              <div className="text-center text-[10px] text-[#735409] pt-1">
                ⚡ Instant report generated using Gemini AI & Vedic Sub-Lord algorithms.
              </div>
            </div>
          </div>

          {/* Report Display Box */}
          <div className="lg:col-span-7 bg-[#FFFDF9] rounded-2xl border-2 border-[#D4AF37]/60 shadow-xl p-6 sm:p-8">
            {!result && !loading && (
              <div className="text-center py-16 space-y-3">
                <Sparkles className="w-12 h-12 text-[#B8860B] mx-auto opacity-40 animate-pulse" />
                <h4 className="font-serif font-bold text-lg text-[#221B0A]">Your Diagnostic Report Will Appear Here</h4>
                <p className="text-xs text-[#685526] max-w-sm mx-auto">
                  Click 'Run Instant AI Business Diagnostic' on the left to test our live Vedic & Vastu alignment engine.
                </p>
              </div>
            )}

            {loading && (
              <div className="text-center py-20 space-y-4">
                <div className="w-12 h-12 border-4 border-[#B8860B] border-t-transparent rounded-full animate-spin mx-auto" />
                <p className="font-bold text-sm text-[#8B6508]">
                  Synthesizing BNN, KP Sub-Lords & Astro-Vastu Grids for {companyName}...
                </p>
              </div>
            )}

            {result && !loading && (
              <div className="space-y-6 animate-fade-in">
                
                {/* Header inside Report */}
                <div className="p-4 rounded-xl bg-gradient-to-r from-[#FFF5D6] to-[#FAF0D0] border border-[#D4AF37] space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold text-[#8B6508] uppercase tracking-wider">
                      Generated Executive Astro-Audit Report
                    </span>
                    <span className="text-[10px] font-semibold text-[#735409]">thithi.in Diagnostic</span>
                  </div>
                  <h4 className="font-serif font-bold text-base text-[#221B0A]">
                    {result.summary}
                  </h4>
                </div>

                {/* 4 Report Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                  
                  <div className="p-4 rounded-xl bg-[#FAF6EE] border border-[#E2D1A6] space-y-1.5">
                    <div className="flex items-center gap-2 font-bold text-[#8B6508]">
                      <DollarSign className="w-4 h-4 text-[#B8860B]" />
                      <span>Cash Flow & Working Capital</span>
                    </div>
                    <p className="text-[#3D3219] leading-relaxed">{result.cashFlowAnalysis}</p>
                  </div>

                  <div className="p-4 rounded-xl bg-[#FAF6EE] border border-[#E2D1A6] space-y-1.5">
                    <div className="flex items-center gap-2 font-bold text-[#8B6508]">
                      <TrendingUp className="w-4 h-4 text-[#B8860B]" />
                      <span>Top-Line Scale Potential</span>
                    </div>
                    <p className="text-[#3D3219] leading-relaxed">{result.scalePotential}</p>
                  </div>

                  <div className="p-4 rounded-xl bg-[#FAF6EE] border border-[#E2D1A6] space-y-1.5">
                    <div className="flex items-center gap-2 font-bold text-[#8B6508]">
                      <Users className="w-4 h-4 text-[#B8860B]" />
                      <span>Retention & Team Synergy</span>
                    </div>
                    <p className="text-[#3D3219] leading-relaxed">{result.retentionAndTeam}</p>
                  </div>

                  <div className="p-4 rounded-xl bg-[#FAF6EE] border border-[#E2D1A6] space-y-1.5">
                    <div className="flex items-center gap-2 font-bold text-[#8B6508]">
                      <Compass className="w-4 h-4 text-[#B8860B]" />
                      <span>Astro-Vastu Directional Setup</span>
                    </div>
                    <p className="text-[#3D3219] leading-relaxed">{result.astroVastuRecommendations}</p>
                  </div>

                </div>

                {/* Redbook Remedies List */}
                {result.redbookRemedies && result.redbookRemedies.length > 0 && (
                  <div className="p-4 rounded-xl bg-[#FAF3DE] border border-[#D4AF37]/60 space-y-2">
                    <h5 className="font-bold text-xs uppercase tracking-wider text-[#735409] flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-[#B8860B]" />
                      <span>Recommended Redbook (Lal Kitab) Fast-Acting Upay:</span>
                    </h5>
                    <ul className="space-y-1 text-xs text-[#4A3E1F]">
                      {result.redbookRemedies.map((remedy, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#B8860B] shrink-0 mt-0.5" />
                          <span>{remedy}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

              </div>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
