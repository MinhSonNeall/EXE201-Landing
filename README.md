# Princess of the Wild Hunt — Landing Page

A React (Vite) landing page for **POTWH**, a 2D action-adventure indie game.
Signature feature: **Toner Shift** — picking a difficulty live-recolors the
entire page, mirroring how the game's color tone escalates with the hunt.

## Run locally

```bash
npm install
npm run dev        # open the printed http://localhost:5173 URL
```

## Build

```bash
npm run build      # outputs to /dist
npm run preview    # preview the production build
```

## Before going live — quick edits

| What | Where |
|------|-------|
| itch.io download link | `ITCH_URL` in `src/App.jsx` |
| Logo image | `src/components/Hero.jsx` (commented `<img>`) |
| Screenshots | set `src` in `src/components/Gallery.jsx` + drop files in `public/assets/` |
| Trailer video | `src/components/Trailer.jsx` (swap placeholder for `<iframe>`) |
| Social links | `SOCIALS` in `src/components/Footer.jsx` |
| Difficulty text & colors | `src/data/difficulties.js` |

## Deploy to GitHub Pages

**Option A — automatic (recommended):** push to a GitHub repo's `main` branch.
The included workflow (`.github/workflows/deploy.yml`) builds and deploys
automatically. In the repo: **Settings → Pages → Source = GitHub Actions**.

**Option B — manual:**
```bash
npm run deploy     # uses gh-pages to publish /dist
```

`vite.config.js` uses `base: './'` (relative paths), so the site works on a
GitHub Pages project URL *and* if you upload the `/dist` folder to itch.io.
