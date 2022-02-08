<template>
  <div class="body">
    <div class="box-login">
      <div class="header-login">
        <h1>integra Admin</h1>
      </div>
      <form @submit="singIn($event)" class="body-login">
        <label>Email</label>
        <Input
          :value="email"
          @change="email = $event.target.value"
          type="email"
          placeholder="example@example.com"
          class="input-login"
          autofocus
          required
        />
        <label>Senha</label>
        <Input
          :value="password"
          @change="password = $event.target.value"
          type="password"
          placeholder="********"
          required
        />
        <Button type="submit">Entrar</Button>
        <router-link to="/lost-password" class="lost-my-password"
          >Esqueci minha senha</router-link
        >
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
      email: "dev@admin.com",
      password: "admin",
      login: new Login(new FetchAdapter()),
      cookies: new Cookies(),
    };
  },
  created() {
    this.cookies.removeToken();
  },
  methods: {
    async singIn(event) {
      event.preventDefault();
      const res = await this.login.singIn({
        email: this.email,
        password: this.password,
      });
      const json = await res.json();
      this.cookies.setToken(json.token);
      this.$router.push("/home");
    },
  },
  components: {
    Input,
    Button,
  },
};
</script>

<style scoped>
.body {
  background-color: blue;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.box-login {
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #fefefe;
  border-radius: 8px;
  width: 400px;
  height: 450px;
}

.header-login {
  display: flex;
  flex-direction: column;
  align-items: center;
  border-bottom: 1px solid #646464;
  width: 80%;
  margin-bottom: 30px;
}

h1 {
  color: #646464;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
  font-weight: 800;
}

.body-login {
  display: flex;
  flex-direction: column;
  width: 80%;
}

label {
  font-size: 14px;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
  margin: 10px 0 0 8px;
  color: #646464;
  font-weight: 600;
}

.lost-my-password {
  text-align: center;
  margin-top: 30px;
  color: green;
  text-decoration: underline;
  font-size: 14px;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
  cursor: pointer;
}
</style>
