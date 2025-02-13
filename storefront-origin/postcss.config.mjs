// postcss.config.mjs
export default {
  plugins: {
    "postcss-import": {}, // Si tu veux utiliser @import dans tes fichiers CSS
    tailwindcss: {}, // Utilisation de Tailwind CSS
    autoprefixer: {}, // Autoprefixer si nécessaire
    "@tailwindcss/postcss": {}, // Nouveau package PostCSS pour la gestion de Tailwind CSS
  },
}
