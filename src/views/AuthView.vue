<template>
  <v-img
    width='345'
    :src="require('@/assets/icons/big-logo.png')"
    alt='ММК Метиз логотип'
    class='mb-10 ma-auto'
  />
  <v-sheet
    max-width='630'
    class='ma-auto pa-15'
    color='white'
  >
    <v-form>
      <v-heading
        class='mb-10'
        level='2'
        position='center'
        text='Авторизация'
      />

      <v-container class='max-width-330 pa-0'>
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
        <v-checkbox
          v-field:checkbox
          class='mb-7'
          hide-details='auto'
          density='compact'
          label='Запомнить на этом устройстве'
          color='mediumBlue'
          v-model='form.formData.remember_me'
        ></v-checkbox>

        <v-row>
          <v-col class='d-flex justify-center'>
            <v-btn
              v-field:btn
              class='ma-auto text-center'
              :disabled='form.isSend.value'
              height='51'
              width='105'
              variant='flat'
              color='mediumBlue'
              @click='form.action.call(form)'
            >
              Вход
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-form>
  </v-sheet>
</template>

<script setup>
  import { onMounted, onUnmounted } from 'vue'
  import { useAuthorizationForms } from '@/forms/authorizationForms'
  import { useIsState } from '@/composables/useIsState'

  const { isState: isShowPassword, toggle: changeTypeFieldPassword } = useIsState()
  const form = useAuthorizationForms()

  function sendFormByKeypress(e) {
    if (e.code === 'Enter') {
      form.action.call(form)
    }
  }

  onMounted(() => window.addEventListener('keypress', sendFormByKeypress))
  onUnmounted(() => window.removeEventListener('keypress', sendFormByKeypress))
</script>
