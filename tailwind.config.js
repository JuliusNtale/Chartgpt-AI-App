/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Include all your component files
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4f46e5', // Custom primary color
        secondary: '#9333ea', // Custom secondary color
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-in-out',
        'slide-in': 'slideIn 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        slideIn: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Custom font
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'), // For better form styling
    require('@tailwindcss/typography'), // For rich text styling
    require('@tailwindcss/aspect-ratio'), // For controlling aspect ratios
  ],
};
