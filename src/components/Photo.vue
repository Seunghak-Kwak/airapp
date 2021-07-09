<template>
  <v-app>
  <Header />
    <v-main class="mt-4 mx-15">
  <!-- <v-main class="ma-4 pa-4"> -->
        <v-container
    class="d-flex justify-space-between">
      <h1>📃사진첩</h1>
      <v-btn
      @click="$router.push('./uploader')"
      color="indigo lighten-4"
      class="ma-3" 
      > 사진올리기 </v-btn> 
    </v-container>
    
    <v-row>
      <v-col
        v-for="n in img"
        :key="n"
        class="d-flex child-flex"
        cols="4"
      >
        <v-img
          :src=n
          :lazy-src=n
          aspect-ratio="1"
          class="grey lighten-2"
        >
          <template v-slot:placeholder>
            <v-row
              class="fill-height ma-0"
              align="center"
              justify="center"
            >
              <v-progress-circular
                indeterminate
                color="grey lighten-5"
              ></v-progress-circular>
            </v-row>
          </template>
        </v-img>
      </v-col>
    </v-row>
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
    init:false
  }),
  components: {
    Header,
    Footer,
  },
  name: "Photo",
  computed: mapGetters(["getAccount", "img", "files","getFirst"]),
  methods: {
    ...mapActions(["logout","fetchAccount","listFiles","getFile","setFirst","initialList"]),
    handleLogout() {
      this.logout();
    },
  },
  created() {
    const userId = this.getAccount["$id"];
    if (!userId) {
      console.log("User id is null/empty");
    } else {
      if (this.getFirst == false) {
      this.listFiles();
      this.initialList();
      if (this.files.files.length > 0) {
        for(let i = 0; i < this.files.files.length; i++ ) {
          this.getFile(this.files.files[i].$id);
        }
      }
      this.setFirst(true);
      }
    }
  }  
};
</script>
<style>
</style>
