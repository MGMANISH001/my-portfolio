import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/', // IMPORTANT: keep '/' for Vercel deployments at domain root
  build: {
    outDir: 'dist',
    assetsInlineLimit: 1000000,
    rollupOptions: {
      output: {
        // Split heavy libs into their own chunks for faster first paint
        manualChunks: {
          three: ['three'],
          react: ['react', 'react-dom'],
        },
      },
    },
  },
})
