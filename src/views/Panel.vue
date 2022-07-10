<template>
    <sidebar></sidebar>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Sidebar from "../components/Sidebar.vue";
export default defineComponent({
  components: { Sidebar },
    data() {
        return {};
    }
});
</script>

<style scoped>
    @import '../css/panel.css';
</style>