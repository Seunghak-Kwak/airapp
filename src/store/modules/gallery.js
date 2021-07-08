import api from "../../api";
// import { Server } from "../../utils/config";

const state = {
  file:null
};

const actions = {
    async upload({ commit }, { file }) {
        try {
          const response = await api.UploadImage(
              file
          );
          console.log(response);
          commit("uploadImg", response);
        } catch (e) {
          console.log("Could not create document", e);
          commit(
            "setError",
            {
              show: true,
              message: "Failed to upload",
              color: "red",
            },
            { root: true }
          );
        }
      },
      async fetchFiles({ commit }) {
        try {
          const data = await api.listFiles();
          console.log(data);
          commit("setFiles", data);
        } catch (e) {
          console.log("Could not fetch documents ", e);
          commit(
            "setError",
            {
              show: true,
              message: "Failed to fetch Todo",
              color: "red",
            },
            { root: true }
          );
        }
      },
};

const getters = {
    getFiles: (state) => state.file,
  };
  
const mutations = {
    upload: (state, file) => (start.file = file)
  };

export default {
  state,
  actions,
  getters,
  mutations,
};
