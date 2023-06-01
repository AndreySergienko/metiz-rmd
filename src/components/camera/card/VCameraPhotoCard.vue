<script setup>
  import VCustomIcon from '@/modules/customIcon/VCustomIcon'
  import { defineProps } from 'vue'
  import VModalCustom from '@/components/ui/modal/VModalCustom'

  defineProps({
    url: {
      type: String,
      required: true
    }
  })

  const SIZE = 31
</script>

<template>
  <v-card height='390' border='0' class='card card-primary hidden'>
    <div class='d-flex justify-space-between align-center py-5 px-8'>
      <h5 class='card__title'>Фото на событие</h5>
      <v-modal-custom>
        <template #activate='{ toggleOpen }'>
          <button class='d-flex align-center link-cell' @click='toggleOpen'>
            <v-custom-icon icon-name='OpenBigWindow' :width='SIZE' :height='SIZE' />
          </button>
        </template>
        <template #content>
          <img class='pointer' :src='url' alt='photo' />
        </template>
      </v-modal-custom>
    </div>
    <img
      class='w-100 h-100'
      :src='url'
      alt='photo'
    />
  </v-card>

</template>

<style scoped>
  .card__body--padding {
    padding: 20px 30px;
  }
</style>
