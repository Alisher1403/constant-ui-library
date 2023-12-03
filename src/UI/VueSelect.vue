<template>
  <div class="vue-custom-ui vue-select" v-bind="$attrs">
    <button class="vue-selected vue-option-style vue-border-rounded" @click.stop="selectClick()">
      <div class="vue-option-selected-content">
        <div class="vue-option-icon" v-html="selectedObject?.icon"></div>
        <div class="vue-option-label">{{ selectedObject?.label }}</div>
      </div>
      <div class="vue-icon vue-icon-chevron" :class="{ 'active-icon': store.id == uid }" v-html="icons.chevronDown"></div>
    </button>
    <div class="vue-select-container vue-border-rounded" :class="{ 'vue-options-open': store.id == uid }" @click.stop>
      <vue-scrollbar class="vue-select-content">
        <div class="vue-select-content-options">
          <div class="vue-options">
            <button
              class="vue-select-option"
              :class="{ 'vue-option-selected': selected == option.value }"
              v-for="option in selectOptions"
              :key="option"
              @click="optionClick(option.value)"
            >
              <div class="vue-option-style">
                <div class="vue-option-selected-content">
                  <div class="vue-option-icon" v-html="option.icon"></div>
                  <div class="vue-option-label">{{ option.label }}</div>
                </div>
              </div>
            </button>
          </div>
        </div>
      </vue-scrollbar>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref, watch } from "vue";
import { icons } from "./icons";
import { store } from "./store";
import VueScrollbar from "./VueScrollbar.vue";

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
  components: {
    VueScrollbar,
  },
  setup(props, { emit }) {
    const selectedOptionContent = ref<string>("");
    const selected = ref<string>(props.value);
    const uid = Math.random() * 1000;
    const selectOptions = ref(props.options);
    const selectedObject = ref();

    /**
     * ? >>>>>>>>>>> Watching Prop changes <<<<<<<<<<<<<< ?
     **/
    watch(
      () => props.value,
      () => {
        selected.value = props.value;
        selectedObject.value = selectOptions.value?.find((e: any) => e.value == props.value);
      },
      { deep: true }
    );

    /**
     * ? >>>>>>>>>>> Select Click Events <<<<<<<<<<<<<< ?
     **/
    function selectClick() {
      if (store.id == uid) {
        store.id = 0;
      } else {
        store.id = uid;
      }
    }

    function optionClick(value: string) {
      emit("onChange", value);
      store.id = 0;
    }

    /**
     * ? >>>>>>>>>>> Actions When The Component Mounts <<<<<<<<<<<<<< ?
     **/
    onMounted(() => {
      selectedObject.value = selectOptions.value?.find((e: any) => e.value == selected.value);
    });

    /**
     * TODO >>>>>>>>>>> Returning Everything <<<<<<<<<<<<<< TODO
     **/

    return {
      selected,
      selectedOptionContent,
      props,
      selectOptions,
      selectedObject,
      icons,
      selectClick,
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
