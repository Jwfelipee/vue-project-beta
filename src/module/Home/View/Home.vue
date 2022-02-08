<template>
  <div class="body">teste</div>
</template>

<script>
import Cookies from "../../../Cookies";
export default {
  name: "Home",
  data() {
    return {
      cookies: new Cookies(),
    };
  },
  created() {
    if (!this.cookies.getToken()) {
      this.cookies.removeToken();
      this.$router.push("/login");
    }
  },
};
</script>

<style scoped>
.body {
  padding: 20px;
}
</style>
