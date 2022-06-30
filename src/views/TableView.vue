<template>
  <div class="home">
    <h2 class="home__title">Test Table</h2>
    <Table />
  </div>
</template>

<script>
import Table from "@/components/Table.vue";

export default {
  name: "TableView",
  components: {
    Table,
  },
};
</script>
<style scoped lang="scss">
.home {
  &__title {
    color: purple;
  }
}
</style>
