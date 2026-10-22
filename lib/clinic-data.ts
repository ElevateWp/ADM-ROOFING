export interface TeamProfile { id: string; slug: string; name: string; title: string; qualifications: string; specialization: string; experienceYears: number; bio: string; philosophy: string; education: string[]; memberships: string[]; specialties: string[]; image: string; warmImage: string; }
export type DentistProfile = TeamProfile;
export interface ServiceDetail {
  slug: string; name: string; navLabel: string; tagline: string; shortDescription: string; clinicalExplanation: string; whoNeeds: string[]; benefits: string[];
  indications: { condition: string; explanation: string }[];
  procedureSteps: { stepNumber: number; title: string; duration: string; description: string; clinicalDetails: string }[];
  recoveryTimeline: { period: string; expectedSensations: string; careProtocol: string }[];
  costTransparency: { baseRange: string; factors: string[]; whatIsIncluded: string[]; note: string };
  beforeAfterCase: { category: string; clinicalContext: string; beforeLabel: string; afterLabel: string; beforeImage: string; afterImage: string; timeframe: string };
  assignedDentistId: string; faqs: { question: string; answer: string; relatedSlug?: string }[];
}
export interface ClinicInformation {
  name: string; legalName: string; tagline: string; primaryLocation: { street: string; suite: string; city: string; state: string; postalCode: string; country: string; directions: string; landmarks: string; coordinates?: { lat: number; lng: number } };
  contact: { phone: string; emergencyPhone: string; email?: string; whatsapp: string; website?: string }; identityHighlights: string[]; schedule: { day: string; hours: string; isOpenToday?: boolean; isEmergencyOnly?: boolean }[];
  verifiedStats: { value: number; suffix: string; label: string; description: string }[]; accreditations: string[];
}
export const CLINIC_INFO: ClinicInformation = {
  name: 'ADM Plumbing Services', legalName: 'ADM Plumbing Services', tagline: 'Reliable plumbing services across Singapore, available 24 hours a day.',
  primaryLocation: { street: '280 Woodlands Industrial Park E5, Harvest @ Woodlands', suite: 'Floor 1', city: 'Singapore', state: '', postalCode: '757322', country: 'SG', directions: '280 Woodlands Industrial Park E5, Harvest @ Woodlands, Singapore 757322', landmarks: 'FQ2R+FJ Singapore' },
  contact: { phone: '+65 8133 9461', emergencyPhone: '+65 8133 9461', whatsapp: '+65 8133 9461', website: 'https://singaporeplumbingadm.com/' },
  identityHighlights: ['Toilet bowl and flushing repairs', 'Bidet repairs', 'Kitchen sink repairs', 'Pipe leak and hot water pipe repairs', '24-hour plumbing service'],
  schedule: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'].map((day) => ({ day, hours: 'Open 24 hours' })),
  verifiedStats: [
    { value: 4.9, suffix: '/5', label: 'Google rating', description: 'Based on 309 customer reviews' },
    { value: 309, suffix: '', label: 'Google reviews', description: 'Customer feedback on Google' },
  ], accreditations: [],
};
const teamId = 'adm-plumbing-services';
export const DENTISTS: TeamProfile[] = [{ id: teamId, slug: 'adm-plumbing-services', name: 'ADM Plumbing Services', title: 'Plumbing team', qualifications: '', specialization: 'Toilet, bidet, sink and pipe repairs', experienceYears: 10, bio: 'ADM Plumbing Services provides plumbing repairs across Singapore. Contact the team to describe the issue and arrange an assessment.', philosophy: 'Prompt replies, clear quotations and practical plumbing help.', education: [], memberships: [], specialties: CLINIC_INFO.identityHighlights, image: '/images/plumbing-technician.jpg', warmImage: '/images/plumbing-repair.jpg' }];
const photos = ['/images/plumbing-technician.jpg','/images/plumbing-repair.jpg','/images/plumbing-pipes.jpg','/images/plumbing-hot-water.jpg'];
const serviceNames: [string,string][] = [
  ['plumbing-services','Plumbing Services'], ['plumbing-repairs','Plumbing Repairs'], ['toilet-bowl-repair','Toilet Bowl Repair'],
  ['toilet-flushing-repair','Toilet Flushing System Repair'], ['bidet-repair','Bidet Repair'], ['kitchen-sink-repair','Kitchen Sink Repair'],
  ['pipe-leak-repair','Pipe Leak Repair'], ['hot-water-pipe-repair','Hot Water Pipe Repair'], ['plumbing-maintenance','Plumbing Maintenance'],
];
function createService([slug,name]: [string,string], index:number): ServiceDetail {
  const situations = [`A problem with your ${name.toLowerCase()}`, 'A leak or water flow issue that needs assessment', 'Advice about repair options and next steps'];
  return {
    slug,name,navLabel:name,tagline:`${name} in Singapore.`,shortDescription:`Contact ADM Plumbing Services for ${name.toLowerCase()} in Singapore. WhatsApp photos or a video for an initial assessment.`,
    clinicalExplanation:`ADM Plumbing Services can assess the issue, explain the repair options and provide a clear quotation before work begins. WhatsApp a photo or video for an initial assessment.`,whoNeeds:situations,
    benefits:['Over 10 years of plumbing experience','Transparent quotations with no hidden costs','WhatsApp photo or video assessment'],
    indications:situations.map((condition)=>({condition,explanation:`Describe the issue to ADM Plumbing Services and the team can advise on an assessment.`})),
    procedureSteps:[
      {stepNumber:1,title:'Describe the issue',duration:'WhatsApp or call',description:'Explain what is happening and share a photo or video if useful.',clinicalDetails:'The team reviews the details for an initial assessment.'},
      {stepNumber:2,title:'Arrange an assessment',duration:'By arrangement',description:'Discuss the plumbing issue and arrange a suitable visit.',clinicalDetails:'The plumber assesses the issue and explains the proposed work.'},
      {stepNumber:3,title:'Review the quotation',duration:'Before work begins',description:'Review the work and quotation before deciding how to proceed.',clinicalDetails:'The quotation is discussed before the repair starts.'},
      {stepNumber:4,title:'Complete the repair',duration:'As agreed',description:'The plumber completes the agreed repair and checks the work.',clinicalDetails:'Timing depends on the issue and agreed scope.'},
    ],
    recoveryTimeline:[{period:'Before service',expectedSensations:'Describe the issue and share a photo or video.',careProtocol:'If safe, turn off the water supply if a leak is active.'},{period:'During service',expectedSensations:'The plumber will explain the repair being carried out.',careProtocol:'Keep the work area clear.'},{period:'After service',expectedSensations:'The plumber will review the completed work with you.',careProtocol:'Contact ADM if you have a follow-up question.'}],
    costTransparency:{baseRange:'Request a transparent quotation.',factors:['Type and severity of the plumbing issue','Parts and materials required','Access and time needed'],whatIsIncluded:['Assessment of the reported issue','Explanation of the proposed work','Quotation before work begins'],note:'The cost can be confirmed after the issue has been assessed.'},
    beforeAfterCase:{category:name,clinicalContext:'Illustrative plumbing service image.',beforeLabel:'Service example',afterLabel:'Service example',beforeImage:photos[index%photos.length],afterImage:photos[(index+1)%photos.length],timeframe:'Timing varies by repair'},assignedDentistId:teamId,
    faqs:[{question:`What does ${name.toLowerCase()} involve?`,answer:`The plumber assesses the issue, explains the proposed work and provides a quotation before starting.`},{question:'Can I send a photo first?',answer:'Yes. WhatsApp a photo or video of the issue to +65 8133 9461 for an initial assessment.'},{question:'Are you open outside normal business hours?',answer:'ADM Plumbing Services is open 24 hours. Call or WhatsApp +65 8133 9461.'},{question:'How do I arrange a service?',answer:'Call or WhatsApp ADM Plumbing Services on +65 8133 9461.'}],
  };
}
export const SERVICES: ServiceDetail[] = serviceNames.map(createService);
export interface EmergencyCondition { id:string; title:string; urgency:'Immediate (0–2 hours)'|'Same-Day (2–6 hours)'|'Urgent (Within 24 hours)'; symptoms:string[]; immediateAction:string[]; clinicTreatment:string; }
export const EMERGENCY_CONDITIONS: EmergencyCondition[] = [
  {id:'active-pipe-leak',title:'Active pipe leak',urgency:'Immediate (0–2 hours)',symptoms:['Water visibly leaking from a pipe','A growing wet area'],immediateAction:['Keep people and belongings clear of the affected area.','If safe, turn off the water supply.','Keep clear of wet electrical equipment.'],clinicTreatment:'Call ADM Plumbing Services on +65 8133 9461 for assistance.'},
  {id:'toilet-flushing-problem',title:'Toilet flushing problem',urgency:'Same-Day (2–6 hours)',symptoms:['Toilet does not flush properly','Water continues running into the bowl'],immediateAction:['Avoid repeated flushing if the bowl is filling.','Keep the area clear and share a photo or video with the plumber.'],clinicTreatment:'WhatsApp ADM Plumbing Services on +65 8133 9461 to describe the issue.'},
];
export interface BlogPost { slug:string; title:string; category:string; readTime:string; publishDate:string; lastUpdated:string; authorId:string; excerpt:string; leadImage:string; relatedServiceSlug:string; content:{intro:string;sections:{heading:string;body:string}[];faqs?:{question:string;answer:string}[]}; }
export const BLOG_POSTS: BlogPost[] = [
 {slug:'toilet-bowl-repair-signs',title:'Common toilet bowl problems to look out for',category:'Toilet Repairs',readTime:'3 min read',publishDate:'2026-10-22',lastUpdated:'2026-10-22',authorId:teamId,excerpt:'Running water, weak flushing and leaks are common reasons to arrange a toilet repair assessment.',leadImage:photos[1],relatedServiceSlug:'toilet-bowl-repair',content:{intro:'A toilet that keeps running, leaks or flushes weakly may need attention. Describe what is happening and arrange an assessment.',sections:[{heading:'Notice what the toilet is doing',body:'Note whether water continues running, the flush is weak or there is visible leaking around the bowl.'},{heading:'Share the details',body:'A photo or short video can help explain the issue. WhatsApp ADM Plumbing Services for an initial assessment.'}]}},
 {slug:'what-to-do-about-a-pipe-leak',title:'What to do when you notice a pipe leak',category:'Pipe Repairs',readTime:'3 min read',publishDate:'2026-10-22',lastUpdated:'2026-10-22',authorId:teamId,excerpt:'Simple steps can help you describe an active leak and keep the area clear while arranging help.',leadImage:photos[0],relatedServiceSlug:'pipe-leak-repair',content:{intro:'If you notice water leaking from a pipe, keep people and belongings clear of the affected area and contact a plumber.',sections:[{heading:'Keep the area safe',body:'If it is safe to do so, turn off the water supply. Keep clear of wet electrical fittings and equipment.'},{heading:'Share what you can see',body:'Note where the water is coming from and when it started. Photos or video can help the plumber understand the issue.'}]}},
 {slug:'bidet-and-flushing-repairs',title:'When to arrange a bidet or flushing system repair',category:'Plumbing Repairs',readTime:'3 min read',publishDate:'2026-10-22',lastUpdated:'2026-10-22',authorId:teamId,excerpt:'Get help with bidet faults, flushing issues and toilet water that keeps running.',leadImage:photos[2],relatedServiceSlug:'toilet-flushing-repair',content:{intro:'Flushing mechanism issues and bidet faults can disrupt everyday use. Describe the problem and ask a plumber to assess it.',sections:[{heading:'Describe the symptoms',body:'Share whether the flush is weak or incomplete, water keeps running, or the bidet needs repair.'},{heading:'Send a photo or video',body:'WhatsApp the details to ADM Plumbing Services for an initial assessment and next steps.'}]}},
 {slug:'kitchen-sink-and-hot-water-pipe-issues',title:'Kitchen sink and hot water pipe issues',category:'Plumbing Repairs',readTime:'3 min read',publishDate:'2026-10-22',lastUpdated:'2026-10-22',authorId:teamId,excerpt:'Share details about a kitchen sink fault or hot water pipe leak to arrange an assessment.',leadImage:photos[3],relatedServiceSlug:'kitchen-sink-repair',content:{intro:'A kitchen sink problem or leaking hot water pipe can need a plumber’s assessment. Describe the issue and when it occurs.',sections:[{heading:'Make a note of the issue',body:'Note where the water is appearing and whether it occurs continuously or only when the fixture is in use.'},{heading:'Arrange a plumbing assessment',body:'Contact ADM Plumbing Services by WhatsApp or phone to discuss repair options.'}]}},
];
export const CUSTOMER_REVIEWS = [
 {name:'Linda LL',date:'5 months ago',text:'Found Alen online and really glad I contacted him. He’s very friendly, helpful, and easy to deal with. He helped fix our flushing issue and also replaced our bidet smoothly. Really appreciate his help and great service.'},
 {name:'Ryan Merly Seah',date:'a year ago',text:'Alan was very knowledgeable and promptly resolved our issue of the hot water pipe joint being dislodged. He was able to explain that one side of the joint wasn’t clamped at all, thereby causing this leak over the course of a week post-installation by the original plumber.'},
 {name:'Salmah Aman',date:'3 months ago',text:'My toilet bowl was leaking water. I whatsapp ADM Plumbing Services Spore and Alan reply was prompt & efficient. Alan arrived punctually & completed the job very satisfactorily. I will definately recommend ADM Plumbing Services to my family & friends.'},
];
