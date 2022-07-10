<template>
  <button
    class="bttn"
    @mouseover="hovering"
    @mouseout="unhover"
    :style="dynamicStyle"
  >
    <slot></slot>
  </button>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  data() {
    return {};
  },
  props: {
    color: {
      type: String,
      default: "ffffff",
    },
    hover: {
      type: String,
      default: "ffffff",
    },
  },
  computed: {
    dynamicStyle() {
      return `background-color: #${this.color}`;
    },
  },
  methods: {
    hovering() {
      this.$el.style.backgroundColor = `#${this.hover}`;
    },
    unhover() {
      this.$el.style.backgroundColor = `#${this.color}`;
    },
  },
});
</script>

<style scoped>
@import "../css/cbutton.css";
</style>
