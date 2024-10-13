<script lang="ts">
import { defineComponent, ref } from "vue";
import type { PropType } from "vue";

import type { TodoType } from "@/assets/types/types";
import Input from "../input/Input.vue";
import Button from "../button/Button.vue";

export default defineComponent({
  props: {
    clickHandler: {
      type: Function as PropType<(todo: TodoType) => void>,
      required: true,
    },
  },
  components: {
    Input,
    Button,
  },
  setup(props) {
    let inputData = ref("");

    const setInputData = (newValue: string): void => {
      inputData.value = newValue;
    };

    const handleSubmit = () => {
      if (inputData.value.length === 0) {
        return;
      }

      props.clickHandler({
        title: inputData.value,
        date: new Date(),
        done: false,
      });

      inputData.value = "";
    };

    return {
      ...props,
      inputData,
      setInputData,
      handleSubmit,
    };
  },
});
</script>

<template>
  <div class="todo-controllers">
    <Input :value="inputData" :handleChange="setInputData" />
    <Button title="Добавить дело" use="primary" :clickHandler="() => handleSubmit()" />
  </div>
</template>

<style scoped>
.todo-controllers {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  margin-bottom: 20px;
  gap: 5px;
}
</style>
