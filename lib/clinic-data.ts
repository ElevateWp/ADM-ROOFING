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
  name: 'DJ Maintenance & Construction',
  legalName: 'DJ Maintenance & Construction',
  tagline: 'Roof restoration and repairs in Mount Gambier.',
  primaryLocation: {
    street: '77 Brownes Rd', suite: '', city: 'Mount Gambier', state: 'South Australia', postalCode: '5290', country: 'Australia',
    directions: '77 Brownes Rd, Mount Gambier SA 5290, Australia',
    landmarks: '5QG6+FG Mount Gambier, South Australia, Australia',
  },
  contact: { phone: '+61 448 752 232', emergencyPhone: '+61 448 752 232', whatsapp: '+61 448 752 232', website: 'https://djroofrestorationandrepairs.com.au/', email: 'djbbuilding@gmail.com' },
  identityHighlights: ['Roofing contractor', 'Mount Gambier, South Australia'],
  schedule: [
    { day: 'Monday', hours: '8:30 AM–3:30 PM' }, { day: 'Tuesday', hours: '8:30 AM–3:30 PM' },
    { day: 'Wednesday', hours: '8:30 AM–3:30 PM' }, { day: 'Thursday', hours: '8:30 AM–3:30 PM' },
    { day: 'Friday', hours: 'Closed' }, { day: 'Saturday', hours: 'Closed' }, { day: 'Sunday', hours: 'Closed' },
  ],
  verifiedStats: [], accreditations: [],
};

const teamId = 'dino-and-team';
export const DENTISTS: DentistProfile[] = [{
  id: teamId, slug: 'dino-and-the-team', name: 'Dino and the team', title: 'Roof restoration and maintenance team',
  qualifications: '', specialization: 'Roof restoration, repairs and construction', experienceYears: 0,
  bio: 'DJ Maintenance & Construction helps homeowners in Mount Gambier with roof restoration, repairs, replacement and related roofing work. Customers have praised the team’s communication, quality of work and the fresh look of their roofs, gutters and roller doors.',
  philosophy: 'Listen to what the property needs, explain the work clearly and take care with the finished result.',
  education: [], memberships: [], specialties: ['Roof restoration', 'Roof repairs', 'Roof replacement', 'Guttering', 'Shed installation and repairs'],
  image: '/images/jsroof-stock-01.jpg', warmImage: '/images/jsroof-stock-02.jpg',
}];

const photos = Array.from({ length: 17 }, (_, i) => `/images/jsroof-stock-${String(i + 1).padStart(2, '0')}.jpg`);

const makeService = (slug: string, name: string, tagline: string, description: string, needs: string[], benefits: string[], photo: number): ServiceDetail => ({
  slug, name, navLabel: name, tagline, shortDescription: description, clinicalExplanation: description,
  whoNeeds: needs, benefits,
  indications: needs.map((condition) => ({ condition, explanation: `We can discuss the roof, the issue you have noticed and the suitable options for ${condition.toLowerCase()}.` })),
  procedureSteps: [
    { stepNumber: 1, title: 'Tell us about the roof', duration: 'Initial conversation', description: 'Share what you have noticed and what you would like to have done.', clinicalDetails: 'We discuss the property, the roof and the work you have in mind.' },
    { stepNumber: 2, title: 'Assess and quote', duration: 'By arrangement', description: 'The team reviews the job and explains the proposed scope and price.', clinicalDetails: 'The work is agreed with you before it begins.' },
    { stepNumber: 3, title: 'Carry out the work', duration: 'As agreed', description: 'The team completes the agreed roofing or maintenance work.', clinicalDetails: 'Timing depends on the roof, access, materials and weather.' },
    { stepNumber: 4, title: 'Review the finish', duration: 'On completion', description: 'Review the completed work with the team.', clinicalDetails: 'Any questions about the completed work can be discussed with the team.' },
  ],
  recoveryTimeline: [
    { period: 'Before work', expectedSensations: 'The scope, timing and access arrangements are discussed.', careProtocol: 'Share details about the roof and any access considerations.' },
    { period: 'During work', expectedSensations: 'Work duration varies with the roof and agreed scope.', careProtocol: 'Keep clear of the work area and follow the team’s site guidance.' },
    { period: 'After work', expectedSensations: 'The completed work is ready for a review.', careProtocol: 'Contact the team with any questions about the work completed.' },
  ],
  costTransparency: { baseRange: 'Request a quote for your property.', factors: ['Roof condition and size', 'Materials and agreed scope', 'Access and site conditions'], whatIsIncluded: ['Discussion of the work required', 'Agreed roofing scope', 'Review of the finished work'], note: 'Price and timing are confirmed with the team after discussing the property and work.' },
  beforeAfterCase: { category: name, clinicalContext: 'Roofing imagery is illustrative. The work required depends on the roof and agreed project scope.', beforeLabel: 'Roofing reference', afterLabel: 'Roofing reference', beforeImage: photos[photo % photos.length], afterImage: photos[(photo + 1) % photos.length], timeframe: 'Illustrative roofing images' },
  assignedDentistId: teamId,
  faqs: [
    { question: `What does ${name.toLowerCase()} involve?`, answer: `${description} The exact work is discussed and agreed with you after reviewing your property and requirements.` },
    { question: 'What can affect the quote?', answer: 'The size and condition of the property, the materials selected, site access and the agreed scope can all affect the price. The team will discuss these factors with you before work begins.' },
    { question: 'How long will the work take?', answer: 'Timing depends on the work required, materials, access, site conditions and weather. The team will discuss a suitable schedule with you as part of the quote.' },
    { question: 'How can I prepare for a discussion or site visit?', answer: 'Share what you have noticed, your property details and any access considerations. Photos taken safely from the ground can also help explain the issue. Please do not climb onto the roof.' },
    { question: 'How do I arrange a quote?', answer: 'Call DJ Maintenance & Construction on +61 448 752 232 or use the request-a-quote form to discuss the property and next steps.' },
  ],
});

export const SERVICES: ServiceDetail[] = [
  makeService('roof-installation', 'Roof Installation', 'Roofing planned around your property and project.', 'Roof installation for roofing projects, with materials and scope discussed for the property before work begins.', ['A new roof for a residential or commercial property', 'A roofing project as part of new construction'], ['Discuss suitable materials and project scope', 'Agree the work and timing before starting'], 0),
  makeService('roof-repairs', 'Roof Repairs', 'Address roof damage and leaks with practical repair work.', 'Roof repairs for issues such as leaks and damaged roofing. The team can discuss what you have noticed and the work needed.', ['A roof leak or water entry', 'Damaged or displaced roofing materials', 'Roof maintenance and repair needs'], ['Discuss the visible issue and roof condition', 'Arrange repair work to suit the agreed scope'], 2),
  makeService('roof-replacement', 'Roof Replacement', 'Renew an ageing or significantly damaged roof.', 'Roof replacement for properties where the roof has reached the end of its service life or has significant damage.', ['An ageing roof', 'Significant roof damage', 'A planned roof renewal'], ['Plan replacement work for your property', 'Discuss materials, scope and timing'], 4),
  makeService('shed-installation', 'Shed Installation', 'Add a practical shed or workspace to your property.', 'Shed design and construction for additional storage, a workshop or a useful work space.', ['Additional storage space', 'A workshop or functional work area', 'A new shed for a home or commercial property'], ['Discuss the intended use and layout', 'Plan a shed to suit the property'], 6),
  makeService('shed-repairs-restoration', 'Shed Repairs & Restoration', 'Restore a shed’s appearance and function.', 'Shed repairs and restoration to help bring an existing structure back into good working order.', ['A damaged or ageing shed', 'Roof or exterior repairs', 'A shed needing restoration work'], ['Discuss the condition and work required', 'Restore the shed for continued use'], 8),
  makeService('roof-inspections', 'Roof Inspections', 'Understand the condition of your roof and maintenance needs.', 'Roof inspections to identify visible issues and discuss maintenance or repairs for your property.', ['A roof condition check', 'Concerns after severe weather', 'Planning maintenance or repairs'], ['Identify areas that may need attention', 'Discuss practical next steps'], 10),
  makeService('gutter-installation-maintenance', 'Gutter Installation & Maintenance', 'Keep rainwater moving away from your property.', 'Gutter installation and maintenance to support proper drainage and help protect your property from water damage.', ['New guttering', 'Gutters needing maintenance', 'Drainage concerns around the property'], ['Discuss guttering options for your roof', 'Help maintain effective rainwater drainage'], 12),
  makeService('custom-roofing-projects', 'Custom Roofing Projects', 'Roofing and shed solutions for individual project needs.', 'Tailored solutions for unique roofing, shed and construction projects, discussed with you to establish the right scope.', ['A project that needs a tailored roofing solution', 'A non-standard shed or roof requirement'], ['Plan around the needs of your property', 'Discuss the project directly with the team'], 14),
  makeService('emergency-roof-repairs', 'Emergency Roof Repairs', 'Discuss urgent roof damage and the safest next steps.', 'Urgent roofing repairs for issues such as storm damage and severe leaks. Contact the team to discuss your situation and access.', ['Storm damage', 'A severe roof leak', 'Urgent damage needing attention'], ['Talk through the issue and safe next steps', 'Arrange an assessment when access is safe'], 16),
];

export interface EmergencyCondition { id: string; title: string; urgency: 'Immediate (0–2 hours)' | 'Same-Day (2–6 hours)' | 'Urgent (Within 24 hours)'; symptoms: string[]; immediateAction: string[]; clinicTreatment: string; }
export const EMERGENCY_CONDITIONS: EmergencyCondition[] = [
  { id: 'active-leak', title: 'Active roof leak', urgency: 'Same-Day (2–6 hours)', symptoms: ['Water entering through the roof', 'A growing damp patch during rain'], immediateAction: ['Move people and belongings away from the wet area.', 'Keep clear of electrical fittings affected by water.', 'Do not climb onto the roof during rain.'], clinicTreatment: 'Contact the team to discuss the leak and arrange next steps when the property can be accessed safely.' },
  { id: 'storm-damage', title: 'Storm damage', urgency: 'Urgent (Within 24 hours)', symptoms: ['Roofing materials displaced by wind', 'An exposed area of roof'], immediateAction: ['Keep clear of loose materials.', 'Photograph visible damage from the ground if safe.', 'Do not climb onto the roof or attempt repairs yourself.'], clinicTreatment: 'The team can discuss an inspection when access is safe.' },
  { id: 'ceiling-water', title: 'Water near electrical fittings', urgency: 'Immediate (0–2 hours)', symptoms: ['Dampness near lights or sockets', 'A sagging or changing ceiling'], immediateAction: ['Leave the affected area and do not touch wet electrical equipment.', 'Contact a qualified professional if electrical power needs to be isolated.', 'Seek emergency assistance if anyone or the property is in immediate danger.'], clinicTreatment: 'Make the property safe first; roof work can be discussed when the area is secure.' },
];

export interface BlogPost { slug: string; title: string; category: string; readTime: string; publishDate: string; lastUpdated: string; authorId: string; excerpt: string; leadImage: string; relatedServiceSlug: string; content: { intro: string; sections: { heading: string; body: string }[]; faqs?: { question: string; answer: string }[] }; }
export const BLOG_POSTS: BlogPost[] = [
  { slug: 'signs-your-roof-needs-repair', title: 'Signs your roof may need repair', category: 'Roof Repairs', readTime: '3 min read', publishDate: '2026-10-18', lastUpdated: '2026-10-18', authorId: teamId, excerpt: 'Leaks, damaged roofing materials and damp patches can all be reasons to arrange a roof assessment.', leadImage: photos[2], relatedServiceSlug: 'roof-repairs', content: { intro: 'Roof issues are not always obvious from inside the home. A leak or visible damage is a useful reason to ask a roofing contractor to assess the roof and discuss next steps.', sections: [{ heading: 'Look for signs from the ground', body: 'After bad weather, look for displaced materials or damage from a safe position on the ground. Do not climb onto a roof to inspect or repair it yourself.' }, { heading: 'Notice changes inside', body: 'Water marks or damp patches may point to a roof leak. Keep people and belongings away from affected areas and be cautious around electrical fittings.' }] } },
  { slug: 'planning-a-roof-replacement', title: 'Planning a roof replacement', category: 'Roof Replacement', readTime: '4 min read', publishDate: '2026-10-18', lastUpdated: '2026-10-18', authorId: teamId, excerpt: 'Discuss the roof condition, materials, access and project timing before replacement work begins.', leadImage: photos[4], relatedServiceSlug: 'roof-replacement', content: { intro: 'A roof replacement starts with understanding the property, the roof condition and the work involved. Discuss materials and project scope with your roofing contractor before agreeing on a plan.', sections: [{ heading: 'Talk through the roof and materials', body: 'The existing roof and the needs of the property help guide material options and the scope of work.' }, { heading: 'Agree timing and access', body: 'Access, site conditions and weather can affect scheduling. Confirm the arrangements and quote before work starts.' }] } },
  { slug: 'roof-maintenance-and-gutters', title: 'Roof maintenance and guttering', category: 'Guttering', readTime: '3 min read', publishDate: '2026-10-18', lastUpdated: '2026-10-18', authorId: teamId, excerpt: 'Good drainage helps direct rainwater away from your roof and property.', leadImage: photos[12], relatedServiceSlug: 'gutter-installation-maintenance', content: { intro: 'Gutters form part of the roof drainage system. If they are damaged or not draining as expected, discuss the condition with a roofing contractor.', sections: [{ heading: 'Pay attention to drainage', body: 'Overflowing or damaged guttering may need maintenance or replacement. Describe what you have noticed when arranging an assessment.' }, { heading: 'Keep access safe', body: 'Avoid climbing ladders or working at height without the right training and equipment. Contact a qualified contractor to discuss the work.' }] } },
  { slug: 'what-to-do-after-storm-roof-damage', title: 'What to do after storm damage to a roof', category: 'Emergency Repairs', readTime: '3 min read', publishDate: '2026-10-18', lastUpdated: '2026-10-18', authorId: teamId, excerpt: 'Keep clear of loose roofing materials and contact a contractor to discuss safe next steps.', leadImage: photos[16], relatedServiceSlug: 'emergency-roof-repairs', content: { intro: 'Storms can dislodge or damage roofing materials. Keep people away from affected areas and do not climb onto the roof to inspect it.', sections: [{ heading: 'Make the area safe', body: 'Keep clear of loose materials and move people and belongings away from any water entering the property. Be cautious around wet electrical fittings.' }, { heading: 'Get advice', body: 'Photograph visible damage from the ground if safe, then contact a roofing contractor to discuss inspection and repairs.' }] } },
];
