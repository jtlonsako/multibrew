/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte}'],
  theme: {
    fontSize: {
      'xs': '0.6rem',
      sm: '0.8rem',
      base: '1rem',
      xl: '1.25rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem',
    },
    extend: {
      fontFamily: {
        'mono': ['"Share Tech Mono"', 'monospace']
      }
    },
  },
  plugins: [],
}

