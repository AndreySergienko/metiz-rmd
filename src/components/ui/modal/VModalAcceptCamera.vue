<script setup>
  import { defineProps, defineEmits, computed } from 'vue'
  import VBlockText from '@/components/VBlockText'
  import VCustomIcon from '@/modules/customIcon/VCustomIcon'
  import { ObjectHelper } from '@/extension/ObjectHelper'

  const emit = defineEmits(['close'])

  const props = defineProps({
    isOpen: {
      type: Boolean,
      required: false
    },
    info: {
      type: Object,
      required: false
    }
  })

  const getDescription = (key) => {
    if (Array.isArray(key)) {
      return ObjectHelper.getValueByKeys(props.info, key)
    }

    return props.info[key]
  }

  const cameraInfo = [
    {
      title: 'Камера (зона):',
      description: getDescription(['camera', 'number'])
    },
    {
      title: 'Начало нарушения:',
      description: getDescription(['start_time'])
    },
    {
      title: 'Наименование:',
      description: getDescription(['camera', 'name']) || 'Не указано'
    },
    {
      title: 'Окончание нарушения:',
      description: getDescription(['end_time'])
    }
  ]
  const getIsOpen = computed({
    get() {
      return props.isOpen
    },

    set() {
      emit('close')
    }
  })

  const close = (_, decision) => emit('close', decision)
</script>

<template>
  <v-dialog v-model='getIsOpen' width='630'>
    <v-card>
      <v-container class='modal' @close='close'>
        <v-custom-icon
          class='pointer modal__close'
          width='25'
          height='25'
          icon-name='CloseGray'
          @click='close'
        />

        <v-card-title class='modal__title mb-8'>
          Подтвердить нарушение
        </v-card-title>
        <v-card-text class='modal__content modal__content--accept-camera mb-30'>
          <v-block-text
            class='mb-4 modal__block-text'
            :item='item'
            :key='item.title'
            v-for='item in cameraInfo'
          ></v-block-text>
        </v-card-text>
        <div class='mt-6'>
          <v-btn
            v-field:btn
            height='51'
            width='105'
            variant='flat'
            color='mediumBlue'
            @click='close(null,true)'
          >
            Да
          </v-btn>
          <v-btn
            v-field:btn
            class='ml-4 btn-invert'
            height='51'
            width='105'
            variant='flat'
            color='white'
            @click='close'
          >
            Нет
          </v-btn>
        </div>
      </v-container>
    </v-card>
  </v-dialog>
</template>

<style scoped>
  .modal {
    padding: 65px 120px !important;

    text-align: center !important;
    position: relative !important;
  }

  .modal__content {
    padding: 0 !important;

    display: flex !important;
    flex-wrap: wrap !important;
    justify-content: space-between !important;

    line-height: normal !important;
  }
  
  .modal__content--accept-camera {
    display: grid !important;
    grid-template-columns: 1fr 1fr !important;
  }
</style>
