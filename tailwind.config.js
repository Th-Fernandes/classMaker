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
        400: '#ffffff'
      },
      black: {
        400: '#000000',
      },

      gray: {
        50: '#eaeaea',
        400: '#7C7C7C'
      },

      red: '#E54510',
      focus: '#B10BFF'
    },

    extend: {
      fontSize: {
        'sm-hd': ['18px','25px'],
        'md-hd': ['24px', '25px'],
        'lg-hd': '32px',
        base: ['14px', '25px']
      },
    },
  },
  plugins: [],
};
