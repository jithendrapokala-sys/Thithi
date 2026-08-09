import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { Methodologies } from './components/Methodologies';
import { BusinessPillars } from './components/BusinessPillars';
import { AstroAuditTool } from './components/AstroAuditTool';
import { ZodiacBusinessMatrix } from './components/ZodiacBusinessMatrix';
import { OfficeVastuMap } from './components/OfficeVastuMap';
import { MuhuratFinder } from './components/MuhuratFinder';
import { CaseStudies } from './components/CaseStudies';
import { PricingPackages } from './components/PricingPackages';
import { LeadCaptureForm } from './components/LeadCaptureForm';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';
import { AstroAuditResult, AuditFormData } from './types';
import { GoldDefs } from './components/ZodiacIcons';
import { X, Sparkles, CheckCircle2, ShieldCheck } from 'lucide-react';

export default function App() {
  const [selectedAuditReport, setSelectedAuditReport] = useState<AstroAuditResult | null>(null);
  const [userFormData, setUserFormData] = useState<AuditFormData | null>(null);
  const [isConsultationModalOpen, setIsConsultationModalOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const handleOpenAuditForm = () => {
    const el = document.getElementById('lead-capture');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenConsultation = () => {
    const el = document.getElementById('lead-capture');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      setIsConsultationModalOpen(true);
    }
  };

  const handleAuditGenerated = (report: AstroAuditResult, formData: AuditFormData) => {
    setSelectedAuditReport(report);
    setUserFormData(formData);
    setToastMessage(`Astro-Audit Report generated successfully for ${formData.businessName}!`);
    setTimeout(() => setToastMessage(null), 6000);
  };

  const handleConsultationSubmitted = (leadId: string) => {
    setToastMessage(`Consultation logged successfully! Ref ID: ${leadId.substring(0, 8)}`);
    setTimeout(() => setToastMessage(null), 6000);
  };

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-[#2D2D2D] font-sans antialiased">
      <GoldDefs />

      {/* Fixed Header Navbar */}
      <Navbar 
        onOpenAuditForm={handleOpenAuditForm}
        onOpenConsultation={handleOpenConsultation}
      />

      {/* Main Content Sections */}
      <main className="relative">
        <Hero 
          onOpenAuditForm={handleOpenAuditForm}
          onOpenConsultation={handleOpenConsultation}
        />

        <ServicesSection 
          onOpenAuditForm={handleOpenAuditForm}
          onOpenConsultation={handleOpenConsultation}
        />

        <BusinessPillars 
          onOpenAuditForm={handleOpenAuditForm}
        />


        <Methodologies 
          onOpenAuditForm={handleOpenAuditForm}
        />

        <AstroAuditTool 
          onReportGenerated={(report) => {
            setSelectedAuditReport(report);
          }}
        />

        <ZodiacBusinessMatrix 
          onOpenAuditForm={handleOpenAuditForm}
        />

        <OfficeVastuMap 
          onOpenAuditForm={handleOpenAuditForm}
        />

        <MuhuratFinder 
          onOpenAuditForm={handleOpenAuditForm}
        />

        <CaseStudies 
          onOpenAuditForm={handleOpenAuditForm}
        />

        <PricingPackages 
          onOpenAuditForm={handleOpenAuditForm}
          onOpenConsultation={handleOpenConsultation}
        />

        <LeadCaptureForm 
          onAuditGenerated={handleAuditGenerated}
          onConsultationSubmitted={handleConsultationSubmitted}
        />

        <FAQ 
          onOpenConsultation={handleOpenConsultation}
        />
      </main>

      {/* Footer */}
      <Footer 
        onOpenAuditForm={handleOpenAuditForm}
        onOpenConsultation={handleOpenConsultation}
      />

      {/* Toast Notification Banner */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 max-w-md bg-gradient-to-r from-[#2C220B] to-[#423311] text-[#FFF5D6] p-4 rounded-xl shadow-2xl border border-[#D4AF37] flex items-start gap-3 animate-bounce">
          <CheckCircle2 className="w-5 h-5 text-[#F5D061] shrink-0 mt-0.5" />
          <div className="flex-1 text-xs">
            <p className="font-bold text-[#F5D061]">Success</p>
            <p>{toastMessage}</p>
          </div>
          <button 
            onClick={() => setToastMessage(null)}
            className="text-[#D4AF37] hover:text-white"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* Modal for Generated Audit View (if applicable) */}
      {selectedAuditReport && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-[#FFFDF9] rounded-2xl border-2 border-[#D4AF37] shadow-2xl max-w-3xl w-full p-6 sm:p-8 space-y-6 max-h-[90vh] overflow-y-auto relative animate-scale-up">
            <button 
              onClick={() => setSelectedAuditReport(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-[#FAF3DE] text-[#4A3E1F] hover:bg-[#F5E8C4] border border-[#E2D1A6]"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-2 border-b border-[#E8DCB8] pb-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFF2B2] text-xs font-bold uppercase tracking-wider text-[#705615]">
                <Sparkles className="w-3.5 h-3.5 text-[#B8860B]" />
                <span>Executive Astro-Business Report</span>
              </div>
              <h3 className="text-2xl font-serif font-bold text-[#221B0A]">
                {userFormData?.businessName ? `${userFormData.businessName} — Diagnostic Report` : 'Instant Astro-Business Diagnostic'}
              </h3>
              <p className="text-xs text-[#685526]">
                Synthesized via Vedic Sub-Lord Algorithms, Lal Kitab Remedies, and Astro-Vastu Grid Matrix.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[#FAF3DE] border border-[#D4AF37]/60 space-y-1">
              <span className="text-[10px] font-bold text-[#8B6508] uppercase">Core Executive Summary</span>
              <p className="text-sm font-semibold text-[#221B0A] leading-relaxed">
                {selectedAuditReport.summary}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div className="p-4 rounded-xl bg-[#FAF6EE] border border-[#E2D1A6] space-y-1.5">
                <span className="font-bold text-[#8B6508] block">💰 Cash Flow & Working Capital</span>
                <p className="text-[#3D3219] leading-relaxed">{selectedAuditReport.cashFlowAnalysis}</p>
              </div>

              <div className="p-4 rounded-xl bg-[#FAF6EE] border border-[#E2D1A6] space-y-1.5">
                <span className="font-bold text-[#8B6508] block">📈 Top-Line Revenue Scale</span>
                <p className="text-[#3D3219] leading-relaxed">{selectedAuditReport.scalePotential}</p>
              </div>

              <div className="p-4 rounded-xl bg-[#FAF6EE] border border-[#E2D1A6] space-y-1.5">
                <span className="font-bold text-[#8B6508] block">👥 Retention & Executive Harmony</span>
                <p className="text-[#3D3219] leading-relaxed">{selectedAuditReport.retentionAndTeam}</p>
              </div>

              <div className="p-4 rounded-xl bg-[#FAF6EE] border border-[#E2D1A6] space-y-1.5">
                <span className="font-bold text-[#8B6508] block">🧭 Astro-Vastu Directional Setup</span>
                <p className="text-[#3D3219] leading-relaxed">{selectedAuditReport.astroVastuRecommendations}</p>
              </div>
            </div>

            {selectedAuditReport.redbookRemedies && selectedAuditReport.redbookRemedies.length > 0 && (
              <div className="p-4 rounded-xl bg-[#FFF9E6] border border-[#D4AF37] space-y-2 text-xs">
                <span className="font-bold text-[#735409] uppercase block">Recommended Non-Demolition Upays (Redbook):</span>
                <ul className="list-disc list-inside space-y-1 text-[#4A3E1F]">
                  {selectedAuditReport.redbookRemedies.map((remedy, idx) => (
                    <li key={idx}>{remedy}</li>
                  ))}
                </ul>
              </div>
            )}

            <div className="pt-2 flex justify-end gap-3 border-t border-[#E8DCB8]">
              <button
                onClick={() => setSelectedAuditReport(null)}
                className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#8B6508] to-[#B8860B] text-white font-bold text-xs shadow-md"
              >
                Close Diagnostic View
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
