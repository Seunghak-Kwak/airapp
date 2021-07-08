<template>
  <v-container>
  <v-app-bar 
  app
  style="overflow:hidden">
    <v-app-bar-title>
      <img 
      width="120px" 
      @click="$router.push('/main')" 
      class="w-8 h-8 inline" 
      src="../assets/bskt-logo.png" />
    </v-app-bar-title>

    <v-spacer></v-spacer>

    <v-btn
    @click="$router.push('/noticelist')"
    class="mr-3" 
    text> 
    모임공지 
    </v-btn>

    <v-btn
    @click="$router.push('/photo')"
    class="mr-3" 
    text>
    사진첩
    </v-btn>

    <v-divider inset vertical></v-divider>

    <v-btn
      @click="handleLogout"
      class="mr-4 ml-5 white--text"
      color="deep-purple lighten-1"
    >
      <span>Sign-Out👋</span>
    </v-btn>
  </v-app-bar>
  </v-container>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  computed: mapGetters(["getAccount"]),
  methods: {
    ...mapActions(["logout", "fetchAccount"]),
    handleLogout() {
      this.logout();
    },
  },
  created() {
    if (!this.getAccount) this.fetchAccount();
  },
};
</script>
