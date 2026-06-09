import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base: './' makes all asset paths relative, which works for GitHub Pages
// project sites (https://user.github.io/REPO/) and for itch.io HTML uploads.
export default defineConfig({
  plugins: [react()],
  base: './',
})
