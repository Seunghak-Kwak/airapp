import { Appwrite } from "appwrite";
import { Server } from "../utils/config";


let api = {
  sdk: null,

  provider: () => {
    if (api.sdk) return api.sdk;
    let appwrite = new Appwrite();
    appwrite.setEndpoint(Server.endpoint).setProject(Server.project);
    //appwrite.setEndpoint('http://10.204.26.22:9998/v1').setProject('60e26add3948e');
    api.sdk = appwrite;
    return appwrite;
  },

  // provider2: () => {
  //   const sdk = require('node-appwrite');
  //   let client = new sdk.Client();
  //   let users = new sdk.Users(client);
  //   client
  //       .setEndpoint(Server.endpoint) // Your API Endpoint
  //       .setProject(Server.project) // Your project ID
  //       .setKey(Server.apikey) // Your secret API key
  //   ;
  //   return users;
  // },

  listFiles: () => {
    return api.provider().storage.listFiles();
    //.then(function (response) {
    //     console.log(response); 
    // }, function (error) {
    //     console.log(error);
    // });
  },

  createFile: (file, read, write) => {
    return api.provider().storage.createFile(file, read, write);
  },

  getFile: (fileId) => {
    return api.provider().storage.getFileView(fileId);
    // return api.provider().storage.getFileView([fileId], 800, 0, 100, 5, 'ff0000', 50, 0.8, 45, 'ff0000', 'png');
  },

  createAccount: (email, password, name) => {
    return api.provider().account.create(email, password, name);
  },

  getAccount: () => {
    return api.provider().account.get();
  },

  createSession: (email, password) => {
    return api.provider().account.createSession(email, password);
  },

  deleteCurrentSession: () => {
    return api.provider().account.deleteSession('current');
  },

  // getUser: (userId) => {
  //   return api.provider2().get(userId);
  // },

  createDocument: (collectionId, data, read, write) => {
    return api
      .provider()
      .database.createDocument(collectionId, data, read, write);
  },

  listDocuments: (collectionId) => {
    return api.provider().database.listDocuments(collectionId);
  },

  updateDocument: (collectionId, documentId, data, read, write) => {
    return api
      .provider()
      .database.updateDocument(collectionId, documentId, data, read, write);
  },

  deleteDocument: (collectionId, documentId) => {
    return api.provider().database.deleteDocument(collectionId, documentId);
  },
};

export default api;