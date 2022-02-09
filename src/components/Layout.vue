<template>
  <div class="body">
    <SideBar />
    <div class="content">
      <div class="header">Cabeçalho</div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
import Cookies from "../Cookies";
import SideBar from "../components/SideBar.vue";
export default {
  name: "Layout",
  components: {
    SideBar,
  },
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
  background: #fefefe;
  display: flex;
  flex-direction: row;
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
