<script setup>
  import { defineProps } from 'vue'
  import VCustomIcon from '@/modules/customIcon/VCustomIcon'

  defineProps({
    type: {
      type: String,
      required: false
    },
    size: {
      type: Object,
      required: false
    },
    isDisabled: {
      type: Boolean,
      required: false,
      default: false
    },
    isLong: {
      type: Boolean,
      required: false,
      default: false
    }
  })
</script>

<template>
  <button
    :class="['card__button', type, isLong && 'card__button--long']"
    :disabled='isDisabled'
  >
    <v-custom-icon
      v-if='!isDisabled'
      width='17'
      height='17'
      :icon-name='type'
      class='mr-3'
    />
    {{ type === 'Success' ? 'Принять' : 'Отклонить' }}
    <slot />
  </button>
</template>

<style>
  .card__button {
    width: 150px;
    height: 50px;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  .card__button--long {
    width: 250px;
  }

  .card__button.Cancel {
    border: 1px solid var(--color-orange);
    color: var(--color-orange);
  }

  .card__button.Success {
    border: 1px solid var(--color-green);
    color: var(--color-green);
  }

  .card__button:disabled {
    border: 1px solid #939393;
    color: #939393;
    background-color: white;
  }

  .card__button:hover {
    background-color: var(--color-gray-1);
  }
</style>
