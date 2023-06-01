<script setup>
  import VCustomIcon from '@/modules/customIcon/VCustomIcon'
  import { defineProps, defineEmits } from 'vue'

  defineEmits(['close'])

  defineProps({
    width: {
      type: [String, Number],
      required: true
    },
    title: {
      type: String,
      required: true
    }
  })
</script>

<template>
  <v-card class='text-center modal modal__small' :width='width'>
    <v-custom-icon
      class='cursor modal__close'
      width='25'
      height='25'
      icon-name='CloseGray'
      @click='$emit("close")'
    />
    <v-card-title class='modal__title--card'>{{ title }}</v-card-title>
    <v-card-text class='mt-40 modal__text'>
      <slot />
    </v-card-text>
  </v-card>
</template>

<style>
  .modal__small {
    padding: 65px;
  }

  .modal__title--card {
    padding: 0;

    font-weight: 600;
    font-size: var(--font-size-big);
    line-height: 120%;
    text-transform: uppercase;
  }

  .modal__text {
    padding: 0 !important;
  }
</style>
