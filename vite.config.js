import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@routes': path.resolve(__dirname, './src/routes'),
      '@components': path.resolve(__dirname, './src/components'),
      '@layouts': path.resolve(__dirname, './src/layouts'),
    }
  },
  server: {
    host: '0.0.0.0',
    port: 5173,
    open: true
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // Split vendor chunks
          'clerk': ['@clerk/clerk-react'],
          'motion': ['framer-motion'],
          'router': ['react-router-dom'],
          'i18n': ['i18next', 'react-i18next', 'i18next-browser-languagedetector'],
          // Chart libraries (add when you include them)
          // 'charts': ['recharts', 'chart.js', 'd3'],
        }
      }
    },
    sourcemap: false, // Disable in production
    minify: 'terser',
    target: 'es2020',
    // Remove console logs in production
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
  },
  css: {
    devSourcemap: true,
    postcss: './postcss.config.cjs',
  },
  optimizeDeps: {
    include: ['@clerk/clerk-react', 'framer-motion'],
    exclude: ['react-spinners'] // Lazy load heavy components
  }
});