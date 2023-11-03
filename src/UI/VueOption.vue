<template>
  <button
    class="vue-option vue-select-option vue-hover"
    ref="option"
    :class="{ selected: selected === props.value }"
    @click="setSelectedValue()"
  >
    <slot></slot>
  </button>
</template>

<script lang="ts">
import { defineComponent, inject, onMounted, ref, watch } from "vue";

export default defineComponent({
  props: {
    value: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const option = ref<any>(null);

    const provider: any = inject("selectProvider");
    const selected = ref(provider.selected);

    function setSelectedValue() {
      provider.setOption(props.value, option.value.innerHTML);
    }

    watch(
      () => [selected.value, props.value],
      () => {
        if (selected.value == props.value) {
          setSelectedValue();
        }
      }
    );

    onMounted(() => {
      if (selected.value == props.value) {
        setSelectedValue();
      }
    });

    return { setSelectedValue, selected, props, option };
  },
});
</script>

<style></style>
