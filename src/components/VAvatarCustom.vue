<script setup>
  import VCustomIcon from '@/modules/customIcon/VCustomIcon'
  import { defineProps } from 'vue'

  defineProps({
    user: {
      type: Object,
      required: true
    }
  })

  const SIZE = 53
</script>

<template>
  <v-avatar :size='SIZE'>
    <v-custom-icon icon-name='Personal' :width='SIZE' :height='SIZE' />
  </v-avatar>
  <div class='ml-3 mr-3 text-dark'>
    <v-heading level='3' class='title--small mb-0' :text='user.firstname' />
    <span class='text'>{{ user.job || 'не указан' }}</span>
  </div>
</template>
