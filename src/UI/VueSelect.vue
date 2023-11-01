<template>
  <div class="vue-custom-ui vue-select" v-bind="$attrs">
    <button class="vue-selected vue-option-selected vue-border-rounded" ref="select" @click="selectClick">
      <div v-html="selectedOptionContent"></div>
      <div class="vue-icon vue-icon-chevron" :class="{ 'active-icon': optionOpen }" v-html="icons.chevronDown"></div>
    </button>
    <div class="vue-select-container vue-border-rounded" :class="{ 'vue-options-open': optionOpen }">
      <div class="vue-select-content" @scroll="scroll()">
        <div class="vue-select-content-options">
          <div class="vue-options">
            <slot></slot>
          </div>
          <div class="vue-scroller" ref="scroller"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, provide, ref } from "vue";
import { icons } from "./icons";
export default defineComponent({
  props: {
    options: {
      type: Array,
    },
    value: {
      type: String,
      required: true,
    },
  },
  setup(props, context) {
    const optionOpen = ref(false);
    const selectedOptionContent = ref<string>("");
    const selected = ref<string>(props.value);
    const select = ref<any>();

    /*************************************************************/
    const scroller = ref();

    function scroll() {
      console.log(scroller.value);
    }

    /*************************************************************/
    onMounted(() => {
      console.log(select.value);
      document.addEventListener("click", () => {
        optionOpen.value = false;
      });
    });

    provide("selectProvider", {
      setOption: (value: string, html: string) => {
        selectedOptionContent.value = html;
        selected.value = value;
        context.emit("onChange", value);
      },
      selected,
    });

    function selectClick(e: any) {
      e.stopPropagation();
      optionOpen.value = !optionOpen.value;
    }

    return {
      optionOpen,
      selected,
      selectedOptionContent,
      props,
      icons,
      scroll,
      scroller,
      context,
      select,
      selectClick,
    };
  },
});
</script>

<style>
@import url(./style.css);
</style>
