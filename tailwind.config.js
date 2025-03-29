/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        custom: '2.4px 2.4px 3.2px rgba(190, 78, 30, 0.15)',
      },
      aspectRatio: {
        '4/3': '4 / 3',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "contactbgimage": "url('/Vector 10.svg')",
        "syllabusbg": "url('/rectangle 4.png')",
        "Reviewsbg": "url('/Reviewsbg.svg')",
        "3500bg": "url('https://midha-images.s3.ap-south-1.amazonaws.com/Midhafin/Backgrounds/3500background.svg')",
      },
      transitionProperty: {
        'height': 'height',
        'spacing': 'margin, padding',
      },
      rotate: {
        '90': '90deg',
      },
      textUnderlineOffset: {
        3: '3px',
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '1200px', // add required value here
          }
        }
      }
    },
    screens: {
      'xs': '500px',
      // => @media (min-width: 320px) { ... }
      'sm': '700px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'mg': '900px',
      'mn' : '918px',
      // => @media (min-width: 900px) { ... }
      'mh' : '850px',

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }
      'lx': '1052px',

      'ln': '1185px',

      'xl': '1370px',
      // => @media (min-width: 1280px) { ... }
      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
      'hs' : '1140px',
    },
  },
  variants: {
    extend: {
      rotate: ['active', 'group-hover'],
    },
  },
  plugins: [
    require('@tailwindcss/typography'),

    // ...
  ],
};
