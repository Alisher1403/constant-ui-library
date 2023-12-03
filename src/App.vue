<template>
  <div>
    <div>
      <vue-select :value="selectData" :options="options" @onChange="(e) => (selectData = e)" />
      <vue-select style="width: 200px" :value="selectData" :options="options" @onChange="(e) => (selectData = e)" />
    </div>
    <!--  -->
    <div>
      <vue-multi-select style="width: 200px" :value="multiSelectData" @onChange="(e) => (multiSelectData = e)"> </vue-multi-select>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import VueSelect from "./UI/VueSelect.vue";
import VueMultiSelect from "./UI/VueMultiSelect.vue";
import { skillsIcons } from "./assets/icons";

export default defineComponent({
  name: "App",
  components: {
    VueSelect,
    VueMultiSelect,
  },
  setup() {
    const selectData = ref("alosha6");

    const options = ref([
      { icon: skillsIcons["html"].icon, label: "Alisher1", value: "alosha1" },
      { icon: skillsIcons["css"].icon, label: "Alisher2", value: "alosha2" },
      { icon: skillsIcons["vuex"].icon, label: "Alisher3", value: "alosha3" },
      { icon: skillsIcons["html"].icon, label: "Alisher4", value: "alosha4" },
      { icon: skillsIcons["html"].icon, label: "Alisher5", value: "alosha5" },
      { icon: skillsIcons["html"].icon, label: "Alisher6", value: "alosha6" },
      { icon: skillsIcons["html"].icon, label: "Alisher7", value: "alosha7" },
      { icon: skillsIcons["html"].icon, label: "Alisher8", value: "alosha8" },
      { icon: skillsIcons["html"].icon, label: "Alisher", value: "alosha" },
      { icon: skillsIcons["html"].icon, label: "Alisher", value: "alosha" },
      { icon: skillsIcons["html"].icon, label: "Alisher", value: "alosha" },
      { icon: skillsIcons["html"].icon, label: "Alisher", value: "alosha" },
      { icon: skillsIcons["html"].icon, label: "Alisher", value: "alosha" },
      { icon: skillsIcons["html"].icon, label: "Alisher", value: "alosha" },
    ]);

    const multiSelectData = ref(["alosha6", "alosha4", "alosha2"]);
    const multiOptions = ref([
      { name: "Alisher1", value: "alosha1" },
      { name: "Alisher2", value: "alosha2" },
      { name: "Alisher3", value: "alosha3" },
      { name: "Alisher4", value: "alosha4" },
      { name: "Alisher5", value: "alosha5" },
      { name: "Alisher6", value: "alosha6" },
      { name: "Alisher7", value: "alosha7" },
      { name: "Alisher8", value: "alosha8" },
      { name: "Alisher", value: "alosha" },
    ]);

    return {
      selectData,
      options,
      multiOptions,
      multiSelectData,
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
