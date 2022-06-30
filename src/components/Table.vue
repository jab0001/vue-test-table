<template>
  <div class="table">
    <div class="table__wrapper">
      <button
        class="table__btn"
        v-for="(btn, index) in buttons"
        :key="index"
        @click="tableFilter(btn)"
      >
        {{ btn }}
      </button>
    </div>
    <ul class="table__list">
      <li
        class="table__item"
        v-for="(item, index) in filteredData()"
        :key="item.login.uuid"
      >
        <TableCell :item-data="item" :el-number="index" />
      </li>
    </ul>
  </div>
</template>

<script>
import { Component, Vue } from "vue-property-decorator";
import { GETTERS } from "../store/modules/table/types";
import TableCell from "./TableCell.vue";

@Component({
  components: {
    TableCell,
  },
})
export default class Table extends Vue {
  buttons = [10, 25, 50];
  filterCount = null;

  get tableData() {
    return this.$store.getters[GETTERS.GET_TABLE_DATA];
  }
  filteredData() {
    if (this.filterCount) {
      let result = this.tableData.slice(0, this.filterCount);
      return result;
    } else {
      return this.tableData;
    }
  }
  tableFilter(value) {
    this.filterCount = value;
  }
}
</script>

<style scoped lang="scss">
.table {
  width: 50%;
  margin: 0 auto;
  &__list {
    padding: 0;
    list-style: none;
  }
  &__wrapper {
    display: flex;
    justify-content: space-between;
  }
  &__btn {
    min-width: 95px;
    height: 35px;
  }
}
</style>
