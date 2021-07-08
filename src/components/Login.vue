<template>
<v-app>
  <v-container
    style="margin: 200px auto;">
    <v-card
      class="pa-10 ma-auto display: flex; justify-content:center"
      width="500px"
    >
          <p class="mt-6">
        Don't have an account ?
        <span class="cursor-pointer underline">
          <router-link to="/signup"> Sign Up </router-link>
        </span>
      </p>
      <div class="logo" style="vertical-align: middle;">
        <img src="../assets/bskt-logo.png" width="38px"/>
        <h1 style="display:inline; margin-bottom:20px" class="font-weight-bold">  Air App</h1>
      </div>
      <div class="formInput" style="display:block">
        <v-form
          ref="form"
          lazy-validation
          @submit="handleLogin"
        >
          <v-text-field
            class="mt-4"
            v-model="email"
            label="email"
            required
          ></v-text-field>
          <v-text-field
            v-model="password"
            :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
            :type="show ? 'text' : 'password'"
            name="input-10-1"
            label="Password"
            hint="At least 8 characters"
            counter
            @click:append="show = !show"
          ></v-text-field>
          <v-btn
            color="#FF7043"
            :disabled="!email || !password"
            type="submit"
            style="display: block; margin: 0px auto;"
          >
          Login
          </v-btn>
        </v-form>
      </div>
    </v-card>
  </v-container>
</v-app>
</template>

<script>
import { mapActions} from "vuex";

export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
      show:false,
    };
  },
  methods: {
    ...mapActions(["login"]),
    handleLogin(e) {
      e.preventDefault();
      console.log("Form submitted", this.email, this.password);
      this.login({
        email: this.email,
        password: this.password,
      });
    },
  }
};
</script>
