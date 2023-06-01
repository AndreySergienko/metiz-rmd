<script setup>
  import VButtonPrimary from '@/components/ui/button/VButtonPrimary'
  import { defineProps } from 'vue'
  import { useHandlerUpdateTableStore } from '@/store/useHandlerUpdateTableStore'
  import { useCreateZoneForms } from '@/forms/journal/createZoneForms'

  const props = defineProps({
    toggle: {
      type: Function,
      required: true
    },
    item: {
      type: Object,
      required: false
    }
  })

  const storeUpdateHandler = useHandlerUpdateTableStore()
  const form = useCreateZoneForms(() => {
    props.toggle()
    storeUpdateHandler.toggle()
  })

  if (props.item) {
    form.toFormData(props.item)
  }

</script>

<template>
  <v-container fluid>
    <v-row class='d-flex justify-center'>
      <v-text-field
        class='mb-5'
        v-field
        density='compact'
        color='primary'
        bg-color='white'
        v-model='form.formData.title'
        label='Наименование'
        hide-details='auto'
        name='title'
        :error-messages='form.getErrors("title")'
        @input='form.validator.validateField'
        required
      />
    </v-row>
  </v-container>

  <div class='d-flex justify-center mt-5'>
    <v-button-primary
      class='mr-2 btn-fill'
      @click='form.action.call(form)'
      :disabled='form.isSend.value'
    >
      Сохранить
    </v-button-primary>
    <v-button-primary
      @click='toggle'
    >
      Отмена
    </v-button-primary>
  </div>
</template>
