import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundColor: {
        'dark-gray': '#252829',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      spacing: {
        112: '28rem',
        128: '32rem',
        134: '36rem',
        150: '40rem',
      },
      colors: {
        'light-gray': '#cfcac4',
      },
      textColor: {
        'light-gray': '#cfcac4',
      },
      dropShadow: {
        'new-box': '0 4px 3px #ff0000',
      },
      rotate: {
        '-35': '-35deg',
      },
      top: {
        '500px': '500px',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/typography'),
  ],
}

export default config
