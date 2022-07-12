<template>
  <div class="snowflake">
    <p class="name">{{ data?.name }}</p>
    <div class="side">
        <!-- TODO: create sections for different things yk -->
    </div>
    <div class="content">
        <!-- TODO: fill in those things -->
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Player } from "../interfaces/iPlayer";
export default defineComponent({
  data() {
    return {};
  },
  props: {
    data: {
      type: Object,
      default: undefined,
      required: true,
    },
  },
});
</script>

<style scoped>
@import "../css/ccardsnowflake.css";
</style>
