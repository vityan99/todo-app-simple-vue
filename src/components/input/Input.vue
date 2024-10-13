<script lang="ts">
import { defineComponent, ref, watch } from "vue";
import type { PropType } from "vue";

export default defineComponent({
  props: {
    value: {
      type: String as PropType<string>,
      required: true,
    },
    handleChange: {
      type: Function as PropType<(newValue: string) => void>,
      required: true,
    },
  },
  setup(props) {
    const inputValue = ref(props.value);

    watch(
      () => props.value,
      (newValue) => (inputValue.value = newValue)
    );

    const onInputChange = (e: Event): void => {
      const newValue = (e.target as HTMLInputElement).value;

      inputValue.value = newValue;
      props.handleChange(newValue);
    };

    return {
      inputValue,
      onInputChange,
    };
  },
});
</script>

<template><input class="input" type="text" placeholder="Введите новое дело" :value="inputValue" @input="onInputChange" /></template>

<style scoped>
.input {
  max-width: 700px;
  width: 100%;
  padding: 12px 24px;
  border-radius: 10px;
  border: 1px solid #cfcfcf;
  font-size: 16px;
}
</style>
