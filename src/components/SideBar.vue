<template>
  <div class="side">
    <div class="header"><h1>CABEÇALHO</h1></div>
    <div class="side-cards">
      <div class="card-menu">value</div>
      <div class="card-menu">value</div>
      <div class="card-menu">value</div>
      <div class="card-menu">value</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Sidebar",
};
</script>

<style scoped>
.side {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  max-width: 220px;
  padding: 10px;
  gap: 15px;
  background-color: rgba(0, 71, 157, 0.571);
}

.header {
  border-radius: 8px;
  padding: 0 10px;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 71, 157, 0.571);
}

h1 {
  color: #fefefe;
  font-size: 24px;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}

.side-cards {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.card-menu {
  display: flex;
  align-items: center;
  cursor: pointer;
  padding-left: 10px;
  height: 40px;
  border-radius: 8px;
  background-color: rgba(0, 71, 157, 0.359);
}
</style>
