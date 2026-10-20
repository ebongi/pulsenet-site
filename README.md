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
Live at https://ebongi.github.io/pulsenet-site/. The workflow sets `BASE_PATH=/pulsenet-site/`; other hosts such as Vercel build with the default `/`.
