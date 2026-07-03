export type CaseCategory = 'Ecommerce' | 'SaaS' | 'Editorial' | 'B2B' | 'Marketing';

export type Mockup = 'form' | 'dashboard' | 'editorial';

export interface CaseStudy {
  slug: string;
  client: string;
  subtitle: string;
  category: CaseCategory;
  stack: string;
  excerpt: string;
  year: number;
  gradient: string;
  accent: string;
  mockup: Mockup;
  featured?: boolean;
}

export const cases: CaseStudy[] = [
  {
    slug: 'ovation',
    client: 'Ovation',
    subtitle: 'keepsake app',
    category: 'SaaS',
    stack: 'Next.js · NestJS',
    excerpt:
      'A keepsake app for the people you love most. Guests scan a QR code and leave a voice or video message, a photo, or a written note.',
    year: 2026,
    gradient: 'linear-gradient(150deg, #E7E4F2, #D6D0EA)',
    accent: '#7C5CFF',
    mockup: 'dashboard',
    featured: true,
  },
  {
    slug: 'peja-outdoor-festival',
    client: 'Peja Outdoor Festival',
    subtitle: 'four-day festival in Kosovo',
    category: 'Marketing',
    stack: 'Next.js · NestJS',
    excerpt:
      'Four days of activities and music in the heart of Kosovo, with a lineup site and an ops dashboard behind it.',
    year: 2026,
    gradient: 'linear-gradient(150deg, #E4EDE6, #CFE0D4)',
    accent: '#1F8A5B',
    mockup: 'form',
    featured: true,
  },
  {
    slug: 'sue-agency-rebrand',
    client: 'SUE Agency',
    subtitle: 'studio rebrand',
    category: 'Marketing',
    stack: 'Astro',
    excerpt: 'Our own studio rebrand — shipped on the edge, tuned for Lighthouse 100.',
    year: 2026,
    gradient: 'linear-gradient(150deg, #FBEFD6, #F4E0B4)',
    accent: '#F4B740',
    mockup: 'editorial',
    featured: true,
  },
];

export function getFeaturedCases(count = 3): CaseStudy[] {
  return cases.filter((c) => c.featured).slice(0, count);
}

export function getAllCases(): CaseStudy[] {
  return [...cases].sort((a, b) => b.year - a.year);
}

export const caseCategories: Array<'All' | CaseCategory> = [
  'All',
  'Ecommerce',
  'SaaS',
  'Editorial',
  'B2B',
  'Marketing',
];
