<template>
  <v-app>
  <v-container>
  <v-col cols="12">
    <v-footer
      app
      dark
      padless
      min-width="100%"
      class="absolute bottom-0"
    >
      <v-card
        flat
        tile
        class="pt-4 indigo lighten-2 white--text text-center"
        width="100%"
      >
        <v-card-text class="white--text pt-0" width="100%">
          ye-eun.yoo@metanetglobal.com | seunghak.kwak@metanetglobal.com
        </v-card-text>
  
        <v-divider></v-divider>
  
        <v-card-text class="white--text" width="100%">
          {{ new Date().getFullYear() }} — <strong>Metanet Global</strong>
        </v-card-text>
      </v-card>
    </v-footer>
  </v-col>
  </v-container>
  </v-app>
</template>

<script>
</script>

