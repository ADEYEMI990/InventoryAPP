import type { Config } from 'tailwindcss'
import { createThemes } from 'tw-colors'
import colors from 'tailwindcss/colors';
// import autoprefixer from 'autoprefixer';
// import tailwindcss from '@tailwindcss/postcss';



const baseColors = [
  "gray",
  "red",
  "yellow",
  "green",
  "blue",
  "indigo",
  "purple",
  "pink",
];

// Updated colors in RGB format (after converting from OKLCH)
// const convertedColors = {
//   gray: {
//     50: "rgb(254, 254, 254)",  // Example RGB conversion
//     100: "rgb(232, 232, 232)",
//     200: "rgb(204, 204, 204)",
//     300: "rgb(163, 163, 163)",
//     400: "rgb(121, 121, 121)",
//     500: "rgb(82, 82, 82)",
//     600: "rgb(63, 63, 63)",
//     700: "rgb(45, 45, 45)",
//     800: "rgb(30, 30, 30)",
//     900: "rgb(17, 17, 17)"
//   },
//   red: {
//     50: "rgb(240, 76, 58)",
//     100: "rgb(217, 65, 48)",
//     200: "rgb(189, 54, 39)",
//     300: "rgb(157, 43, 30)",
//     400: "rgb(124, 31, 20)",
//     500: "rgb(92, 20, 12)",
//     600: "rgb(75, 16, 9)",
//     700: "rgb(58, 12, 6)",
//     800: "rgb(43, 9, 4)",
//     900: "rgb(28, 5, 2)"
//   },
//   yellow: {
//     50: "rgb(255, 246, 124)",
//     100: "rgb(255, 238, 89)",
//     200: "rgb(255, 227, 55)",
//     300: "rgb(255, 212, 24)",
//     400: "rgb(255, 178, 10)",
//     500: "rgb(255, 146, 0)",
//     600: "rgb(210, 123, 0)",
//     700: "rgb(164, 99, 0)",
//     800: "rgb(120, 77, 0)",
//     900: "rgb(82, 57, 0)"
//   },
//   green: {
//     50: "rgb(207, 243, 167)",
//     100: "rgb(178, 233, 126)",
//     200: "rgb(145, 220, 82)",
//     300: "rgb(115, 206, 43)",
//     400: "rgb(91, 190, 10)",
//     500: "rgb(61, 175, 0)",
//     600: "rgb(48, 140, 0)",
//     700: "rgb(36, 105, 0)",
//     800: "rgb(25, 72, 0)",
//     900: "rgb(16, 42, 0)"
//   },
//   blue: {
//     50: "rgb(191, 222, 255)",
//     100: "rgb(155, 189, 255)",
//     200: "rgb(119, 156, 255)",
//     300: "rgb(85, 122, 255)",
//     400: "rgb(53, 89, 255)",
//     500: "rgb(28, 58, 255)",
//     600: "rgb(21, 47, 209)",
//     700: "rgb(15, 36, 163)",
//     800: "rgb(10, 27, 118)",
//     900: "rgb(5, 19, 72)"
//   },
//   indigo: {
//     50: "rgb(229, 232, 255)",
//     100: "rgb(196, 201, 255)",
//     200: "rgb(158, 169, 255)",
//     300: "rgb(121, 138, 255)",
//     400: "rgb(91, 110, 255)",
//     500: "rgb(62, 82, 255)",
//     600: "rgb(50, 66, 210)",
//     700: "rgb(38, 51, 164)",
//     800: "rgb(27, 37, 118)",
//     900: "rgb(17, 25, 72)"
//   },
//   purple: {
//     50: "rgb(238, 224, 255)",
//     100: "rgb(210, 188, 255)",
//     200: "rgb(182, 150, 255)",
//     300: "rgb(153, 112, 255)",
//     400: "rgb(125, 75, 255)",
//     500: "rgb(96, 38, 255)",
//     600: "rgb(77, 31, 209)",
//     700: "rgb(59, 24, 164)",
//     800: "rgb(41, 18, 118)",
//     900: "rgb(24, 13, 72)"
//   },
//   pink: {
//     50: "rgb(255, 205, 255)",
//     100: "rgb(255, 172, 255)",
//     200: "rgb(255, 137, 255)",
//     300: "rgb(255, 104, 255)",
//     400: "rgb(255, 70, 255)",
//     500: "rgb(255, 35, 255)",
//     600: "rgb(209, 29, 209)",
//     700: "rgb(163, 24, 163)",
//     800: "rgb(118, 19, 118)",
//     900: "rgb(72, 13, 72)"
//   }
// };


const shadeMapping = {
  "50": "900",
  "100": "800",
  "200": "700",
  "300": "600",
  "400": "500",
  "500": "400",
  "600": "300",
  "700": "200",
  "800": "100",
  "900": "50",

};

const generateThemeObject = (colors: any, mapping:any, invert = false) => {
  const theme = {};
  baseColors.forEach((color)=> {
    theme[color] = {};
    Object.entries(mapping).forEach(([key, value]: any) => {
      const shadekey = invert ? value : key;
      theme[color][key] = colors[color][shadekey];
    });
  });
  return theme;
}

const lightTheme = generateThemeObject(colors, shadeMapping);
const darkTheme = generateThemeObject(colors, shadeMapping, true);

const themes = {
  lights: {
    ...lightTheme,
    white: "#ffffff"
  },
  dark: {
    ...darkTheme,
    white: colors.gray["950"],
    black: colors.gray["50"]
  }
}

const config : Config = {
  darkMode: "class",
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    createThemes(themes), 
  ]
};

export default config;