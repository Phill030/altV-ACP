<template>
  <div class="snowflake">
    <div class="main">
      <div class="ttl">
        <p class="name">{{ data?.name }}</p>
        <p class="id">{{ data?.id }}</p>
      </div>
      <div class="content">
        <div class="ping">
          <p class="keytxt">
            Ping:&nbsp;<span class="valuetxt">{{ data?.ping }}ms</span>
          </p>
          <div class="circle" :style="computePing"></div>
        </div>
        <p class="keytxt">
          IP:&nbsp;<span class="valuetxt">{{ data?.ip }}</span>
          <button class="keybtn">Copy</button>
        </p>
        <p class="keytxt">
          DiscordID:&nbsp;<span class="valuetxt">{{ data?.discordId }}</span>
          <button class="keybtn">Copy</button>
        </p>
        <p class="keytxt">
          SocialID:&nbsp;<span class="valuetxt">{{ data?.scid }}</span>
          <button class="keybtn">Copy</button>
        </p>
        <p class="keytxt">
          HardwareID:&nbsp;<span class="valuetxt">{{ data?.hwid }}</span>
          <button class="keybtn">Copy</button>
        </p>
        <div class="btns">
          <button class="action">DM</button>
          <button class="action">User options</button>
          <button class="action">Player options</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
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
  computed: {
    computePing() {
      const green = "30D158";
      const yellow = "ff9f0a";
      const red = "FF453A";

      const player = Object(this.data);

      if (player.ping >= 0 && player.ping <= 70)
        return `background-color: #${green};`;
      if (player.ping > 70 && player.ping < 150)
        return `background-color: #${yellow};`;
      if (player.ping >= 150) return `background-color: #${red};`;

      return `#${red}`;
    },
  },
});
</script>

<style scoped>
@import "../css/ccardsnowflake.css";
</style>
