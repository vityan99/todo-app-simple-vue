<script lang="ts">
import { defineComponent } from "vue";
import type { PropType } from "vue";

export default defineComponent({
  props: {
    title: {
      type: String as PropType<string>,
      required: true,
    },
    use: {
      type: String as PropType<string>,
      required: true,
    },
    clickHandler: {
      type: Function as PropType<() => void>,
      required: true,
    },
  },
  setup(props) {
    return {
      ...props,
    };
  },
});
</script>

<template>
  <button :class="['btn', `btn--${use}`]" @click="clickHandler">{{ title }}</button>
</template>

<style scoped>
.btn {
  background-color: transparent;
  cursor: pointer;
}

.btn--primary {
  font-size: 16px;
  padding: 12px 28px;
  border: 1px solid #cfcfcf;
  border-radius: 10px;
}
</style>
