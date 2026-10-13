export interface DentistProfile {
  id: string;
  slug: string;
  name: string;
  title: string;
  qualifications: string;
  specialization: string;
  experienceYears: number;
  bio: string;
  philosophy: string;
  education: string[];
  memberships: string[];
  specialties: string[];
  image: string;
  warmImage: string;
}

export interface ServiceDetail {
  slug: string;
  name: string;
  navLabel: string;
  tagline: string;
  shortDescription: string;
  clinicalExplanation: string;
  whoNeeds: string[];
  benefits: string[];
  indications: { condition: string; explanation: string }[];
  procedureSteps: { stepNumber: number; title: string; duration: string; description: string; clinicalDetails: string }[];
  recoveryTimeline: { period: string; expectedSensations: string; careProtocol: string }[];
  costTransparency: { baseRange: string; factors: string[]; whatIsIncluded: string[]; note: string };
  beforeAfterCase: { category: string; clinicalContext: string; beforeLabel: string; afterLabel: string; beforeImage: string; afterImage: string; timeframe: string };
  assignedDentistId: string;
  faqs: { question: string; answer: string; relatedSlug?: string }[];
}

export interface ClinicInformation {
  name: string;
  legalName: string;
  tagline: string;
  establishedYear?: number;
  primaryLocation: {
    street: string;
    suite: string;
    city: string;
    state: string;
    postalCode: string;
    country: string;
    directions: string;
    landmarks: string;
    coordinates?: { lat: number; lng: number };
  };
  contact: { phone: string; emergencyPhone: string; email?: string; whatsapp: string; website?: string };
  identityHighlights: string[];
  schedule: { day: string; hours: string; isOpenToday?: boolean; isEmergencyOnly?: boolean }[];
  verifiedStats: { value: number; suffix: string; label: string; description: string }[];
  accreditations: string[];
}

export const CLINIC_INFO: ClinicInformation = {
  name: 'JS Roof Care Ltd',
  legalName: 'JS Roof Care Ltd',
  tagline: 'Reliable roofing work, delivered with care.',
  primaryLocation: {
    street: '226 High Street',
    suite: '',
    city: 'Croydon',
    state: 'Greater London',
    postalCode: 'CR9 1DF',
    country: 'United Kingdom',
    directions: '226 High Street Croydon, Greater London CR9 1DF, United Kingdom',
    landmarks: '9W92+J3 Croydon, United Kingdom',
  },
  contact: {
    phone: '+44 7459 521011',
    emergencyPhone: '+44 7459 521011',
    whatsapp: '+44 7459 521011',
    website: 'https://jsroofcareltd.com',
    email: '',
  },
  identityHighlights: ['4.9 Google rating', 'Croydon, Greater London'],
  schedule: [],
  verifiedStats: [
    { value: 4, suffix: '.9', label: 'Google rating', description: 'Based on 62 Google reviews.' },
    { value: 62, suffix: '', label: 'Google reviews', description: 'Customer reviews shown on Google.' },
  ],
  accreditations: [],
};

export const DENTISTS: DentistProfile[] = [
  {
    id: 'roofing-team',
    slug: 'our-doctor',
    name: 'JS Roof Care Ltd team',
    title: 'Croydon roofing specialists',
    qualifications: 'Residential roofing',
    specialization: 'Roof replacements, repairs and maintenance',
    experienceYears: 0,
    bio: 'Our Croydon roofing team provides roof repairs, inspections and replacements for residential properties.',
    philosophy: 'We take care of each property, explain the work clearly and aim to leave every roof strong and reliable.',
    education: [],
    memberships: [],
    specialties: ['Roof replacement', 'Flat roofs', 'Roof repairs', 'Gutters and fascias'],
    image: '/images/jsroof-stock-01.jpg',
    warmImage: '/images/jsroof-stock-02.jpg',
  },
];

const projectPhotos = [
  ...Array.from({ length: 17 }, (_, index) => `/images/jsroof-stock-${String(index + 1).padStart(2, '0')}.jpg`),
];

const makeService = (
  slug: string,
  name: string,
  navLabel: string,
  tagline: string,
  description: string,
  problems: string[],
  benefits: string[],
  faqs: { question: string; answer: string }[],
  photoIndex: number,
): ServiceDetail => ({
  slug,
  name,
  navLabel,
  tagline,
  shortDescription: description,
  clinicalExplanation: description,
  whoNeeds: problems,
  benefits,
  indications: problems.map((condition) => ({ condition, explanation: `Our team can inspect the roof and explain the options for ${condition.toLowerCase()}.` })),
  procedureSteps: [
    { stepNumber: 1, title: 'Roof inspection', duration: 'By appointment', description: 'We assess the roof and note visible areas that need attention.', clinicalDetails: 'The inspection helps define the right scope for the property.' },
    { stepNumber: 2, title: 'Clear proposal', duration: 'After inspection', description: 'We explain the recommended work and materials before starting.', clinicalDetails: 'Price and timing are confirmed once the work is assessed.' },
    { stepNumber: 3, title: 'Roofing work', duration: 'As agreed', description: 'Our team completes the agreed work with care for your property.', clinicalDetails: 'Access and safety arrangements are agreed in advance.' },
    { stepNumber: 4, title: 'Final review', duration: 'At completion', description: 'We review the completed work and share any relevant maintenance guidance.', clinicalDetails: 'The final scope reflects the work agreed with you.' },
  ],
  recoveryTimeline: [
    { period: 'Before work begins', expectedSensations: 'We assess the roof and agree the scope with you.', careProtocol: 'Share any photos and describe when the issue occurs.' },
    { period: 'During the work', expectedSensations: 'Timing depends on access, materials and the work involved.', careProtocol: 'Keep people and pets clear of the work area.' },
    { period: 'After completion', expectedSensations: 'Our team explains what has been completed.', careProtocol: 'Follow any roof maintenance guidance provided by the team.' },
  ],
  costTransparency: {
    baseRange: 'Request a quote after an assessment.',
    factors: ['Roof type and condition', 'Roof access and height', 'Materials and extent of work'],
    whatIsIncluded: ['Agreed scope of work', 'Description of planned materials', 'Guidance on the completed work'],
    note: 'Pricing, timings and availability are confirmed by the team after assessment.',
  },
  beforeAfterCase: {
    category: name,
    clinicalContext: 'Illustrative stock photos show common residential roof styles. Actual work depends on a roof assessment.',
    beforeLabel: 'Reference image one',
    afterLabel: 'Reference image two',
    beforeImage: projectPhotos[photoIndex % projectPhotos.length],
    afterImage: projectPhotos[(photoIndex + 1) % projectPhotos.length],
    timeframe: 'Illustrative stock images',
  },
  assignedDentistId: 'roofing-team',
  faqs,
});

export const SERVICES: ServiceDetail[] = [
  makeService(
    'dental-implants', 'Roof Repairs and Leak Detection', 'Roof Repairs',
    'Find the source of a leak and arrange a repair to help protect your home.',
    'A ceiling stain or leak can have several causes. An assessment of the roof helps locate water entry points and identify suitable repairs.',
    ['Leaks during rain', 'Damp patches on ceilings', 'Loose or broken roof tiles'],
    ['Inspect visible sources of water entry', 'Assess tiles, joins and roof finishes', 'Agree the repair scope before work begins'],
    [{ question: 'How can you find the source of a roof leak?', answer: 'The source may not be directly above an indoor stain. An inspection of the roof and its joins can help identify where water is entering.' }], 0,
  ),
  makeService(
    'root-canal', 'Gutter and Fascia Repairs', 'Gutters and Fascias',
    'Keep gutters, fascias and roof edges in good condition.',
    'Gutters and fascias help manage rainwater and protect roof edges. Blockages, loose sections or worn seals can affect drainage and contribute to leaks.',
    ['Blocked or overflowing gutters', 'Loose or damaged fascias', 'Water collecting near walls or eaves'],
    ['Check water flow and visible damage', 'Identify joins that may need sealing', 'Plan cleaning or repairs for the roofline'],
    [{ question: 'How often should gutters be checked?', answer: 'It depends on nearby trees, rainfall and the property. Regular checks can help spot blockages and visible damage.' }], 3,
  ),
  makeService(
    'teeth-whitening', 'Roof Replacement', 'Roof Replacement',
    'Roof replacement work planned around your home and its existing roof.',
    'A roof replacement begins with an assessment of the existing roof, materials and access. The team explains the proposed work and timing before getting started.',
    ['Worn or damaged roof coverings', 'Repeated problems across a roof', 'Planning a full roof renewal'],
    ['Assess the existing roof and its condition', 'Discuss suitable roof materials and scope', 'Plan replacement work for your property'],
    [{ question: 'When might a roof need to be replaced?', answer: 'The right option depends on the roof’s condition, age, materials and repair history. An assessment can help clarify whether repair or replacement is suitable.' }], 10,
  ),
  makeService(
    'dental-cleaning', 'Flat Roof Installation and Repairs', 'Flat Roofs',
    'Flat roof installation, repairs and maintenance for residential properties.',
    'Flat roof work depends on the existing surface, drainage and signs of water ingress. Our team assesses the area before recommending materials and preparation.',
    ['Leaks on flat roofs', 'Visible wear or damage', 'A planned flat roof replacement'],
    ['Assess the roof surface and drainage', 'Identify joints and areas needing attention', 'Agree the preparation and work scope'],
    [{ question: 'Can a flat roof leak be repaired?', answer: 'The right approach depends on the roof surface, condition and source of the leak. An inspection helps determine whether a repair or replacement is appropriate.' }], 12,
  ),
  makeService(
    'braces', 'Roof Inspections and Maintenance', 'Roof Inspections',
    'Check visible wear and plan maintenance for your roof.',
    'A roof inspection checks visible tiles, ridges, gutters, flashings and other accessible areas. The team explains any recommended maintenance.',
    ['A roof without a recent inspection', 'Visible wear or loose roof components', 'Planning seasonal roof maintenance'],
    ['Record areas that may need attention', 'Prioritise repairs based on the roof condition', 'Plan ongoing roof maintenance'],
    [{ question: 'Does an inspection require access to the roof?', answer: 'The assessment method depends on the property and safe access. The team will agree a suitable approach before work begins.' }], 1,
  ),
  makeService(
    'cosmetic-dentistry', 'Storm Damage Repairs', 'Storm Damage',
    'Assess visible roof damage after heavy rain or strong winds.',
    'Loose tiles, damaged gutters or water ingress after a storm may need attention. An assessment helps document visible damage and agree next steps.',
    ['Tiles displaced by wind', 'Leaks after heavy rain', 'Loose gutters, flashings or roof finishes'],
    ['Identify visible storm damage', 'Prioritise areas where water may enter', 'Discuss suitable repair options'],
    [{ question: 'What should I do if my roof starts leaking during a storm?', answer: 'Move belongings away from the water and collect drips if it is safe. Do not climb onto a wet roof or touch electrical fittings affected by water.' }], 5,
  ),
];

export interface EmergencyCondition {
  id: string;
  title: string;
  urgency: 'Immediate (0–2 hours)' | 'Same-Day (2–6 hours)' | 'Urgent (Within 24 hours)';
  symptoms: string[];
  immediateAction: string[];
  clinicTreatment: string;
}

export const EMERGENCY_CONDITIONS: EmergencyCondition[] = [
  { id: 'active-leak', title: 'Active roof leak', urgency: 'Same-Day (2–6 hours)', symptoms: ['Water dripping through the ceiling', 'A damp patch growing during rain'], immediateAction: ['Move people and belongings away from the wet area.', 'If safe, collect dripping water. Keep away from electrical fittings affected by water.', 'Do not climb onto the roof during rain.'], clinicTreatment: 'Assessment of the leak and the repair options once the property can be accessed safely.' },
  { id: 'storm-damage', title: 'Roof tiles displaced by wind', urgency: 'Urgent (Within 24 hours)', symptoms: ['Tiles on the ground or out of place', 'Areas of the roof exposed'], immediateAction: ['Keep clear of loose materials.', 'Photograph visible damage from the ground if safe.', 'Do not climb onto the roof or try to replace tiles yourself.'], clinicTreatment: 'Inspection of the affected roof areas when access is safe.' },
  { id: 'ceiling-water', title: 'Water near electrical fittings', urgency: 'Immediate (0–2 hours)', symptoms: ['Dampness near lights or sockets', 'Ceiling sagging or changing shape'], immediateAction: ['Leave the affected area and do not touch wet electrical equipment.', 'If there may be electrical danger, contact a qualified professional to isolate the power.', 'Seek emergency assistance if anyone or the property is in immediate danger.'], clinicTreatment: 'Make the property safe first; the roof can be assessed once the area is secure.' },
];

export interface BlogPost {
  slug: string;
  title: string;
  category: string;
  readTime: string;
  publishDate: string;
  lastUpdated: string;
  authorId: string;
  excerpt: string;
  leadImage: string;
  relatedServiceSlug: string;
  content: { intro: string; sections: { heading: string; body: string }[]; faqs?: { question: string; answer: string }[] };
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: 'signs-of-a-roof-leak', title: 'Signs of a roof leak: what to look for', category: 'Roof leaks', readTime: '4 min read', publishDate: '2026-10-08', lastUpdated: '2026-10-08', authorId: 'our-doctor',
    excerpt: 'Ceiling stains, drips and peeling paint can point to water ingress. Learn what to look for safely.', leadImage: projectPhotos[2], relatedServiceSlug: 'dental-implants',
    content: { intro: 'A damp patch can appear some distance from where water entered. Notice when it appears and record what you can see from the ground.', sections: [
      { heading: 'Signs to check', body: 'Drips, bubbling paint, a damp smell and displaced tiles are all reasons to arrange an inspection. They do not show the cause or the amount of repair work needed on their own.' },
      { heading: 'Stay safe while you wait', body: 'Move furniture and electronics away from water. Do not climb onto the roof, especially when it is wet, and keep away from lights or wiring affected by moisture.' },
    ], faqs: [{ question: 'Does a ceiling stain show the exact location of a leak?', answer: 'Not always. Water can travel along the roof structure before appearing inside, so the source needs to be assessed.' }] },
  },
  {
    slug: 'gutter-and-fascia-maintenance', title: 'Gutters and fascias: why maintenance matters', category: 'Maintenance', readTime: '4 min read', publishDate: '2026-10-08', lastUpdated: '2026-10-08', authorId: 'our-doctor',
    excerpt: 'Blockages and worn seals can affect drainage. Learn when to arrange an inspection.', leadImage: projectPhotos[3], relatedServiceSlug: 'root-canal',
    content: { intro: 'Gutters and fascias work with the roof to carry water away from walls and eaves. A check can help find visible blockages or wear.', sections: [
      { heading: 'Look for drainage issues', body: 'Overflowing gutters, standing water or damp marks nearby may need assessment. Leaves and debris can also block water flow.' },
      { heading: 'Put safety first', body: 'Do not attempt to clean or repair high areas without proper equipment and safe access. Arrange a professional assessment.' },
    ] },
  },
  {
    slug: 'checking-your-roof-after-a-storm', title: 'How to check your roof after a storm', category: 'Storm damage', readTime: '5 min read', publishDate: '2026-10-08', lastUpdated: '2026-10-08', authorId: 'our-doctor',
    excerpt: 'Learn which signs you can safely record from the ground and when to avoid accessing the roof.', leadImage: projectPhotos[5], relatedServiceSlug: 'cosmetic-dentistry',
    content: { intro: 'After heavy rain or wind, start by looking at the house from a safe place. Do not climb onto the roof to check loose materials.', sections: [
      { heading: 'Record visible damage', body: 'From the ground, photograph fallen tiles, displaced gutters or new damp patches. Note when water entered and which rooms were affected.' },
      { heading: 'When to seek help', body: 'Active leaks, exposed roof areas or water near electrical fittings need attention. Keep clear of unsafe areas and seek professional advice.' },
    ] },
  },
  {
    slug: 'when-to-replace-roof-tiles', title: 'When replacing roof tiles may be the right choice', category: 'Roof tiles', readTime: '4 min read', publishDate: '2026-10-08', lastUpdated: '2026-10-08', authorId: 'our-doctor',
    excerpt: 'Broken or displaced tiles can be a reason to assess the roof and the surrounding materials.', leadImage: projectPhotos[10], relatedServiceSlug: 'teeth-whitening',
    content: { intro: 'Not every issue means replacing the whole roof. An assessment considers the tile type, the condition of nearby materials and the reason for the damage.', sections: [
      { heading: 'Broken or displaced tiles', body: 'Tiles on the ground, visible gaps or exposed underlay are signs that should be checked by a team with safe access.' },
      { heading: 'What to consider', body: 'Availability of matching tiles, the roof structure and access all affect the scope and timing of repairs.' },
    ] },
  },
];
