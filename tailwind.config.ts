import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      keyframes: {
        moveup1: {
          '0%': { transform: 'translateY(50%) rotate(-50deg)' },
          '100%': {
            transform: 'translateY(calc(-100vh - 100%)) rotate(20deg)',
          },
        },
        moveup: {
          '0%': { transform: 'translateY(100%) rotate(-50deg)' },
          '100%': {
            transform: 'translateY(calc(-100vh - 100%)) rotate(20deg)',
          },
        },
        gravity: {
          '0%': { transform: 'translateY(0px)' },
          '25%': {
            transform: 'translateY(10px)',
          },
          '50%': {
            transform: 'translateY(0px)',
          },
          '75%': {
            transform: 'translateY(-10px)',
          },
          '100%': {
            transform: 'translateY(0px)',
          },
        },
        scaleobject: {
          '0%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(0.9)' },
          '100%': { transform: 'scale(1)' },
        },
      },
      animation: {
        // 'move-left': 'moveLeft 12s linear infinite',
        'gravite-object': 'gravity 3s linear infinite',
        'spin-slow1': 'moveup 6s linear infinite',
        'spin-slow2': 'moveup 9.5s linear infinite',
        'spin-slow3': 'moveup 7s linear infinite',
        'spin-slow4': 'moveup 3s linear infinite',
        'spin-slow5': 'moveup 8s linear infinite',
        'spin-slow6': 'moveup 4.5s linear infinite',
        'spin-slow7': 'moveup 5.5s linear infinite',
        'spin-slow8': 'moveup 8.5s linear infinite',
        scale: 'scaleobject 1.5s linear infinite',
      },
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
        'new-box': '0 2px 1px #F2B90C',
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
    require('tailwindcss-scrollbar'),
  ],
}

export default config
