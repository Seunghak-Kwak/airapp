<template>
  <v-app>
  <Header />
  <v-main class="mt-4 mx-15">
    <v-container
    class="d-flex justify-space-between">
      <h1>📃게시판</h1>
      <v-btn
      @click="$router.push('./notice')"
      color="indigo lighten-4"
      class="ma-3" 
      > 글쓰기 </v-btn> 
    </v-container>

  <v-simple-table
    fixed-header
    height="300px"
    style="d-flex pa-2"
  >
    <template v-slot:default>
      <thead>
        <tr> 
          <th class="text-left">
            Detail
          </th>
          <th class="text-left">
            Subject
          </th>
          <th class="text-left">
            Content
          </th>
          <th class="text-left">
            Writer
          </th>
        </tr>
      </thead>
      <tbody>
        <notice-item v-for="item in notices" :key="item['$id']" :notice="item" />
      </tbody>
    </template>
  </v-simple-table>
  </v-main>
  <Footer />
  </v-app>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import NoticeItem from "./NoticeItem.vue";
import Header from './Header.vue'
import Footer from './Footer.vue'

export default {
  components: {
    Header,
    Footer,
    NoticeItem,
  },
  name: "NoticeList",
  computed: mapGetters(["notices", "getAccount", "users"]),
  methods: {
    ...mapActions(["logout","fetchNotices","fetchAccount"]),
    handleLogout() {
      this.logout();
    },
  },
  created() {
    if (!this.getAccount) this.fetchAccount();
    this.fetchNotices();
  },
};
</script>