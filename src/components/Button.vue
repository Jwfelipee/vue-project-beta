<template>
  <button><slot></slot></button>
</template>

<script>
export default {
  name: "Button",
};
</script>

<style scoped>
button {
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 5px;
  margin: auto;
  margin-top: 30px;
  width: 50%;
  height: 40px;
  background: green;
  color: #fefefe;
  cursor: pointer;
}

button:focus {
  outline: none;
}
</style>
