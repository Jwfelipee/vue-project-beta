<template>
  <div class="body">
    <div class="side">Sidebar</div>
    <div class="content">
      <div class="header">Cabeçalho</div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
import Cookies from "../Cookies";
export default {
  name: "Layout",
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
  height: 100vh;
  background: #cacacaac;
  display: flex;
  flex-direction: row;
}
.side {
  max-width: 220px;
  width: 100%;
  height: 100%;
  padding: 10px;
  background: rgba(0, 71, 157, 0.571);
}

.content {
  height: 100%;
  width: 100%;
}
.header {
  width: 100%;
  height: 70px;
  padding: 10px;
  background-color: rgba(41, 180, 255, 0.468);
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.15);
}
</style>
