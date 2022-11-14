module.exports = {
  purge: ['./components/**/*.tsx', './pages/**/*.tsx'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      typography: (theme) => ({
        dark: {
          css: {
            color: theme('colors.gray.300'),
            h1: {
              color: theme('colors.gray.100'),
            },
            h2: {
              color: theme('colors.gray.100'),
            },
            strong: {
              color: theme('colors.gray.300'),
            },
          },
        },
      }),
      fadeAnimation: {
        fade: 'fadeIn '
      },
      // that is actual animation
      // .popover_fadeIn
      // .fade-in_fade-in
      keyframes: theme => ({
        fadeOut: {
          '0%': { opacity: 0 },
          'to': { opacity: 1 }
        },
      }),
    },
    borderRadius: {
      '4xl': '2rem',
    },
    colors: {//border-top: 1px #333 solid;
      black: {
        100: "#666",
        200: "#444",
        300: "#333",
        400: "#111",
        500: "#000",
        800: "#888",
      },
      blue: {
        100: "#0070f3",
        200: "#0070F3",
      },
      violet: {
        100: "#f81ce5",
      },
      gray: {
        100: '#ffffff',
        900: '#18191B',
        10000: '#000',//pureBlack
      },
      purple: {
        100: '#f81ce5',
        200: '#8a63d2',
        300: '#7928ca',
        400: '4c2889ca',
      },
      white: {
        100: '#ffffff'
      }
    },
    fontFamily: {
      sans: ["Inter","-apple-system,BlinkMacSystemFont","Segoe UI","Roboto","Oxygen","Ubuntu","Cantarell","Fira Sans","Droid Sans","Helvetica Neue","sans-serif"],
      serif: ['Merriweather', 'serif'],
    },
    textColor: (theme) => ({
      ...theme('colors'),
    }),
  },
  plugins: [
  require('@tailwindcss/typography'),
  require('tailwind-content-placeholder')({
    placeholders: {
      'button': {
        height: 4, // the height of the container in em
        rows: [ // This class will have 4 rows:
          [100], // A 100% width row
        ]
      },
      'container': {
        height: 4, // the height of the container in em
        rows: [ // This class will have 4 rows:
          [100], // A 100% width row
          [100], // Another 100% width row
          [40], // A 40% width row
          [] // And an empty row, to create separation
        ]
      },
      'heading': {
        height: 4, // the height of the container in em
        rows: [ // This class will have 4 rows:
          [100], // A 100% width row
          [40], // A 40% width row
          [] // And an empty row, to create separation
        ]
      },
      'info': {
        height: 4, // the height of the container in em
        rows: [ // This class will have 4 rows:
          [100], // A 100% width row
          [100], // Another 100% width row
          [40], // A 40% width row
          [] // And an empty row, to create separation
        ]
      },
      'search': {
        height: 4, // the height of the container in em
        rows: [ // This class will have 4 rows:
          [100], // A 100% width row
          [100], // Another 100% width row
          [40], // A 40% width row
          [] // And an empty row, to create separation
        ]
      },
      'paragraph': {
        height: 4, // the height of the container in em
        rows: [ // This class will have 4 rows:
          [100], // A 100% width row
          [100], // Another 100% width row
          [40], // A 40% width row
          [] // And an empty row, to create separation
        ]
      },
    }
  })
  ],
};
