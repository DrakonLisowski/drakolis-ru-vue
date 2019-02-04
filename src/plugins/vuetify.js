import Vue from "vue";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";

Vue.use(Vuetify, {
  theme: {
    primaryOld: "#FF5600",
    secondary1Old: "#EC2039",
    secondary2Old: "#FF9700",
    complimentaryOld: "#00AA6E",

    dark: "#424242",
    darker: "#353535",
    darkest: "#212121",

    primary: "#26A69A",
    accent: "#82B1FF",
    error: "#FF5252",
    info: "#2196F3",
    success: "#4CAF50",
    warning: "#FFC107"
  },
  customProperties: true,
  iconfont: "md"
});
