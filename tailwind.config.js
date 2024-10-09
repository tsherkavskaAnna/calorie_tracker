/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
    "./screens/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
    },
  },
  presets: [require("nativewind/preset")],
  plugins: [
    "expo-font",
    {
      "fonts": [
        "./assets/fonts/Raleway-VariableFont_wght.ttf",
        "./assets/fonts/Roboto-Regular.ttf",
        "./assets/fonts/DMSans-Italic-VariableFont_opsz,wght.ttf",
        "./assets/fonts/DMSans-VariableFont_opsz,wght.ttf",
        "./assets/fonts/Poppins-Regular.ttf",
        "./assets/fonts/Poppins-SemiBold.ttf",
        "./assets/fonts/Poppins-Bold.ttf"
      ]
    }
  ],
  darkMode: {
    class: 'dark-theme',
  }
};
