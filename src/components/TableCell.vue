<template>
  <div class="table-cell">
    <p class="table-cell__number">{{ elementNumber }}</p>
    <ul class="table-cell__list">
      <p class="table-cell__item table-cell__item--name">{{ fullName }}</p>
      <p class="table-cell__item">Телефон: {{ itemData.cell }}</p>
      <p class="table-cell__item">Email: {{ itemData.email }}</p>
    </ul>
    <router-link :to="clientInfoUrl" class="table-cell__info">
      More Info
    </router-link>
  </div>
</template>

<script>
import { Component, Prop, Vue } from "vue-property-decorator";

@Component()
export default class TableCell extends Vue {
  @Prop({ type: Object, default: () => ({}) }) itemData;
  @Prop({ type: Number, default: null }) elNumber;

  get fullName() {
    return `Полное имя: ${this.itemData.name.title}.${this.itemData.name.first} ${this.itemData.name.last}`;
  }

  get elementNumber() {
    return this.elNumber + 1;
  }

  get clientInfoUrl() {
    return `about/${this.itemData.login.uuid}`;
  }
}
</script>

<style scoped lang="scss">
.table-cell {
  width: 100%;
  display: flex;
  border: 1px solid green;
  justify-content: space-between;

  &__number {
    margin-left: 25px;
  }

  &__info {
    margin-right: 20px;
    margin-top: 20px;
  }

  &__list {
    margin: 0;
    padding: 0;
  }

  &__item {
    margin: 0;

    &--name {
      font-size: 17px;
    }
  }
}
</style>
