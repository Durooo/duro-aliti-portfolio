# Duro Aliti — Portfolio

A responsive personal portfolio built with React, TypeScript, Vite, and CSS. Includes the original, uncropped portrait and desktop/mobile captures of Doner King and The Spot.

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

- `src/main.tsx`: navigation, hero, project showcases, about, skills, contact, and footer components.
- `src/projects.ts`: project data. Add an entry and corresponding desktop/mobile images to add a project.
- `src/styles.css`: colors, typography, responsive layout, and motion preferences.
- `public/`: optimized portrait, project screenshots, and favicon.
- `index.html`: page title, description, and document metadata.

Project screenshots are static captures of the supplied live websites. Replace them when the projects change. The email link opens the visitor's email app. The site includes a keyboard-accessible mobile menu, visible focus states, and reduced-motion support. Google Fonts provides DM Sans and Manrope, with local sans-serif fallbacks.
