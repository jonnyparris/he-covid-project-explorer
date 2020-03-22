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
    <h1>COVID-19 brings lots of problems to solve</h1>
    <v-expansion-panels>
      <v-expansion-panel v-for="area in problemAreas" :key="area.id">
        <v-expansion-panel-header>
          <span
            ><v-icon class="px-3">mdi-emoticon-sad</v-icon>
            {{ area.name }}
          </span>
        </v-expansion-panel-header>
        <v-expansion-panel-content class="text-left">
          <ul>
            <li
              v-for="problem in getProblemsInArea(area.id)"
              :key="problem.name"
            >
              <v-badge
                v-if="getProblemProposals(problem.id).length"
                :content="getProblemProposals(problem.id).length"
                inline
              >
              {{ problem.name }}
              </v-badge>
              <span v-else>{{ problem.name }}</span>
            </li>
          </ul>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";

@Component
export default class Home extends Vue {
  problemAreas: any[] = [];
  problems: any[] = [];
  proposals: any[] = [];
  loading = false;

  getProblemsInArea(area: string) {
    return this.problems.filter(
      problem => problem.category && problem.category[0] === area
    );
  }

  getProblemProposals(problem: string) {
    return this.proposals.filter(
      proposal => proposal.problem && proposal.problem[0] === problem
    );
  }

  async created() {
    this.loading = true;
    try {
      this.problemAreas = await this.$axios.$get(
        ".netlify/functions/get_problems"
      );
      this.problems = await this.$axios.$get(
        ".netlify/functions/get_specific_problems"
      );
      this.proposals = await this.$axios.$get(
        ".netlify/functions/get_proposals"
      );
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
