import { extendTheme } from "native-base";

export const THEME = extendTheme({
  colors: {
    gray: {
      300: "#121212",
      200: "#2e2c2d",
      100: "#A0A0A0"
    },

    white: "#fff",

    red: {
      200: "#a21f18",
      100: "#de3129",
    },

    orange: {
      200: "#d05900",
      100: "#f7a100",
    },

    green: {
      200: "#006c48",
      100: "#07b486",
    },

    blue: {
      200: "#0640aa",
      100: "#43b7e3",
    },

    fontConfig: {
      Poppins: {
        300: 'Poppins_300Light',
        400: 'Poppins_400Regular',
        700: 'Poppins_700Bold'
      }
    },

    fonts: {
      heading: "Poppins",
      body: "Poppins",
      mono: "Poppins",
    },

  },
});
