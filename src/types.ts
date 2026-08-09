export interface ZodiacInfo {
  id: string;
  name: string;
  sanskritName: string;
  symbol: string;
  element: "Fire" | "Earth" | "Air" | "Water";
  rulingPlanet: string;
  businessTrait: string;
  cashFlowOutlook: string;
  growthStrategy: string;
  teamManagementStyle: string;
  idealOfficeDirection: string;
  luckyBusinessDays: string[];
  auspiciousColors: string[];
}

export interface Methodology {
  id: string;
  title: string;
  subtitle: string;
  sanskritTerm: string;
  description: string;
  businessImpact: string[];
  keyTools: string[];
  iconName: string;
}

export interface BusinessPillar {
  id: string;
  title: string;
  subtitle: string;
  problem: string;
  astrologicalSolution: string;
  outcomes: string[];
  metrics: string;
  iconName: string;
}

export interface VastuZone {
  code: string;
  name: string;
  direction: string;
  element: string;
  idealDepartment: string;
  avoidPlacement: string;
  impactOnBusiness: string;
  remedy: string;
}

export interface CaseStudy {
  id: string;
  companyType: string;
  industry: string;
  location: string;
  initialChallenge: string;
  astroIntervention: string;
  results: {
    metric: string;
    description: string;
  }[];
  timeToImpact: string;
  testimonial: string;
  authorTitle: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  tagline: string;
  price: string;
  period: string;
  popular?: boolean;
  features: string[];
  ctaText: string;
  bestFor: string;
}

export interface AuditFormData {
  fullName: string;
  businessName: string;
  email: string;
  phone: string;
  businessType: string;
  employeeCount: string;
  founderZodiac: string;
  dob: string;
  tob: string;
  pob: string;
  officeDirection: string;
  primaryChallenge: string;
  additionalNotes: string;
  wantsInstantAIAudit: boolean;
}

export interface AstroAuditResult {
  summary: string;
  cashFlowAnalysis: string;
  scalePotential: string;
  retentionAndTeam: string;
  astroVastuRecommendations: string;
  redbookRemedies: string[];
}

export interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  category: 'Vastu' | 'Executive' | 'Muhurat' | 'CashFlow' | 'Retainer';
  description: string;
  keyDeliverables: string[];
  idealFor: string;
  turnaroundTime: string;
  popular?: boolean;
  priceTag?: string;
  iconName: string;
}

