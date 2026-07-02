export type PostTag = 'Engineering' | 'Design' | 'Performance' | 'Studio';

export interface Author {
  name: string;
  role: string;
  bio: string;
}

export interface Stat {
  value: string;
  label: string;
}

export type Block =
  | { type: 'p'; text: string }
  | { type: 'h2'; text: string }
  | { type: 'quote'; text: string }
  | { type: 'ul'; items: string[] }
  | { type: 'code'; code: string };

export interface Post {
  slug: string;
  tag: PostTag;
  title: string;
  titleAccent?: string;
  excerpt: string;
  description: string;
  date: string;
  read: string;
  bg: string;
  accent: string;
  author: Author;
  heroStats?: Stat[];
  featured?: boolean;
  body: Block[];
}

const mara: Author = {
  name: 'Mara Ellis',
  role: 'Principal Engineer, SUE',
  bio: 'Principal engineer at SUE, focused on performance and edge rendering. Writes about making fast the default.',
};

const kai: Author = {
  name: 'Kai Rönne',
  role: 'Frontend Lead, SUE',
  bio: 'Frontend lead at SUE. Ships composable, typed, tested — and cares more about DX than the average tech lead should.',
};

const sofia: Author = {
  name: 'Sofia Marín',
  role: 'Design Director, SUE',
  bio: 'Design director at SUE. Designs in the browser, argues in Figma, and thinks pixel-perfect comps are lying to you.',
};

const wren: Author = {
  name: 'Wren Ito',
  role: 'Studio Producer, SUE',
  bio: 'Runs project rituals at SUE — from kickoff to launch. Writes about the parts of a build that never make the case study.',
};

export const posts: Post[] = [
  {
    slug: 'ceramic-0.3s-storefront',
    featured: true,
    tag: 'Performance',
    title: 'How we shipped a 0.3s storefront on the edge',
    titleAccent: '0.3s',
    excerpt:
      'A full breakdown of the Ceramic rebuild — from render strategy and image pipeline to the caching model that cut LCP by 4×.',
    description:
      'A full breakdown of the Ceramic rebuild — render strategy, image pipeline, and the caching model that cut Largest Contentful Paint by 4×.',
    date: 'June 28, 2026',
    read: '8 min read',
    bg: 'linear-gradient(150deg, #FFE7DE, #FFD0C2)',
    accent: '#FF5233',
    author: mara,
    heroStats: [
      { value: '1.2s → 0.3s', label: 'LCP, before → after' },
      { value: '+41%', label: 'conversion lift' },
    ],
    body: [
      {
        type: 'p',
        text:
          'Ceramic came to us with a storefront that looked great and felt slow. On a mid-range phone over 4G, the hero took well over a second to paint — and every 100ms of that was costing them checkouts. The brief was simple to state and hard to do: keep the design, make it disappear from the loading bar.',
      },
      {
        type: 'p',
        text:
          "We rebuilt the front end on Astro, moved rendering to the edge, and rethought the image pipeline from scratch. Here's how each piece contributed.",
      },
      { type: 'h2', text: 'Render at the edge, not the origin' },
      {
        type: 'p',
        text:
          'The single biggest win was moving HTML generation off a single-region origin and onto edge functions that run within milliseconds of the visitor. Time to first byte dropped from ~320ms to under 40ms for most of their traffic.',
      },
      {
        type: 'code',
        code:
          "// astro.config.mjs — deploy the whole site to the edge\nexport default defineConfig({\n  output: 'server',\n  adapter: edge({ regions: 'all' }),\n});",
      },
      {
        type: 'p',
        text:
          'Because product pages change rarely, we cache the rendered HTML at the edge and revalidate in the background. Shoppers get a static-fast response; merchandisers still see updates within seconds.',
      },
      {
        type: 'quote',
        text:
          'The fastest request is the one you never make. The second fastest is the one you cache.',
      },
      { type: 'h2', text: 'An image pipeline that defaults to fast' },
      {
        type: 'p',
        text:
          "Images were 70% of the page weight. We made the right thing automatic: every image passes through a transform that serves AVIF with a WebP fallback, sizes to the actual layout, and lazy-loads everything below the fold. No one on the content team has to think about it.",
      },
      {
        type: 'ul',
        items: [
          'AVIF with WebP fallback, chosen per request',
          'Responsive `srcset` generated from the layout, not guessed',
          'Priority hint on the LCP image; lazy on the rest',
        ],
      },
      { type: 'h2', text: 'The result' },
      {
        type: 'p',
        text:
          'LCP dropped from 1.2s to 0.3s at the 75th percentile, Lighthouse went to 100 on mobile, and — the number that actually mattered to Ceramic — conversion rose 41% in the first month. Same design, same content. Just faster.',
      },
      {
        type: 'p',
        text:
          "If your site looks right but feels slow, the fix is rarely a redesign. It's usually the pipeline underneath. That's the part we love.",
      },
    ],
  },

  {
    slug: 'astro-islands-in-production',
    tag: 'Engineering',
    title: 'Astro islands in production: what we actually ship',
    titleAccent: 'islands',
    excerpt:
      'Partial hydration sounds great on paper. Here is where it earns its keep — and where it does not.',
    description:
      'Partial hydration sounds great on paper. Here is where it earns its keep in production — and where it quietly gets in the way.',
    date: 'Jun 14, 2026',
    read: '6 min read',
    bg: 'linear-gradient(150deg, #E4EDE6, #CFE0D4)',
    accent: '#1F8A5B',
    author: kai,
    body: [
      {
        type: 'p',
        text:
          "Astro's whole pitch is that most of your site does not need JavaScript, and the parts that do can hydrate on their own. In practice, we have shipped enough Astro sites to know when this is a win and when it is just an idea.",
      },
      { type: 'h2', text: 'When islands earn their keep' },
      {
        type: 'p',
        text:
          "For anything that is 90% content — marketing sites, storefronts, journals — islands are a superpower. The header can be static, the hero can be static, the product grid can be static, and the one modal that opens a size chart can hydrate with `client:visible`. The rest of the page ships zero JS.",
      },
      {
        type: 'code',
        code:
          "// Only hydrate what actually needs it\n<SizeChart client:visible />\n<CartDrawer client:idle />",
      },
      { type: 'h2', text: 'When they get in the way' },
      {
        type: 'p',
        text:
          "The moment your page needs to share state across three islands, you are working against the model. Global state, cross-island events, and shared stores all become friction. That's a signal — it's usually a full SPA route, not an island.",
      },
      {
        type: 'quote',
        text:
          'If two islands need to talk, ask why they are not the same island.',
      },
      { type: 'h2', text: 'Our rule of thumb' },
      {
        type: 'p',
        text:
          "One island per interactive surface. If two surfaces need to coordinate, either merge them into one island or move the whole route to a framework page. Do not build islands that pretend to be a SPA — you get the worst of both.",
      },
    ],
  },

  {
    slug: 'designing-in-the-browser',
    tag: 'Design',
    title: 'Designing in the browser, not the mockup',
    titleAccent: 'browser',
    excerpt:
      'Why we prototype live and skip pixel-perfect comps — and how it speeds up sign-off.',
    description:
      'Why we prototype live in code, skip pixel-perfect comps, and how it speeds up sign-off with real clients.',
    date: 'Jun 02, 2026',
    read: '5 min read',
    bg: 'linear-gradient(150deg, #FFE7DE, #FFD0C2)',
    accent: '#FF5233',
    author: sofia,
    body: [
      {
        type: 'p',
        text:
          "The tension in any web project is that the deliverable is code, but the review artifact is a picture. Every round of feedback on a static comp is feedback on something that will never exist — and every round is a delay.",
      },
      { type: 'h2', text: 'Static comps are lying to you' },
      {
        type: 'p',
        text:
          "A comp shows one viewport, one state, one theme. The real site has three breakpoints, five states per component, dark mode, keyboard focus, and reduced motion. You can not sign off on those in Figma. So you sign off on the picture, ship the site, and rediscover half of the design language in the browser under a deadline.",
      },
      { type: 'h2', text: 'What we do instead' },
      {
        type: 'p',
        text:
          "We build the design system as code in week one — colors, type, spacing, primitives — and prototype pages in the browser from week two. Clients see a real URL, on a real device, in every state. Feedback becomes concrete.",
      },
      {
        type: 'ul',
        items: [
          'Design tokens live in CSS variables from day one',
          'Every component ships with its states before it ships anywhere else',
          'Reviews happen on a preview URL, not a shared Figma file',
        ],
      },
      {
        type: 'quote',
        text:
          'The best design tool is the medium your users will actually see.',
      },
      { type: 'h2', text: 'Where Figma still wins' },
      {
        type: 'p',
        text:
          "Exploration. Moodboards. Alignment on direction before you write CSS. We still start there. We just move on faster.",
      },
    ],
  },

  {
    slug: 'core-web-vitals-2026',
    tag: 'Performance',
    title: 'A pragmatic guide to Core Web Vitals in 2026',
    titleAccent: 'pragmatic',
    excerpt:
      'INP replaced FID a while ago. Here is our current checklist for staying in the green.',
    description:
      'INP replaced FID a while ago. Here is the checklist we actually work from to keep every project in the green.',
    date: 'May 21, 2026',
    read: '9 min read',
    bg: 'linear-gradient(150deg, #E7E4F2, #D6D0EA)',
    accent: '#7C5CFF',
    author: mara,
    body: [
      {
        type: 'p',
        text:
          "Core Web Vitals moved on. INP has been the interaction metric for a while, but plenty of guides still treat FID like it exists. Here is what we actually check for every project in 2026.",
      },
      { type: 'h2', text: 'LCP: it is almost always an image' },
      {
        type: 'p',
        text:
          "Nine times out of ten, the largest contentful paint element is the hero image. Preload it, prioritize it with `fetchpriority=\"high\"`, serve modern formats, and size it to the exact box it will render in. That alone gets most sites to green.",
      },
      { type: 'h2', text: 'CLS: font metrics and images without dimensions' },
      {
        type: 'p',
        text:
          "Layout shift usually comes from two places: web fonts swapping into a different metric, and images without width and height. Use font-metric overrides (or the Astro fonts API which handles this for you) and always set image dimensions.",
      },
      { type: 'h2', text: 'INP: keep the main thread quiet' },
      {
        type: 'p',
        text:
          "The interaction metric is really a JavaScript metric. Ship less, split what you must ship, and defer everything below the fold. If you can not measure a hydration cost, do not add the component.",
      },
      {
        type: 'quote',
        text:
          'The fastest interaction is the one that runs no code at all.',
      },
      { type: 'h2', text: 'The checklist' },
      {
        type: 'ul',
        items: [
          'LCP image preloaded, prioritized, sized, and served as AVIF',
          'Fonts served as `woff2`, subsetted, with metric overrides',
          'Images have explicit `width` and `height`',
          'No third-party script above the fold',
          'Hydration only where it earns its keep',
        ],
      },
    ],
  },

  {
    slug: 'choosing-a-headless-cms',
    tag: 'Engineering',
    title: 'Choosing a headless CMS without regret',
    titleAccent: 'without regret',
    excerpt:
      'Sanity, Contentful, Payload — a decision framework based on the teams who maintain it.',
    description:
      'Sanity, Contentful, Payload — a decision framework built on the teams who have to live with the choice.',
    date: 'May 08, 2026',
    read: '7 min read',
    bg: 'linear-gradient(150deg, #FBEFD6, #F4E0B4)',
    accent: '#F4B740',
    author: kai,
    body: [
      {
        type: 'p',
        text:
          "The tools are all fine. That is the honest starting point. The interesting question is which one your team will still love in eighteen months.",
      },
      { type: 'h2', text: 'Sanity' },
      {
        type: 'p',
        text:
          "Best for editorially rich content, custom studios, and teams who want the model to feel like a product. The tradeoff is that the studio is code, and someone has to own it.",
      },
      { type: 'h2', text: 'Contentful' },
      {
        type: 'p',
        text:
          "Best for teams who want an editor experience that just works and are willing to work within its content model. Scales well, integrates easily, opinionated where it needs to be.",
      },
      { type: 'h2', text: 'Payload' },
      {
        type: 'p',
        text:
          "Best when you want to self-host and keep the CMS close to the app. The model is code, the admin is generated, and you get to keep your database.",
      },
      {
        type: 'quote',
        text:
          'A CMS is a promise to the future editor. Do not pick it for the developer alone.',
      },
      { type: 'h2', text: 'How we decide' },
      {
        type: 'p',
        text:
          "We look at who is going to use it every day. If the answer is a marketing team who will not touch the schema, Contentful. If it is a product team who wants the model to grow with them, Sanity or Payload. If uncertain — Sanity, because escaping it later is the least painful.",
      },
    ],
  },

  {
    slug: 'four-week-build-sprint',
    tag: 'Studio',
    title: 'How we run a four-week build sprint',
    titleAccent: 'four-week',
    excerpt:
      'The exact cadence — discover, design, build, launch — and the rituals that keep it honest.',
    description:
      "The exact cadence — discover, design, build, launch — and the rituals that keep it honest. What we do in each week, and why.",
    date: 'Apr 25, 2026',
    read: '4 min read',
    bg: 'linear-gradient(150deg, #E4EDE6, #CFE0D4)',
    accent: '#1F8A5B',
    author: wren,
    body: [
      {
        type: 'p',
        text:
          "Four weeks is short enough to force decisions and long enough to actually ship. Here is the shape of the sprint we run for most engagements.",
      },
      { type: 'h2', text: 'Week 1 — Discover' },
      {
        type: 'p',
        text:
          "Goals, audience, existing analytics, an audit of what is there today. We end the week with a one-page brief that everyone signs off on. If the brief takes longer than a week, the project is too big.",
      },
      { type: 'h2', text: 'Week 2 — Design' },
      {
        type: 'p',
        text:
          "Design system in code, key pages prototyped live in the browser. Client review happens on a URL, not in Figma. By Friday, the design system covers 80% of the site's surface area.",
      },
      { type: 'h2', text: 'Week 3 — Build' },
      {
        type: 'p',
        text:
          "Composable frontend wired to the CMS, deploy previews per PR. Content team starts filling the site in parallel. QA rides along, not at the end.",
      },
      { type: 'h2', text: 'Week 4 — Launch' },
      {
        type: 'p',
        text:
          "Perf pass, cross-device QA, DNS, monitoring, launch. Then a clean handoff — including a runbook for the on-call engineer we will never be.",
      },
      {
        type: 'quote',
        text:
          'A short calendar is a design tool. It closes doors that were not worth opening.',
      },
    ],
  },

  {
    slug: 'images-still-your-biggest-win',
    tag: 'Performance',
    title: 'Images are still your biggest win',
    titleAccent: 'biggest',
    excerpt:
      'AVIF, responsive sizes, and a pipeline that makes the right thing the default thing.',
    description:
      'AVIF, responsive sizes, and a pipeline that makes the right thing the default thing — even for the content team.',
    date: 'Apr 11, 2026',
    read: '6 min read',
    bg: 'linear-gradient(150deg, #FFE7DE, #FFD0C2)',
    accent: '#FF5233',
    author: mara,
    body: [
      {
        type: 'p',
        text:
          "Every audit we run, the largest single optimization is still images. Not JS bundles. Not CSS. Not fonts. Images. And the fix is boring and repeatable.",
      },
      { type: 'h2', text: 'Serve the format the browser wants' },
      {
        type: 'p',
        text:
          "AVIF beats WebP beats JPEG on file size at equal quality, but not every browser wants AVIF. A `<picture>` element with the right sources lets each browser pick its own path — and cuts weight in half without touching design.",
      },
      { type: 'h2', text: 'Size to the layout, not the source' },
      {
        type: 'p',
        text:
          "A 2400px source served into a 400px slot is 6x more pixels than the browser will ever show. Generate a proper `srcset` from the layout — not from a static config — and let the browser choose.",
      },
      {
        type: 'code',
        code:
          "<Image\n  src={hero}\n  widths={[400, 800, 1200]}\n  sizes=\"(min-width: 768px) 50vw, 100vw\"\n  loading=\"eager\"\n  fetchpriority=\"high\"\n/>",
      },
      { type: 'h2', text: 'Make it the default' },
      {
        type: 'p',
        text:
          "The best pipeline is the one the content team does not have to remember to use. Wire the transform into your CMS or your component library so `<Image>` is the only thing anyone reaches for.",
      },
      {
        type: 'quote',
        text:
          'The right thing has to be the default thing. Everything else decays.',
      },
    ],
  },
];

export const categories: Array<'All' | PostTag> = [
  'All',
  'Performance',
  'Engineering',
  'Design',
  'Studio',
];

export function getFeaturedPost(): Post {
  const featured = posts.find((p) => p.featured);
  if (!featured) throw new Error('No featured post defined');
  return featured;
}

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}

export function getListPosts(): Post[] {
  return posts.filter((p) => !p.featured);
}

export function getRelatedPosts(currentSlug: string, count = 3): Post[] {
  const current = getPostBySlug(currentSlug);
  if (!current) return posts.slice(0, count);
  const sameTag = posts.filter(
    (p) => p.slug !== currentSlug && p.tag === current.tag,
  );
  const others = posts.filter(
    (p) => p.slug !== currentSlug && p.tag !== current.tag,
  );
  return [...sameTag, ...others].slice(0, count);
}
