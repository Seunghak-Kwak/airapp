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
        v-for="n in 9"
        :key="n"
        class="d-flex child-flex"
        cols="4"
      >
        <v-img
          :src="`https://picsum.photos/400/300?image=${n * 5 + 10}`"
          :lazy-src="`https://picsum.photos/10/6?image=${n * 5 + 10}`"
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
import Header from './Header.vue'
import Footer from './Footer.vue'

export default {
  components: {
    Header,
    Footer
  }
}
</script>

<style>
</style>
