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
  name: 'A-Z Home Improvements',
  legalName: 'A-Z Home Improvements',
  tagline: 'Where vision meets reality.',
  primaryLocation: {
    street: '176A Croham Valley Rd',
    suite: '',
    city: 'Croydon',
    state: 'Greater London',
    postalCode: 'CR2 7RB',
    country: 'United Kingdom',
    directions: '176A Croham Valley Rd, South Croydon CR2 7RB, United Kingdom',
    landmarks: '9W2P+FM South Croydon, United Kingdom',
  },
  contact: {
    phone: '+44 7809 835355',
    emergencyPhone: '+44 7809 835355',
    whatsapp: '+44 7809 835355',
    website: 'https://www.azhomeimprovements.co.uk/',
    email: '',
  },
  identityHighlights: ['Established 2002', 'South Croydon, Greater London'],
  schedule: [
    { day: 'Monday', hours: '7:30 AM–5:30 PM' },
    { day: 'Tuesday', hours: '7:30 AM–5:30 PM' },
    { day: 'Wednesday', hours: '7:30 AM–5:30 PM' },
    { day: 'Thursday', hours: '7:30 AM–5:30 PM' },
    { day: 'Friday', hours: '7:30 AM–5:30 PM' },
    { day: 'Saturday', hours: '7:30 AM–12:30 PM' },
    { day: 'Sunday', hours: 'Closed' },
  ],
  verifiedStats: [],
  accreditations: [],
};

export const DENTISTS: DentistProfile[] = [
  {
    id: 'home-improvements-team',
    slug: 'our-doctor',
    name: 'Nicholas and the A-Z team',
    title: 'Home improvement and building team',
    qualifications: 'Residential building and refurbishment',
    specialization: 'Extensions, conversions, renovations, kitchens and bathrooms',
    experienceYears: 24,
    bio: 'Nicholas and his team take on home improvement projects including extensions, loft and garage conversions, full refurbishments, kitchens and bathrooms in South Croydon and across South London.',
    philosophy: 'Clear communication, careful workmanship and attention to detail from the quotation through to completion.',
    education: [],
    memberships: [],
    specialties: ['Home extensions', 'Loft and garage conversions', 'Kitchens and bathrooms', 'Full home refurbishments'],
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
  indications: problems.map((condition) => ({ condition, explanation: `We discuss the scope, practical considerations and suitable options for ${condition.toLowerCase()}.` })),
  procedureSteps: [
    { stepNumber: 1, title: 'Discuss your project', duration: 'By appointment', description: 'We learn what you want to change and assess the property and scope.', clinicalDetails: 'The initial conversation helps define a practical plan for your home.' },
    { stepNumber: 2, title: 'Quotation and plan', duration: 'After assessment', description: 'We explain the proposed work, choices and timing before starting.', clinicalDetails: 'Costs and schedule are discussed with you before work begins.' },
    { stepNumber: 3, title: 'Building work', duration: 'As agreed', description: 'Nicholas and the team carry out the agreed improvements with care for your home.', clinicalDetails: 'The work follows the agreed scope and practical arrangements.' },
    { stepNumber: 4, title: 'Completion review', duration: 'At completion', description: 'We review the completed work with you and answer any questions.', clinicalDetails: 'The finished work is checked against the agreed project.' },
  ],
  recoveryTimeline: [
    { period: 'Before work begins', expectedSensations: 'We agree the project scope, choices and schedule with you.', careProtocol: 'Share your priorities and any details about the property that may affect the work.' },
    { period: 'During the work', expectedSensations: 'Timing depends on the project, materials and property.', careProtocol: 'We discuss access and practical arrangements before work starts.' },
    { period: 'After completion', expectedSensations: 'We walk through the completed work with you.', careProtocol: 'The team can answer questions about the work carried out.' },
  ],
  costTransparency: {
    baseRange: 'Request a quote after an assessment.',
    factors: ['Property and project scope', 'Materials and finishes selected', 'Access and work involved'],
    whatIsIncluded: ['Agreed scope of work', 'Discussion of planned materials and finishes', 'Review of completed work'],
    note: 'Pricing, timings and availability are confirmed with the team after discussing your project.',
  },
  beforeAfterCase: {
    category: name,
    clinicalContext: 'Illustrative images show residential properties. Project scope and finishes depend on the individual home and agreed work.',
    beforeLabel: 'Reference image one',
    afterLabel: 'Reference image two',
    beforeImage: projectPhotos[photoIndex % projectPhotos.length],
    afterImage: projectPhotos[(photoIndex + 1) % projectPhotos.length],
    timeframe: 'Illustrative stock images',
  },
  assignedDentistId: 'home-improvements-team',
  faqs,
});

export const SERVICES: ServiceDetail[] = [
  makeService(
    'dental-implants', 'Extensions and Home Additions', 'Extensions',
    'Create more room at home with a carefully planned extension.',
    'A home extension can add useful living space and change how your home works for your family. We discuss your plans, the property and the work involved before agreeing a scope.',
    ['More living or dining space', 'A larger or reconfigured kitchen', 'A new porch or side extension'],
    ['Discuss how you want to use the space', 'Plan the work around the existing home', 'Review the agreed finish with you'],
    [{ question: 'Can you help plan an extension to my home?', answer: 'We can discuss your ideas, assess the property and explain the building work and next steps for a suitable project.' }], 0,
  ),
  makeService(
    'root-canal', 'Loft and Garage Conversions', 'Conversions',
    'Make better use of your home with a loft or garage conversion.',
    'Converting a loft or garage can create a bedroom, living area, shower room or utility space. We discuss the intended use and the existing property so the work can be planned around your needs.',
    ['An unused loft or garage', 'A need for another bedroom or living area', 'A shower room or utility space at home'],
    ['Plan the layout around your needs', 'Coordinate the building and interior work', 'Complete the agreed details throughout'],
    [{ question: 'What can a garage conversion include?', answer: 'Past customer projects have included living space, a shower room and a utility room. The right layout depends on your property and plans.' }], 3,
  ),
  makeService(
    'teeth-whitening', 'Kitchens and Bathrooms', 'Kitchens and Bathrooms',
    'Update your kitchen or bathroom with considered planning and careful finishing.',
    'From a new kitchen layout to a complete bathroom refit, we coordinate the building and fitting work around the space and finishes you choose.',
    ['A new kitchen or changed layout', 'A complete bathroom refit', 'Updating rooms as part of a wider renovation'],
    ['Discuss your preferred layout and finishes', 'Coordinate the room refurbishment', 'Pay attention to the detail in the final fit'],
    [{ question: 'Do you carry out full bathroom refits?', answer: 'Yes. Customers describe full bathroom refits and new bathrooms as part of larger home projects. We discuss the details and scope with you.' }], 10,
  ),
  makeService(
    'dental-cleaning', 'Home Refurbishments', 'Refurbishments',
    'Refresh your home with coordinated renovation and finishing work.',
    'A home refurbishment can bring several rooms or the whole property together. We discuss the work you want completed and coordinate the agreed improvements across your home.',
    ['A whole-home renovation', 'Updating multiple rooms', 'Combining structural changes with interior finishing'],
    ['Agree the work across each room', 'Coordinate improvements and finishing', 'Keep attention on the details throughout'],
    [{ question: 'Can you take on several rooms in one project?', answer: 'Customer projects have included full home refurbishments alongside kitchens, bathrooms and extensions. We can discuss the scope of your project.' }], 12,
  ),
  makeService(
    'braces', 'Interior Finishing and Decorating', 'Finishing and Decorating',
    'Bring rooms together with considered interior finishing and detail work.',
    'Customer projects have included new coving and skirting, internal doors and decorating as part of bedroom and whole-home improvements.',
    ['Updating bedroom details and finishes', 'Replacing internal doors', 'Decorating as part of a wider refurbishment'],
    ['Discuss the details and finish you want', 'Coordinate finishing with the wider project', 'Take care over the completed details'],
    [{ question: 'Can you include smaller finishing work in a larger project?', answer: 'Customer projects have included coving, skirting, internal doors and decorating alongside other home improvements.' }], 1,
  ),
  makeService(
    'cosmetic-dentistry', 'Roofing and Lean-to Improvements', 'Roofing and Lean-tos',
    'Improve a lean-to or roof area as part of your home project.',
    'Customer projects have included replacing an old plastic lean-to roof with corrugated steel. The right materials and scope depend on the existing structure and your plans.',
    ['An ageing lean-to roof', 'A planned home extension or refurbishment', 'Roofing work that is part of a broader building project'],
    ['Discuss the existing structure and desired finish', 'Agree materials and work scope', 'Coordinate the roof work with the rest of the project'],
    [{ question: 'Can you replace a lean-to roof?', answer: 'A customer project included replacing an old plastic lean-to roof with corrugated steel. We can discuss your structure and the work required.' }], 5,
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
    slug: 'planning-a-home-extension', title: 'Planning a home extension around the way you live', category: 'Extensions', readTime: '4 min read', publishDate: '2026-10-13', lastUpdated: '2026-10-13', authorId: 'home-improvements-team',
    excerpt: 'Start with the space you need, how it should connect to your home and the details to discuss before work begins.', leadImage: projectPhotos[2], relatedServiceSlug: 'dental-implants',
    content: { intro: 'A useful extension begins with a clear idea of what is missing in your home. Think about how you use the existing rooms, where you want to spend time and how the new space should connect to the rest of the house.', sections: [
      { heading: 'Define the purpose of the new space', body: 'List what you want the extension to make possible, such as a larger kitchen, a dining area or more room for everyday living. This helps guide layout and finish choices.' },
      { heading: 'Discuss the property and scope', body: 'The existing house, access, materials and the work involved all affect the plan. Discuss the project and its practical details before agreeing a quotation and schedule.' },
    ], faqs: [{ question: 'What should I discuss first?', answer: 'Start with how you want to use the new space, then discuss the property, your priorities, possible finishes and the work involved.' }] },
  },
  {
    slug: 'making-more-of-a-garage', title: 'Making more of your garage space', category: 'Conversions', readTime: '4 min read', publishDate: '2026-10-13', lastUpdated: '2026-10-13', authorId: 'home-improvements-team',
    excerpt: 'A garage conversion can add living space, a shower room or a utility area. Begin by deciding how you want the room to work.', leadImage: projectPhotos[5], relatedServiceSlug: 'root-canal',
    content: { intro: 'If your garage is used mainly for storage, a conversion may be one way to make more use of the space at home. The right layout depends on the room, the existing property and what you want to add.', sections: [
      { heading: 'Choose how you will use the room', body: 'Consider whether you need a living area, a shower room, a utility space or a combination. The intended use helps shape the layout and the work required.' },
      { heading: 'Plan the connection to the home', body: 'Think about access, light, privacy and how the converted room will fit with nearby spaces. Discuss the existing structure and your priorities with the building team.' },
    ] },
  },
  {
    slug: 'planning-a-bathroom-refit', title: 'What to think about before a bathroom refit', category: 'Bathrooms', readTime: '4 min read', publishDate: '2026-10-13', lastUpdated: '2026-10-13', authorId: 'home-improvements-team',
    excerpt: 'A clear list of priorities can help you discuss layout, fittings and finishes for a new bathroom.', leadImage: projectPhotos[8], relatedServiceSlug: 'teeth-whitening',
    content: { intro: 'Before a bathroom refit, consider what works in the current room and what you would like to change. A short list of needs can help you compare layout and finish choices.', sections: [
      { heading: 'Set your priorities', body: 'Think about storage, access, lighting, fittings and the way the room is shared. Decide which details matter most to you before choosing finishes.' },
      { heading: 'Talk through the whole project', body: 'Discuss the room, the proposed changes and the work involved with your building team. Agree the project scope and timing before work begins.' },
    ], faqs: [{ question: 'Can a bathroom be part of a larger project?', answer: 'Yes. Customer projects have included new bathrooms alongside kitchen work, conversions and whole-home refurbishments.' }] },
  },
  {
    slug: 'organising-a-home-refurbishment', title: 'Getting ready for a home refurbishment', category: 'Refurbishments', readTime: '5 min read', publishDate: '2026-10-13', lastUpdated: '2026-10-13', authorId: 'home-improvements-team',
    excerpt: 'Bring your priorities, rooms and finish choices together before agreeing the scope of a home refurbishment.', leadImage: projectPhotos[12], relatedServiceSlug: 'dental-cleaning',
    content: { intro: 'A home refurbishment can cover several rooms or a full property. Start by listing what needs to change and how you want the home to feel and function when the work is finished.', sections: [
      { heading: 'List the work by room', body: 'Write down the changes you want in each space and note any work that connects rooms, such as a new kitchen layout or changes to circulation.' },
      { heading: 'Agree scope and sequence', body: 'Discuss the full list with the team so the work, materials and timing can be considered together. Confirm what is included before the project begins.' },
    ] },
  },
];
