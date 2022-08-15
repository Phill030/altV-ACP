<template>
  <div class="card" @click="$emit('cardClick')">
    <div class="inner">
      <div class="ttl">
        <p class="name">{{ data?.name ?? name }}</p>
        <p class="id">{{ data?.id ?? id }}</p>
      </div>
      <div class="content">
        <div class="ping">
          <p class="keytxt">
            Ping:&nbsp;<span class="valuetxt">{{ data?.ping ?? ping }}ms</span>
          </p>
          <div class="circle" :style="computePing"></div>
        </div>
        <p class="keytxt keyt">
          IP:&nbsp;<span class="valuetxt">{{ data?.ip ?? ip }}</span>
        </p>
        <p class="keytxt keyt">
          Discord:&nbsp;<span class="valuetxt">{{ computedId ?? discordId }}</span>
        </p>
        <button class="copyId" @click.stop="copyId">Copy Id</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  data() {
    return {
      name: "Unknown",
      id: "??",
      ping: 0,
      ip: "255.255.255.255",
      discordId: "Undefined",
    };
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

      if (this.ping >= 0 && this.ping <= 70)
        return `background-color: #${green};`;
      if (this.ping > 70 && this.ping < 150)
        return `background-color: #${yellow};`;
      if (this.ping >= 150)
        return `background-color: #${red};`;

      return `#${red}`;
    },
    computedId() {
      return this.discordId.substring(0, 9) + "...";
    },
  },
  methods: {
    copyId() {
      navigator.clipboard.writeText(this.discordId);
    },
  },
  mounted() {
    const self = this;
    self.name = self.data?.name;
    self.id = self.data?.id;
    self.ping = self.data?.ping;
    self.ip = self.data?.ip;
    self.discordId = self.data?.discordId;
  }
});
</script>

<style scoped>
@import "../css/playercard.css";
</style>
