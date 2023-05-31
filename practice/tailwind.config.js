/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}', // Note the addition of the `app` directory.
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      ggultoon: ['ggultoon'],
    },
    screens: {
      mobile: '412px',
      tablet: '640px',
      laptop: '1024px',
      desktop: '1280px',
    },
    extend: {},
  },
  plugins: [require('tailwind-scrollbar-hide')],
};
