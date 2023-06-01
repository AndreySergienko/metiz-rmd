<script setup>
  import { computed, defineProps } from 'vue'
  import { useIsState } from '@/composables/useIsState'

  defineProps({
    item: {
      type: String,
      required: true
    }
  })

  const { isState, toggle } = useIsState()
  const getClass = computed(() => isState.value ? 'open' : '')
  const getIcon = computed(() => isState.value ? 'mdi-eye' : 'mdi-eye-off')
</script>

<template>
  <p
    :class='["text-align-left password-cell",
      isState && "active"
    ]'
  >
    <span>{{ item }}</span>
    <v-icon
      :class='getClass'
      :icon='getIcon'
      @click='toggle'
    ></v-icon>
  </p>
</template>

<style scoped>
  .password-cell {
    display: flex;
    align-items: flex-start;
  }

  .password-cell span {
    display: none;
  }

  .password-cell.active span {
    display: inline;
  }

  .password-cell::before {
    content: '*********';
    color: #95A4C0;
  }

  .password-cell.active::before {
    display: none;
  }

  .password-cell i {
    margin-left: 10px;

    font-size: 20px;
    color: #95A4C0;

    position: relative;
    bottom: 1px;
  }

  .password-cell i.open {
    color: var(--color-light-blue);
  }
</style>
