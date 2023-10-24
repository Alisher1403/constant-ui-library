<template>
  <div>
    <vue-select
      :value="selectData"
      @onChange="(e) => (selectData = e)"
      :options="[
        { label: 'Alishergdfsgdfssgd', value: 'alisher' },
        { label: 'Alosha', value: 'alosha' },
        { label: 'Aloshahgfdh', value: 'alosha1' },
        { label: 'Aloshahjgfd', value: 'alosha2' },
        { label: 'Aloshajhgdfjgr', value: 'alosha3' },
        { label: 'Aloshabfdsbf', value: 'alosha4' },
        { label: 'Aloshasecxgr', value: 'alosha5' },
        { label: 'Aloshacxrsehgr', value: 'alosha6' },
        { label: 'Alosha254', value: 'alosha7' },
        { label: 'Alosha65', value: 'alosha8' },
        { label: 'Alosha1345', value: 'alosha9' },
        { label: 'Alosha1345', value: 'alosha9' },
        { label: 'Alosha1345', value: 'alosha9' },
        { label: 'Alosha1345', value: 'alosha9' },
        { label: 'Alosha1345', value: 'alosha9' },
        { label: 'Alosha1345', value: 'alosha9' },
        { label: 'Alosha1345', value: 'alosha9' },
        { label: 'Alosha1345', value: 'alosha9' },
        { label: 'Alosha1345', value: 'alosha9' },
        { label: 'Alosha1345', value: 'alosha9' },
        { label: 'Alosha1345', value: 'alosha9' },
        { label: 'Alosha1345', value: 'alosha9' },
        { label: 'Alosha1345', value: 'alosha9' },
      ]"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import VueSelect from "./UI/VueSelect.vue";

export default defineComponent({
  name: "App",
  components: {
    VueSelect,
  },
  setup() {
    const selectData = ref("alosha");
    return {
      selectData,
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
