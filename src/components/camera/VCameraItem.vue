<script setup>
  import { defineProps } from 'vue'

  defineProps({
    isRecognition: {
      type: Boolean,
      required: false,
      default: false
    },
    route: {
      type: String,
      required: false
    }
  })
</script>

<template>
  <div :class='[isRecognition && "recognition-block position-relative"]'>
    <a
      :href='route'
      target='_blank'
      :class='[isRecognition && "square--recognition", "square"]'
    >
      <slot />
    </a>

    <p class='mt-3 position-absolute recognition__description' v-if='isRecognition'>Распознавание СИЗ</p>
  </div>
</template>

<style scoped>
  .square {
    display: flex;

    width: 100px;
    height: 100px;
    background-color: var(--color-light);

    transition-duration: 300ms;

    justify-content: center;
    align-items: center;

    text-decoration: none;
    color: var(--color-dark);
  }

  .square--recognition {
    width: 136px;
    height: 136px;

    background-color: var(--color-light);
  }

  .recognition-block p {
  }

  .square:hover {
    background-color: var(--color-light-blue);
  }

  .recognition-block {
    max-height: 230px;
    padding: 30px 40px 50px;
    border: 1px dashed var(--color-blue);
  }

  .recognition__description {
    left: 35px;
  }
</style>
