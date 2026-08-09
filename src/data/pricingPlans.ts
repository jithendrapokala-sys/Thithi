import { PricingPlan } from '../types';

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'founder-audit',
    name: 'Executive Founder Diagnostic',
    tagline: '1-on-1 Deep-Dive Consultation for Founders & Business Owners',
    price: '₹14,999',
    period: 'one-time consultation',
    popular: false,
    features: [
      'Comprehensive Founder Kundali & Corporate Chart Analysis',
      'KP System 12-Month Financial & Expansion Timeline',
      'Primary Challenge Resolution (Cash Flow / Retention / Growth)',
      'Specific Redbook Remedies for immediate blockages',
      '60-Minute Direct Video Session with Senior Business Astrologer',
      'Written PDF Diagnostic Executive Summary'
    ],
    ctaText: 'Book Founder Session',
    bestFor: 'Solo Founders, Co-Founders & SMB Owners facing immediate decision crossroads.'
  },
  {
    id: 'scale-vastu-alignment',
    name: 'Scale & Astro-Vastu Corporate Audit',
    tagline: 'Complete Business Horoscope + On-Site / Virtual Office Vastu Layout',
    price: '₹49,999',
    period: 'full corporate audit',
    popular: true,
    features: [
      'Everything in Executive Founder Diagnostic',
      'Comprehensive 16-Zone Office Floorplan Astro-Vastu Blueprint',
      'CMD Desk, Accounts, Sales & HR Seating Alignment Map',
      'Non-demolition elemental Vastu corrections & pyramid layout',
      'Key Executive / C-Suite BNN Planetary Synergy Screening (up to 5 executives)',
      'KP Stellar Timing Calendar for Product Launches & Contract Signings',
      '2 Follow-Up Progress Strategy Calls (Day 30 & Day 60)'
    ],
    ctaText: 'Get Corporate Audit',
    bestFor: 'Growing Companies (10-100 employees), Retail Chains & Factories looking to scale.'
  },
  {
    id: 'enterprise-retainer',
    name: 'Boardroom Retainer & Advisory',
    tagline: 'Quarterly Strategic Astro-Consulting for Enterprise Boards & M&A',
    price: '₹1,25,000',
    period: 'per quarter',
    popular: false,
    features: [
      'Dedicated Retainer Advisor for Board Meetings & Major Decisions',
      'Unlimited KP Stellar Muhurat Calculation for Contracts, M&A & Hires',
      'Quarterly Astro-Vastu Audits for multi-office locations',
      'C-Suite Hiring Planetary Due Diligence & Screening',
      'Priority 24/7 Direct WhatsApp & Phone Access to Senior Consultant',
      'Customized Redbook Upay maintenance for continuous cash flow'
    ],
    ctaText: 'Request Retainer Proposal',
    bestFor: 'Enterprise Companies (100+ employees), Investment Funds & Multi-Branch Corporations.'
  }
];
