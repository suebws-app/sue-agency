export interface ProcessStep {
  week: string;
  title: string;
  body: string;
  services: string[];
  ongoing?: boolean;
}

export const processSteps: ProcessStep[] = [
  {
    week: 'Week 01',
    title: 'Discover',
    body: 'Goals, audience, and an honest read on what you have today.',
    services: ['Discovery Workshop', 'UX Audit', 'Technical Audit'],
  },
  {
    week: 'Week 02',
    title: 'Design',
    body: 'Brand system and key pages, prototyped live in the browser.',
    services: ['Branding', 'UX/UI Design', 'Web Design'],
  },
  {
    week: 'Week 03',
    title: 'Build',
    body: 'Composable frontend wired to your CMS, shipped to preview URLs.',
    services: ['Modern Frontend', 'Headless CMS', 'Webflow'],
  },
  {
    week: 'Week 04',
    title: 'Launch',
    body: 'Perf pass, QA, and a zero-downtime deploy. Then a clean hand-off.',
    services: ['Core Web Vitals', 'SEO & QA', 'Go-live'],
  },
  {
    week: 'Ongoing',
    title: 'Grow',
    body: 'After launch we keep shipping. Optimization, monitoring, and growth as a retainer.',
    services: ['CRO', 'Core Web Vitals', 'SMMA'],
    ongoing: true,
  },
];

export interface Faq {
  q: string;
  a: string;
}

export const processFaqs: Faq[] = [
  {
    q: 'What if our scope is bigger than four weeks?',
    a: 'We break it into four-week increments. Each one ends with a usable deliverable, no big-bang launches. Most engagements run one to three sprints back to back.',
  },
  {
    q: 'Do you work on retainer after launch?',
    a: 'Yes, for teams that want it. A monthly retainer covers performance monitoring, small improvements, and one deploy-day per week. Otherwise we hand off clean and step away.',
  },
  {
    q: "How do you handle content that isn't ready?",
    a: 'We design with real placeholder content from day one and swap it out as yours lands. Content is never on the critical path.',
  },
  {
    q: 'What if we need to change direction mid-sprint?',
    a: 'Weekly reviews are the pressure valve. Small pivots happen inside the sprint; larger ones get scheduled into the next one, with a fresh brief.',
  },
];
