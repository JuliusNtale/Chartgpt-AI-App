import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',  // Allow connections from any device on the local network
    port: 5173,        // Your desired port number
  },
  css: {
    postcss: './postcss.config.cjs',
  },
})
