# Personal Portfolio

A responsive personal portfolio website showcasing a computer science student's
profile, skills, projects, education, experience, achievements and contact
information.

Built with [Next.js 16](https://nextjs.org) (App Router), [React 19](https://react.dev)
and [Tailwind CSS v4](https://tailwindcss.com).

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Make it yours

All content lives in a single file: [`src/data/profile.js`](src/data/profile.js).
Edit that file to change your name, bio, skills, projects, timeline entries and
achievements — no component changes needed.

## Features

- **Responsive layout** — mobile-first grid/flex layouts, collapsible mobile
  navigation, works from 360px phones up to wide screens.
- **Smooth scrolling** — native CSS smooth scrolling with anchor navigation.
- **Scroll-spy navigation** — the navbar highlights the section you're reading
  and shows a mobile menu with Escape-to-close.
- **Scroll-reveal animations** — sections fade up as they enter the viewport
  (`src/components/Reveal.jsx`), and skill bars animate to their level.
- **Hover micro-animations** — lifted cards, sliding nav underlines, arrow
  nudges and icon transitions.
- **Project filtering** — filter projects by category without a page reload.
- **Contact form validation** — client-side validation with inline error
  messages, aria attributes and focus management (`src/components/ContactForm.jsx`).
- **Accessible** — semantic landmarks, focus-visible styles, `sr-only` labels,
  `prefers-reduced-motion` support, and a `<noscript>` fallback for animations.
- **Dark theme** — token-driven design system defined in `src/app/globals.css`.

## Project structure

```
src/
├── app/
│   ├── layout.jsx        # Root layout: fonts, metadata, smooth scrolling
│   ├── page.jsx          # Composes all sections
│   └── globals.css       # Design tokens + animation/keyframe helpers
├── components/
│   ├── Navbar.jsx        # Fixed nav with scroll-spy + mobile menu
│   ├── Hero.jsx          # Intro, availability badge, stats strip
│   ├── About.jsx         # Bio, quick facts, soft-skill chips
│   ├── Skills.jsx        # Skill cards with animated progress bars
│   ├── Projects.jsx      # Filterable project grid
│   ├── Education.jsx     # Timeline
│   ├── Experience.jsx    # Timeline
│   ├── Achievements.jsx  # Award cards
│   ├── Contact.jsx       # Contact details + form
│   ├── ContactForm.jsx   # Client-side validated form
│   ├── Footer.jsx
│   ├── Section.jsx       # Shared section header shell
│   ├── Reveal.jsx        # IntersectionObserver scroll reveal
│   └── icons.jsx         # Inline SVG icon set
└── data/
    └── profile.js        # ← all site content
```

## Scripts

| Command         | Description              |
| --------------- | ------------------------ |
| `npm run dev`   | Start dev server         |
| `npm run build` | Production build         |
| `npm run start` | Serve the production build |
| `npm run lint`  | Run ESLint               |
