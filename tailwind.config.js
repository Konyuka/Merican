module.exports = {
  // purge: [
  //   './src/**/*.{vue,js,ts,jsx,tsx}'
  // ],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'heading-font': ['Titillium Web', 'cursive'],
        'primary-font': ['Dosis', 'cursive']
      },
      animation: {
        'bounce-slow': 'spin 1s linear infinite;',
        fade: 'fadeOut 5s ease-in-out'
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
  variants: {
    translate: ({ after }) => after(['group-hover']),
    extend: {
      animation: ['hover', 'focus', 'active', "group-hover", 'motion-safe', 'motion-reduce'],
      translate: ['responsive', 'hover', 'focus', "group-hover"],
      backgroundBlendMode: ['hover', 'focus', "group-hover"],
      display: ["responsive", "group-hover", "group-focus"],
      transitionDuration: ['hover', 'focus'],
    },
  },
}