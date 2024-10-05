module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      height: {
        '72': '25rem',
        '80': '34rem',
        '92': '45rem', // Altura cards principales
        '120': '51.2rem',
      },
      fontFamily: {
        fonttextos: ["Oswald", "sans-serif"],
      },
    },

  },
  plugins: [],
};