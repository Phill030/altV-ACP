<template>
  <div class="content">
    <CSidebar class="sidebar" @idxchange="idxChange"></CSidebar>
    <div class="main">
      <div class="components">
        <component v-bind:is="comps[currIdx]"/>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, markRaw } from "vue";
import CSidebar from "../components/CSidebar.vue";
import Home from "../components/Home.vue";
import Players from "../components/Players.vue";
import Resources from "../components/Resources.vue";
import Discord from "../components/Discord.vue";
import Map from "../components/Map.vue";
import Vehicles from "../components/Vehicles.vue";

export default defineComponent({
  data() {
    return {
      currIdx: 0,
      comps: [
        markRaw(Home),
        markRaw(Players),
        markRaw(Resources),
        markRaw(Discord),
        markRaw(Map),
        markRaw(Vehicles),
      ],
    };
  },
  beforeMount: function () {
    document.body.className = `${this.$route.name?.toString().toLowerCase()}`;
  },
  methods: {
    idxChange(i: number) {
      this.currIdx = i;
    }
  },
  components: { CSidebar, Players, Map, Vehicles },
});
</script>

<style scoped>
@import "../css/panel.css";
</style>
