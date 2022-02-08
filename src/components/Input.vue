<template>
  <input />
</template>

<script>
export default {
  name: "Input",
  props: ["label"],
};
</script>

<style scoped>
input {
  min-width: 150px;
  height: 40px;
  margin: 10px 0;
  border: 1px solid #8c8c8c;
  border-radius: 5px;
  padding-left: 8px;
  font-size: 15px;
}

input:focus {
  outline: none;
}
</style>
