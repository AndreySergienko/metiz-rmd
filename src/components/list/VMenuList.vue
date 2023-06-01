<script setup>
  import VCustomIcon from '@/modules/customIcon/VCustomIcon'
  import { defineProps } from 'vue'

  defineProps({
    items: {
      type: Array,
      required: true
    }
  })
  const getItemsSizeWidth = (item) => item?.size?.width || 32
  const getItemsSizeHeight = (item) => item?.size?.height || 31
</script>

<template>
  <v-list bg-color='mediumBlue'>
    <v-list-item v-for='(item, i) in items' :key='i'>
      <router-link
        v-if='!item.isLink'
        class='menu__link'
        :to='item.route'
      >
        <v-custom-icon
          :icon-name='item.menu.icon'
          :width='getItemsSizeWidth(item)'
          :height='getItemsSizeHeight(item)'
        />
        <p class='hidePartText'>
          {{ item.name }}
        </p>
      </router-link>

      <a
        v-else
        class='menu__link'
        :href='item.route'
        target='_blank'
      >
        <v-custom-icon
          :icon-name='item.menu.icon'
          :width='getItemsSizeWidth(item)'
          :height='getItemsSizeHeight(item)'
        />
        <p class='hidePartText'>
          {{ item.name }}
        </p>
      </a>
    </v-list-item>
  </v-list>
</template>
