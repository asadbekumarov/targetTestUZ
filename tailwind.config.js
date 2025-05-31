export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#2563eb", // Tailwind blue-600
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-out",
        "slide-down": "slideDown 0.4s ease-out",
        "gradient-motion": "gradientAnimation 6s ease infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        slideDown: {
          "0%": { transform: "translateY(-10px)", opacity: 0 },
          "100%": { transform: "translateY(0)", opacity: 1 },
        },
        gradientAnimation: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
      },
      colors: {
        "cyan-500": "#00bcd4", // ko'k
        "teal-500": "#00796b", // yashil
      },
    },
  },
  plugins: [],
};
