<template>
  <div class="vue-custom-ui vue-select" v-bind="$attrs">
    <button class="vue-option-selected vue-border-rounded" @click.stop="optionOpen = !optionOpen">
      {{ selectedOption.label }}
      <div class="vue-icon vue-icon-chevron" :class="{ 'active-icon': optionOpen }" v-html="icons.chevronDown"></div>
    </button>
    <div class="vue-select-container vue-border-rounded" :class="{ 'vue-options-open': optionOpen }">
      <div class="vue-select-content">
        <div class="vue-select-content-options" v-if="props.options">
          <button
            class="vue-select-option vue-hover"
            :class="{ selected: selectedOption.value === option.value }"
            @click="selectedOption = option"
            v-for="option in props.options"
            :key="option"
          >
            {{ option.label }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, onMounted, ref, watch } from "vue";
import { icons } from "./icons";

export default defineComponent({
  props: {
    options: Array,
    value: String,
  },
  setup(props, context) {
    const optionOpen = ref(false);
    const defaultSelected = props.options.find((e) => e.value === props.value);
    const selectedOption = ref(defaultSelected || "");

    watch(selectedOption, (currentVal) => context.emit("onChange", currentVal.value));

    onMounted(() => {
      document.addEventListener("click", () => {
        optionOpen.value = false;
      });
    });

    return {
      optionOpen,
      selectedOption,
      props,
      icons,
    };
  },
});
</script>

<style scoped>
@import url(./style.css);
</style>
