module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-blue':'#14141c',
      },
      fontFamily: {
        'sans': ['Courier New', 'Courier', 'monospace']
      }
    },
    backgroundImage: {
      'back1': "url('../public/assets/back1.png')",
    },
  },
  plugins: [],
}