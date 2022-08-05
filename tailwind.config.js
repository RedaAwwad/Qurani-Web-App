
export default {
  content: [
    `components/**/*.{vue,js}`,
    `layouts/**/*.vue`,
    `pages/**/*.vue`,
    `plugins/**/*.{js,ts}`
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0a75e3',
        'primary-hover': '#0969cc',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: []
}
