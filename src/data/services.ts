export interface Service {
  num: string;
  title: string;
  body: string;
  meta: string | string[];
}

export const services: Service[] = [
  {
    num: '01',
    title: 'Web Design',
    body: 'Editorial, brand-led interfaces prototyped live so you sign off on the real thing, not a picture of it.',
    meta: 'Systems · UX · Prototyping',
  },
  {
    num: '02',
    title: 'Full-stack Engineering',
    body: 'React, Astro, and Next on the front. Node with tRPC or REST, Postgres, and auth on the back. Typed end to end, tested, and deployed to the edge.',
    meta: ['React · Astro · Next', 'Node · tRPC · Postgres · Auth'],
  },
  {
    num: '03',
    title: 'Headless CMS',
    body: 'Sanity, Contentful, or Payload models that editors actually reach for. Structured, previewable, boring in the best way.',
    meta: 'Sanity · Contentful · DXP',
  },
  {
    num: '04',
    title: 'Performance & SEO',
    body: 'Green Core Web Vitals, technical SEO baked in, and Lighthouse 100 on the pages that pay the bills.',
    meta: 'CWV · Audits · Growth',
  },
  {
    num: '05',
    title: 'SMMA',
    body: 'Social-first campaigns and paid growth wired straight into the site we shipped, so channel spend compounds.',
    meta: 'Social · Content · Ads',
  },
  {
    num: '06',
    title: 'Consulting',
    body: 'Discovery, UX and technical audits before the first commit, so the build starts from a plan instead of a hunch.',
    meta: 'Discovery · Audits · Strategy',
  },
];

export interface CatalogItem {
  letter: string;
  title: string;
  question: string;
  body: string;
}

export interface CatalogGroup {
  label: string;
  items: CatalogItem[];
}

export const serviceCatalog: CatalogGroup[] = [
  {
    label: 'Consulting',
    items: [
      {
        letter: 'A',
        title: 'Discovery Workshop',
        question: 'Not sure what to build next, or whether to build at all?',
        body: 'One focused session with your team to map goals, users, and what the current product is really doing. You leave with a one-page brief that both the boardroom and the eng team can act on.',
      },
      {
        letter: 'B',
        title: 'UX Audit',
        question: "Traffic is fine, but people aren't converting or coming back?",
        body: 'We walk your critical flows the way a real customer would, then trace where friction lives: nav, forms, information architecture, and content clarity. You get a prioritized fix list, ranked by cost and impact.',
      },
      {
        letter: 'C',
        title: 'Technical Audit',
        question: 'Something under the hood feels off, but no one owns it?',
        body: 'A pragmatic look at architecture, bundle strategy, rendering model, and dependency risk. We deliver a written report with a fix roadmap and an honest read on which pieces to keep, replace, or forget about.',
      },
    ],
  },
  {
    label: 'Design',
    items: [
      {
        letter: 'A',
        title: 'Branding',
        question: "Your brand assets don't line up on the web anymore?",
        body: 'We translate identity into a working system: type scale, color, spacing, motion, and voice. The output is design tokens and guidance your marketing and product teams can both build on.',
      },
      {
        letter: 'B',
        title: 'UX/UI Design',
        question: 'The product works, but flows feel heavy?',
        body: 'We map the tasks that matter, redesign them around the shortest sensible path, and prototype in the browser so decisions are made on real interaction, not static pixels.',
      },
      {
        letter: 'C',
        title: 'Web Design',
        question: "Your site looks fine, but it isn't doing much for you?",
        body: 'A brand-forward site built around the pages that convert. Editorial layout, tight typography, real interaction, responsive down to the last breakpoint, and calibrated to your growth goals.',
      },
      {
        letter: 'D',
        title: 'Product Design',
        question: 'Building an app or dashboard your team keeps going back to?',
        body: 'End-to-end product design for SaaS, tools, and dashboards. Research, flow modeling, prototyping, and design systems, delivered with the engineering team, not tossed over a wall.',
      },
    ],
  },
  {
    label: 'Development',
    items: [
      {
        letter: 'A',
        title: 'Modern Frontend Development',
        question: 'Site should feel fast on a phone in the wild, not just in a demo?',
        body: 'Composable frontends in React, Astro, or Next, wired to the edge and typed end to end. We ship components with states, tests, and stories, so the codebase compounds instead of decays.',
      },
      {
        letter: 'B',
        title: 'Headless CMS Implementation & Migration',
        question: 'Ready to move off a monolith or set up a new content stack?',
        body: 'We model your content, pick the right platform for the team that will live in it, and migrate without a maintenance window. Preview, roles, and localization included, not bolted on.',
      },
      {
        letter: 'C',
        title: 'Webflow Development',
        question: 'Want the marketing team to ship pages without a ticket?',
        body: 'Webflow builds that respect performance and accessibility. Structured CMS collections, custom interactions, and a hand-off doc so your team can extend the site instead of fearing it.',
      },
    ],
  },
  {
    label: 'Maintenance',
    items: [
      {
        letter: 'A',
        title: 'Conversion Rate Optimization',
        question: "Traffic is up, revenue isn't following?",
        body: 'Data-backed CRO: instrument the funnel, form hypotheses from real behavior, ship A/B tests, and lock in the wins. Wins compound month over month instead of getting overwritten by the next redesign.',
      },
      {
        letter: 'B',
        title: 'Core Web Vitals Optimization',
        question: 'Search Console keeps flagging LCP, CLS, or INP?',
        body: 'A targeted engagement to move each metric into the green and keep it there. Image and font pipelines, main-thread budget, and a lightweight monitoring setup so regressions surface early.',
      },
      {
        letter: 'C',
        title: 'Headless CMS Optimization',
        question: 'Editors slow, cache flaky, preview broken?',
        body: 'We tune existing headless stacks: schema, GROQ or GraphQL queries, ISR and edge caching, and preview flow, so the CMS feels as fast to editors as the site does to visitors.',
      },
    ],
  },
];

export const servicesIncludes: string[] = [
  'A design system documented in code that your team can extend',
  'Automated Lighthouse checks on every pull request',
  'WCAG 2.2 AA accessibility audit before launch',
  'Analytics + Core Web Vitals monitoring wired up on day one',
  'A handoff runbook so maintainers know exactly what we built',
];
