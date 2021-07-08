<template>
    <!-- <div class="fill-height">
    <button
      class="btn btn-secondary"
      type="button" @click="handleFiles">
        Block Button
      </button>
      <input type="file" accept="image/*" @change="handleUpload" id="file-input">
      <input type="file" accept="image/*" @change="uploadImage($event)" id="file-input">
    </div> -->

<v-app>
  <Header />
  <Footer />
</v-app>

</template>
<script>
import Header from './Header.vue'
import Footer from './Footer.vue'

import { mapActions, mapGetters } from "vuex";
export default {
    components: {
    Header,
    Footer
    },
    computed: mapGetters(["file", "files" ,"getAccount"]),
    methods: {
    ...mapActions(["upload", "listFiles"]),
    handleUpload(e) {
      const file = e.target.files[0];
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
    data() {
        return {
            imgList : []
        };
    },
    created() {
        this.imgList = this.listFiles();
    }
}

</script>