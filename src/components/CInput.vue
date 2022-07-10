<template>
  <input
    :type="iType"
    :placeholder="placeholder"
    :style="dynamicStyle"
    class="input"
    :maxlength="max"
    :autocomplete="autocompleted"
    
    @input="$emit('update:modelValue', $el.value)"
  />
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  data() {
    return {};
  },
  emits: ['update:modelValue'],
  props: {
    iType: {
      type: String,
      default: "text",
    },
    placeholder: {
      type: String,
      default: "",
    },
    bgColor: {
      type: String,
      default: "000000",
    },
    max: {
      type: String,
      default: "24"
    },
    autocompleted: {
      type: String,
      default: "off",
    }
  },
  computed: {
    dynamicStyle() {
      return `background-color: #${this.bgColor}`;
    },
  },
});
</script>

<style scoped>
@import "../css/cinput.css";
</style>
