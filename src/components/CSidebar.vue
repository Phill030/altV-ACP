<template>
  <div class="sidebar">
    <div class="header">
      <img
        draggable="false"
        @click="toggleSidebar"
        src="../../public/assets/Vector.svg"
        class="toggle"
      />
      <p class="title">alt:Admin</p>
    </div>
    <div class="content">
      <div class="list">
        <div
          class="item"
          v-for="(it, idx) in resources"
          :key="idx"
          :style="active == idx ? dynmicStyle : undynmicStyle"
          @click="[active = idx, $emit('idxchange', idx)]"
        >
          <div class="activeIndicator" v-if="active == idx" />
          <img
            :src="'../../public/assets/' + it.icon + '.svg'"
            class="item-icon"
          />
          <p class="item-name">{{ it.name }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  data() {
    return {
      collapsed: false,
      active: -1,
      resources: [
        {
          name: "Home",
          icon: "home_icon",
        },
        {
          name: "Players",
          icon: "players_icon",
        },
        {
          name: "Resources",
          icon: "resources_icon",
        },
        {
          name: "Discord",
          icon: "discord_icon",
        },
        {
          name: "Map",
          icon: "map_icon",
        },
        {
          name: "Vehicles",
          icon: "vehicles_icon",
        },
      ],
    };
  },
  emits: ['idxchange'],
  methods: {
    toggleSidebar() {
      this.collapsed = !this.collapsed;
    },
  },
  computed: {
    dynmicStyle() {
      return "background-color: #292D36;";
    },
    undynmicStyle() {
      return "background-color: null;";
    },
  },
});
</script>

<style scoped>
@import "../css/csidebar.css";
</style>
