const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')
const mdx = require('@mdx-js/mdx')

module.exports = {
  content: {
    content: ['./src/**/*.{js,mdx}', './next.config.js'],
    transform: {
      mdx: mdx.sync,
    },
  },
  theme: {
    extend: {
      fontFamily: {
        sans: ['Untitled Sans', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        violet: {
          '50': '#f9fafb',
          '100': '#edf1fb',
          '200': '#d8daf6',
          '300': '#b4b6e8',
          '400': '#928cd6',
          '500': '#7767c5',
          '600': '#604bac',
          '700': '#473886',
          '800': '#301a5b',
          '900': '#1b1736',
        },
        hero: {
          '100': '#FFB900',
          '500': '#FF469C',
          '900': '#011AFF',
        },
        teal: colors.cyan,
        // for syntax highlighting
        fuchsia: colors.fuchsia,
        lime: colors.lime,
        sky: colors.sky,
        rose: colors.rose,
        emerald: colors.emerald,
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.gray.200'),
            h2: {
              letterSpacing: theme('letterSpacing.tight'),
              color: theme('colors.gray.200'),
            },
            h3: {
              fontWeight: '600',
              color: theme('colors.gray.200'),
            },
            h4: {
              fontWeight: '500',
              color: theme('colors.gray.200'),
            },
            'ol li:before': {
              fontWeight: '600',
              color: theme('colors.gray.200'),
            },
            'ul li:before': {
              backgroundColor: theme('colors.gray.200'),
            },
            code: {
              color: theme('colors.gray.200'),
            },
            a: {
              color: theme('colors.gray.200'),
              fontWeight: 400,
            },
            pre: {
              color: theme('colors.white'),
              backgroundColor: theme('colors.gray.800'),
            },
            blockquote: {
              color: theme('colors.gray.200'),
              borderLeftColor: theme('colors.gray.200'),
            },
          },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/typography'),
    function ({
      addBase
    }) {
      addBase([{
          '@font-face': {
            fontFamily: 'Untitled Sans',
            fontWeight: '100 900',
            fontStyle: 'normal',
            fontNamedInstance: 'Regular',
            fontDisplay: 'swap',
            src: 'url("/fonts/UntitledSans-Regular.woff2?3.13") format("woff2")',
          },
        },
        {
          '@font-face': {
            fontFamily: 'Untitled Sans',
            fontWeight: '100 900',
            fontStyle: 'italic',
            fontNamedInstance: 'Italic',
            fontDisplay: 'swap',
            src: 'url("/fonts/UntitledSans-RegularItalic.woff2?3.13") format("woff2")',
          },
        },
        {
          '@font-face': {
            fontFamily: 'Untitled Sans',
            fontWeight: '100 900',
            fontStyle: 'bold',
            fontNamedInstance: 'Bold',
            fontDisplay: 'swap',
            src: 'url("/fonts/UntitledSans-Bold.woff2?3.13") format("woff2")',
          },
        },
      ])
    },
  ],
}