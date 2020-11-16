import "./globalStyles/reset.scss";
import "./globalStyles/utilities.scss";
import "./globalStyles/grid.scss";
import "./globalStyles/inputs.scss";
import "./globalStyles/filters.scss";
//import "./globalStyles/animation.scss";

import { createApp } from "vue";
import App from "./App.vue";

createApp(App).mount("#app");

console.log(`Copyright Jeremy Bates ${new Date().getFullYear()}`);
