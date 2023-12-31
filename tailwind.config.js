/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      poppins: ['var(--font-poppins)'],
      inter: ['var(--font-inter)'],
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gray-pattern': "url('/assets/images/home/body/background-gray.svg')",
        'gray-pattern-mobile':
          "url('/assets/images/home/body/background-gray-mobile.svg')",
        'volamos-back': "url('/assets/images/gle/volamos.svg')",
        'hero-linear-bg':
          'linear-gradient(0deg, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%);',
        'hero-main-red-bg':
          "url('/assets/images/about-us/background-nosotros.png')",
      },
      backgroundColor: {
        'header-bg-light-color': 'var(--bg-light)',
      },
      textColor: {
        'light-color': 'var(--text-light)',
        'dark-color': 'var(--text-dark)',
      },
      boxShadow: {
        'header-shadow': '0px 4px 4px rgba(0, 0, 0, 0.25)',
        'card-shadow': '0px 0px 10px rgba(0,0,0,0.75);',
        'sticky-shadow': '0px 0px 10px 0px rgba(0, 0, 0, 0.75)',
      },
      colors: {
        'light-gray-second': '#D9D9D9',
        'light-gray-third': '#BFBFBF',
        'light-gray': '#F0F0F0',
        'main-gray': '#383838',
        'main-red': '#D81730',
        'main-green': '#39B54A',
        'secondary-gray': '#313131',
        'secondary-red': '#AE0E22',
        'third-gray': '#E6E6E6',
        'third-red': '#fce5e8',
        'main-pink': '#DF7A87',
        'secondary-pink': '#FEADB8',
      },
      keyframes: {
        'slide-top': {
          '0%': {
            transform: 'translateY(0)',
          },
          '100%': {
            transform: 'translateY(8px)',
          },
        },
        'slide-in-right': {
          '0%': { transform: 'translateX(1000px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        'fade-in-bottom': {
          '0%': {
            transform: 'translateY(50px)',
            opacity: '0',
          },
          '100%': {
            transform: 'translateY(0)',
            opacity: '1',
          },
        },
        'slide-in-blurred-bottom': {
          '0%': {
            transform: 'translateY(1000px) scaleY(2.5) scaleX(0.2)',
            transformOrigin: '50% 100%',
            filter: 'blur(40px)',
            opacity: '0',
          },
          '100%': {
            transform: 'translateY(0) scaleY(1) scaleX(1);',
            transformOrigin: '50% 50%',
            filter: 'blur(0)',
            opacity: '1',
          },
        },
        'slide-out-bottom': {
          '0%': {
            transform: 'translateY(0)',
            opacity: '1',
          },
          '100%': {
            transform: 'translateY(1000px)',
            opacity: '0',
          },
        },
        'fade-in-right': {
          '0%': {
            transform: 'translateX(50px)',
            opacity: '0',
          },
          '100%': {
            transform: 'translateX(0)',
            opacity: '1',
          },
        },
        'slide-on': {
          '0%': {
            transform: 'translateX(0) scale(1)',
          },
          '50%': {
            transform: 'translateX(0.625rem) scale(1)',
          },
          '100%': {
            transform: 'translateX(1.25rem) scale(1)',
          },
        },
        'slide-off': {
          '0%': {
            transform: 'translateX(1.25rem) scale(1)',
          },
          '50%': {
            transform: 'translateX(0.625rem) scale(1)',
          },
          '100%': {
            transform: 'translateX(0) scale(1)',
          },
        },
        'spinner-forward': {
          '0%': {
            transform: 'rotate(0deg)',
          },
          '100%': {
            transform: 'rotate(360deg)',
          },
        },
        'heartbeat-effect': {
          from: {
            transform: 'scale(1)',
            transformOrigin: 'center center',
            animationTimingFunction: 'ease-out',
          },
          '10%': {
            transform: 'scale(0.91)',
            animationTimingFunction: 'ease-in',
          },
          '17%': {
            transform: 'scale(0.98)',
            animationTimingFunction: 'ease-out',
          },
          '33%': {
            transform: 'scale(0.87)',
            animationTimingFunction: 'ease-in',
          },
          '45%': {
            transform: 'scale(1)',
            animationTimingFunction: 'ease-out',
          },
        },
      },
      animation: {
        'slide-top':
          'slide-top 0.8s cubic-bezier(0.250, 0.460, 0.450, 0.940) ease',
        'slide-in-right': 'slide-in-right .5s ease-in-out',
        'fade-in-bottom': 'fade-in-bottom 0.8s',
        'slide-in-blurred-bottom':
          'slide-in-blurred-bottom 0.6s cubic-bezier(0.230, 1.000, 0.320, 1.000) both',
        'slide-out-bottom':
          'slide-out-bottom 0.5s cubic-bezier(0.550, 0.085, 0.680, 0.530) both',
        'fade-in-right':
          'fade-in-right 0.1s cubic-bezier(0.390, 0.575, 0.565, 1.000) both',
        'slide-on': 'slide-on 0.3s linear forwards',
        'slide-off': 'slide-off 0.3s linear forwards',
        'spinner-forward': 'spinner-forward 2s linear infinite',
        'heartbeat-effect': 'heartbeat-effect 1.5s ease-in-out infinite both',
      },
    },
  },
  plugins: [],
};
