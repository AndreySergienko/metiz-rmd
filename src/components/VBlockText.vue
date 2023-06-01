<script setup>
  import { defineProps } from 'vue'

  defineProps({
    item: {
      type: Object,
      required: false
    }
  })
</script>

<template>
  <div class="block-text">
    <h5 class="block-text__title">{{ item.title }}</h5>
    <p class="block-text__description">{{ item.description }}</p>
  </div>
</template>

<style scoped>
  .block-text {
  }

  .block-text__title {
    margin-bottom: 10px;

    color: var(--color-light-blue);
    line-height: 16px;
    font-weight: normal;
    font-size: 14px;
  }

  .block-text__description {
    color: var(--color-dark);
    font-size: var(--font-size-primary);
  }
</style>
