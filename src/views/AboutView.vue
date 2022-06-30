<template>
  <div class="about">
    <h2>About client</h2>
    <ClientInfo :client-id="clientId" />
  </div>
</template>

<script>
import { Component, Vue } from "vue-property-decorator";
import ClientInfo from "../components/ClientInfo.vue";

@Component({
  components: {
    ClientInfo,
  },
})
export default class AboutView extends Vue {
  get clientId() {
    return this.$route.params.id;
  }
}
</script>

<style scoped lang="scss">
.table {
  &__list {
    width: 50%;
    margin: 0 auto;
    padding: 0;
    list-style: none;
  }
}
</style>
