<script setup>
  import { routesNameList } from '@/router/routesNameList'
  import { defineProps } from 'vue'
  import VCustomIcon from '@/modules/customIcon/VCustomIcon'

  defineProps({
    info: {
      type: Object,
      required: true
    }
  })
</script>

<template>
  <div class='d-flex justify-space-between mt-8 mb-2'>
    <router-link
      v-if='info.previous_item'
      :class="['d-flex align-center camera-link', !info.next_item && 'mr-a']"
      :to='{ name: routesNameList.DETAIL_EVENT, params: { id: info.previous_item } }'
    >
      <v-custom-icon icon-name='ArrowBack' width='19' height='15' class='mr-4 position-icon-header' />
      Назад
    </router-link>

    <router-link
      v-if='info.next_item'
      :class="['d-flex align-center camera-link', !info.previous_item && 'ml-a' ]"
      :to='{ name: routesNameList.DETAIL_EVENT, params: { id: info.next_item } }'
    >
      <span>
        Следующие событие
        <v-custom-icon icon-name='ArrowNext' width='19' height='15' class='ml-4 position-icon-header' />
      </span>
    </router-link>
  </div>
</template>

<style scoped>
  .camera-link {
    color: var(--color-gray-4);
    text-decoration: none;
  }

  .position-icon-header {
    position: relative;
    top: 2px;
  }
</style>
