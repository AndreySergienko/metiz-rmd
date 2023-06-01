<script setup>
  import { defineProps } from 'vue'

  defineProps({
    cam: {
      type: Number,
      required: true
    },
    url: {
      type: String,
      required: true
    },
    has_video: {
      type: Number,
      required: false,
      default: 1
    }
  })
</script>

<template>
  <v-card class='d-flex flex-column h-100'>
    <div class='py-4 px-5 pb-5'>
      <div>
        <h3 class='card__big-title mb-5'>Камера {{ cam }}</h3>
        <h5 class='card__title'>Видео на событие</h5>
      </div>
    </div>

    <div class='w-100 h-100'>
      <video
        v-if='has_video'
        controls
        class='card__video'
      >
        <source
          :src='url'
          type='video/mp4'
        />
      </video>

      <p class='pa-8' v-else>Видеозапись отсутствует</p>
    </div>
  </v-card>
</template>

<style scoped>
  .card__video {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
</style>
