# PulseNet site

Marketing site for PulseNet, an off-grid peer-to-peer mesh messaging app.
Built with React and Vite from the original `PulseNet.html` design.

```bash
npm install
npm run dev      # local dev server
npm run build    # production build in dist/
npm run lint
```

## Deployment

Pushes to `main` build and deploy to GitHub Pages via `.github/workflows/deploy.yml`.
Live at https://ebongi.github.io/pulsenet-site/. The Vite `base` in `vite.config.js` must match the repo name.
