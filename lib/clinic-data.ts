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
  name: 'Roofsmart Sussex Limited',
  legalName: 'Roofsmart Sussex Limited',
  tagline: 'Roofing and chimney repair in Bexhill-on-Sea and Sussex.',
  primaryLocation: {
    street: '28 Wilton Rd', suite: '', city: 'Bexhill-on-Sea', state: 'East Sussex', postalCode: 'TN40 1EZ', country: 'United Kingdom',
    directions: '28 Wilton Rd, Bexhill-on-Sea TN40 1EZ, United Kingdom',
    landmarks: 'RFQG+P8 Bexhill-on-Sea, United Kingdom',
  },
  contact: { phone: '+44 7576 557747', emergencyPhone: '+44 7576 557747', whatsapp: '+44 7576 557747' },
  identityHighlights: ['Roofing contractor', 'Bexhill-on-Sea, East Sussex'],
  schedule: [{ day: 'Every day', hours: 'Open 24 hours' }],
  verifiedStats: [{ value: 23, suffix: '', label: '5-star Google reviews', description: 'Customers highlight workmanship, prompt service and polite, professional staff.' }], accreditations: [],
};

const teamId = 'felix-and-the-team';
export const DENTISTS: DentistProfile[] = [{
  id: teamId, slug: 'pete-and-the-team', name: 'Pete and the team', title: 'Roofing team',
  qualifications: '', specialization: 'Roofing work and chimney repairs', experienceYears: 0,
  bio: 'Pete and his team carry out roofing work and extensive chimney repairs in Bexhill-on-Sea and the surrounding area. Customers describe the team as professional, polite, punctual and considerate, and praise the quality of their workmanship.',
  philosophy: 'Careful workmanship, friendly service and fair pricing.',
  education: [], memberships: [], specialties: ['Roof repairs', 'Chimney repairs', 'Roofing work'],
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
    { stepNumber: 3, title: 'Complete the roofing work', duration: 'As agreed', description: 'Pete and the team carry out the agreed roofing work.', clinicalDetails: 'Scheduling depends on the project, site and weather.' },
    { stepNumber: 4, title: 'Review the finished work', duration: 'On completion', description: 'Review the completed work with the team.', clinicalDetails: 'Ask the team about any part of the finished project.' },
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
    { question: 'How do I arrange a quote?', answer: 'Call Roofsmart Sussex Limited on +44 7576 557747 to discuss your property and the work required.' },
  ],
});

export const SERVICES: ServiceDetail[] = [
  makeService('roofing-work', 'Roofing Work', 'Professional roofing work for your property.', 'Roofsmart Sussex Limited carries out roofing work in Bexhill-on-Sea and the surrounding area. Contact the team to discuss the work needed for your roof.', ['Roofing work at your property', 'A roof needing professional attention', 'A roofing project to discuss'], ['Discuss the work required with an experienced roofing team', 'Get a quote based on your roof and project', 'Arrange work with a local roofing contractor'], 4),
  makeService('roof-repairs', 'Roof Repairs', 'Prompt, professional roof repairs.', 'Roofsmart Sussex Limited carries out roof repairs. Customers report responsive service, fair pricing and work completed shortly after receiving a quote.', ['Roofing that needs repair', 'A roof issue that needs assessment', 'A repair quote for your property'], ['Responsive service', 'Fair pricing praised by customers', 'Workmanship customers recommend'], 2),
  makeService('roofing-and-chimney-work', 'Roofing & Chimney Work', 'Skilled work on roofs and chimneys.', 'The team carries out roofing work, including extensive chimney repairs. Contact Roofsmart Sussex Limited to discuss your property and the work you need.', ['Chimney repairs', 'Roofing work at your property', 'A quote for roof or chimney work'], ['Experienced roofing contractor', 'Careful attention to chimney repairs', 'Professional, considerate service'], 12),
  makeService('chimney-repairs', 'Chimney Repairs', 'Careful chimney repair work by a local roofing team.', 'Roofsmart Sussex Limited carries out extensive chimney repairs. Customers praise the attentive care and quality of workmanship shown on chimney repair projects.', ['A chimney requiring repair', 'Extensive chimney repair work', 'A quote for chimney work'], ['Attentive care during repairs', 'Quality workmanship praised by customers', 'Professional and polite service'], 10),
];

export interface EmergencyCondition { id: string; title: string; urgency: 'Immediate (0–2 hours)' | 'Same-Day (2–6 hours)' | 'Urgent (Within 24 hours)'; symptoms: string[]; immediateAction: string[]; clinicTreatment: string; }
export const EMERGENCY_CONDITIONS: EmergencyCondition[] = [
  { id: 'active-leak', title: 'Active roof leak', urgency: 'Same-Day (2–6 hours)', symptoms: ['Water entering through the roof', 'A growing damp patch during rain'], immediateAction: ['Move people and belongings away from the wet area.', 'Keep clear of electrical fittings affected by water.', 'Do not climb onto the roof during rain.'], clinicTreatment: 'Call Roofsmart Sussex Limited to discuss the leak and arrange next steps when the property can be accessed safely.' },
  { id: 'storm-damage', title: 'Storm damage', urgency: 'Urgent (Within 24 hours)', symptoms: ['Roofing materials displaced by wind', 'An exposed area of roof'], immediateAction: ['Keep clear of loose materials.', 'Photograph visible damage from the ground if safe.', 'Do not climb onto the roof or attempt repairs yourself.'], clinicTreatment: 'The team can discuss an inspection when access is safe.' },
  { id: 'ceiling-water', title: 'Water near electrical fittings', urgency: 'Immediate (0–2 hours)', symptoms: ['Dampness near lights or sockets', 'A sagging or changing ceiling'], immediateAction: ['Leave the affected area and do not touch wet electrical equipment.', 'Contact a qualified professional if electrical power needs to be isolated.', 'Seek emergency assistance if anyone or the property is in immediate danger.'], clinicTreatment: 'Make the property safe first; roof work can be discussed when the area is secure.' },
];

export interface BlogPost { slug: string; title: string; category: string; readTime: string; publishDate: string; lastUpdated: string; authorId: string; excerpt: string; leadImage: string; relatedServiceSlug: string; content: { intro: string; sections: { heading: string; body: string }[]; faqs?: { question: string; answer: string }[] }; }
export const BLOG_POSTS: BlogPost[] = [
  { slug: 'signs-your-roof-needs-repair', title: 'Signs your roof may need repair', category: 'Roof Repairs', readTime: '3 min read', publishDate: '2026-10-18', lastUpdated: '2026-10-18', authorId: teamId, excerpt: 'Leaks, damaged roofing materials and damp patches can be reasons to arrange a roof assessment.', leadImage: photos[2], relatedServiceSlug: 'roof-repairs', content: { intro: 'Roof issues are not always obvious from inside the home. A leak or visible damage is a useful reason to ask a roofing contractor to assess the roof and discuss next steps.', sections: [{ heading: 'Look for signs from the ground', body: 'After bad weather, look for displaced materials or damage from a safe position on the ground. Do not climb onto a roof to inspect or repair it yourself.' }, { heading: 'Notice changes inside', body: 'Water marks or damp patches may point to a roof leak. Keep people and belongings away from affected areas and be cautious around electrical fittings.' }] } },
  { slug: 'planning-roofing-work', title: 'Planning roofing work', category: 'Roofing Work', readTime: '3 min read', publishDate: '2026-10-18', lastUpdated: '2026-10-18', authorId: teamId, excerpt: 'What to discuss when arranging roofing work for your property.', leadImage: photos[4], relatedServiceSlug: 'roofing-work', content: { intro: 'Start with a clear conversation about your property and the work you need. Ask your contractor to explain the proposed work, timing and quote before it begins.', sections: [{ heading: 'Describe what you need', body: 'Share what you have noticed and which parts of the roof need attention. Useful details help the contractor understand the work to discuss.' }, { heading: 'Review the quote', body: 'Confirm the agreed work and price before the job starts. Ask any questions you have about the project.' }] } },
  { slug: 'chimney-repairs', title: 'Arranging chimney repairs', category: 'Chimney Repairs', readTime: '3 min read', publishDate: '2026-10-18', lastUpdated: '2026-10-18', authorId: teamId, excerpt: 'Discuss the condition of your chimney and the repairs your property may need.', leadImage: photos[12], relatedServiceSlug: 'chimney-repairs', content: { intro: 'Chimney repairs can vary depending on the property and the condition of the chimney. Ask a roofing contractor to assess the work needed and explain the quote.', sections: [{ heading: 'Explain the concern', body: 'Tell the contractor what you have noticed and whether you have seen any changes to the chimney.' }, { heading: 'Ask about the work', body: 'Before the work starts, review the proposed repairs, timing and price with the contractor.' }] } },
  { slug: 'what-to-do-after-storm-roof-damage', title: 'What to do after storm damage to a roof', category: 'Roof Repairs', readTime: '3 min read', publishDate: '2026-10-18', lastUpdated: '2026-10-18', authorId: teamId, excerpt: 'Keep clear of loose roofing materials and contact a contractor to discuss safe next steps.', leadImage: photos[16], relatedServiceSlug: 'roof-repairs', content: { intro: 'Storms can dislodge or damage roofing materials. Keep people away from affected areas and do not climb onto the roof to inspect it.', sections: [{ heading: 'Make the area safe', body: 'Keep clear of loose materials and move people and belongings away from any water entering the property. Be cautious around wet electrical fittings.' }, { heading: 'Get advice', body: 'Photograph visible damage from the ground if safe, then contact a roofing contractor to discuss inspection and repairs.' }] } },
];
