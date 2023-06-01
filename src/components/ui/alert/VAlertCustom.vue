<script setup>
  import VCustomIcon from '@/modules/customIcon/VCustomIcon'
  import TextCorrecter from '@/extension/TextCorrecter'
  import { useAlertStore } from '@/store/alert/useAlertStore'
  import { storeToRefs } from 'pinia'
  import { computed } from 'vue'

  const messages = {
    'warn': 'Внимание!',
    'error': 'Сообщение об ошибке',
    'success': 'Одобрение',
    'info': 'Информация'
  }

  const store = useAlertStore()
  const { isShow, valuesAlert } = storeToRefs(store)
  const getTitle = computed(() => messages[valuesAlert.value.type])
</script>


<template>
  <transition name='slide-fade'>
    <v-alert
      v-if='isShow'
      :data-type='valuesAlert.type'
      @click='store.closeAlert'
      class='alert border-radius-0'
      color='white'
    >
      <template #default>
        <span :class='["alert-signal", valuesAlert.type]'></span>
      </template>
      <template #title>
        <div class='d-flex align-center mb-3 alert__title'>
          <v-custom-icon
            :icon-name='TextCorrecter.capitalize(valuesAlert.type) + "Alert"'
            width='36'
            height='36'
            class='mr-2'
          />
          {{ getTitle }}
        </div>
      </template>

      <template #text>
        <div class='alert__text'>{{ valuesAlert.text }}</div>
      </template>
    </v-alert>
  </transition>
</template>

<style scoped>
  .alert {
    padding: 25px 60px 25px 30px;

    position: fixed;
    z-index: 9999;
    right: 0;
    top: 120px;

    min-width: 565px;
    border: 1px solid var(--color-gray-3);
    box-shadow: none;
  }

  .alert-signal {
    position: absolute;
    left: 0;
    top: 0;

    height: 100%;
    width: 8px;
  }

  .alert__title {
    padding: 0;
    font-weight: 600;
    font-size: 20px;

    display: flex;
    align-items: center;
  }

  [data-type="success"] .alert-signal {
    background-color: var(--color-green);
  }

  [data-type="error"] .alert-signal {
    background-color: var(--color-red);
  }

  [data-type="warn"] .alert-signal {
    background-color: var(--color-orange);
  }

  [data-type="info"] .alert-signal {
    background-color: var(--color-medium-blue);
  }

  [data-type="success"] .alert__title {
    color: var(--color-green);
  }

  [data-type="error"] .alert__title {
    color: var(--color-red);
  }

  [data-type="warn"] .alert__title {
    color: var(--color-orange);
  }

  [data-type="info"] .alert__title {
    color: var(--color-medium-blue);
  }

  .alert__text {
    color: var(--color-dark);
  }
</style>
