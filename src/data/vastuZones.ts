import { VastuZone } from '../types';

export const VASTU_ZONES: VastuZone[] = [
  {
    code: 'N',
    name: 'North (Kuber Zone)',
    direction: '0° North',
    element: 'Water / Mercury',
    idealDepartment: 'Sales Inquiries, Marketing, Customer Acquisition & Cash Receipts',
    avoidPlacement: 'Pantry, Heavy Storage, Fire elements, Red color decor',
    impactOnBusiness: 'Directly controls new customer leads, cash flow inflow, and business growth opportunities.',
    remedy: 'Place a blue brass vase, green plants, or a silver Kubera yantra to double incoming sales leads.'
  },
  {
    code: 'NE',
    name: 'North-East (Ishan Zone)',
    direction: '45° North-East',
    element: 'Water / Jupiter',
    idealDepartment: 'CMD / CEO Strategy Room, Meditation Corner, Advisory Board',
    avoidPlacement: 'Toilets, Heavy Machinery, Server Racks, Clutter',
    impactOnBusiness: 'Governs executive clarity, vision, strategic decision-making, and brand wisdom.',
    remedy: 'Keep completely clean and well-lit. Place clear quartz or crystal lotus for razor-sharp strategy.'
  },
  {
    code: 'E',
    name: 'East (Surya Zone)',
    direction: '90° East',
    element: 'Air / Sun',
    idealDepartment: 'Government Liaison, PR, Boardroom, Key Client Reception',
    avoidPlacement: 'Toilets, Heavy Trash Bins, Dark Storage Rooms',
    impactOnBusiness: 'Governs corporate reputation, government tenders, public relations, and social connections.',
    remedy: 'Display a polished copper Sun motif on the East wall to boost government contract approvals.'
  },
  {
    code: 'SE',
    name: 'South-East (Agni Zone)',
    direction: '135° South-East',
    element: 'Fire / Venus',
    idealDepartment: 'Accounts, Billing, Invoicing Desk, Electrical Meters, Pantry',
    avoidPlacement: 'Water Coolers, CEO Desk, Main Entrance, Blue decor',
    impactOnBusiness: 'Governs liquidity, cash velocity, working capital health, and passion for sales.',
    remedy: 'Light a warm golden or red LED strip in SE corner to accelerate delayed payment collections.'
  },
  {
    code: 'S',
    name: 'South (Yama / Mars Zone)',
    direction: '180° South',
    element: 'Fire / Mars',
    idealDepartment: 'Legal Department, Security, Brand Authority, High-Impact Media',
    avoidPlacement: 'Main Entrance, Water Bodies, Underground Tanks',
    impactOnBusiness: 'Provides brand strength, legal protection, market dominance, and courage under pressure.',
    remedy: 'Place a red Jasper or red metal strip to reinforce brand defense against aggressive competitors.'
  },
  {
    code: 'SW',
    name: 'South-West (Pitru / Stability Zone)',
    direction: '225° South-West',
    element: 'Earth / Rahu & Saturn',
    idealDepartment: 'CMD / Founder Master Office, Main Cash Safe, Core IP Vault',
    avoidPlacement: 'Main Entrance, Toilets, Open Glass Cutouts, Water Coolers',
    impactOnBusiness: 'Governs business stability, team retention, long-term wealth accumulation, and leadership authority.',
    remedy: 'Place heavy mahogany wooden furniture, brass globe, or yellow sandstone pyramid for unshakeable stability.'
  },
  {
    code: 'W',
    name: 'West (Varuna / Gain Zone)',
    direction: '270° West',
    element: 'Space / Saturn',
    idealDepartment: 'Operations, Quality Control, Dispatch, Procurement, Vendor Deals',
    avoidPlacement: 'Main Entrance, Green plants, Red lighting',
    impactOnBusiness: 'Governs profit margins, actual realized gains, project completion, and asset accumulation.',
    remedy: 'Keep clean with white or metallic grey accents. A metal piggy bank or gain yantra enhances margins.'
  },
  {
    code: 'NW',
    name: 'North-West (Vayu / Motion Zone)',
    direction: '315° North-West',
    element: 'Air / Moon',
    idealDepartment: 'HR Department, Logistics, Dispatch Goods, Temporary Visitor Lounge',
    avoidPlacement: 'CMD Desk, Long-Term Cash Locker, Heavy Permanent Machinery',
    impactOnBusiness: 'Governs movement of goods, employee turnover, banking support, and rapid sales velocity.',
    remedy: 'Place a brass globe or white metal fan to streamline logistics and maintain smooth HR recruitment.'
  }
];
