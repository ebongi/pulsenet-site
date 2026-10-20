import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
// Root by default (Vercel, local). The GitHub Pages workflow sets BASE_PATH=/pulsenet-site/.
export default defineConfig({
  base: process.env.BASE_PATH ?? '/',
  plugins: [react()],
})
