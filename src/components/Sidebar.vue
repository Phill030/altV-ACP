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
          @click="active = idx"
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
          path: "/panel/home",
        },
        {
          name: "Players",
          icon: "players_icon",
          path: "/panel/players",
        },
        {
          name: "Resources",
          icon: "resources_icon",
          path: "/panel/resources",
        },
        {
          name: "Discord",
          icon: "discord_icon",
          path: "/panel/discord",
        },
        {
          name: "Map",
          icon: "map_icon",
          path: "/panel/map",
        },
        {
          name: "Vehicles",
          icon: "vehicles_icon",
          path: "/panel/vehicles",
        },
      ],
    };
  },
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
@import "../css/sidebar.css";
</style>
