<script setup>
  import { defineProps } from 'vue'

  defineProps({
    date: {
      type: String,
      required: true
    }
  })

  const getPartialDate = (item, idx) => item ? item.split(' ')[idx] : 'Не указано'
</script>

<template>
  <p class='mb-2'>
    {{ getPartialDate(date, 0) }}
  </p>
  {{ getPartialDate(date, 1) }}
</template>
