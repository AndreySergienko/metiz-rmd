<script setup>
  import { computed, defineProps, defineEmits } from 'vue'
  import VModalUser from '@/components/ui/modal/journal/VModalUser'
  import VModalZone from '@/components/ui/modal/journal/VModalZone'
  import VModalCamera from '@/components/ui/modal/journal/VModalCamera'
  import { manualName } from '@/utils/storage/manualNames'

  const emit = defineEmits(['close'])

  const props = defineProps({
    typeModal: {
      type: String,
      required: true
    },
    currentItem: {
      type: Object,
      required: false
    }
  })

  const checkTypeModal = computed(() => {
    return props.typeModal
  })

  function closeModal(item, boolean) {
    emit('close', item, boolean)
  }
</script>

<template>
  <v-modal-user :is-open-modal='checkTypeModal === manualName.USERS' :item='currentItem' @close='closeModal' />
  <v-modal-camera :is-open-modal='checkTypeModal === manualName.CAMERAS' :item='currentItem' @close='closeModal' />
  <v-modal-zone :is-open-modal='checkTypeModal === manualName.ZONES' :item='currentItem' @close='closeModal' />
</template>

