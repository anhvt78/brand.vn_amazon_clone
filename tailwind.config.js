/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      maxHeight: {
        container: "1440px",
      },
      screens: {
        xs: "320px",
        sm: "375px",
        sml: "500px",
        md: "667px",
        mdl: "768px",
        lg: "960px",
        lgl: "1024px",
        xl: "1280px",
      },
      colors: {
        amazon_blue: "#131921",
        amazon_light: "#232F3E",
        amazon_yellow: "#febd69",
        whiteText: "#ffffff",
        lightText: "#ccc",
        quantity_box: "#F0F2F2",
        footerBottom: "#131A22",
      },
      fontFamily: {
        titleFont: "Roboto",

        bodyFont: [
          "Poppins",
          "sans-serif",
          "Roboto",
          "Helvetica Neue",
          "Helvetica",
          "Arial",
          "文泉驛正黑",
          "WenQuanYi Zen Hei",
          "Hiragino Sans GB",
          "儷黑 Pro",
          "LiHei Pro",
          "Heiti TC",
          "微軟正黑體",
          "Microsoft JhengHei UI",
          "Microsoft JhengHei",
          "sans-serif",
        ],
      },
      boxShadow: {
        testShadow: "0px 0px 32px 1px rgba(199,199,199,1)",
        amazonInput: "0 0 3px 2px rgb(228 121 17 / 50%)",
      },
    },
  },
  plugins: [],
};
