<script setup lang="ts">
import TodoApp from "./components/todoApp/TodoApp.vue";
</script>

<template>
  <div class="container">
    <TodoApp />
  </div>
</template>

<style scoped>
.container {
  padding: 45px 0;
  background-color: #fff;
  max-width: 1000px;
  height: 778px;
  overflow-y: scroll;
  width: 100%;
  margin: 0 auto;
  border-radius: 20px;
}
</style>
