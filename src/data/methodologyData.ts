import { Methodology } from '../types';

export const METHODOLOGIES: Methodology[] = [
  {
    id: 'vedic',
    title: 'Vedic Business Astrology',
    subtitle: 'Parashari Dasha & Planetary Cycles for Corporate Macro Strategy',
    sanskritTerm: 'Jyotishya Mahadasha (ज्योतिष महादशा)',
    description: 'Ancient mathematical planetary alignment system evaluating the founder’s birth chart (Kundali) alongside company incorporation charts. Predicts macro market expansion periods, capital raise windows, and industry headwinds.',
    businessImpact: [
      'Pinpoint exact 3-year Mahadasha/Antardasha expansion windows for scaling or pivot',
      'Assess founder-company chart compatibility to prevent premature burnout or equity disputes',
      'Time major debt restructuring or equity investments during auspicious Jupiter/Mercury transits',
      'Identify planetary blockages affecting brand reputation or regulatory delays'
    ],
    keyTools: ['12-House Corporate Horoscope', 'Mahadasha Timeline Engine', 'Navamsha (D9) Fortune Chart', 'Ashtakvarga Financial Score'],
    iconName: 'Vedic'
  },
  {
    id: 'kp-system',
    title: 'KP System (Krishnamurti Paddhati)',
    subtitle: 'Micro-Timing Precision for Deals, Cash Flow & Contract Signings',
    sanskritTerm: 'Sub-Lord Stellar Timing (उप-स्वामी गणना)',
    description: 'A stellar-based scientific refinement of astrology that eliminates ambiguity. Uses Nakshatra Sub-Lords to predict exact dates for deal closures, tender approvals, payment releases, and contract executions.',
    businessImpact: [
      'Determine precise dates for contract signing and high-stakes negotiations',
      'Identify specific sub-lords governing cash inflow (2nd, 6th, 11th Cusp alignments)',
      'Predict outcome of legal disputes, tax audits, or regulatory approvals',
      'Avoid signing agreements during unsupportive stellar sub-periods'
    ],
    keyTools: ['Placidus House Cusps', 'Sub-Lord 249 Table', 'Horary (Prashna) Decision Matrix', 'Ruling Planets Real-Time Engine'],
    iconName: 'KP'
  },
  {
    id: 'bnn',
    title: 'BNN (Bhrigu Nandi Nadi)',
    subtitle: 'Planetary Combination Dynamics for Key Hires & Leadership Alignment',
    sanskritTerm: 'Nadi Graha Yoga (नाडी ग्रह योग)',
    description: 'Fast, highly accurate Nadi system analyzing planetary transits and directional alignments. Uncovers true core motivations of C-Suite executives, partners, and key hires without requiring exact birth time.',
    businessImpact: [
      'Screen co-founders and CxO candidates for genuine loyalty and planetary synergy',
      'Detect hidden friction between Sales (Mars), Finance (Venus), and Operations (Saturn)',
      'Time key personnel onboarding during favorable planet-to-planet transits',
      'Resolve long-standing operational deadlocks between department heads'
    ],
    keyTools: ['Nadi Directional Trines', 'Jupiter-Saturn Career Transit Alignment', 'Venus-Mercury Cash Flow Yogas'],
    iconName: 'BNN'
  },
  {
    id: 'redbook',
    title: 'Redbook (Lal Kitab)',
    subtitle: 'Fast-Acting, Practical Remedies for Financial Blockages & Debt Recovery',
    sanskritTerm: 'Lal Kitab Upay (लाल किताब अचूक उपाय)',
    description: 'Uniquely practical and non-disruptive remedies designed for real-world business challenges. Resolves chronic cash flow stalls, delayed receivables, vendor disputes, and unexpected tax complications rapidly.',
    businessImpact: [
      'Speed up realization of stuck client invoices and delayed payments',
      'Neutralize invisible office negativity and employee attrition triggers',
      'Simple, cost-effective remedies using elemental items (copper, brass, grain, water)',
      'Eliminate financial leakages caused by afflicted Rahu or Saturn placements'
    ],
    keyTools: ['Annual Varshaphal Remedies', 'House-Specific Elemental Upay', 'Negative Energy Neutralizers'],
    iconName: 'Redbook'
  },
  {
    id: 'astro-vastu',
    title: 'Astro-Vastu Directional Alignment',
    subtitle: 'Customizing Office Space Energy to the Founder’s Personal Horoscope',
    sanskritTerm: 'Graha Vastu Samanvay (ग्रह वास्तु समन्वय)',
    description: 'Combines traditional 16-zone Vastu Shastra with the founder’s personal horoscope (Horoscopic Vastu). Adjusts seating, CMD desk, finance safe, server room, and entrance without requiring structural demolition.',
    businessImpact: [
      'Position CMD / CEO desk in the founder’s personal direction of power & clarity',
      'Relocate accounts department to North/South-East to eliminate cash leakages',
      'Align entrance energy with company’s industry element (Fire, Earth, Air, Water)',
      'Fix office Vastu doshas non-destructively using color, metals, and elemental pyramids'
    ],
    keyTools: ['16-Zone Compass Grid', 'Barwaat Horoscopic Overlay', 'Elemental Metal Strips & Pyramids', 'CMD Power Seat Analyzer'],
    iconName: 'AstroVastu'
  }
];
