import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Relative base so asset URLs resolve correctly BOTH on the github.io project
// path (…/EXE201-Landing/) AND when served from a custom domain root (/).
// Using an absolute base like '/EXE201-Landing/' breaks the custom domain.
export default defineConfig({
  plugins: [react()],
  base: './',
})
