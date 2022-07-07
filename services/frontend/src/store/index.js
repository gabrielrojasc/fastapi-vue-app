import { createStore } from "vuex";
import VuexPersistence from "vuex-persist";

import notes from "./modules/notes";
import users from "./modules/users";

export default createStore({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    notes: notes,
    users: users,
  },
  plugins: [new VuexPersistence().plugin],
});
