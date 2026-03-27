/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // This makes 'font-sans' (the default) use Satoshi
        sans: ["var(--font-satoshi)", "ui-sans-serif", "system-ui"],
        // This makes 'font-serif' use Gambetta
        serif: ["var(--font-gambetta)", "ui-serif", "Georgia"],
        // You can also keep the Geist ones if you need them later
        mono: ["var(--font-sf-mono)"],
      },
    },
  },
  plugins: [],
};