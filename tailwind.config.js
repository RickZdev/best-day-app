/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ['./src/**/*.{js,ts,jsx,tsx}', './App.{js,jsx,ts,tsx}'],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        'primary': '#E50B62',
        'primary-light': '#F870A6',
        'primary-semilight': '#FEE2ED',
        'primary-white': '#FFFFFF',
        'primary-black': '#282828',
        'secondary-1': '#F9F9F9',
        'secondary-2': '#DDDDDD',
        'secondary-3': '#F9F9F9',
        'secondary-4': '#D1D1D1',
        'secondary-5': '#B2B2B2',
        'secondary-6': '#777777',
        'secondary-7': '#4F4F4F',
        'info': '#414FCB',
        'error': '#DB471E',
        'success': '#188977',
        'warning': '#F5A524',
      },
      fontFamily: {
        'opensans-regular': 'OpenSans-Regular',
        'opensans-semibold': 'OpenSans-SemiBold',
        'opensans-bold': 'OpenSans-Bold',
      },
    },
  },
  plugins: [],
};
