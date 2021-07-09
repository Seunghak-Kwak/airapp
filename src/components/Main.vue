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
  <div style="margin:30px;padding:30px">
      {{files}}
  </div>
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
    computed: mapGetters(["files" ,"getAccount", "getFirst"]),
    methods: {
      ...mapActions(["listFiles","getFile","setFirst","initialList"]),
    },
    // created() {
    //   const userId = this.getAccount["$id"];
    //   if (!userId) {
    //     console.log("User id is null/empty");
    //   } else {
    //     if (this.getFirst == false) {
    //     this.listFiles();
    //     this.initialList();
    //     if (this.files.files.length > 0) {
    //       for(let i = 0; i < this.files.files.length; i++ ) {
    //         this.getFile(this.files.files[i].$id);
    //       }
    //     }
    //     this.setFirst(true);
    //     }
    //   }
    // }
}

</script>