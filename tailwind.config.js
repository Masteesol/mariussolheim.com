module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors: {
      dark: "#1A282E",
      medium: "#3C6A71",
      light: "#FCFCFC",
      white: "#FFFFFF",
    },
    fontFamily: {
      sans: ["Graphik", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
    extend: {
      backgroundImage: {
        "hero-pattern": "url('/assets/textures/background-art.png')",
        "linkedin-logo": "url('/assets/logos/linkedin.png')",
        "eternal-blue-logo": "url('/assets/logos/eb.png')",
        "apidari-logo": "url('/assets/logos/apidari.png')",
        avatar: "url('/assets/images/avatar.png')",
        "icon-mobile": "url('/assets/icons/phone.png')",
        "icon-tablet": "url('/assets/icons/tablet.png')",
        "icon-laptop": "url('/assets/icons/laptop.png')",
      },
    },
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      xxl: "1536px",
      // => @media (min-width: 1536px) { ... }
    },
  },
};
