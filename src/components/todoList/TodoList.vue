<script lang="ts">
import { defineComponent } from "vue";
import type { PropType } from "vue";

import type { TodoType, TodoListActionsType } from "@/assets/types/types";
import TodoItem from "../todoItem/TodoItem.vue";

export default defineComponent({
  props: {
    todos: {
      type: Array as PropType<TodoType[]>,
      required: true,
    },
    actions: {
      type: Object as PropType<TodoListActionsType>,
      required: true,
    },
  },
  components: {
    TodoItem,
  },
  setup(props) {
    return {
      ...props,
    };
  },
});
</script>

<template>
  <TodoItem v-for="(todo, i) in todos" :todo="todo" :actions="actions" :key="todo.date.getTime()" />
</template>
