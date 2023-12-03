<template>
  <div @scroll="scroll()" ref="scrollContent">
    <slot></slot>
    <div class="vue-scroller-wrapper">
      <div class="vue-scroller" ref="scroller"></div>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  setup() {
    const scroller = ref();
    const scrollContent = ref();

    function scroll() {
      const scrollY = scrollContent.value.scrollTop;
      const height = scrollContent.value.clientHeight;
      const scrollHeight = scrollContent.value.scrollHeight;
      const style = scroller.value.style;
      style.height = `${(height * 100) / scrollHeight}%`;
      style.top = `${(scrollY * 100) / scrollHeight}%`;
    }

    return { scroll, scrollContent, scroller };
  },
});
</script>

<style></style>
