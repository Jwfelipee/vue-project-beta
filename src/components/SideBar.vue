<template>
  <div class="side">
    <div class="header"><h1>CABEÇALHO</h1></div>

    <div class="collapse collapse-arrow">
      <input type="checkbox" />
      <div class="collapse-title card-menu gap-1"><IconCollaborator class="w-7 font-extrabold" /> Colaboradores</div>

      <div class="collapse-content card-box-menu">
        <div @click="changeRoute('/collaborator')" class="card-menu rounded-xl my-3 h-12">Lista</div>
        <div class="card-menu rounded-xl my-3 h-12">Histórico</div>
      </div>
    </div>
  </div>
</template>

<script>
import { IconCollaborator } from "../icons/index";
export default {
  name: "Sidebar",

  components: {
    IconCollaborator,
  },
  methods: {
    changeRoute(route) {
      this.$router.push(route);
    },
  },
};
</script>

<style lang="postcss" scoped>
.side {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  max-width: 220px;
  padding: 10px;
  gap: 15px;
  background-color: rgba(0, 71, 157, 0.489);
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

.collapse:not(.collapse-open):not(.collapse-close) .collapse-title {
  border-radius: 8px;
}

.collapse:not(.collapse-close) input[type="checkbox"]:checked ~ .collapse-title {
  border-top-right-radius: 8px !important;
  border-top-left-radius: 8px !important;
  border-bottom-right-radius: 0 !important;
  border-bottom-left-radius: 0 !important;
}

.collapse:not(.collapse-close) input[type="checkbox"]:checked ~ .collapse-content {
  padding-bottom: 0 !important;
}

.card-box-menu {
  @apply w-full p-0 pb-0 mb-0 rounded-b-xl;
  background-color: rgb(0, 71, 157) !important;
}

.card-box-menu:hover {
  background-color: rgba(0, 71, 157, 0.681) !important;
}

.card-menu {
  width: 100%;
  display: flex;
  align-items: center;
  cursor: pointer;
  padding-left: 10px;
  background-color: rgb(0, 71, 157) !important;
}
</style>
