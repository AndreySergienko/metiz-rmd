<script setup>
  import { defineProps } from 'vue'

  defineProps({
    status: {
      type: String,
      required: true
    }
  })
</script>

<template>
  <p :class='[" text-align-left", status === "Подтверждено" ? "green" : "red"]'>{{ status }}</p>
</template>

<style scoped>
  .green {
    color: var(--color-green);
  }

  .red {
    color: var(--color-red);
  }
</style>
