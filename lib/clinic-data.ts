export interface DentistProfile {
  id: string; slug: string; name: string; title: string; qualifications: string;
  specialization: string; experienceYears: number; bio: string; philosophy: string;
  education: string[]; memberships: string[]; specialties: string[]; image: string; warmImage: string;
}

export interface ServiceDetail {
  slug: string; name: string; navLabel: string; tagline: string; shortDescription: string;
  clinicalExplanation: string; whoNeeds: string[]; benefits: string[];
  indications: { condition: string; explanation: string }[];
  procedureSteps: { stepNumber: number; title: string; duration: string; description: string; clinicalDetails: string }[];
  recoveryTimeline: { period: string; expectedSensations: string; careProtocol: string }[];
  costTransparency: { baseRange: string; factors: string[]; whatIsIncluded: string[]; note: string };
  beforeAfterCase: { category: string; clinicalContext: string; beforeLabel: string; afterLabel: string; beforeImage: string; afterImage: string; timeframe: string };
  assignedDentistId: string; faqs: { question: string; answer: string; relatedSlug?: string }[];
}

export interface ClinicInformation {
  name: string; legalName: string; tagline: string;
  primaryLocation: { street: string; suite: string; city: string; state: string; postalCode: string; country: string; directions: string; landmarks: string; coordinates?: { lat: number; lng: number } };
  contact: { phone: string; emergencyPhone: string; email?: string; whatsapp: string; website?: string };
  identityHighlights: string[]; schedule: { day: string; hours: string; isOpenToday?: boolean; isEmergencyOnly?: boolean }[];
  verifiedStats: { value: number; suffix: string; label: string; description: string }[]; accreditations: string[];
}

export const CLINIC_INFO: ClinicInformation = {
  name: 'G Sullivan Plumbing Pty Ltd', legalName: 'G Sullivan Plumbing Pty Ltd',
  tagline: 'Plumbing services for your property.',
  primaryLocation: { street: '', suite: '', city: '', state: '', postalCode: '', country: 'Australia', directions: '', landmarks: '' },
  contact: { phone: '0422 475 273', emergencyPhone: '0422 475 273', whatsapp: '0422 475 273' },
  identityHighlights: ['General plumbing', 'Repairs', 'Hot water systems', 'Blocked drains'], schedule: [], verifiedStats: [], accreditations: [],
};

const teamId = 'g-sullivan-plumbing-team';
export const DENTISTS: DentistProfile[] = [{
  id: teamId, slug: 'plumbing-team', name: 'G Sullivan Plumbing Team', title: 'Plumbing team',
  qualifications: '', specialization: 'Plumbing services and repairs', experienceYears: 0,
  bio: 'G Sullivan Plumbing Pty Ltd provides plumbing services and repairs. Get in touch to discuss the plumbing work you need.',
  philosophy: 'Clear communication and practical plumbing solutions.', education: [], memberships: [],
  specialties: ['General plumbing', 'Plumbing repairs', 'Hot water systems'],
  image: '/images/plumbing-technician.jpg', warmImage: '/images/plumbing-repair.jpg',
}];

const photos = [
  '/images/plumbing-radiator.jpg', '/images/plumbing-repair.jpg', '/images/plumbing-hot-water.jpg',
  '/images/plumbing-pipes.jpg', '/images/plumbing-technician.jpg',
  '/images/plumbing-radiator.jpg', '/images/plumbing-repair.jpg', '/images/plumbing-hot-water.jpg',
  '/images/plumbing-pipes.jpg', '/images/plumbing-technician.jpg',
  '/images/plumbing-radiator.jpg', '/images/plumbing-repair.jpg', '/images/plumbing-hot-water.jpg',
  '/images/plumbing-pipes.jpg', '/images/plumbing-technician.jpg',
  '/images/plumbing-repair.jpg', '/images/plumbing-pipes.jpg',
];
const serviceSpecs = [
  { slug: 'general-plumbing', name: 'General Plumbing', tagline: 'Everyday plumbing for your property.', description: 'Contact G Sullivan Plumbing Pty Ltd to discuss general plumbing work, from planned updates to plumbing issues that need attention.', needs: ['A plumbing issue at your property', 'A planned plumbing update', 'Advice about plumbing work'], photo: 0 },
  { slug: 'plumbing-repairs', name: 'Plumbing Repairs', tagline: 'Plumbing repairs, carefully planned.', description: 'Discuss plumbing repairs with G Sullivan Plumbing Pty Ltd. The right repair depends on the issue, the property and the work required.', needs: ['A leaking tap or pipe', 'A plumbing fault that needs assessment', 'A repair quote for your property'], photo: 1 },
  { slug: 'hot-water-systems', name: 'Hot Water Systems', tagline: 'Help with hot water system plumbing.', description: 'Get in touch to discuss hot water system plumbing, repairs or replacement options for your property.', needs: ['A hot water system issue', 'A planned hot water system update', 'Advice about hot water plumbing'], photo: 2 },
  { slug: 'blocked-drains', name: 'Blocked Drains', tagline: 'Drainage plumbing for blockages and flow issues.', description: 'Contact the team about a blocked drain or drainage issue. The cause and suitable next steps depend on the property and the plumbing assessment.', needs: ['A slow or blocked drain', 'A recurring drainage issue', 'A drainage assessment'], photo: 3 },
];

export const SERVICES: ServiceDetail[] = serviceSpecs.map((s) => ({
  slug: s.slug, name: s.name, navLabel: s.name, tagline: s.tagline,
  shortDescription: s.description, clinicalExplanation: s.description,
  whoNeeds: s.needs, benefits: ['Discuss your plumbing issue with the team', 'Understand the work involved before it begins', 'Request a quote for your property'],
  indications: s.needs.map((condition) => ({ condition, explanation: `Talk with the team about what you have noticed and possible next steps for ${condition.toLowerCase()}.` })),
  procedureSteps: [
    { stepNumber: 1, title: 'Tell us what is happening', duration: 'Initial conversation', description: 'Share the plumbing issue or work you have in mind.', clinicalDetails: 'The team will ask about your property and the plumbing work required.' },
    { stepNumber: 2, title: 'Assess and quote', duration: 'By arrangement', description: 'Discuss an assessment and a quote for the agreed work.', clinicalDetails: 'Scope, price and timing are discussed before work begins.' },
    { stepNumber: 3, title: 'Complete the plumbing work', duration: 'As agreed', description: 'The team carries out the agreed plumbing work.', clinicalDetails: 'Timing depends on the issue, property and work required.' },
    { stepNumber: 4, title: 'Review the work', duration: 'On completion', description: 'Review the completed work and ask any follow-up questions.', clinicalDetails: 'The team can explain the work completed at your property.' },
  ],
  recoveryTimeline: [
    { period: 'Before work', expectedSensations: 'Discuss the issue, access and scope with the team.', careProtocol: 'Share your address, what you have noticed and any access details.' },
    { period: 'During work', expectedSensations: 'Work duration depends on the property and plumbing issue.', careProtocol: 'Follow the team’s guidance around the work area.' },
    { period: 'After work', expectedSensations: 'Review the completed plumbing work.', careProtocol: 'Contact the team if you have questions about the work completed.' },
  ],
  costTransparency: { baseRange: 'Request a quote for your property.', factors: ['Type and scope of work', 'Parts and materials required', 'Property access and conditions'], whatIsIncluded: ['Discussion of the plumbing issue', 'Agreed scope and quote', 'Updates about the work'], note: 'Price and timing can be confirmed after the team understands the work required.' },
  beforeAfterCase: { category: s.name, clinicalContext: 'The work required depends on the plumbing issue and the property.', beforeLabel: 'Before work', afterLabel: 'Completed work', beforeImage: photos[s.photo], afterImage: photos[s.photo + 1], timeframe: 'Project timing varies' },
  assignedDentistId: teamId,
  faqs: [
    { question: `What does ${s.name.toLowerCase()} involve?`, answer: `${s.description} The team can discuss the issue and suitable next steps.` },
    { question: 'What affects the quote?', answer: 'The type and scope of work, materials required and property access can affect the quote.' },
    { question: 'How long will the work take?', answer: 'Timing depends on the plumbing issue, property and work agreed. The team can discuss this with you.' },
    { question: 'How can I prepare?', answer: 'Share what you have noticed and any access details. If there is an active leak, turn off the water supply if you can do so safely.' },
    { question: 'How do I arrange a quote?', answer: 'Call G Sullivan Plumbing Pty Ltd on 0422 475 273 to discuss your plumbing work.' },
  ],
}));

export interface EmergencyCondition { id: string; title: string; urgency: 'Immediate (0–2 hours)' | 'Same-Day (2–6 hours)' | 'Urgent (Within 24 hours)'; symptoms: string[]; immediateAction: string[]; clinicTreatment: string; }
export const EMERGENCY_CONDITIONS: EmergencyCondition[] = [
  { id: 'active-leak', title: 'Active water leak', urgency: 'Same-Day (2–6 hours)', symptoms: ['Water escaping from a pipe or fitting', 'A growing wet patch'], immediateAction: ['Keep people and belongings away from the water.', 'If safe, turn off the water at the isolation valve or mains tap.', 'Keep clear of electrical equipment affected by water.'], clinicTreatment: 'Call G Sullivan Plumbing Pty Ltd to discuss the issue and next steps.' },
  { id: 'blocked-drain', title: 'Blocked drain', urgency: 'Urgent (Within 24 hours)', symptoms: ['Water draining slowly or backing up', 'A recurring blockage'], immediateAction: ['Stop using the affected fixture if water is backing up.', 'Keep clear of wastewater.', 'Avoid using chemical drain products unless their directions say they are suitable.'], clinicTreatment: 'Call the team to discuss the blockage and arrange next steps.' },
  { id: 'hot-water', title: 'Hot water system issue', urgency: 'Urgent (Within 24 hours)', symptoms: ['No hot water', 'A leak around the hot water unit'], immediateAction: ['Keep clear of hot water or steam escaping from the unit.', 'Do not touch wet electrical equipment.', 'If safe, follow the manufacturer’s instructions to isolate the unit.'], clinicTreatment: 'Contact the team to discuss your hot water system.' },
];

export interface BlogPost { slug: string; title: string; category: string; readTime: string; publishDate: string; lastUpdated: string; authorId: string; excerpt: string; leadImage: string; relatedServiceSlug: string; content: { intro: string; sections: { heading: string; body: string }[]; faqs?: { question: string; answer: string }[] }; }
export const BLOG_POSTS: BlogPost[] = [
  { slug: 'what-to-do-about-a-leaking-pipe', title: 'What to do about a leaking pipe', category: 'Plumbing Repairs', readTime: '3 min read', publishDate: '2026-10-21', lastUpdated: '2026-10-21', authorId: teamId, excerpt: 'Practical steps to take when you notice a water leak at your property.', leadImage: photos[1], relatedServiceSlug: 'plumbing-repairs', content: { intro: 'A leak can cause damage if water continues to spread. Keep people and belongings clear of the affected area and contact a plumber to discuss the issue.', sections: [{ heading: 'Make the area safe', body: 'If you can do so safely, turn off the water supply using the isolation valve or mains tap. Keep clear of electrical fittings and equipment affected by water.' }, { heading: 'Describe what you can see', body: 'Note where the water is appearing and when it started. Photos can help explain the issue, but do not open walls or attempt work you are not equipped to do.' }] } },
  { slug: 'planning-general-plumbing', title: 'Planning plumbing work', category: 'General Plumbing', readTime: '3 min read', publishDate: '2026-10-21', lastUpdated: '2026-10-21', authorId: teamId, excerpt: 'What to discuss when arranging plumbing work for your property.', leadImage: photos[4], relatedServiceSlug: 'general-plumbing', content: { intro: 'A clear conversation helps define the plumbing work you need. Share details about your property and ask for the proposed scope and quote before work begins.', sections: [{ heading: 'Describe the work', body: 'Explain what you have noticed or what you would like updated. Include relevant access details and any timing needs.' }, { heading: 'Review the quote', body: 'Confirm the agreed work, price and timing with your plumber. Ask any questions before the work starts.' }] } },
  { slug: 'hot-water-system-checks', title: 'When to get a hot water system checked', category: 'Hot Water Systems', readTime: '3 min read', publishDate: '2026-10-21', lastUpdated: '2026-10-21', authorId: teamId, excerpt: 'Changes in hot water supply can be a reason to arrange a plumbing assessment.', leadImage: photos[12], relatedServiceSlug: 'hot-water-systems', content: { intro: 'A change in hot water supply or a leak near the unit may need attention. The cause depends on the system and property, so arrange an assessment if you notice a problem.', sections: [{ heading: 'Notice changes', body: 'Make a note of changes in temperature, water supply or visible leaks around the unit.' }, { heading: 'Keep the area safe', body: 'Keep clear of hot water, steam or wet electrical equipment. Follow the manufacturer’s instructions and contact a plumber for advice.' }] } },
  { slug: 'blocked-drain-first-steps', title: 'First steps for a blocked drain', category: 'Blocked Drains', readTime: '3 min read', publishDate: '2026-10-21', lastUpdated: '2026-10-21', authorId: teamId, excerpt: 'What you can do safely when a drain is slow or backing up.', leadImage: photos[16], relatedServiceSlug: 'blocked-drains', content: { intro: 'A slow drain or backup can have different causes. Stop using the affected fixture if water is backing up and contact a plumber if the problem persists.', sections: [{ heading: 'Limit water use', body: 'Avoid adding more water to an affected fixture when drainage is backing up.' }, { heading: 'Avoid unsafe fixes', body: 'Do not mix drain chemicals or use products outside their instructions. Describe the symptoms to a plumber so they can advise on next steps.' }] } },
];
