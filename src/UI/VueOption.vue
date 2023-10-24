<template>
  <button @click="passData()">
    <slot></slot>
  </button>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    value: String | Number,
  },
  setup(_, context) {
    function passData() {
      context.emit("getOptionData");
    }

    return { passData };
  },
});
</script>

<style></style>
