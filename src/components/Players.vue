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
      @cardClick="toggleSnow(idx)"
    />
  </div>
  <Transition name="vlery">
    <div class="vlery" v-if="snow != undefined" @click="disableSnow" />
  </Transition>
  <Transition name="snwflk">
    <CCardSnowflake v-if="snow != undefined" :data="Object(snow)" />
  </Transition>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PlayerCard from "./PlayerCard.vue";
import { Player } from "../interfaces/iPlayer";
import CCardSnowflake from "./CCardSnowflake.vue";

export default defineComponent({
  data() {
    return {
      players: players as unknown as Player[],
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

function randomAlphaNumeric() {
  return (
    Math.random().toString(36).substring(2, 15) +
    Math.random().toString(36).substring(2, 15)
  );
}

function random(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomIP() {
  const randomFrom0To255 = () => Math.floor(Math.random() * 256);
  return `${randomFrom0To255()}.${randomFrom0To255()}.${randomFrom0To255()}.${randomFrom0To255()}`;
}

const players = Array(10)
  .fill(undefined)
  .map((v, i) => {
    return {
      id: i,
      name: `Player${i}`,
      discordId: Math.floor(Math.random() * 999999999999999).toString(),
      hwid: randomAlphaNumeric(),
      ip: randomIP(),
      ping: random(0, 500),
      scid: randomAlphaNumeric(),
    };
  });
</script>

<style scoped>
@import "../css/players.css";
</style>
