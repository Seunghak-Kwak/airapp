<template>
  <v-app>
  <Header />
  <v-main class="mt-4 mx-15">
    <v-container
    class="d-flex justify-space-between">
      <h1>📃사진첩</h1>
      <v-btn @click="handleUpload" color="indigo lighten-4" class="ma-3">등록</v-btn> 
    </v-container>
    <v-container> 
      <div class="Subject d-flex pa-2" >
        <span>Subject</span>
      </div>
        <v-textarea
          v-model="subject"
          label=""
          auto-grow
          outlined
          rows="1"
          row-height="15"
          :placeholder="value1"></v-textarea>

        <div class="FileAttach d-flex pa-2">
            <span>Attach</span>
        </div>
        <v-file-input
        v-model="myfile"
        color="deep-purple accent-4"
        counter
        label="File input"
        type="file"
        accept="image/*"
        multiple
        placeholder="Select your files"
        prepend-icon="mdi-paperclip"
        outlined
        :show-size="1000"
        id="myfile"
        >

        <template v-slot:selection="{ index, text }">
            <v-chip
            v-if="index < 2"
            color="deep-purple accent-4"
            dark
            label
            small
            >
            {{ text }}
            </v-chip>

            <span
            v-else-if="index === 2"
            class="text-overline grey--text text--darken-3 mx-2"
            >
            +{{ myfiles.length - 2 }} File(s)
            </span>
        </template>
        </v-file-input>
    </v-container>
  </v-main>
  <Footer />
  </v-app>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import Header from './Header.vue'
import Footer from './Footer.vue'

export default {
  data: () => ({
    subject: '',
    imgList : [],
    value1: 'Please enter the subject.',
  }),
  components: {
    Header,
    Footer,
  },
  name: "Uploader",
  computed: mapGetters(["notices", "getAccount", "users", "file"]),
  methods: {
    ...mapActions(["logout","fetchNotices","addNotice","fetchAccount","upload", "listFiles"]),
    handleLogout() {
      this.logout();
    },
    handleUpload(e) {
      const file = document.getElementById("myfile").files[0];
      console.log(file);
      e.preventDefault();
      const userId = this.getAccount["$id"];
      if (!userId) {
        console.log("User id is null/empty");
      } else {
        const read = ["role:member"];
        const write = [`user:${userId}`];
        this.upload({
            file,
            read,
            write
        });
      }
    },
    handleFiles(e) {
      e.preventDefault();
      const userId = this.getAccount["$id"];
      if (!userId) {
        console.log("User id is null/empty");
      } else {
        const files = this.listFiles();
        console.log(files);
      }
    },    
  },
  created() {
    if (!this.getAccount) this.fetchAccount();
    this.imgList = this.listFiles();
  },
};
</script>

<style>
</style>

