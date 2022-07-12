<template>
  <div class="list">
    <PlayerCard
      v-for="(i, idx) in players.sort((a, b) => {
        // @ts-ignore 'Object is possibly 'undefined'.'
        return a?.id - b?.id || 0;
      })"
      :data="i"
      :key="idx"
      class="card"
      @click="toggleSnow(idx)"
    />
  </div>
  <Transition name="vlery">
    <div class="vlery" v-if="snow != undefined" @click="disableSnow" />
  </Transition>
  <CCardSnowflake v-if="snow != undefined" :data="Object(snow)" />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PlayerCard from "./PlayerCard.vue";
import { Player } from "../interfaces/iPlayer";
import CCardSnowflake from "./CCardSnowflake.vue";

export default defineComponent({
  data() {
    return {
      players: [
        { id: 0, name: 'PlayerX'},
        { id: 4 },
        { id: 3 },
        { id: 7 },
        { id: 6 },
        { id: 5 },
        { id: 2 },
        { id: 1 },
        { id: 8 },
        { id: 10 },
        { id: 9 },
      ] as unknown as Player[],
      snow: undefined as unknown,
    };
  },
  methods: {
    toggleSnow(index: number) {
      this.snow = this.players[index];
    },
    disableSnow() {
      this.snow = undefined;
    },
  },
  components: { PlayerCard, CCardSnowflake },
});
</script>

<style scoped>
@import "../css/players.css";
</style>
