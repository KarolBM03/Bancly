/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        fondo: "#F5F7FA",
        primario: "#2A7AE2",
        secundario: "#10B981",
        error: "#EF4444",
        texto: "#111827",
      },
    },
  },
  plugins: [],
};
