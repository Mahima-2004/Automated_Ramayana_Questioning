import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          50: '#fffef7',
          100: '#fffcee',
          200: '#fff8d6',
          300: '#fff3bd',
          400: '#ffeda4',
          500: '#ffd700',
          600: '#d4af37',
          700: '#b8941f',
          800: '#9a7a0f',
          900: '#7d5f00',
        },
        saffron: {
          50: '#fff5ed',
          100: '#ffebdb',
          200: '#ffd6b7',
          300: '#ffc293',
          400: '#ffad6f',
          500: '#ff9933',
          600: '#ff6600',
          700: '#cc3300',
          800: '#992500',
          900: '#661800',
        },
        royal: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1e40af',
          800: '#1e3a8a',
          900: '#1e3a8a',
        },
        primary: {
          50: '#fff7ed',
          100: '#ffedd5',
          200: '#fed7aa',
          300: '#fdba74',
          400: '#fb923c',
          500: '#f97316',
          600: '#ea580c',
          700: '#c2410c',
          800: '#9a3412',
          900: '#7c2d12',
        },
      },
      fontFamily: {
        kannada: ['Noto Sans Kannada', 'sans-serif'],
        cinzel: ['Cinzel', 'serif'],
        playfair: ['Playfair Display', 'serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'shimmer': 'shimmer 3s infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(212, 175, 55, 0.5)' },
          '100%': { boxShadow: '0 0 40px rgba(212, 175, 55, 0.8)' },
        },
      },
    },
  },
  plugins: [],
}
export default config
