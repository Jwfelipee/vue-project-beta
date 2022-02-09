<template>
  <div class="body">
    <div class="box-login">
      <div class="header-login">
        <h1>JWFelipan</h1>
      </div>
      <form @submit="singIn($event)" class="body-login">
        <label>Email</label>
        <Input
          :value="login.email"
          @change="login.setEmail($event.target.value)"
          type="email"
          placeholder="example@example.com"
          class="input-login"
          autofocus
          required
        />
        <label>Senha</label>
        <Input :value="login.password" @change="login.setPassword($event.target.value)" type="password" placeholder="********" required />
        <Button type="submit" class="font-bold uppercase text-lg">Entrar</Button>
        <router-link to="/lost-password" class="lost-my-password">Esqueci minha senha</router-link>
      </form>
    </div>
  </div>
</template>

<script>
import Login from "../service/Login.js";
import Cookies from "../../../Cookies";
import Input from "../../../components/Input.vue";
import Button from "../../../components/Button.vue";
import FetchAdapter from "../../../adapters/FetchAdapter";

export default {
  name: "Login",
  data() {
    return {
      login: new Login(new FetchAdapter(), new Cookies()),
    };
  },
  methods: {
    async singIn(event) {
      event.preventDefault();
      await this.login.singIn(this);
    },
  },
  components: {
    Input,
    Button,
  },
};
</script>

<style lang="postcss" scoped>
.body {
  @apply h-screen flex justify-center items-center;
  background-color: rgba(0, 71, 157, 0.571);
}

.box-login {
  @apply flex items-center flex-col bg-white rounded-lg;
  width: 400px;
  height: 450px;
}

.header-login {
  @apply flex flex-col items-center justify-center border-b-2 border-gray-500 w-4/5 pb-4 mt-6 mb-8;
}

h1 {
  @apply text-gray-700 font-extrabold text-3xl;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande", "Lucida Sans", Arial, sans-serif;
}

.body-login {
  @apply flex flex-col w-4/5;
}

label {
  @apply text-sm mt-3 ml-2 font-semibold text-gray-700;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande", "Lucida Sans", Arial, sans-serif;
}

.lost-my-password {
  @apply text-center mt-8 underline text-sm font-bold cursor-pointer;
  color: rgb(41, 180, 255);
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande", "Lucida Sans", Arial, sans-serif;
}
</style>
