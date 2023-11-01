<template>
  <div>
    <vue-select style="width: 200px" :value="selectData" @onChange="(e) => (selectData = e)">
      <vue-option v-for="option in options" :key="option" :value="option.value">
        <div>{{ option.name }}</div>
      </vue-option>
    </vue-select>
    <vue-select style="width: 200px" :value="selectData" @onChange="(e) => (selectData = e)">
      <vue-option v-for="option in options" :key="option" :value="option.value">
        <div>{{ option.name }}</div>
      </vue-option>
    </vue-select>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import VueOption from "./UI/VueOption.vue";
import VueSelect from "./UI/VueSelect.vue";

export default defineComponent({
  name: "App",
  components: {
    VueSelect,
    VueOption,
  },
  setup() {
    const selectData = ref("alosha6");

    const options = ref([
      { name: "Alisher1", value: "alosha1" },
      { name: "Alisher2", value: "alosha2" },
      { name: "Alisher3", value: "alosha3" },
      { name: "Alisher4", value: "alosha4" },
      { name: "Alisher5", value: "alosha5" },
      { name: "Alisher6", value: "alosha6" },
      { name: "Alisher7", value: "alosha7" },
      { name: "Alisher8", value: "alosha8" },
      { name: "Alisher", value: "alosha" },
      { name: "Alisher", value: "alosha" },
      { name: "Alisher", value: "alosha" },
      { name: "Alisher", value: "alosha" },
      { name: "Alisher", value: "alosha" },
      { name: "Alisher", value: "alosha" },
      { name: "Alisher", value: "alosha" },
      { name: "Alisher", value: "alosha" },
      { name: "Alisher", value: "alosha" },
      { name: "Alisher", value: "alosha" },
      { name: "Alisher", value: "alosha" },
      { name: "Alisher", value: "alosha" },
      { name: "Alisher", value: "alosha" },
      { name: "Alisher", value: "alosha" },
      { name: "Alisher", value: "alosha" },
    ]);
    return {
      selectData,
      options,
    };
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
