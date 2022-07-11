<template>
    <sidebar></sidebar>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Sidebar from "../components/Sidebar.vue";
export default defineComponent({
  data() {
    return {};
  },
  beforeMount: function () {
    document.body.className = `${this.$route.name?.toString().toLowerCase()}`;
  },
  components: { Sidebar }
});
</script>

<style scoped>
@import "../css/panel.css";
</style>
