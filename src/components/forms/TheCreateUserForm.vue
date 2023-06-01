<script setup>
  import { useRegistrationForms } from '@/forms/registrationForms'
  import { useIsState } from '@/composables/useIsState'
  import { useComputedManual } from '@/composables/useComputedManual'
  import VButtonPrimary from '@/components/ui/button/VButtonPrimary'
  import { defineProps } from 'vue'
  import { useHandlerUpdateTableStore } from '@/store/useHandlerUpdateTableStore'

  const { isState: isShowPassword, toggle: changeTypeFieldPassword } = useIsState()
  const { isState: isShowConfirmPassword, toggle: changeTypeFieldConfirmPassword } = useIsState()
  const { getRoles } = useComputedManual()

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
  const form = useRegistrationForms(() => {
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
          v-model='form.formData.lastname'
          label='Фамилия'
          hide-details='auto'
          name='lastname'
          :error-messages='form.getErrors("lastname")'
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
          v-model='form.formData.firstname'
          label='Имя'
          hide-details='auto'
          name='firstname'
          :error-messages='form.getErrors("firstname")'
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
          v-model='form.formData.secondname'
          label='Отчёство'
          hide-details='auto'
          name='secondname'
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
          v-model='form.formData.email'
          label='E-mail'
          hide-details='auto'
          name='email'
          :error-messages='form.getErrors("email")'
          @input='form.validator.validateField'
          required
        />
      </v-row>
    </v-col>

    <v-col class='ml-10'>
      <v-text-field
        class='mb-5'
        v-field
        :type='isShowPassword ? "text" : "password"'
        name='password'
        label='Пароль'
        color='primary'
        density='compact'
        bg-color='white'
        hide-details='auto'
        :append-inner-icon="isShowPassword ? 'mdi-eye' : 'mdi-eye-off'"
        v-model='form.formData.password'
        :error-messages='form.getErrors("password")'
        @input='form.validator.validateField'
        @click:appendInner='changeTypeFieldPassword'
        required
      ></v-text-field>

      <v-text-field
        class='mb-5'
        v-field
        :type='isShowConfirmPassword ? "text" : "password"'
        name='password_confirmation'
        label='Подтвердите пароль'
        color='primary'
        density='compact'
        bg-color='white'
        hide-details='auto'
        :append-inner-icon="isShowConfirmPassword ? 'mdi-eye' : 'mdi-eye-off'"
        v-model='form.formData.password_confirmation'
        :error-messages='form.getErrors("password_confirmation")'
        @input='form.validator.validateField'
        @click:appendInner='changeTypeFieldConfirmPassword'
        required
      ></v-text-field>

      <v-text-field
        class='mb-5'
        v-field
        density='compact'
        color='primary'
        bg-color='white'
        v-model='form.formData.login'
        label='Логин'
        hide-details='auto'
        name='login'
        :error-messages='form.getErrors("login")'
        @input='form.validator.validateField'
        required
      />

      <v-select
        v-field
        v-model='form.formData.role_id'
        bg-color='transparent'
        class='field--select'
        hide-details
        variant='underlined'
        density='compact'
        label='Роль'
        name='role_id'
        no-data-text='Значения отсутствуют'
        color='primary'
        item-title='title'
        item-value='id'
        clearable
        required
        clear-icon='mdi-close'
        :items='getRoles'
        :error-messages='form.getErrors("role_id")'
        @input='form.validator.validateField'
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

<style>
  .field .v-counter,
  .field .v-messages__message {
    padding-top: 5px !important;
  }

  .field .v-messages__message {
    text-align: left;
  }
</style>
