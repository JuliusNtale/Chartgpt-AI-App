module.exports = {
  plugins: {
    'postcss-import': {}, // Optional but recommended
    'tailwindcss/nesting': {}, // Enable nested CSS (like Sass)
    tailwindcss: {},
    autoprefixer: {},
    ...(process.env.NODE_ENV === 'production' ? {
      cssnano: { // Minify CSS in production
        preset: ['default', {
          discardComments: { removeAll: true },
        }]
      }
    } : {})
  }
}