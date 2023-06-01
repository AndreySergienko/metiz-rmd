<script setup>
  import { useComputedManual } from '@/composables/useComputedManual'
  import VButtonPrimary from '@/components/ui/button/VButtonPrimary'
  import { defineProps } from 'vue'
  import { useHandlerUpdateTableStore } from '@/store/useHandlerUpdateTableStore'
  import { useCreateCameraForms } from '@/forms/journal/createCameraForms'
  import VCustomSwitch from '@/components/ui/field/VCustomSwitch'

  const { getZones } = useComputedManual()

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
  const form = useCreateCameraForms(() => {
    props.toggle()
    storeUpdateHandler.toggle()
  })

  if (props.item) {
    form.toFormData(props.item)
  }
</script>

<template>
  <v-container fluid class='d-flex justify-end'>
    <v-col>
      <v-row>
        <v-text-field
          class='mb-5'
          v-field
          density='compact'
          color='primary'
          bg-color='white'
          v-model='form.formData.url'
          label='Url'
          hide-details='auto'
          name='url'
          :error-messages='form.getErrors("url")'
          @input='form.validator.validateField'
          required
        />
      </v-row>

      <v-row>
        <v-text-field
          class='mb-5'
          v-field
          density='compact'
          color='primary'
          bg-color='white'
          v-model='form.formData.number'
          label='№ камеры'
          hide-details='auto'
          name='number'
          :error-messages='form.getErrors("number")'
          @input='form.validator.validateField'
          required
        />
      </v-row>

      <v-row>
        <v-custom-switch
          label='Распознование СИЗ'
          v-model='form.formData.is_recognition'
        />
      </v-row>
    </v-col>

    <v-col class='ml-10'>
      <v-select
        v-field
        v-model='form.formData.zone_id'
        bg-color='transparent'
        class='field--select mb-5'
        hide-details
        variant='underlined'
        density='compact'
        label='Зоны'
        name='zone_id'
        no-data-text='Значения отсутствуют'
        color='primary'
        item-title='title'
        item-value='id'
        clearable
        required
        clear-icon='mdi-close'
        :items='getZones'
      />

      <v-text-field
        class='mb-5'
        v-field
        density='compact'
        color='primary'
        bg-color='white'
        v-model='form.formData.title'
        label='Наименование камеры'
        hide-details='auto'
        name='title'
        :error-messages='form.getErrors("title")'
        @input='form.validator.validateField'
        required
      />
    </v-col>
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
