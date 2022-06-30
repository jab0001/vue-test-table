<template>
  <div class="app">
    <router-view />
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  methods: {
    ...mapActions(["fetchTableData"]),
    async initAPP() {
      await this.fetchTableData();
    },
  },
  beforeMount() {
    this.initAPP();
  },
};
</script>

<style lang="scss">
.app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
