import { createApp } from "vue";
import App from "./App.vue";

const app = createApp(App);

app.directive("theme", (el, binding) => {
  el.style.background = binding.value;
});
// customElements.forEach((elem) => app.component(elem.name, elem));

app.mount("#app");
