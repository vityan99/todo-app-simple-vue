<script lang="ts">
import { defineComponent, ref } from "vue";

import type { TodoType, TodoListActionsType } from "@/assets/types/types";

import TodoControllers from "../todoControllers/TodoControllers.vue";
import TodoList from "../todoList/TodoList.vue";

export default defineComponent({
  components: {
    TodoControllers,
    TodoList,
  },
  setup() {
    const todos = ref<TodoType[]>([]);

    const addTodo = (todo: TodoType): void => {
      todos.value.push(todo);
    };

    const updateTodoStatus = (date: Date): void => {
      todos.value.map((todo: TodoType) => {
        if (todo.date === date) {
          todo.done = !todo.done;
          return todo;
        }
        return todo;
      });
    };

    const removeTodo = (date: Date): void => {
      const todoIndex = todos.value.findIndex((todo) => todo.date === date);
      if (todoIndex !== -1) {
        todos.value.splice(todoIndex, 1);
      }
    };

    const todoListActions: TodoListActionsType = {
      updateTodoStatus,
      removeTodo,
    };

    return {
      todos,
      addTodo,
      todoListActions,
    };
  },
});
</script>

<template>
  <div class="todo-app">
    <TodoControllers :clickHandler="addTodo" />
    <TodoList :todos="todos" :actions="todoListActions" />
  </div>
</template>

<style scoped>
.todo-app {
  width: 100%;
}
</style>
