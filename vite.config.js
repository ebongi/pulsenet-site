import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
// Served from https://<user>.github.io/pulsenet-site/ on GitHub Pages.
export default defineConfig({
  base: '/pulsenet-site/',
  plugins: [react()],
})
