import api from "../../api";
import { Server } from "../../utils/config";

const state = {
  notices: [],
  // user: null,
  // users: [],
};

const actions = {
  async fetchNotices({ commit }) {
    try {
      const data = await api.listDocuments(Server.collectionID);
      // const data = await api.listDocuments('60e4f82f1ffb3');
      commit("setNotice", data.documents);
    } catch (e) {
      console.log("Could not fetch documents ", e);
      commit(
        "setError",
        {
          show: true,
          message: "Failed to fetch Notice",
          color: "red",
        },
        { root: true }
      );
    }
  },
  async addNotice({ commit }, { data, read, write }) {
    try {
      const response = await api.createDocument(
        Server.collectionID,
        // '60e4f82f1ffb3',
        data,
        read,
        write
      );
      console.log(response);
      commit("addNotice", response);
    } catch (e) {
      console.log("Could not create document", e);
      commit(
        "setError",
        {
          show: true,
          message: "Failed to Add Notice",
          color: "red",
        },
        { root: true }
      );
    }
  },
  async updateNotice({ commit }, { documentId, data, read, write }) {
    try {
      const response = await api.updateDocument(
        Server.collectionID,
        documentId,
        data,
        read,
        write
      );
      commit("updateNotice", response);
    } catch (e) {
      console.log("Could not update document", e);
      commit(
        "setError",
        {
          show: true,
          message: "Failed to updated Notice",
          color: "red",
        },
        { root: true }
      );
    }
  },
  async deleteNotice({ commit }, documentId) {
    try {
      await api.deleteDocument(Server.collectionID, documentId);
      commit("deleteNotice", documentId);
    } catch (e) {
      console.log("Could not delete document", e);
      commit(
        "setError",
        {
          show: true,
          message: "Failed to delete Notice",
          color: "red",
        },
        { root: true }
      );
    }
  },
  // async getUser({commit}, userId) {
  //   try {
  //     const response = await api.getUser(userId);
  //     commit("getUser", response.name);
  //     commit("getUsers", response.name);
  //   } catch (e) {
  //     console.log("Could not get User", e);
  //     commit(
  //       "setError",
  //       {
  //         show: true,
  //         message: "Failed to get User",
  //         color: "red",
  //       },
  //       { root: true }
  //     );
  //   }
  // }
};

const getters = {
  notices: (state) => state.notices,
  // users: (state) => state.users,
  // user: (state) => state.user,
};

const mutations = {
  // getUser: (state, user) => (state.user = user),
  // getUsers: (state, user) => (state.users.push(user)),
  setNotice: (state, notices) => (state.notices = notices),
  addNotice: (state, notice) => state.notices.unshift(notice),
  deleteNotice: (state, id) =>
    (state.notices = state.notices.filter((notice) => notice["$id"] !== id)),
  updateNotice: (state, updatedNotice) => {
    const index = state.notices.findIndex(
      (notice) => notice["$id"] === updatedNotice["$id"]
    );
    if (index !== -1) {
      state.notices.splice(index, 1, updatedNotice);
    }
  },
};

export default {
  state,
  actions,
  getters,
  mutations,
};
