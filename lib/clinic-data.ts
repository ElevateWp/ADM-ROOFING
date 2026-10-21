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
  name: 'Sullivans CP Plumbing', legalName: 'Sullivans CP Plumbing',
  tagline: 'Plumbing, roofing and gas services across the Mornington Peninsula.',
  primaryLocation: { street: '', suite: '', city: 'Mornington', state: 'VIC', postalCode: '', country: 'AU', directions: 'Mornington, VIC', landmarks: 'Mornington Peninsula' },
  contact: { phone: '0412 725 332', emergencyPhone: '0412 725 332', email: 'sullivansc.plumbing@gmail.com', whatsapp: '0412 725 332', website: 'https://www.sullivanscpplumbing.com.au/' },
  identityHighlights: ['Plumbing maintenance and repairs', 'Toilet installations', 'Hot water services', 'Metal roofing and gutters', 'Gas appliance installations'],
  schedule: [
    { day: 'Monday - Friday', hours: '7:00 am - 4:30 pm' },
    { day: 'Saturday - Sunday', hours: 'Appointment only' },
  ],
  verifiedStats: [], accreditations: [],
};

const teamId = 'sullivans-cp-plumbing-team';
export const DENTISTS: DentistProfile[] = [{
  id: teamId, slug: 'plumbing-team', name: 'Sullivans CP Plumbing Team', title: 'Local plumbing team',
  qualifications: '', specialization: 'Plumbing, roofing and gas appliance services', experienceYears: 0,
  bio: 'Sullivans CP Plumbing is a family-owned and operated business serving Mornington Peninsula properties with plumbing, roofing and gas appliance services.',
  philosophy: 'Practical service, quality workmanship and clear communication.', education: [], memberships: [],
  specialties: CLINIC_INFO.identityHighlights,
  image: '/images/plumbing-technician.jpg', warmImage: '/images/plumbing-repair.jpg',
}];

const photos = [
  '/images/plumbing-radiator.jpg', '/images/plumbing-repair.jpg', '/images/plumbing-hot-water.jpg',
  '/images/plumbing-pipes.jpg', '/images/plumbing-technician.jpg', '/images/roofb3-1.jpg',
  '/images/roof-with-tiles.png', '/images/plumbing-pipes.jpg', '/images/plumbing-hot-water.jpg',
  '/images/plumbing-technician.jpg', '/images/roof-without-tiles.png', '/images/roofb3-1.jpg',
];

const serviceSpecs = [
  { slug: 'plumbing-maintenance-repairs', name: 'Plumbing Maintenance & Repairs', tagline: 'Maintenance and repairs for everyday plumbing issues.', description: 'From leaking pipes and taps to general plumbing faults, Sullivans CP Plumbing can discuss maintenance and repair work for your property.', needs: ['A leaking pipe or tap', 'A plumbing fault that needs attention', 'General plumbing maintenance'], photo: 0 },
  { slug: 'toilet-installations', name: 'Toilet Installations', tagline: 'Toilet installation for your bathroom.', description: 'Talk with the team about replacing or installing a toilet and the options that suit your bathroom and property.', needs: ['A toilet replacement', 'A new toilet installation', 'Advice about an existing toilet'], photo: 1 },
  { slug: 'hot-water-service-maintenance-installations', name: 'Hot Water Service Maintenance & Installations', tagline: 'Hot water service maintenance and installation.', description: 'Discuss hot water service maintenance or installation, including the right system options for your household and property.', needs: ['A hot water system issue', 'A planned hot water service installation', 'Advice about hot water options'], photo: 2 },
  { slug: 'metal-roofing', name: 'Metal Roofing', tagline: 'Metal roofing services to help protect your property.', description: 'Sullivans CP Plumbing offers metal roofing services and advice about roofing materials and work for your property.', needs: ['Metal roofing installation or updates', 'Roofing maintenance or repairs', 'Advice about roofing materials'], photo: 5 },
  { slug: 'gutters-downpipes', name: 'Gutters & Downpipes', tagline: 'Gutter and downpipe installation, maintenance and repairs.', description: 'Arrange gutter and downpipe work to support effective rainwater drainage and help protect your property.', needs: ['Gutter or downpipe repairs', 'Gutter maintenance', 'New gutters or downpipes'], photo: 6 },
  { slug: 'gas-appliance-installations', name: 'Gas Appliance Installations', tagline: 'Gas appliance installation for your home.', description: 'Contact the team to discuss installing a gas stove, oven, heating system or another gas appliance at your property.', needs: ['A new gas appliance installation', 'Replacing a gas appliance', 'Advice about installation requirements'], photo: 8 },
];

export const SERVICES: ServiceDetail[] = serviceSpecs.map((s) => ({
  slug: s.slug, name: s.name, navLabel: s.name, tagline: s.tagline,
  shortDescription: s.description, clinicalExplanation: s.description,
  whoNeeds: s.needs, benefits: ['Talk through the work with the local team', 'Discuss the scope and options for your property', 'Request a quote before work begins'],
  indications: s.needs.map((condition) => ({ condition, explanation: `Contact the team to discuss ${condition.toLowerCase()} and suitable next steps for your property.` })),
  procedureSteps: [
    { stepNumber: 1, title: 'Tell us what you need', duration: 'Initial conversation', description: 'Share the plumbing, roofing or gas work you have in mind.', clinicalDetails: 'The team will ask about your property and the work required.' },
    { stepNumber: 2, title: 'Discuss the scope', duration: 'By arrangement', description: 'Talk through the work, available options and a quote.', clinicalDetails: 'Scope, price and timing are discussed before work begins.' },
    { stepNumber: 3, title: 'Complete the agreed work', duration: 'As agreed', description: 'The team carries out the work agreed for your property.', clinicalDetails: 'Timing depends on the property and the work required.' },
    { stepNumber: 4, title: 'Review the work', duration: 'On completion', description: 'Review the completed work and ask any follow-up questions.', clinicalDetails: 'The team can explain the work completed at your property.' },
  ],
  recoveryTimeline: [
    { period: 'Before work', expectedSensations: 'Discuss the issue, access and scope with the team.', careProtocol: 'Share your address, what you have noticed and any access details.' },
    { period: 'During work', expectedSensations: 'Work duration depends on the property and agreed scope.', careProtocol: 'Follow the team’s guidance around the work area.' },
    { period: 'After work', expectedSensations: 'Review the completed work.', careProtocol: 'Contact the team if you have questions about the work completed.' },
  ],
  costTransparency: { baseRange: 'Request a quote for your property.', factors: ['Type and scope of work', 'Parts and materials required', 'Property access and conditions'], whatIsIncluded: ['Discussion of the work', 'Agreed scope and quote', 'Updates about the work'], note: 'Price and timing can be confirmed after the team understands the work required.' },
  beforeAfterCase: { category: s.name, clinicalContext: 'The work required depends on the property and agreed scope.', beforeLabel: 'Project reference', afterLabel: 'Project reference', beforeImage: photos[s.photo], afterImage: photos[(s.photo + 1) % photos.length], timeframe: 'Project timing varies' },
  assignedDentistId: teamId,
  faqs: [
    { question: `What does ${s.name.toLowerCase()} involve?`, answer: `${s.description} The team can discuss the work and suitable next steps.` },
    { question: 'What affects the quote?', answer: 'The type and scope of work, materials required and property access can affect the quote.' },
    { question: 'How long will the work take?', answer: 'Timing depends on the property and agreed work. The team can discuss this with you.' },
    { question: 'How can I prepare?', answer: 'Share what you have noticed and any access details. If there is an active water leak, turn off the water supply if you can do so safely.' },
    { question: 'How do I arrange a quote?', answer: `Call Sullivans CP Plumbing on ${CLINIC_INFO.contact.phone} to discuss your work.` },
  ],
}));

export interface EmergencyCondition { id: string; title: string; urgency: 'Immediate (0–2 hours)' | 'Same-Day (2–6 hours)' | 'Urgent (Within 24 hours)'; symptoms: string[]; immediateAction: string[]; clinicTreatment: string; }
export const EMERGENCY_CONDITIONS: EmergencyCondition[] = [
  { id: 'active-leak', title: 'Active water leak', urgency: 'Same-Day (2–6 hours)', symptoms: ['Water escaping from a pipe or fitting', 'A growing wet patch'], immediateAction: ['Keep people and belongings away from the water.', 'If safe, turn off the water at the isolation valve or mains tap.', 'Keep clear of electrical equipment affected by water.'], clinicTreatment: 'Call Sullivans CP Plumbing to discuss the issue and next steps.' },
  { id: 'hot-water', title: 'Hot water system issue', urgency: 'Urgent (Within 24 hours)', symptoms: ['No hot water', 'A leak around the hot water unit'], immediateAction: ['Keep clear of hot water or steam escaping from the unit.', 'Do not touch wet electrical equipment.', 'If safe, follow the manufacturer’s instructions to isolate the unit.'], clinicTreatment: 'Contact the team to discuss your hot water service.' },
];

export interface BlogPost { slug: string; title: string; category: string; readTime: string; publishDate: string; lastUpdated: string; authorId: string; excerpt: string; leadImage: string; relatedServiceSlug: string; content: { intro: string; sections: { heading: string; body: string }[]; faqs?: { question: string; answer: string }[] }; }
export const BLOG_POSTS: BlogPost[] = [
  { slug: 'what-to-do-about-a-leaking-pipe', title: 'What to do about a leaking pipe', category: 'Maintenance & Repairs', readTime: '3 min read', publishDate: '2026-10-21', lastUpdated: '2026-10-21', authorId: teamId, excerpt: 'Practical steps to take when you notice a water leak at your property.', leadImage: photos[1], relatedServiceSlug: 'plumbing-maintenance-repairs', content: { intro: 'A leak can cause damage if water continues to spread. Keep people and belongings clear of the affected area and contact a plumber to discuss the issue.', sections: [{ heading: 'Make the area safe', body: 'If you can do so safely, turn off the water supply using the isolation valve or mains tap. Keep clear of electrical fittings and equipment affected by water.' }, { heading: 'Describe what you can see', body: 'Note where the water is appearing and when it started. Photos can help explain the issue, but do not open walls or attempt work you are not equipped to do.' }] } },
  { slug: 'planning-toilet-installation', title: 'Planning a toilet installation', category: 'Toilet Installations', readTime: '3 min read', publishDate: '2026-10-21', lastUpdated: '2026-10-21', authorId: teamId, excerpt: 'Details to consider when arranging a toilet installation for your bathroom.', leadImage: photos[0], relatedServiceSlug: 'toilet-installations', content: { intro: 'Before arranging a toilet installation, consider your bathroom layout, access and preferred fixture. The team can discuss the work and options for your property.', sections: [{ heading: 'Consider the space', body: 'Share details about the existing toilet and bathroom, including any access constraints.' }, { heading: 'Confirm the scope', body: 'Review the proposed work, price and timing with your plumber before the installation begins.' }] } },
  { slug: 'hot-water-system-maintenance', title: 'Hot water system maintenance', category: 'Hot Water Services', readTime: '3 min read', publishDate: '2026-10-21', lastUpdated: '2026-10-21', authorId: teamId, excerpt: 'Changes in hot water supply can be a reason to arrange a plumbing assessment.', leadImage: photos[2], relatedServiceSlug: 'hot-water-service-maintenance-installations', content: { intro: 'A change in hot water supply or a leak near the unit may need attention. The cause depends on the system and property, so arrange an assessment if you notice a problem.', sections: [{ heading: 'Notice changes', body: 'Make a note of changes in temperature, water supply or visible leaks around the unit.' }, { heading: 'Keep the area safe', body: 'Keep clear of hot water, steam or wet electrical equipment. Follow the manufacturer’s instructions and contact a plumber for advice.' }] } },
  { slug: 'gutter-and-downpipe-care', title: 'Gutter and downpipe care', category: 'Gutters & Downpipes', readTime: '3 min read', publishDate: '2026-10-21', lastUpdated: '2026-10-21', authorId: teamId, excerpt: 'When gutter or downpipe issues may need attention.', leadImage: photos[6], relatedServiceSlug: 'gutters-downpipes', content: { intro: 'Overflow, visible damage or poor drainage around the roofline can be signs that gutters and downpipes need attention.', sections: [{ heading: 'Look for visible signs', body: 'From a safe position, note any overflow, sagging or visible damage.' }, { heading: 'Arrange an assessment', body: 'Share what you have noticed and ask the team about suitable maintenance or repair options.' }] } },
];
