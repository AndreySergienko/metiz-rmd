<script setup>
  import VCustomIcon from '@/modules/customIcon/VCustomIcon'
  import { useIsState } from '@/composables/useIsState'

  const { isState, toggle } = useIsState()


</script>

<template>
  <v-dialog
    v-model='isState'
    @close='toggle'
    content-class='window--medium-size'
    class='modal'
  >
    <template #activator>
      <slot name='activate' :toggleOpen='toggle'></slot>
    </template>

    <div class='modal__close modal__close--dark'>
      <v-btn
        type='button'
        height='30'
        width='30'
        max-width='30'
        min-width='30'
        @click='toggle'
      >
        <v-custom-icon
          class='pointer modal__close-icon'
          width='15'
          height='15'
          c-view-box='0 0 25 25'
          icon-name='CloseGray'
        />
      </v-btn>
    </div>

    <slot name='content' />
  </v-dialog>
</template>
