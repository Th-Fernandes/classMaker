/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      sans: ['Mulish', 'sans-serif'],
    },
    colors: {
      brand: {
        400: '#484C70',
        700: '#2D3047',
      },

      white: {
        400: "#ffffff"
      },

      gray: {
        400: '#838383'
      },

      warn: '#E44E5A'
    },

    extend: {
      fontSize: {
        heading: {
          sm: '18px',
          base: '24px',
          lg: '32px'
        },
        base: ['14px', '25px']
      },

      backgroundImage: {
        'tutorial-step-shadow': 'linear-gradient(180deg, rgba(0, 0, 0, 0) 33%, #000000 73%);'
      }
    },
  },
  plugins: [],
};
