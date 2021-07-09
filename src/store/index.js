import Vue from "vue";
import Vuex from "vuex";
import notice from './modules/notice';
import account from './modules/account';
import storage from './modules/storage';


Vue.use(Vuex);

/** Global store */
const state = {
    error : {},
    access : false
}

const getters = {
    getError: (state) => state.error,
    getFirst: (state) => state.access
}

const actions = {
    setFirst: async ({ commit }, check) => {
        try {
          commit("setFirst", check);
          console.log(state.access);
        } catch (e) {
          console.log("Error Set First", e);
        }
      },
}

const mutations = {
    setError: (state, error) => state.error = error,
    setFirst: (state, access) => state.access = access
}

const store = new Vuex.Store({
    state, 
    getters,
    actions,
    mutations,
    modules: {
        notice,
        account,
        storage,
    }
});

// Create Store
export default store;
