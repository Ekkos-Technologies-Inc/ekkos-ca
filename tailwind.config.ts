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
        brutal: {
          bg: '#0A0A0A',
          black: '#000000',
          white: '#FFFFFF',
          yellow: '#FFD700',
          blue: '#0000FF',
          green: '#00FF00',
          red: '#FF0000',
          gray: '#2A2A2A',
          'gray-light': '#888888',
          neon: {
            cyan: '#00F0FF',
            pink: '#FF00FF',
            yellow: '#FFFF00',
          }
        },
        navy: {
          950: '#0a0e27',
          900: '#0f172a',
          800: '#1e293b',
          700: '#334155',
        },
        electric: {
          500: '#3b82f6',
          400: '#60a5fa',
          300: '#93c5fd',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      boxShadow: {
        'brutal': '6px 6px 0px 0px #000000',
        'brutal-cyan': '6px 6px 0px 0px #00F0FF',
        'brutal-pink': '6px 6px 0px 0px #FF00FF',
        'brutal-lg': '12px 12px 0px 0px #000000',
        'brutal-sm': '3px 3px 0px 0px #000000',
      },
      borderWidth: {
        '3': '3px',
        '4': '4px',
        '8': '8px',
      },
      backgroundImage: {
        'scanline': 'linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%), linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06))',
      },
      animation: {
        'glitch': 'glitch 0.3s cubic-bezier(.25,.46,.45,.94) both infinite',
        'terminal-cursor': 'blink 1s step-end infinite',
      },
      keyframes: {
        glitch: {
          '0%': { transform: 'translate(0)' },
          '20%': { transform: 'translate(-2px, 2px)' },
          '40%': { transform: 'translate(-2px, -2px)' },
          '60%': { transform: 'translate(2px, 2px)' },
          '80%': { transform: 'translate(2px, -2px)' },
          '100%': { transform: 'translate(0)' },
        },
        blink: {
          'from, to': { color: 'transparent' },
          '50%': { color: 'inherit' },
        }
      }
    },
  },
  plugins: [],
}

export default config
