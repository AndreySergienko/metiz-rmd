<script setup>
  import VCustomIcon from '@/modules/customIcon/VCustomIcon'
  import VButtonPrimary from '@/components/ui/button/VButtonPrimary'
  import { defineEmits } from 'vue'

  defineEmits(['click'])
</script>

<template>
  <v-button-primary
    class='ml-4 btn--manual'
    @click='$emit("click")'
  >
    <v-custom-icon
      icon-name='Plus'
      width='14'
      height='13'
    />
    Создать
  </v-button-primary>
</template>

<style>
  .btn--manual path {
    transition: 300ms;
  }

  .btn--manual:hover path {
    stroke: var(--color-light-blue);
  }
</style>
