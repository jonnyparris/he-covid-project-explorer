<template>
  <v-card>
    <v-card-text>Mic check</v-card-text>
  </v-card>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";

@Component
export default class Home extends Vue {
  created() {
    console.log('gonna fetch me some airtable info...');
  }
}
</script>

<style lang="scss">
</style>
