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
  name: 'All in 1 Roofing and Building', legalName: 'All in 1 Roofing and Building',
  tagline: 'Roofing and building services in Bexhill-on-Sea and across East Sussex.',
  primaryLocation: { street: '121 London Rd', suite: '', city: 'Bexhill-on-Sea', state: 'East Sussex', postalCode: 'TN39 3LB', country: 'GB', directions: 'Bexhill-on-Sea, East Sussex', landmarks: 'Serving Bexhill-on-Sea, Hastings and nearby East Sussex communities' },
  contact: { phone: '+44 1424 232873', emergencyPhone: '+44 1424 232873', email: 'contact@allin1roofingandbuilding.co.uk', whatsapp: '+44 1424 232873', website: 'https://allin1roofingandbuilding.co.uk/' },
  identityHighlights: ['Roof repairs and inspections', 'Flat, slate and tile roofing', 'Gutters, soffits and fascias', 'Chimney work', 'Building and renovations'],
  schedule: [
    { day: 'Monday', hours: '8 AM–8 PM' }, { day: 'Tuesday', hours: '8 AM–8 PM' },
    { day: 'Wednesday', hours: '8 AM–8 PM' }, { day: 'Thursday', hours: '8 AM–8 PM' },
    { day: 'Friday', hours: '8 AM–8 PM' }, { day: 'Saturday', hours: '9 AM–5 PM' },
    { day: 'Sunday', hours: 'Closed' },
  ],
  verifiedStats: [
    { value: 4.9, suffix: '/5', label: 'Google rating', description: 'Based on 50 customer reviews' },
    { value: 50, suffix: '', label: 'Customer reviews', description: 'Rated 4.9 out of 5 on Google' },
  ],
  accreditations: [],
};

const teamId = 'all-in-1-roofing-and-building-team';
export const DENTISTS: DentistProfile[] = [{
  id: teamId, slug: 'all-in-1-roofing-team', name: 'All in 1 Roofing and Building Team', title: 'Local roofing and building team',
  qualifications: '', specialization: 'Roofing, exterior repairs and building work', experienceYears: 15,
  bio: 'All in 1 Roofing and Building serves homes and businesses in Bexhill-on-Sea, Hastings and across the wider East Sussex area.',
  philosophy: 'Reliable service, clear communication and tidy workmanship.', education: [], memberships: [],
  specialties: CLINIC_INFO.identityHighlights,
  image: '/images/roofb3-1.jpg', warmImage: '/images/roof-with-tiles.png',
}];

const roofingPhotos = ['/images/roofing-hero.png', '/images/roofb3-1.jpg', '/images/roof-with-tiles.png', '/images/roof-without-tiles.png', '/images/roof-saffron-walden-1024x768-1.jpg'];
const serviceNames: [string, string][] = [
  ['roofing-services', 'Roofing Services'], ['roof-repair', 'Roof Repair'],
  ['emergency-roofing', 'Emergency Roofing'], ['roof-inspection', 'Roof Inspection'],
  ['flat-roof', 'Flat Roofing'], ['slate-and-tiles-roofing', 'Slate & Tiles Roofing'],
  ['roof-insulation', 'Roof Insulation'], ['gutter-repair', 'Gutter Repair'],
  ['chimney-repair', 'Chimney Repair'], ['house-renovations', 'House Renovations'],
];

function createService([slug, name]: [string, string], index: number): ServiceDetail {
  const photo = roofingPhotos[index % roofingPhotos.length];
  const otherPhoto = roofingPhotos[(index + 1) % roofingPhotos.length];
  const description = `${name} for homes and businesses in Bexhill-on-Sea, Hastings and across East Sussex. Contact All in 1 Roofing and Building to discuss your property, the work required and a quote.`;
  const situations = [`Planning ${name.toLowerCase()} at your property`, `Repairs or maintenance related to ${name.toLowerCase()}`, `Advice about suitable options and the next steps`];
  return {
    slug, name, navLabel: name, tagline: `${name} in Bexhill-on-Sea and East Sussex.`, shortDescription: description,
    clinicalExplanation: `Every property and project is different. Tell us what you are planning or what you have noticed, and we can discuss the scope, suitable materials and next steps for ${name.toLowerCase()}.`,
    whoNeeds: situations,
    benefits: ['Speak directly with the local team', 'Discuss suitable materials and project scope', 'Request a quote before work begins'],
    indications: situations.map((condition) => ({ condition, explanation: `Contact the team to discuss ${condition.toLowerCase()} and the options for your property.` })),
    procedureSteps: [
      { stepNumber: 1, title: 'Tell us about the project', duration: 'Initial conversation', description: `Share what you need for ${name.toLowerCase()} and where the property is located.`, clinicalDetails: 'The team will ask about the property and the work you have in mind.' },
      { stepNumber: 2, title: 'Assess the work', duration: 'By arrangement', description: 'Discuss the property, access, materials and project scope.', clinicalDetails: 'The team can assess the work and explain suitable options.' },
      { stepNumber: 3, title: 'Review your quote', duration: 'Before work begins', description: 'Review the proposed work, quote and expected timing.', clinicalDetails: 'Scope, price and timing are discussed before work begins.' },
      { stepNumber: 4, title: 'Complete the agreed work', duration: 'As agreed', description: 'The team carries out the work agreed for your property.', clinicalDetails: 'Project timing depends on the property and agreed scope.' },
    ],
    recoveryTimeline: [
      { period: 'Before work', expectedSensations: 'Discuss the property, access and scope with the team.', careProtocol: 'Share your address, what you have noticed and any access details.' },
      { period: 'During work', expectedSensations: 'Work duration depends on the property and agreed scope.', careProtocol: 'Follow the team’s guidance around the work area.' },
      { period: 'After work', expectedSensations: 'Review the completed work with the team.', careProtocol: 'Contact the team if you have any follow-up questions.' },
    ],
    costTransparency: { baseRange: 'Request a quote for your property.', factors: ['Type and scope of work', 'Materials and access required', 'Condition and size of the property'], whatIsIncluded: ['Discussion of the project', 'Agreed scope and quote', 'Updates about the work'], note: 'Price and timing can be confirmed after the team understands the property and work required.' },
    beforeAfterCase: { category: name, clinicalContext: `Roofing and building project reference for ${name.toLowerCase()}.`, beforeLabel: 'Project reference', afterLabel: 'Project reference', beforeImage: photo, afterImage: otherPhoto, timeframe: 'Project timing varies' },
    assignedDentistId: teamId,
    faqs: [
      { question: `What does ${name.toLowerCase()} involve?`, answer: `${description} The team can discuss the work and suitable next steps.` },
      { question: 'What affects the quote?', answer: 'The type and scope of work, materials, property condition and access can affect the quote.' },
      { question: 'How long will the work take?', answer: 'Timing depends on the property and agreed work. The team can discuss this with you.' },
      { question: 'Which areas do you cover?', answer: 'The team serves Bexhill-on-Sea, Hastings and surrounding areas across East Sussex. Contact us to confirm availability for your address.' },
      { question: 'How do I arrange a quote?', answer: `Call All in 1 Roofing and Building on ${CLINIC_INFO.contact.phone} to discuss your project.` },
    ],
  };
}

export const SERVICES: ServiceDetail[] = serviceNames.map(createService);

export interface EmergencyCondition { id: string; title: string; urgency: 'Immediate (0–2 hours)' | 'Same-Day (2–6 hours)' | 'Urgent (Within 24 hours)'; symptoms: string[]; immediateAction: string[]; clinicTreatment: string; }
export const EMERGENCY_CONDITIONS: EmergencyCondition[] = [
  { id: 'active-roof-leak', title: 'Active roof leak', urgency: 'Same-Day (2–6 hours)', symptoms: ['Water entering the property', 'A growing damp patch after rain'], immediateAction: ['Keep people and belongings clear of the affected area.', 'If safe, move items away from the water and contain drips.', 'Keep clear of wet electrical equipment and avoid climbing onto the roof.'], clinicTreatment: 'Call All in 1 Roofing and Building to discuss the issue and next steps.' },
  { id: 'storm-damage', title: 'Storm damage', urgency: 'Urgent (Within 24 hours)', symptoms: ['Loose or missing tiles', 'Visible roof damage after high winds'], immediateAction: ['Keep clear of loose materials and affected areas.', 'Do not climb onto the roof.', 'Take photos from a safe position if possible.'], clinicTreatment: 'Contact the team to discuss roof damage and arrange an assessment.' },
];

export interface BlogPost { slug: string; title: string; category: string; readTime: string; publishDate: string; lastUpdated: string; authorId: string; excerpt: string; leadImage: string; relatedServiceSlug: string; content: { intro: string; sections: { heading: string; body: string }[]; faqs?: { question: string; answer: string }[] }; }
export const BLOG_POSTS: BlogPost[] = [
  { slug: 'signs-your-roof-needs-attention', title: 'Signs your roof may need attention', category: 'Roofing', readTime: '3 min read', publishDate: '2026-10-21', lastUpdated: '2026-10-21', authorId: teamId, excerpt: 'What to look for around your roof after bad weather or as it ages.', leadImage: roofingPhotos[1], relatedServiceSlug: 'roof-inspection', content: { intro: 'Missing or cracked tiles, water marks indoors and visible damage after high winds may mean it is time to arrange a roof inspection.', sections: [{ heading: 'Look from a safe position', body: 'From the ground, note any loose or missing tiles, damaged roofline or visible debris. Do not climb onto the roof.' }, { heading: 'Note signs indoors', body: 'Damp patches or water marks on ceilings can help explain where a problem may be. Contact a roofing professional to discuss what you have noticed.' }] } },
  { slug: 'what-to-do-about-a-roof-leak', title: 'What to do about a roof leak', category: 'Roof Repair', readTime: '3 min read', publishDate: '2026-10-21', lastUpdated: '2026-10-21', authorId: teamId, excerpt: 'Practical steps to take when you notice water coming in through your roof.', leadImage: roofingPhotos[0], relatedServiceSlug: 'roof-repair', content: { intro: 'If water is entering your property, keep people and belongings clear of the affected area and arrange an assessment.', sections: [{ heading: 'Keep the area safe', body: 'If safe, move belongings and contain drips. Keep clear of wet electrical fittings and equipment.' }, { heading: 'Share what you can see', body: 'Note where water is appearing and when it started. Photos taken from a safe position can help explain the issue.' }] } },
  { slug: 'choosing-a-flat-roof-system', title: 'Choosing a flat roof system', category: 'Flat Roofing', readTime: '3 min read', publishDate: '2026-10-21', lastUpdated: '2026-10-21', authorId: teamId, excerpt: 'Questions to consider when planning flat roofing work for your property.', leadImage: roofingPhotos[2], relatedServiceSlug: 'flat-roof', content: { intro: 'The right flat roofing option depends on the building, existing roof and project requirements. Discuss the property and materials with the team before choosing a system.', sections: [{ heading: 'Consider the property', body: 'The roof area, drainage, existing surface and access can all affect the work required.' }, { heading: 'Review the options', body: 'Ask about the materials available for your project and review the proposed scope, quote and timing.' }] } },
  { slug: 'gutter-maintenance-basics', title: 'Gutter maintenance basics', category: 'Gutters', readTime: '3 min read', publishDate: '2026-10-21', lastUpdated: '2026-10-21', authorId: teamId, excerpt: 'Overflow and visible damage can be signs that gutters need attention.', leadImage: roofingPhotos[3], relatedServiceSlug: 'gutter-repair', content: { intro: 'Overflow, sagging or visible damage can be signs that gutters need attention.', sections: [{ heading: 'Look for visible signs', body: 'From a safe position, note any overflow, sagging or visible damage.' }, { heading: 'Arrange an assessment', body: 'Share what you have noticed and ask the team about suitable maintenance or repair options.' }] } },
];

export const CUSTOMER_REVIEWS = [
  { name: 'Oliver Devaux', date: '7 months ago', text: 'John’s reliable, friendly and helpful. Always easy to contact. He’s got a good team who work efficiently and were polite. The quality of the work seems very good and the site’s been left tidy at the end of each day. I’d certainly come back to John for other work in the future.' },
  { name: 'Sharon St John', date: '3 months ago', text: 'I googled to find out which was the best roofing company near to my property in Bexhill and All in 1 Roofing and Building came up. I emailed John and explained what I needed. I then met with John and showed him the job.' },
  { name: 'Lynne Connolly', date: '8 months ago', text: 'Delighted with this company. John was very quick to sort out our leaking roof. The standard of work was excellent. I would highly recommend this company and would definitely use them again. Thank you!' },
];
