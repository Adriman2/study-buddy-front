/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      animation: {
        'reveal': 'revealTextSlowly .3s forwards',
      },
      keyframes: {
        revealTextSlowly: {
          to: { color: 'white' }
        },
      },
      rotate: {
        '180': '180deg',
      },
    },
  },
  plugins: [require('daisyui')]
};