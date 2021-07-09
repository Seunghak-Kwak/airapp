import api from "../../api";
//import { Server } from "../../utils/config";

const state = {
    file : null,
    files : [],
    img : [],
};

const actions = {
  upload: async ({ commit }, { file, read, write }) => {
    try {
      const response = await api.createFile(
          file, read, write
      );
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
      console.log("Error getting List Files", e);
    }
  },
  getFile: async ({commit}, fileId) => {
    try {
      const response = await api.getFile(fileId);
      // console.log(response);
      commit("getFile", response.href);
    } catch (e) {
      console.log("Error getting File", e);
    }
  },
  initialList: async ({commit}) => {
    try {
      commit("initialList", []);
    } catch (e) {
      console.log("Error initialList", e);
    }
  }
};

const getters = {
    file: (state) => state.file,
    files: (state) => state.files,
    img: (state) => state.img
};

const mutations = {
    uploadImg: (state, file) => (state.file = file),
    listFiles: (state, files) => (state.files = files),
    getFile: (state, img) => (state.img.push(img)),
    initialList: (state, data) => (state.img = data),
};

export default {
  state,
  actions,
  getters,
  mutations,
};
