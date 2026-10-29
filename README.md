# Duro Aliti — Portfolio

A responsive business-facing portfolio built with React 19, TypeScript, Vite, and CSS. The editorial design uses warm off-white, charcoal and muted green, with original desktop/mobile project captures and an uncropped portrait.

## Development

```sh
npm install
npm run dev
```

## Production

```sh
npm run build
npm run preview
```

The production website is generated in `dist/` and can be served by a static web host.

## Editing

- `src/main.tsx`: navigation, hero, project showcases, services, about, skills, credentials, contact, and footer components.
- `src/projects.ts`: project data. Add an entry and corresponding desktop/mobile images to add a project.
- `src/styles.css`: colors, typography, responsive layout, and motion preferences.
- `public/`: optimized portrait, project screenshots, and favicon.
- `index.html`: page title, description, and document metadata.

Project screenshots are static captures of EuroLaser, The Spot, Küchenfarben, and Doner King, in that order. The Küchenfarben display name uses the existing `kuchen-faben` assets and live URL. Replace screenshots when the projects change; preserve the project descriptions and verified credential links when editing copy.

The inquiry links open the visitor's email app; there is no contact form or submission backend. The site includes a keyboard-accessible mobile menu (Escape closes it and restores focus), a skip link, visible focus states, labeled sections, and reduced-motion support. Content stays visible when IntersectionObserver is unavailable. Google Fonts provides Manrope with `display=swap` and system fallbacks; the italic accents use Georgia locally. Images have explicit dimensions and are lazy-loaded and asynchronously decoded.

## Validation and review

`npm run build` runs TypeScript checking and creates the production bundle. `npm audit` checks installed dependencies. There are no separate test or lint scripts configured in this repository.

Before review, check 320px, 390px, 768px, 1024px and 1440px layouts; mobile menu open/close and Escape focus; keyboard skip link; reduced motion; all eight project images; new-tab links; certificate link; email and CV. Check the project order and counter, five credentials, and horizontal overflow.

Work on a feature branch and open a pull request against `main`. Deployment is a separate, owner-approved step; this redesign does not change hosting configuration.
