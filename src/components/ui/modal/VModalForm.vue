<script setup>
  import VCustomIcon from '@/modules/customIcon/VCustomIcon'
  import { useIsState } from '@/composables/useIsState'
  import { defineProps } from 'vue'

  const { isState, toggle } = useIsState()
  defineProps({
    maxWidth: [Number, String]
  })

</script>

<template>
  <v-dialog
    v-model='isState'
    @close='toggle'
    :max-width='maxWidth'
    content-class='window--medium-size'
    class='modal'
  >
    <template #activator>
      <slot name='activate' :toggleOpen='toggle'></slot>
    </template>

    <div class='modal-form__dialog pa-8 d-flex flex-column align-center'>
      <v-custom-icon
        class='pointer ml-auto'
        width='25'
        height='25'
        icon-name='CloseGray'
        @click='toggle'
      />

      <h3 class='modal-form__title mb-10'>
        <slot name='title' />
      </h3>
      <slot name='content' :toggleOpen='toggle' />
    </div>
  </v-dialog>
</template>

<style>
  .modal-form__dialog {
    background: var(--color-white);
  }

  .modal-form__title {
    font-weight: 600;
    font-size: var(--font-size-big);
    line-height: 120%;
    text-transform: uppercase;
  }
</style>
