import api from "../../api";
// import { Server } from "../../utils/config";

const state = {
    file : null,
    files : []
};

const actions = {
  upload: async ({ commit }, { file, read, write }) => {
    try {
      const response = await api.createFile(
          file, read, write
      );
      console.log(response);
      commit("uploadImg", response);
    } catch (e) {
      console.log("Could not create file", e);
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
  listFiles: async ({ commit }) => {
    try {
      const response = await api.listFiles();
      commit("listFiles", response);
    } catch (e) {
      console.log("Error getting List Files");
    }
  },
};

const getters = {
    file: (state) => state.file,
    files: (state) => state.files
};

const mutations = {
    uploadImg: (state, file) => (state.file = file),
    listFiles: (state, files) => (state.files = files)
};

export default {
  state,
  actions,
  getters,
  mutations,
};
