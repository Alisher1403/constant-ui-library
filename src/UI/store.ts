import { reactive } from "vue";

export const store = reactive({
  id: 0,
});

document.addEventListener("click", () => (store.id = 0));
