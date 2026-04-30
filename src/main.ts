import { createApp } from "vue";
import App from "./App.vue";
import "./styles.css";
import { vScrollReveal } from "./directives/scrollReveal";

const app = createApp(App);
app.directive("scroll-reveal", vScrollReveal);
app.mount("#app");
