<script setup>
  import VButtonState from './VButtonState'
  import { defineProps } from 'vue'
  import VModalAcceptCamera from '@/components/ui/modal/VModalAcceptCamera'
  import { useIsState } from '@/composables/useIsState'

  const props = defineProps({
    isDisabled: {
      type: Boolean,
      required: false
    },
    send: {
      type: Function,
      required: true
    },
    id: {
      type: [String, Number],
      required: true
    },
    item: {
      type: Object,
      required: true
    },
    isModeCard: {
      type: Boolean,
      required: false,
      default: false
    }
  })

  const handlerDecisionSend = (decision) => {
    decision && props.send('acceptItem', props.id)
    toggle()
  }

  const { isState, toggle } = useIsState()
</script>

<template>
  <div class='d-flex'>
    <v-button-state
      type='Success'
      :is-long='isModeCard'
      :is-disabled='isDisabled'
      @click='toggle'
    />
    <v-button-state
      type='Cancel'
      :is-long='isModeCard'
      class='ml-2'
      :is-disabled='isDisabled'
      @click='send("rejectItem", id)'
    />

    <v-modal-accept-camera
      :is-open='isState'
      :info='item'
      @close='handlerDecisionSend'
    />
  </div>
</template>
