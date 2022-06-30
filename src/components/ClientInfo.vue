<template>
  <div class="table-item">
    <img :src="currentClient.picture.large" alt="альтернативный текст" />
    <ul class="table-item__list">
      <li class="table-item__item--name">
        {{ currentClient.name.title }}. {{ currentClient.name.first }}
        {{ currentClient.name.last }}
      </li>
      <li class="table-item__item">Phone: {{ currentClient.cell }}</li>
      <li class="table-item__item">Age(years): {{ currentClient.dob.age }}</li>
      <li class="table-item__item">Email:{{ currentClient.email }}</li>
      <li class="table-item__item">Gender: {{ currentClient.gender }}</li>
      <li class="table-item__item">
        Address: {{ currentClient.location.street.name }},
        {{ currentClient.location.street.number }}
      </li>
    </ul>
  </div>
</template>

<script>
import { Component, Prop, Vue } from "vue-property-decorator";
import { GETTERS } from "../store/modules/table/types";

@Component()
export default class ClientInfo extends Vue {
  @Prop({ type: String, default: "" }) clientId;

  get tableData() {
    return this.$store.getters[GETTERS.GET_TABLE_DATA];
  }

  get currentClient() {
    const result = this.tableData.filter(
      (item) => item.login.uuid === this.clientId
    )[0];
    return result;
  }

  mounted() {
    console.log(this.currentClient);
  }
}
</script>

<style scoped lang="scss">
.table-item {
  width: 375px;
  margin: 0 auto;
  padding: 50px;
  border: 1px solid red;
  border-radius: 10px;

  &__list {
    padding: 0;
    list-style: none;
  }

  &__item {
    margin-bottom: 10px;
    border-bottom: 1px solid grey;

    &--name {
      font-size: 26px;
      color: black;
    }
  }
}
</style>
