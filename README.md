# SUE Agency

Marketing site for SUE Agency, a fictional web studio built as a design-implementation
project from a Claude Design mockup. Astro 7 + Tailwind CSS v4, zero client-side JS on
every page except the contact form and the reading-progress bar.

## Stack

|                |                                                                                                                                                                          |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Framework      | Astro 7 (static output)                                                                                                                                                  |
| Styling        | Tailwind CSS v4 via the Vite plugin, CSS-first `@theme` tokens                                                                                                           |
| Fonts          | Self-hosted via Astro's `fonts` API — Bricolage Grotesque, Instrument Sans, Instrument Serif, JetBrains Mono. Subsetted `.woff2`, latin only, `--font-display` preloaded |
| Icons / arrows | Inline SVG or Unicode                                                                                                                                                    |
| Utilities      | `clsx` + `tailwind-merge` behind a `cn()` helper                                                                                                                         |
| Client JS      | Only where earned — `<ReadingProgress>` scroll listener on articles, and the contact form's `mailto:` builder. Everything else ships zero bytes of JS.                   |

Node `>=22.12.0`.

## Pages

```
/                       home         hero, showreel, marquee, services, stats,
                                     work overview, process, CTA
/work                   work         page hero + case cards grouped by year
/services               services     page hero + services + "every project includes"
/process                process      page hero + 4-week bento + FAQ
/journal                journal      page hero + category filter + featured post
                                     + grid + newsletter
/journal/<slug>         article      dynamic route — one per post in data/posts.ts
/contact                contact      form (mailto: builder) + direct email
                                     + "what happens next"
```

Nav lives on every page, highlights the active section, and points every "Start a
project" CTA at `/contact`.

## Project layout

```
src/
├── data/
│   ├── cases.ts        case studies — single source of truth for /work + home
│   └── posts.ts        journal posts — drives /journal + /journal/<slug>
├── components/
│   ├── ui/             small dumb primitives (Tag, PillButton, Eyebrow,
│   │                   GradientAvatar, AuroraGlow, StatItem, TextLink)
│   ├── Nav.astro       site header, accepts `activeLink`
│   ├── PageHero.astro  shared H1 + eyebrow + intro used on every landing page
│   ├── Aurora.astro    background blob variants: hero | compact | minimal
│   ├── CaseCard.astro  browser-mockup + title used by home Work + /work
│   ├── ArticleBody.astro  renders typed content blocks from posts.ts
│   ├── ReadingProgress.astro  the only client-JS island on article pages
│   └── … one component per home section
├── layouts/
│   └── Layout.astro    <html>, meta, fonts, global.css import
├── lib/
│   └── cn.ts           clsx + twMerge
├── pages/
│   ├── index.astro
│   ├── work.astro
│   ├── services.astro
│   ├── process.astro
│   ├── contact.astro
│   ├── journal.astro
│   └── journal/[slug].astro
└── styles/
    └── global.css      Tailwind entry + @theme tokens + @keyframes
                        + @layer components (title-fill, underline-fill, .prose)
```

## Design tokens

All in `src/styles/global.css` under `@theme`:

- **Colors** — `--color-accent` (`#D0301A`, WCAG-safe on light bg), `--color-accent-vivid`
  (`#FF5233`, used only inside dark cards and for the aurora glow), plus `--color-dark`,
  `--color-muted`, `--color-subtle`, `--color-bg`, `--color-card`, `--color-cream`,
  `--color-ink`, and three brand accents (`emerald`, `violet`, `amber`).
- **Fonts** — `--font-sans`, `--font-display`, `--font-serif`, `--font-mono`. Auto-populated
  by Astro's fonts API at build time.
- **Animations** — `--animate-marquee`, `--animate-drift-1/2/3`, `--animate-drift-slow`.

Editing tokens flows to every consumer — no other file references hex codes for these.

## Reusable primitives (`src/components/ui/`)

Extracted because they had 3+ occurrences:

| Component        | What it does                                                                   |
| ---------------- | ------------------------------------------------------------------------------ |
| `Tag`            | Rounded pill — `variant="outline"` (default) or `variant="accent"`             |
| `PillButton`     | Dark rounded CTA — `size="sm" \| "md" \| "lg"`                                 |
| `TextLink`       | Link with the left-to-right underline slide-in on hover                        |
| `Eyebrow`        | Uppercase accent-orange label above section titles, `onDark` for dark sections |
| `GradientAvatar` | Orange-to-violet circle; takes a `size` in px                                  |
| `AuroraGlow`     | Radial-gradient overlay inside dark cards                                      |
| `StatItem`       | Big display number + `opacity-60` label, three sizes                           |

Plus non-`ui/` shared components: `PageHero`, `CaseCard`, `Nav`, `Footer`.

## Content

- **Case studies** — edit `src/data/cases.ts`. Fields: `slug`, `client`, `subtitle`,
  `category`, `stack`, `excerpt`, `year`, `gradient`, `accent`, `mockup`
  (`'form' | 'dashboard' | 'editorial'`), optional `featured`. `getFeaturedCases(n)`
  drives the home overview; `getAllCases()` drives `/work`.
- **Journal posts** — edit `src/data/posts.ts`. Body is a typed `Block[]` — `p`, `h2`,
  `quote`, `ul`, `code` — rendered by `ArticleBody.astro` with light server-side syntax
  highlighting on code blocks. `getFeaturedPost()`, `getListPosts()`, `getRelatedPosts()`
  keep the list and detail pages in sync.

Add a new post: append an entry to `posts` with a fresh `slug` and content blocks — the
static route `journal/[slug].astro` picks it up automatically at build time.

## Contact form

`/contact` submits without a backend. On submit, a small script gathers the form fields
and opens the user's default email client via a prefilled `mailto:hello@sueagency.com`
URL. Progressive enhancement: raw `<form action="mailto:…" enctype="text/plain">`
fallback if JS is disabled.

## Performance

Production build hits **100 / 100 / 100 / 100** on Lighthouse (desktop and mobile) for
every page. FCP ≈ 0.3s, LCP ≈ 0.4s, CLS ≈ 0.

The wins came from:

1. Self-hosted, subsetted fonts via `astro.config.mjs`'s `fonts` block — no Google Fonts
   `<link>` on the critical path.
2. Zero JavaScript on most pages — the "aurora glow" and rotating hero word are pure
   CSS animations, not React islands.
3. `content-visibility: auto` on below-fold sections via the `offscreen` utility in
   `global.css`.

Lighthouse against the dev server (`npm run dev`, port 4321) will report much worse
numbers — that includes Vite's HMR client and Astro's dev toolbar, neither of which
ship in production. Always audit `npm run preview` (port 4322) for real numbers.

## Commands

```sh
npm install       # install deps
npm run dev       # dev server at http://localhost:4321
npm run build     # static output to ./dist/
npm run preview   # serve ./dist/ at http://localhost:4322
```

Dev server also supports background mode — `astro dev --background`, then `astro dev
stop | status | logs` — used for headless-Chrome screenshotting while iterating.
