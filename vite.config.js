import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
// Includes test property
export default defineConfig({
  plugins: [react()],
  test: {
    coverage: {
      provider: 'v8'
    },
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/tests/setup.js',
  }
})
