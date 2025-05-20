/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#e6f0fa',
          100: '#cce0f5',
          200: '#99c2eb',
          300: '#66a3e0',
          400: '#3385d6',
          500: '#2b5282',
          600: '#234268',
          700: '#1a314e',
          800: '#122134',
          900: '#09101a',
        },
        secondary: {
          50: '#e6f7f6',
          100: '#ccefed',
          200: '#99dfdb',
          300: '#66cfc8',
          400: '#33bfb6',
          500: '#118a7e',
          600: '#0e6e65',
          700: '#0a534c',
          800: '#073732',
          900: '#031c19',
        },
        accent: {
          50: '#fdf9e6',
          100: '#fbf3cc',
          200: '#f7e699',
          300: '#f3da66',
          400: '#efcd33',
          500: '#e6c200',
          600: '#b89b00',
          700: '#8a7400',
          800: '#5c4d00',
          900: '#2e2700',
        },
      },
      fontFamily: {
        sans: [
          'system-ui', 
          '-apple-system', 
          'BlinkMacSystemFont', 
          'Segoe UI', 
          'Roboto', 
          'Oxygen', 
          'Ubuntu', 
          'Cantarell', 
          'Open Sans', 
          'Helvetica Neue', 
          'sans-serif'
        ],
        serif: [
          'Georgia', 
          'Cambria', 
          'Times New Roman', 
          'Times', 
          'serif'
        ]
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}