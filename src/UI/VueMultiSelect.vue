<template>
  <div class="vue-custom-ui vue-select" v-bind="$attrs">
    <div>
      <button class="vue-selected vue-option-selected vue-border-rounded" @click.stop="optionClick()">
        <div v-html="selectedOptionContent"></div>
        <div class="vue-icon vue-icon-chevron" :class="{ 'active-icon': store.id == uid }" v-html="icons.chevronDown"></div>
      </button>
    </div>
    <div class="vue-select-container vue-border-rounded" :class="{ 'vue-options-open': store.id == uid }">
      <div class="vue-select-content" @scroll="scroll()">
        <div class="vue-select-content-options">
          <div class="vue-options">
            <slot></slot>
          </div>
          <div class="vue-scroller-wrapper">
            <div class="vue-scroller" ref="scroller"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, PropType, provide, ref, watch } from "vue";
import { icons } from "./icons";
import { store } from "./store";

export default defineComponent({
  props: {
    options: {
      type: Array,
    },
    value: {
      type: Array as PropType<string[]>,
      required: true,
    },
  },
  setup(props, context) {
    const selectedOptionContent = ref<string[]>([]);
    const selected = ref<string[]>(props.value);
    const uid = Math.random() * 1000;

    /*************************************************************/
    const scroller = ref();
    watch(
      () => props.value,
      (val: string[]) => {
        selected.value = val;
      }
    );

    function scroll() {
      console.log(scroller.value);
    }

    /*************************************************************/
    provide("selectProvider", {
      setOption: (value: string, html: string) => {
        selectedOptionContent.value.push(html);
        selected.value.push(value);
        context.emit("onChange", value);
      },
      type: "multi",
      selected,
    });

    /*************************************************************/
    function optionClick() {
      if (store.id == uid) {
        store.id = 0;
      } else {
        store.id = uid;
      }
    }

    onMounted(() => {
      document.addEventListener("click", () => (store.id = 0));
    });

    return {
      selected,
      selectedOptionContent,
      props,
      icons,
      scroll,
      scroller,
      optionClick,
      store,
      uid,
    };
  },
});
</script>

<style>
@import url(./style.css);
</style>
