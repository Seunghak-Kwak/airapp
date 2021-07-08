import Vue from "vue";
import Vuex from "vuex";
import notice from './modules/notice';
import account from './modules/account';
import storage from './modules/storage';


Vue.use(Vuex);

/** Global store */
const state = {
    error : {}
}

const getters = {
    getError: (state) => state.error
}

const actions = {

}

const mutations = {
    setError: (state, error) => state.error = error
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
