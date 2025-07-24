# Additional optimization scripts

# Add to package.json scripts:
{
  "scripts": {
    "analyze": "npm run build && npx vite-bundle-analyzer dist/stats.html",
    "build:analyze": "vite build --mode analyze",
    "optimize-images": "npx imagemin public/**/*.{jpg,png,gif,svg} --out-dir=public/optimized",
    "audit:security": "npm audit && npm audit fix --force",
    "preload-fonts": "node scripts/preload-fonts.js"
  }
}

# Environment-specific builds
VITE_NODE_ENV=production
VITE_ENABLE_DEVTOOLS=false
VITE_API_URL=https://your-api.com
