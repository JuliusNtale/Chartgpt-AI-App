import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), // Absolute imports
      '@routes': path.resolve(__dirname, './src/routes'), // Direct route imports
    }
  },
  server: {
    host: '0.0.0.0',
    port: 5173,
    open: true // Auto-open browser
  },
  css: {
    devSourcemap: true, // Better CSS debugging
    postcss: './postcss.config.cjs',
  },
  optimizeDeps: {
    include: ['@clerk/clerk-react'] // Pre-bundle Clerk
  }
});