import { ACTIONS, MUTATIONS } from "./types";
import axios from "axios";

export default {
  async [ACTIONS.FETCH_TABLE_DATA]({ commit }) {
    axios
      .get("https://randomuser.me/api/?results=70")
      .then(function (response) {
        commit(MUTATIONS.SET_TABLE_DATA, {
          data: response.data.results,
        });
      })
      .catch(function (error) {
        alert(error);
      });

    return false;
  },
};
