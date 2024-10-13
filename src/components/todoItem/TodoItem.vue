<script lang="ts">
import { defineComponent } from "vue";

import type { PropType } from "vue";
import type { TodoType, TodoListActionsType } from "@/assets/types/types";

import Button from "../button/Button.vue";

export default defineComponent({
  props: {
    todo: {
      type: Object as PropType<TodoType>,
      required: true,
    },
    actions: {
      type: Object as PropType<TodoListActionsType>,
      required: true,
    },
  },
  components: {
    Button,
  },
  setup(props) {
    const { updateTodoStatus, removeTodo } = props.actions;

    return {
      ...props,
      updateTodoStatus,
      removeTodo,
    };
  },
});
</script>

<template>
  <div class="todo-item">
    <div :class="['todo-item__title', { 'todo-item__title--cross': todo.done }]">{{ todo.title }}</div>
    <div class="todo-item__controllers">
      <Button title="Готово" use="primary" :clickHandler="() => updateTodoStatus(todo.date)" />
      <Button title="Удалить" use="primary" :clickHandler="() => removeTodo(todo.date)" />
    </div>
  </div>
</template>

<style scoped>
.todo-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 900px;
}

.todo-item:not(:last-child) {
  margin-bottom: 15px;
}

.todo-item__title {
  font-size: 18px;
}

.todo-item__title--cross {
  text-decoration: line-through;
}

.todo-item__controllers {
  display: flex;
  gap: 5px;
}
</style>
