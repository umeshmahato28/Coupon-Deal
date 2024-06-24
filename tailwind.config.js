/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      utilities: {
      '.scrollbar-hide': {
        /* Hide scrollbar for Webkit-based browsers (e.g., Chrome, Safari) */
        '::-webkit-scrollbar': {
          display: 'none',
        },
        /* Hide scrollbar for IE, Edge and Firefox */
        '-ms-overflow-style': 'none', /* IE and Edge */
        'scrollbar-width': 'none',    /* Firefox */
      },
    },
      fontFamily: {
        custom: ['Verdana', 'sans-serif'], // Replace 'YourFontFamily' with the actual name of your custom font
      },
      boxShadow: {
        "inner-outer":
          "inset 0 10px 12px 0 rgba(0, 0, 0, 0.1), 0 15px 16px -3px rgba(0, 0, 0, 0.3), 0 4px 15px -2px rgba(0, 0, 0, 0.05)",
      },
    },
  },
  plugins: [
    function({ addUtilities }) {
      const newUtilities = {
        '.scrollbar-hide': {
          /* Hide scrollbar for Webkit-based browsers (e.g., Chrome, Safari) */
          '::-webkit-scrollbar': {
            display: 'none',
          },
          /* Hide scrollbar for IE, Edge and Firefox */
          '-ms-overflow-style': 'none', /* IE and Edge */
          'scrollbar-width': 'none',    /* Firefox */
        },
      };

      addUtilities(newUtilities);
    }
  ],
};
