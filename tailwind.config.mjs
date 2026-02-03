import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Atkinson Hyperlegible"', 'ui-sans-serif', 'system-ui', 'sans-serif']
      },
      colors: {
        brand: {
          500: '#ff2f6d'
        }
      },
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            fontFamily: theme('fontFamily.sans').join(','),
            fontSize: '20px',
            lineHeight: '34px',
            p: {
              marginTop: '20px',
              marginBottom: '20px'
            },
            'h1, h2, h3, h4, h5, h6': {
              fontFamily: theme('fontFamily.sans').join(',')
            }
          }
        }
      })
    }
  },
  plugins: [typography]
};
