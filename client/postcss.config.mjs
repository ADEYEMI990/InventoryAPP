import { createThemes } from 'tw-colors'
import colors from 'tailwindcss/colors'

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

const generateThemeObject = (colors:any, mapping: any, invert = false) => {
  const theme: any = {};
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

const config = {
  darkMode: "class",
  plugins: ["@tailwindcss/postcss", createThemes(themes)],
};

export default config;
