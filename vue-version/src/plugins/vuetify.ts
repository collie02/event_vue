import { createVuetify } from "vuetify";
import "vuetify/styles";
import { aliases, mdi } from "vuetify/iconsets/mdi";
import "@mdi/font/css/materialdesignicons.css";

export default createVuetify({
  theme: {
    defaultTheme: "light",
    themes: {
      light: {
        colors: {
          primary: "#1976D2", // cos-blue
          secondary: "#4CAF50", // cos-green
          accent: "#FFC107", // cos-amber
          error: "#FF5252",
          info: "#2196F3",
          success: "#4CAF50",
          warning: "#FFC107",
          surface: "#FFFFFF",
          background: "#F5F5F5", // cos-grey-bg
          "grey-light": "#EEEEEE", // cos-grey-light
          "grey-card": "#F6F6F6", // cos-grey-card
        },
      },
    },
  },
  icons: {
    defaultSet: "mdi",
    aliases,
    sets: {
      mdi,
    },
  },
});
