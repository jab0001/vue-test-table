import Vue from "vue";
import { MUTATIONS } from "./types";

export default {
  [MUTATIONS.SET_TABLE_DATA](state, data) {
    Vue.set(state, "tableData", data);
  },
};
