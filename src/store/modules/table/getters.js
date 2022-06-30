import { GETTERS } from "./types";

export default {
  [GETTERS.GET_TABLE_DATA](state) {
    return state.tableData.data;
  },
};
