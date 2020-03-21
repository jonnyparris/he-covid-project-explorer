<template>
  <div class="card">
    <v-overlay :value="loading" z-index="10">
      <v-progress-circular
        indeterminate
        size="64"
        color="primary"
        opacity="0.3"
      />
    </v-overlay>
    <h1>COVID-19 is lame.</h1>
    <v-card v-for="problem in problems" :key="problem" class="mt-5">
      <v-card-text>{{ problem }}</v-card-text>
    </v-card>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";

@Component
export default class Home extends Vue {
  problems = [];
  loading = false;

  async created() {
    this.loading = true;
    try {
      this.problems = await this.$axios.$get(".netlify/functions/get_problems");
    } catch (e) {
      console.error(e);
    } finally {
      this.loading = false;
    }
  }
}
</script>

<style lang="scss">
</style>
