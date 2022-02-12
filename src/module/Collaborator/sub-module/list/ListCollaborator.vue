<template>
  <div>
    <div class="flex justify-between items-center w-full h-10">
      <h1 class="text-xl font-bold text-gray-500 from-neutral-content uppercase">Colaboradores</h1>
      <Button @click="this.$router.push('/collaborator/form')" class="button-new-collaborator">Novo Colaborador</Button>
    </div>
    <FilterCollaborator />

    <div class="div-table bg-gray-200 rounded-lg w-full overflow-y-auto">
      <table class="bg-gray-200 rounded-lg w-full text-gray-900">
        <thead>
          <tr class="border-b-4 border-gray-500">
            <th class="text-left">Nome</th>
            <th class="text-left">CPF</th>
            <th class="text-left">Telefone</th>
            <th class="text-center">Regime de Contratação</th>
            <th class="text-center">Editar</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user of users" :key="user.id" class="border-b-2 border-gray-400">
            <td class="border w-1/5">{{ user.name || "----------" }}</td>
            <td>{{ user.CPF || "----------" }}</td>
            <td>{{ user.phone || "----------" }}</td>
            <td class="text-center">{{ user.contract_type || "---" }}</td>
            <td class="flex justify-center"><IconPencil class="cursor-pointer" @click="this.$router.push(`/collaborator/form/${user?.id}`)" /></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import Button from "../../../../components/Button.vue";
import FetchAdapter from "../../../../adapters/FetchAdapter";
import CollaboratorController from "../../service/CollaboratorController";
import Cookies from "../../../../Cookies/index.js";
import FilterCollaborator from "./components/FilterCollaborator.vue";
import { IconPencil } from "../../../../icons/index.jsx";

export default {
  name: "ListCollaborator",
  components: {
    Button,
    FilterCollaborator,
    IconPencil,
  },
  data() {
    return {
      httpRequest: new CollaboratorController(new FetchAdapter(new Cookies().getToken())),
      users: [],
      optionsId: 0,
    };
  },
  async created() {
    const users = await this.httpRequest.get();
    const usersOrderByName = users?.sort((a, b) => (String(a?.name)?.toLowerCase() < String(b?.name)?.toLowerCase() ? -1 : 1));
    this.users = usersOrderByName;
  },
};
</script>

<style lang="postcss" scoped>
.button-new-collaborator {
  @apply w-52 text-white uppercase font-semibold;
}

th,
td {
  @apply p-3;
}

.div-table {
  /* height: 40%; */
  max-height: 70vh;
}
</style>
