<script setup>
  import VButtonForModalManual from '@/components/ui/button/VButtonForModalManual'
  import VModalForm from '@/components/ui/modal/VModalForm'
  import TheCreateZoneForm from '@/components/forms/TheCreateZoneForm'
  import { defineProps } from 'vue'

  defineProps({
    item: {
      type: Object,
      required: false
    }
  })
</script>

<template>
  <v-modal-form max-width='530'>
    <template #activate='{ toggleOpen }'>
      <v-button-for-modal-manual
        v-if='!item'
        @click='toggleOpen'
      />

      <slot
        name='activate'
        v-else
        :toggleOpen='toggleOpen'
      />
    </template>

    <template #title>
      Создать зону
    </template>

    <template #content='{ toggleOpen }'>
      <the-create-zone-form :item='item' :toggle='toggleOpen' />
    </template>
  </v-modal-form>
</template>
