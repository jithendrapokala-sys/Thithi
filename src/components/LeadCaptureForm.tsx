import React, { useState } from 'react';
import { Sparkles, Send, Calendar, CheckCircle2, AlertCircle, ShieldCheck, Building2, User, Mail, Phone, Clock, MapPin, Compass } from 'lucide-react';
import { AuditFormData, AstroAuditResult } from '../types';
import { ZODIAC_DATA } from '../data/zodiacData';

interface LeadCaptureFormProps {
  onAuditGenerated: (result: AstroAuditResult, formData: AuditFormData) => void;
  onConsultationSubmitted?: (leadId: string) => void;
}

export const LeadCaptureForm: React.FC<LeadCaptureFormProps> = ({ onAuditGenerated, onConsultationSubmitted }) => {
  const [formData, setFormData] = useState<AuditFormData>({
    fullName: '',
    businessName: '',
    email: '',
    phone: '',
    businessType: 'B2B Services & Consulting',
    employeeCount: '10-50 employees',
    founderZodiac: 'Aries',
    dob: '',
    tob: '',
    pob: '',
    officeDirection: 'East',
    primaryChallenge: 'Cash Flow & Liquidity Optimization',
    additionalNotes: '',
    wantsInstantAIAudit: true
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccessMessage(null);

    if (!formData.fullName || !formData.email || !formData.phone || !formData.businessName) {
      setError('Please fill in your Full Name, Business Name, Email, and Phone number.');
      return;
    }

    setLoading(true);

    try {
      // 1. First record lead in server
      const leadRes = await fetch('/api/consultation', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      const leadData = await leadRes.json();

      if (leadData.leadId && onConsultationSubmitted) {
        onConsultationSubmitted(leadData.leadId);
      }

      // 2. If user checked instant AI audit, trigger AI endpoint
      if (formData.wantsInstantAIAudit) {
        const auditRes = await fetch('/api/astro-audit', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            companyName: formData.businessName,
            industry: formData.businessType,
            founderZodiac: formData.founderZodiac,
            dob: formData.dob,
            tob: formData.tob,
            pob: formData.pob,
            officeDirection: formData.officeDirection,
            primaryFocus: formData.primaryChallenge,
            employeeCount: formData.employeeCount
          })
        });

        const auditData = await auditRes.json();
        if (auditData.success && auditData.auditReport) {
          onAuditGenerated(auditData.auditReport, formData);
        } else {
          setSuccessMessage(leadData.message || 'Audit request submitted successfully! Our team will contact you.');
        }
      } else {
        setSuccessMessage(leadData.message || 'Thank you! Your executive consultation request has been logged.');
      }
    } catch (err: any) {
      console.error('Lead submission error:', err);
      setError('An error occurred while submitting. Please check your connection and try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="lead-capture" className="py-20 bg-gradient-to-b from-[#FAF6EE] to-[#FFFDF9] relative overflow-hidden">
      
      {/* Decorative Golden Ambient Accent */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-radial from-[#F5D061]/20 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Title */}
        <div className="text-center space-y-3 mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFF2B2] border border-[#D4AF37] text-xs font-bold uppercase tracking-wider text-[#705615]">
            <Sparkles className="w-3.5 h-3.5 text-[#B8860B]" />
            <span>Executive Astro-Business Audit & Lead Portal</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#221B0A]">
            Request Your Business Astro-Audit & Consultation
          </h2>
          
          <p className="text-base text-[#524422] max-w-2xl mx-auto">
            Fill in your company and founder details below to receive an instant initial AI Business Horoscope Diagnostic Report and schedule a 1-on-1 session with our senior consultant.
          </p>
        </div>

        {/* Form Container Card */}
        <div className="bg-[#FFFDF9] rounded-2xl border-2 border-[#D4AF37]/50 shadow-xl p-6 sm:p-10 relative">
          
          {error && (
            <div className="mb-6 p-4 rounded-xl bg-red-50 border border-red-200 text-red-800 text-sm flex items-center gap-3">
              <AlertCircle className="w-5 h-5 text-red-600 shrink-0" />
              <span>{error}</span>
            </div>
          )}

          {successMessage && (
            <div className="mb-6 p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-900 text-sm flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
              <div>
                <p className="font-bold">Request Logged Successfully!</p>
                <p className="text-xs">{successMessage}</p>
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* Section 1: Contact Details */}
            <div className="space-y-4">
              <h3 className="text-sm font-bold text-[#735409] uppercase tracking-wider flex items-center gap-2 border-b border-[#E8DCB8] pb-2">
                <User className="w-4 h-4 text-[#B8860B]" />
                <span>1. Founder & Contact Credentials</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#4A3E1F] mb-1">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g., Rajesh Sharma"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#FAF8F3] border border-[#E2D1A6] text-sm text-[#221B0A] focus:outline-none focus:border-[#B8860B] focus:ring-1 focus:ring-[#B8860B]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#4A3E1F] mb-1">
                    Company / Registered Business Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g., Apex Global Solutions Ltd."
                    value={formData.businessName}
                    onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#FAF8F3] border border-[#E2D1A6] text-sm text-[#221B0A] focus:outline-none focus:border-[#B8860B] focus:ring-1 focus:ring-[#B8860B]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#4A3E1F] mb-1">
                    Official Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="rajesh@apexglobal.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#FAF8F3] border border-[#E2D1A6] text-sm text-[#221B0A] focus:outline-none focus:border-[#B8860B] focus:ring-1 focus:ring-[#B8860B]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#4A3E1F] mb-1">
                    WhatsApp Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 63038 58703"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#FAF8F3] border border-[#E2D1A6] text-sm text-[#221B0A] focus:outline-none focus:border-[#B8860B] focus:ring-1 focus:ring-[#B8860B]"
                  />
                </div>
              </div>
            </div>

            {/* Section 2: Business & Astrological Parameters */}
            <div className="space-y-4 pt-2">
              <h3 className="text-sm font-bold text-[#735409] uppercase tracking-wider flex items-center gap-2 border-b border-[#E8DCB8] pb-2">
                <Building2 className="w-4 h-4 text-[#B8860B]" />
                <span>2. Business & Astrological Parameters</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#4A3E1F] mb-1">
                    Industry / Sector
                  </label>
                  <select
                    value={formData.businessType}
                    onChange={(e) => setFormData({ ...formData, businessType: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#FAF8F3] border border-[#E2D1A6] text-sm text-[#221B0A] focus:outline-none focus:border-[#B8860B]"
                  >
                    <option value="B2B Services & Consulting">B2B Services & Consulting</option>
                    <option value="IT, Software & SaaS">IT, Software & SaaS</option>
                    <option value="Manufacturing & Exports">Manufacturing & Exports</option>
                    <option value="Retail & E-commerce">Retail & E-commerce</option>
                    <option value="Real Estate & Construction">Real Estate & Construction</option>
                    <option value="Healthcare & Pharma">Healthcare & Pharma</option>
                    <option value="Finance & Investment">Finance & Investment</option>
                    <option value="Other Industry">Other Industry</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#4A3E1F] mb-1">
                    Company Size
                  </label>
                  <select
                    value={formData.employeeCount}
                    onChange={(e) => setFormData({ ...formData, employeeCount: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#FAF8F3] border border-[#E2D1A6] text-sm text-[#221B0A] focus:outline-none focus:border-[#B8860B]"
                  >
                    <option value="1-10 employees">1-10 employees (Startup)</option>
                    <option value="10-50 employees">10-50 employees (Growth)</option>
                    <option value="50-200 employees">50-200 employees (Scaleup)</option>
                    <option value="200+ employees">200+ employees (Enterprise)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#4A3E1F] mb-1">
                    Founder Zodiac / Sun Sign
                  </label>
                  <select
                    value={formData.founderZodiac}
                    onChange={(e) => setFormData({ ...formData, founderZodiac: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#FAF8F3] border border-[#E2D1A6] text-sm text-[#221B0A] focus:outline-none focus:border-[#B8860B]"
                  >
                    {ZODIAC_DATA.map((z) => (
                      <option key={z.id} value={z.name}>
                        {z.name} ({z.sanskritName.split(' ')[0]})
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#4A3E1F] mb-1">
                    Founder Birth Date (DOB)
                  </label>
                  <input
                    type="date"
                    value={formData.dob}
                    onChange={(e) => setFormData({ ...formData, dob: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#FAF8F3] border border-[#E2D1A6] text-sm text-[#221B0A] focus:outline-none focus:border-[#B8860B]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#4A3E1F] mb-1">
                    Birth Time (TOB - Optional)
                  </label>
                  <input
                    type="time"
                    value={formData.tob}
                    onChange={(e) => setFormData({ ...formData, tob: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#FAF8F3] border border-[#E2D1A6] text-sm text-[#221B0A] focus:outline-none focus:border-[#B8860B]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#4A3E1F] mb-1">
                    Office Facing Direction
                  </label>
                  <select
                    value={formData.officeDirection}
                    onChange={(e) => setFormData({ ...formData, officeDirection: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#FAF8F3] border border-[#E2D1A6] text-sm text-[#221B0A] focus:outline-none focus:border-[#B8860B]"
                  >
                    <option value="North">North (Kuber Money Zone)</option>
                    <option value="North-East">North-East (Ishan Vision Zone)</option>
                    <option value="East">East (Surya Reputation Zone)</option>
                    <option value="South-East">South-East (Agni Cash Liquidity)</option>
                    <option value="South">South (Mars Authority Zone)</option>
                    <option value="South-West">South-West (Stability & CMD Power)</option>
                    <option value="West">West (Gains & Profit Zone)</option>
                    <option value="North-West">North-West (Motion & HR Zone)</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Section 3: Primary Challenge */}
            <div className="space-y-3 pt-2">
              <h3 className="text-sm font-bold text-[#735409] uppercase tracking-wider flex items-center gap-2 border-b border-[#E8DCB8] pb-2">
                <Compass className="w-4 h-4 text-[#B8860B]" />
                <span>3. Primary Focus Area / Challenge</span>
              </h3>

              <div>
                <select
                  value={formData.primaryChallenge}
                  onChange={(e) => setFormData({ ...formData, primaryChallenge: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#FAF8F3] border border-[#E2D1A6] text-sm font-semibold text-[#221B0A] focus:outline-none focus:border-[#B8860B]"
                >
                  <option value="Cash Flow & Liquidity Optimization">Cash Flow & Liquidity Optimization (Delayed Invoices / Working Capital)</option>
                  <option value="Top-Line Scaling & Revenue Expansion">Top-Line Scaling & Revenue Expansion (Sales Stagnation / Launch Timing)</option>
                  <option value="Employee Retention & Team Harmony">Employee Retention & Team Attrition (CxO Friction / Key Staff Turnover)</option>
                  <option value="Office Astro-Vastu Alignment">Office Astro-Vastu Alignment (CMD Seating / Spatial Energy / No Demolition)</option>
                  <option value="Co-Founder & Partner Planetary Synergy">Co-Founder & Partner Synergy (Equity Disputes / Executive Alignment)</option>
                  <option value="Legal & Regulatory Disputes">Legal, Tax & Regulatory Clearances</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#4A3E1F] mb-1">
                  Additional Business Context / Specific Questions (Optional)
                </label>
                <textarea
                  rows={2}
                  placeholder="e.g. Planning a $2M Series-A round in November, facing cash delays from top 3 enterprise buyers..."
                  value={formData.additionalNotes}
                  onChange={(e) => setFormData({ ...formData, additionalNotes: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-xl bg-[#FAF8F3] border border-[#E2D1A6] text-xs text-[#221B0A] focus:outline-none focus:border-[#B8860B]"
                />
              </div>
            </div>

            {/* Checkbox Trigger */}
            <div className="p-3.5 rounded-xl bg-[#FAF3DE] border border-[#D4AF37] flex items-center gap-3">
              <input
                type="checkbox"
                id="instantAi"
                checked={formData.wantsInstantAIAudit}
                onChange={(e) => setFormData({ ...formData, wantsInstantAIAudit: e.target.checked })}
                className="w-4 h-4 accent-[#B8860B] rounded"
              />
              <label htmlFor="instantAi" className="text-xs font-semibold text-[#4A3E1F] cursor-pointer">
                Generate Instant AI Astro-Business Report immediately on submission (Powered by Gemini AI)
              </label>
            </div>

            {/* Submit CTA */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 rounded-xl bg-gradient-to-r from-[#8B6508] via-[#B8860B] to-[#D4AF37] text-white font-bold text-sm shadow-lg shadow-[#D4AF37]/30 hover:shadow-xl hover:shadow-[#D4AF37]/40 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {loading ? (
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Analyzing Astronomical & Vastu Alignment...</span>
                  </div>
                ) : (
                  <>
                    <Sparkles className="w-5 h-5 text-[#FFF2B2]" />
                    <span>Submit & Get Business Astro Diagnostic</span>
                    <Send className="w-4 h-4 text-[#FFF2B2]" />
                  </>
                )}
              </button>
            </div>

            <div className="text-center text-[11px] text-[#735409] flex items-center justify-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Your corporate data and birth chart parameters are 100% strictly confidential.</span>
            </div>

          </form>
        </div>
      </div>
    </section>
  );
};
