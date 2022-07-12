<template>
    <div class="card">
        <p class="name">{{ data?.name ?? name }}</p>
        <p class="entry">ID: {{ data?.id ?? id }}</p>
        <p class="entry">Ping: {{ data?.ping ?? ping }}</p>
        <p class="entry">IP: {{ data?.ip ?? ip }}</p>
        <p class="entry">discordId: {{ data?.discordId ?? discordId }}</p>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
    data() {
        return {
            name: 'Unknown...',
            id: '??',
            ping: '??',
            ip: '255.255.255.255',
            discordId: '000000000000000000'
        }
    },
    props: {
        data: {
            type: Object,
            default: undefined,
            required: true
        }
    }
})
</script>

<style scoped>
@import '../css/playercard.css';
</style>