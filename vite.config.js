import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Served from https://minhsonneall.github.io/EXE201-Landing/ — the base must
// match the repo name so asset URLs resolve under that sub-path.
export default defineConfig({
  plugins: [react()],
  base: '/EXE201-Landing/',
})
