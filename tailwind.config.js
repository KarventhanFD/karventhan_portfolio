/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          DEFAULT: '#0A0A0F',
          50: '#1A1A2F',
          100: '#16162A',
          200: '#121225',
          300: '#0E0E1F',
          400: '#0A0A18',
          500: '#080812',
          600: '#06060C',
          700: '#040408',
          800: '#020204',
          900: '#000000',
        },
        cyan: {
          DEFAULT: '#00F5FF',
          50: '#E6FEFF',
          100: '#B3F9FF',
          200: '#80F5FF',
          300: '#4DF0FF',
          400: '#1AECFF',
          500: '#00F5FF',
          600: '#00C4CC',
          700: '#009399',
          800: '#006266',
          900: '#003133',
        },
        lime: {
          DEFAULT: '#39FF14',
          500: '#39FF14',
          600: '#2ECC11',
        },
        amber: {
          DEFAULT: '#FFB347',
          500: '#FFB347',
        },
        card: {
          DEFAULT: '#111118',
          hover: '#1A1A24',
        }
      },
      fontFamily: {
        display: ['Syne', 'sans-serif'],
        body: ['Space Mono', 'monospace'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out 2s infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'scroll-indicator': 'scroll-indicator 2s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(0, 245, 255, 0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(0, 245, 255, 0.6)' },
        },
        'scroll-indicator': {
          '0%, 100%': { transform: 'translateY(0)', opacity: '0.6' },
          '50%': { transform: 'translateY(8px)', opacity: '1' },
        }
      }
    },
  },
  plugins: [],
}
