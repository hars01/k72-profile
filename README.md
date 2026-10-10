# k72 — Animated React Portfolio

Professional, animated personal portfolio built with React and Vite and styled using Tailwind CSS.

## Project Summary

`k72` is a single-page portfolio showcasing projects, skills, and contact methods. It emphasizes large, cinematic hero typography, interactive card components, and smooth micro-interactions. The project is component-driven so sections can be reused or repurposed across pages.

Main goals:
- Present projects and a downloadable virtual visiting card with a 3D/tilt visual.
- Provide a compact content/tools demo section.
- Offer an email-enabled contact form (optional, via EmailJS).

## Features

- Large responsive hero with embedded video (`src/comonents/home/HomeHeroText.jsx`).
- Interactive 3D-style cards with layered z-depth (`src/comonents/ui/3d-card.jsx`) and image download buttons (`src/pages/InterestingCards.jsx`).
- Testimonial marquee with pause-on-hover and animated cards (`src/pages/Connect.jsx`).
- Content tools demo grid (`src/comonents/Content/content.jsx`).
- Modular, Tailwind-based styling for fast iteration and responsiveness.

## Project Structure (important files)

- `index.html` — app shell
- `package.json`, `vite.config.js`, `eslint.config.js`
- `src/main.jsx` — app entry
- `src/App.jsx` — routing and app layout
- `src/pages/` — main pages
	- `Home.jsx` — landing page
	- `InterestingCards.jsx` — interactive downloadable cards
	- `Connect.jsx` — contact + testimonials
	- `Projects.jsx` — projects list
- `src/comonents/` — grouped UI components
	- `home/` — `HomeHeroText.jsx`, `Video.jsx`
	- `ui/` — `3d-card.jsx`, `lamp.jsx`, `timeline.jsx`
	- `Content/` — `content.jsx` (content tools grid)

Refer to the source for component-level details and customizations.

## Local Development

1. Install dependencies

```bash
npm install
```

2. Run development server

```bash
npm run dev
```

Open the app at `http://localhost:5173` (Vite default).

## Build & Preview

```bash
npm run build
npm run preview
```

## Environment Variables

Optional: EmailJS integration for the contact form. Create a `.env` file in the project root and add:

```
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_OWNER_EMAILJS_TEMPLATE_ID=your_owner_template_id
VITE_EMAILJS_USER_ID=your_user_id
```

After adding env vars, restart the dev server.

## Responsive Scope & Recent Work

I applied targeted responsive improvements to only specific parts of the site (no global rewrites):

- `src/pages/InterestingCards.jsx` — card layout and image heights made responsive.
- `src/pages/Connect.jsx` — testimonial area and form paddings/heights updated for small screens.
- `src/comonents/home/HomeHeroText.jsx` — hero heading typography made responsive while leaving the embedded `Video` unchanged.

If you want a global responsive system (design tokens for font scales, spacing, container widths), I can add a central style map and standardize components to it.

## Accessibility & Performance Notes

- Images use `object-cover` and responsive sizing to reduce layout shifts.
- Consider optimizing Hero/hero-video and large images with lazy-loading or serving smaller variants for mobile.
- Forms include basic validation; consider adding ARIA attributes and server-side verification.

## Testing & Linting

- ESLint config exists (`eslint.config.js`). Run linting with your preferred command (add script to `package.json` if needed).

## Deployment

Deploy the `dist/` folder to any static host (Vercel, Netlify, GitHub Pages). For Vercel set the build command to `npm run build` and output to `dist`.

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature`
3. Make changes and run `npm run dev`
4. Commit, push, and create a PR

Keep changes scoped and include screenshots for visual updates.

## Contact

Maintainer: Harsh Mishra

