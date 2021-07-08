<template>
<v-app>
  <v-container
    style="margin: 200px auto;">
    <v-card
      class="pa-10 ma-auto display: flex; justify-content:center"
      width="500px"
    >
      <p class="float-right mt-6">
        Already have an account ?
        <span class="cursor-pointer underline">
          <router-link to="/login"> Login </router-link>
        </span>
      </p>
      <div class="logo" style="vertical-align: middle;">
        <h1 style="display:inline; margin-bottom:20px" class="font-weight-bold"> Sign Up </h1>
      </div>
      <div class="formInput" style="display:block">
        <v-form @submit="handleSignUp">
          <v-text-field
            class="mt-4"
            v-model="name"
            label="Name"
            required
          ></v-text-field>
          <v-text-field
            class="mt-4"
            v-model="email"
            label="E-mail"
            required
          ></v-text-field>
          <v-text-field
            class="mt-4"
            v-model="password"
            label="Password"
            required
          ></v-text-field>
          <v-btn
            color="#FF7043"
            :disabled="!name || !email || !password"
            type="submit"
            style="display: block; margin: 0px auto;"
          >
          Sign Up
          </v-btn>
        </v-form>
      </div>
    </v-card>
  </v-container>
</v-app>
</template>
 
<script>
import { mapActions } from "vuex";
 
export default {
  name: "SignUp",
  data() {
    return {
      email: "",
      password: "",
      name: "",
    };
  },
  methods: {
    ...mapActions(["signup"]),
    handleSignUp(e) {
      e.preventDefault();
     
      console.log("signing up ...", this.email, this.password, this.name);
      this.signup({
        email: this.email,
        password: this.password,
        name: this.name,
      });
    },
  }
};
</script>