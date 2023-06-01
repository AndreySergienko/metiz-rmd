<script setup>
  import VCustomIcon from '@/modules/customIcon/VCustomIcon'
  import { defineAsyncComponent, defineProps } from 'vue'
  import { ManualService } from '@/http/services/ManualService'
  import { useRoute } from 'vue-router'

  const route = useRoute()
  defineProps({
    item: {
      type: Object,
      required: true
    }
  })
  const manualService = new ManualService()

  const ModalComponent = defineAsyncComponent(() =>
    import (/* webpackChunkName: "ModalComponentIntoActionCell" */ `@/components/ui/modal/manuals/${route.meta.componentName}`))
</script>

<template>
  <div>
    <v-custom-icon
      width='20'
      height='24'
      icon-name='Delete'
      class='mr-5 cell-action-delete'
      @click='manualService.deleteById(item.raw.id)'
    />

    <ModalComponent
      :item='item.raw'
    >
      <template #activate='{ toggleOpen }'>
        <v-custom-icon
          width='23'
          height='22'
          icon-name='ChangeProfileSmall'
          class='cell-action-change'
          @click='toggleOpen'
        />
      </template>
    </ModalComponent>
  </div>
</template>

<style>
  .cell-action-delete,
  .cell-action-change {
    transition-duration: 300ms;
  }

  .cell-action-delete:hover path,
  .cell-action-change:hover path,
  .cell-action-change:hover rect {
    stroke: var(--color-dark);
  }
</style>
