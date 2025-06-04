/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "16px",
        screens: {
          sm: "100%",
          md: "100%",
          lg: "100%",
          xl: "100%",
          "2xl": "1712px",
        },
      },
      spacing: {
        "swiper-navigation": "19px",
        100: "100px",
      },
      boxShadow: {
        custom_shdow: "0 0 4px 4px rgba(214, 171, 55, 0.1)",
        custom_shdow2: "0 4px 34px 0 rgba(0,0,0,.08)"
      },
      colors: {
        yellow: "#D6AB37",
        yellow_100: "#fec401"
      },
      fontFamily: {
        poppins:['Poppins']
      },
      transitionTimingFunction: {
        "custom-ease": "cubic-bezier(0.4, 0, 0.2, 1)",
      },
      backgroundImage: {
        "gradient-to-b":
          "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(159, 125, 34, 0.64) 35%, rgba(214, 171, 55, 1) 100%)",
        "bg-down-blc": "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' className='icon icon-tabler icons-tabler-outline icon-tabler-chevron-down'%3E%3Cpath stroke='none' d='M0 0h24v24H0z' fill='none'/%3E%3Cpath d='M6 9l6 6l6 -6' /%3E%3C/svg%3E",
      },
      screens: {
        xs: "100%",
        sm: "576px",
        md: "768px",
        xmd:"769px",
        lg: "992px",
        xl: "1200px",
        "2xl": "1400px",
        "3xl": "1600px",
        "4xl": "1800px",
      },
      fontSize: {
        a: ["16px", { lineHeight: "28px", fontWeight: "500" }],
        p: ["18px", { lineHeight: "28px", fontWeight: "400" }],
        h1: ["clamp(1.25rem, 1.3rem + 0.8824vw, 2.5rem);", { lineHeight: "clamp(2rem, 2.2647rem + 1.1765vw, 3.5rem)", fontWeight: "700" }],
        h2: ["clamp(0.9rem, 1rem + 0.5147vw, 2.0625rem)", { lineHeight: "clamp(1.2rem, 1.5rem + 0.6618vw, 2.9375rem)", fontWeight: "700" }],
        h3: ["clamp(0.9rem, 1rem + 0.2941vw, 1.75rem)", { lineHeight: " clamp(1.2rem, 1.5rem + 0.4412vw, 2.625rem)", fontWeight: "700" }],
      },
    },
  },
  plugins: [],
};

export default config;
