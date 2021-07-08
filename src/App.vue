<template>
      <div>
      <alert v-if="getError['show']" :message="getError['message']" :color="getError['color']" />
      <router-view />
      </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import Alert from './components/Alert.vue'

export default {
  components: { Alert },
  name: "App",
  computed : mapGetters(['getAccount', 'getError']),
  watch: {
    getAccount(newValue) {
      console.log("In Watch getAccount in App.vue")
      if (newValue === null) {
        this.$router.replace('/')
      } else {
        this.$router.replace('/main')
      }
    }
  },
  methods: mapActions(['fetchAccount']),
  created() {
    if(!this.getAccount)
      this.fetchAccount()
  }
}

</script>
