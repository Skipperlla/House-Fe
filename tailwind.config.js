module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      height: {
        '7/2': '72px',
      },
      colors: {
        primary: {
          header: "#24292e",
          footer: "#262626",
          footerLink: "#65676B",
          body: "#f6f7f8"
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
