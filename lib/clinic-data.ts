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
  primaryLocation: { street: string; suite: string; city: string; state: string; postalCode: string; country: string; directions: string; landmarks: string; coordinates?: { lat: number; lng: number } };
  contact: { phone: string; emergencyPhone: string; email?: string; whatsapp: string; website?: string };
  identityHighlights: string[];
  schedule: { day: string; hours: string; isOpenToday?: boolean; isEmergencyOnly?: boolean }[];
  verifiedStats: { value: number; suffix: string; label: string; description: string }[];
  accreditations: string[];
}

export const CLINIC_INFO: ClinicInformation = {
  name: 'East Coast Roofing',
  legalName: 'East Coast Roofing',
  tagline: 'Roof replacements, repairs and guttering across North Queensland.',
  primaryLocation: {
    street: '5 Boroko Cl', suite: '', city: 'Trinity Beach', state: 'Queensland', postalCode: '4879', country: 'Australia',
    directions: '5 Boroko Cl, Trinity Beach QLD 4879, Australia',
    landmarks: '6M6W+48 Trinity Beach, Queensland, Australia',
  },
  contact: { phone: '+61 430 964 182', emergencyPhone: '+61 430 964 182', whatsapp: '+61 430 964 182', website: 'https://roofingeastcoast.com.au/' },
  identityHighlights: ['Roofing contractor', 'Trinity Beach, North Queensland'],
  schedule: [
    { day: 'Monday', hours: '6:30 AM–5:00 PM' }, { day: 'Tuesday', hours: '6:30 AM–5:00 PM' },
    { day: 'Wednesday', hours: '6:30 AM–5:00 PM' }, { day: 'Thursday', hours: '6:30 AM–5:00 PM' },
    { day: 'Friday', hours: '6:30 AM–5:00 PM' }, { day: 'Saturday', hours: '6:30 AM–5:00 PM' }, { day: 'Sunday', hours: '9:00 AM–12:00 PM' },
  ],
  verifiedStats: [], accreditations: [],
};

const teamId = 'felix-and-the-team';
export const DENTISTS: DentistProfile[] = [{
  id: teamId, slug: 'felix-and-the-team', name: 'Felix and the team', title: 'Roofing team',
  qualifications: '', specialization: 'Roof replacements, repairs and guttering', experienceYears: 0,
  bio: 'Felix and the East Coast Roofing team help North Queensland homeowners with roof replacements, repairs, gutters and fascias, and roof maintenance. Customers value the team’s communication, repair photos and efficient service.',
  philosophy: 'Keep customers informed, share clear photos of work needed and completed, and take care with every roof.',
  education: [], memberships: [], specialties: ['Roof replacement', 'Roof repairs', 'Gutters and fascias', 'Roof maintenance'],
  image: '/images/jsroof-stock-01.jpg', warmImage: '/images/jsroof-stock-02.jpg',
}];

const photos = Array.from({ length: 17 }, (_, i) => `/images/jsroof-stock-${String(i + 1).padStart(2, '0')}.jpg`);

const makeService = (slug: string, name: string, tagline: string, description: string, needs: string[], benefits: string[], photo: number): ServiceDetail => ({
  slug, name, navLabel: name, tagline, shortDescription: description, clinicalExplanation: description,
  whoNeeds: needs, benefits,
  indications: needs.map((condition) => ({ condition, explanation: `Talk with the team about your roof, what you have noticed and the options for ${condition.toLowerCase()}.` })),
  procedureSteps: [
    { stepNumber: 1, title: 'Tell us about your roof', duration: 'Initial conversation', description: 'Share what you have noticed and what you would like to have done.', clinicalDetails: 'The team discusses your property, roof and project requirements.' },
    { stepNumber: 2, title: 'Inspect and quote', duration: 'By arrangement', description: 'Arrange an on-site assessment and a quote for the agreed work.', clinicalDetails: 'The scope and price are discussed before work begins.' },
    { stepNumber: 3, title: 'Complete the roofing work', duration: 'As agreed', description: 'Felix and the team carry out the agreed work using quality materials.', clinicalDetails: 'Scheduling depends on the project, site and weather.' },
    { stepNumber: 4, title: 'Review the finished work', duration: 'On completion', description: 'The team shares updates and photos of the completed work.', clinicalDetails: 'Ask the team about any part of the finished project.' },
  ],
  recoveryTimeline: [
    { period: 'Before work', expectedSensations: 'The team discusses the roof, scope, timing and access.', careProtocol: 'Share your address, project details and any access considerations.' },
    { period: 'During work', expectedSensations: 'Work duration varies with the property and project scope.', careProtocol: 'Keep clear of the work area and follow the team’s site guidance.' },
    { period: 'After work', expectedSensations: 'The finished roof is ready for a review.', careProtocol: 'Contact the team with any questions about the completed work.' },
  ],
  costTransparency: { baseRange: 'Request a quote for your property.', factors: ['Roof size and condition', 'Materials and agreed scope', 'Access and site conditions'], whatIsIncluded: ['On-site discussion of the work', 'An agreed scope and quote', 'Updates and photos of work completed'], note: 'Price and timing are confirmed after the team discusses your property and the work required.' },
  beforeAfterCase: { category: name, clinicalContext: 'Roofing imagery is illustrative. The work required depends on the roof and agreed project scope.', beforeLabel: 'Roofing reference', afterLabel: 'Roofing reference', beforeImage: photos[photo % photos.length], afterImage: photos[(photo + 1) % photos.length], timeframe: 'Illustrative roofing images' },
  assignedDentistId: teamId,
  faqs: [
    { question: `What does ${name.toLowerCase()} involve?`, answer: `${description} The team can discuss your roof, the work involved and suitable next steps.` },
    { question: 'What affects the quote?', answer: 'The size and condition of the roof, selected materials, access and agreed work all affect the quote. The team will discuss these details with you.' },
    { question: 'How long will the work take?', answer: 'Timing depends on the roof, materials, access, project scope and weather. The team will discuss a suitable schedule with you.' },
    { question: 'How can I prepare for an assessment?', answer: 'Share what you have noticed and any access details. Photos taken safely from the ground can help explain the issue. Please do not climb onto the roof.' },
    { question: 'How do I arrange a quote?', answer: 'Call East Coast Roofing on +61 430 964 182 or use the quote form to discuss your property and next steps.' },
  ],
});

export const SERVICES: ServiceDetail[] = [
  makeService('roof-replacement', 'Roof Replacement', 'A durable new roof for your North Queensland home.', 'Replace an ageing or damaged roof with quality materials and expert installation suited to North Queensland conditions. The current offer includes free gutters and downpipes with every Colorbond re-roof.', ['An ageing or worn roof', 'A roof with extensive damage', 'A planned Colorbond roof upgrade'], ['Discuss materials and project scope for your property', 'Protect your home with a new roof', 'Free gutters and downpipes with every Colorbond re-roof'], 4),
  makeService('roof-repairs', 'Roof Repairs', 'Reliable repairs for leaks, storm damage and wear.', 'The team handles roof repairs for leaks, storm damage and everyday wear, with photos and clear communication about work needed and completed.', ['A roof leak or water entry', 'Storm damage or displaced materials', 'Roofing that needs repair'], ['Understand the work needed through clear communication', 'Receive updates and photos of repairs', 'Arrange a repair without an extended wait where available'], 2),
  makeService('gutters-and-fascias', 'Gutters & Fascias', 'Gutter and fascia work that protects your roofline.', 'East Coast Roofing installs and repairs gutters and fascias to help manage rainwater and refresh your home’s roofline.', ['New gutters or downpipes', 'Damaged or worn gutters and fascias', 'Water drainage concerns'], ['Discuss guttering suited to your roof', 'Help direct rainwater away from your property', 'Refresh your roofline'], 12),
  makeService('roof-maintenance', 'Roof Maintenance', 'Practical maintenance to help care for your roof.', 'Regular roof maintenance helps identify issues early and keep your roof performing well. Discuss the condition of your roof and the work it needs with the team.', ['A roof needing routine attention', 'Concerns about roof condition', 'Preventative maintenance planning'], ['Discuss visible issues and practical next steps', 'Address smaller concerns before they grow', 'Keep your roof in good working order'], 10),
];

export interface EmergencyCondition { id: string; title: string; urgency: 'Immediate (0–2 hours)' | 'Same-Day (2–6 hours)' | 'Urgent (Within 24 hours)'; symptoms: string[]; immediateAction: string[]; clinicTreatment: string; }
export const EMERGENCY_CONDITIONS: EmergencyCondition[] = [
  { id: 'active-leak', title: 'Active roof leak', urgency: 'Same-Day (2–6 hours)', symptoms: ['Water entering through the roof', 'A growing damp patch during rain'], immediateAction: ['Move people and belongings away from the wet area.', 'Keep clear of electrical fittings affected by water.', 'Do not climb onto the roof during rain.'], clinicTreatment: 'Call East Coast Roofing to discuss the leak and arrange next steps when the property can be accessed safely.' },
  { id: 'storm-damage', title: 'Storm damage', urgency: 'Urgent (Within 24 hours)', symptoms: ['Roofing materials displaced by wind', 'An exposed area of roof'], immediateAction: ['Keep clear of loose materials.', 'Photograph visible damage from the ground if safe.', 'Do not climb onto the roof or attempt repairs yourself.'], clinicTreatment: 'The team can discuss an inspection when access is safe.' },
  { id: 'ceiling-water', title: 'Water near electrical fittings', urgency: 'Immediate (0–2 hours)', symptoms: ['Dampness near lights or sockets', 'A sagging or changing ceiling'], immediateAction: ['Leave the affected area and do not touch wet electrical equipment.', 'Contact a qualified professional if electrical power needs to be isolated.', 'Seek emergency assistance if anyone or the property is in immediate danger.'], clinicTreatment: 'Make the property safe first; roof work can be discussed when the area is secure.' },
];

export interface BlogPost { slug: string; title: string; category: string; readTime: string; publishDate: string; lastUpdated: string; authorId: string; excerpt: string; leadImage: string; relatedServiceSlug: string; content: { intro: string; sections: { heading: string; body: string }[]; faqs?: { question: string; answer: string }[] }; }
export const BLOG_POSTS: BlogPost[] = [
  { slug: 'signs-your-roof-needs-repair', title: 'Signs your roof may need repair', category: 'Roof Repairs', readTime: '3 min read', publishDate: '2026-10-18', lastUpdated: '2026-10-18', authorId: teamId, excerpt: 'Leaks, damaged roofing materials and damp patches can be reasons to arrange a roof assessment.', leadImage: photos[2], relatedServiceSlug: 'roof-repairs', content: { intro: 'Roof issues are not always obvious from inside the home. A leak or visible damage is a useful reason to ask a roofing contractor to assess the roof and discuss next steps.', sections: [{ heading: 'Look for signs from the ground', body: 'After bad weather, look for displaced materials or damage from a safe position on the ground. Do not climb onto a roof to inspect or repair it yourself.' }, { heading: 'Notice changes inside', body: 'Water marks or damp patches may point to a roof leak. Keep people and belongings away from affected areas and be cautious around electrical fittings.' }] } },
  { slug: 'planning-a-roof-replacement', title: 'Planning a roof replacement', category: 'Roof Replacement', readTime: '4 min read', publishDate: '2026-10-18', lastUpdated: '2026-10-18', authorId: teamId, excerpt: 'Discuss roof condition, Colorbond materials, access and timing before replacement work begins.', leadImage: photos[4], relatedServiceSlug: 'roof-replacement', content: { intro: 'A roof replacement starts with understanding the property, the roof condition and the work involved. Discuss materials and project scope with your roofing contractor before agreeing on a plan.', sections: [{ heading: 'Talk through the roof and materials', body: 'The existing roof and the needs of the property help guide material options and the scope of work.' }, { heading: 'Agree timing and access', body: 'Access, site conditions and weather can affect scheduling. Confirm the arrangements and quote before work starts.' }] } },
  { slug: 'roof-maintenance-and-gutters', title: 'Roof maintenance and guttering', category: 'Roof Maintenance', readTime: '3 min read', publishDate: '2026-10-18', lastUpdated: '2026-10-18', authorId: teamId, excerpt: 'Good drainage and regular attention help care for your roof and property.', leadImage: photos[12], relatedServiceSlug: 'gutters-and-fascias', content: { intro: 'Gutters form part of the roof drainage system. If they are damaged or not draining as expected, discuss the condition with a roofing contractor.', sections: [{ heading: 'Pay attention to drainage', body: 'Overflowing or damaged guttering may need maintenance or replacement. Describe what you have noticed when arranging an assessment.' }, { heading: 'Keep access safe', body: 'Avoid climbing ladders or working at height without the right training and equipment. Contact a qualified contractor to discuss the work.' }] } },
  { slug: 'what-to-do-after-storm-roof-damage', title: 'What to do after storm damage to a roof', category: 'Roof Repairs', readTime: '3 min read', publishDate: '2026-10-18', lastUpdated: '2026-10-18', authorId: teamId, excerpt: 'Keep clear of loose roofing materials and contact a contractor to discuss safe next steps.', leadImage: photos[16], relatedServiceSlug: 'roof-repairs', content: { intro: 'Storms can dislodge or damage roofing materials. Keep people away from affected areas and do not climb onto the roof to inspect it.', sections: [{ heading: 'Make the area safe', body: 'Keep clear of loose materials and move people and belongings away from any water entering the property. Be cautious around wet electrical fittings.' }, { heading: 'Get advice', body: 'Photograph visible damage from the ground if safe, then contact a roofing contractor to discuss inspection and repairs.' }] } },
];
