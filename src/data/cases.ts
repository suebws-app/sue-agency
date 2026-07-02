export type CaseCategory =
  | 'Ecommerce'
  | 'SaaS'
  | 'Editorial'
  | 'B2B'
  | 'Marketing';

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
    slug: 'ceramic',
    client: 'Ceramic',
    subtitle: 'DTC storefront',
    category: 'Ecommerce',
    stack: 'Astro',
    excerpt: 'Rebuilt on the edge. +41% conversion and a 0.3s LCP at launch.',
    year: 2026,
    gradient: 'linear-gradient(150deg, #FFE7DE, #FFD0C2)',
    accent: '#FF5233',
    mockup: 'form',
    featured: true,
  },
  {
    slug: 'verdant',
    client: 'Verdant',
    subtitle: 'climate dashboard',
    category: 'SaaS',
    stack: 'Next.js',
    excerpt: 'A data-heavy product marketing site that still scores 100 on mobile.',
    year: 2026,
    gradient: 'linear-gradient(150deg, #E4EDE6, #CFE0D4)',
    accent: '#1F8A5B',
    mockup: 'dashboard',
    featured: true,
  },
  {
    slug: 'meridian',
    client: 'Meridian',
    subtitle: 'media network',
    category: 'Editorial',
    stack: 'Sanity',
    excerpt: 'A 12k-page publication migrated with zero downtime and 2× faster builds.',
    year: 2026,
    gradient: 'linear-gradient(150deg, #E7E4F2, #D6D0EA)',
    accent: '#7C5CFF',
    mockup: 'editorial',
    featured: true,
  },
  {
    slug: 'lumen',
    client: 'Lumen',
    subtitle: 'headless commerce platform',
    category: 'Ecommerce',
    stack: 'Astro · Shopify',
    excerpt: 'Multi-storefront platform with a shared design system and per-region content.',
    year: 2026,
    gradient: 'linear-gradient(150deg, #FBEFD6, #F4E0B4)',
    accent: '#F4B740',
    mockup: 'form',
  },
  {
    slug: 'northwind',
    client: 'Northwind',
    subtitle: 'B2B logistics',
    category: 'B2B',
    stack: 'Next.js · Contentful',
    excerpt: 'Marketing site plus a gated customer portal, both shipped in five weeks.',
    year: 2025,
    gradient: 'linear-gradient(150deg, #E1E7F0, #C9D3E4)',
    accent: '#2A6FDB',
    mockup: 'dashboard',
  },
  {
    slug: 'halo-labs',
    client: 'Halo Labs',
    subtitle: 'research platform',
    category: 'SaaS',
    stack: 'React · Sanity',
    excerpt: 'A product marketing site that keeps up with a weekly release cadence.',
    year: 2025,
    gradient: 'linear-gradient(150deg, #E9E2F5, #D2C4EA)',
    accent: '#7C5CFF',
    mockup: 'editorial',
  },
  {
    slug: 'postmark',
    client: 'Postmark',
    subtitle: 'email API',
    category: 'Marketing',
    stack: 'Astro · MDX',
    excerpt: 'A DX-heavy marketing site with 200+ MDX docs and full-text search.',
    year: 2025,
    gradient: 'linear-gradient(150deg, #FFE0D6, #FFC4B0)',
    accent: '#FF5233',
    mockup: 'form',
  },
  {
    slug: 'fjord',
    client: 'Fjord',
    subtitle: 'outdoor apparel',
    category: 'Ecommerce',
    stack: 'Astro · Shopify',
    excerpt: 'A seasonal DTC storefront tuned for a two-hour drop window each month.',
    year: 2025,
    gradient: 'linear-gradient(150deg, #DDECDF, #BFDDCA)',
    accent: '#1F8A5B',
    mockup: 'dashboard',
  },
  {
    slug: 'kubo',
    client: 'Kubo',
    subtitle: 'studio portfolio',
    category: 'Editorial',
    stack: 'Astro',
    excerpt: 'A studio portfolio with case study pages that load like a static site.',
    year: 2025,
    gradient: 'linear-gradient(150deg, #EAE4D9, #D6C9B1)',
    accent: '#B85C2A',
    mockup: 'editorial',
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
