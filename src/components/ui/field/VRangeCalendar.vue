<template>
  <date-picker
    v-model='range'
    mode='dateTime'
    :masks='masks'
    is-range
    is24hr
    locale='ru'
  >
    <template v-slot='{ inputValue, inputEvents, isDragging }'>
      <div class='range'>
        <div class='relative flex-grow field-calendar'>
          <span class='position-absolute p-5 color-dark'>От</span>
          <input
            class='flex-grow pl-8 pr-2 py-1 bg-gray-100 border-b-md w-170 color-dark'
            :class="isDragging ? 'text-gray-600' : 'text-gray-900'"
            :value='inputValue.start'
            v-on='inputEvents.start'
          />
          <v-custom-icon icon-name='Calendar' width='17' height='19' />
        </div>
        <div class='relative flex-grow field-calendar'>
          <span class='position-absolute p-5 color-dark'>До</span>
          <input
            class='flex-grow pl-8 pr-2 py-1 bg-gray-100 border-b-md w-170 color-dark'
            :class="isDragging ? 'text-gray-600' : 'text-gray-900'"
            :value='inputValue.end'
            v-on='inputEvents.end'
          />
          <v-custom-icon icon-name='Calendar' width='17' height='19' />
        </div>
      </div>
    </template>
  </date-picker>
</template>

<script setup>
  import { DatePicker } from 'v-calendar'
  import { defineEmits, defineProps, computed } from 'vue'
  import VCustomIcon from '@/modules/customIcon/VCustomIcon'

  const emit = defineEmits(['update:modelValue'])
  const props = defineProps({
    modelValue: Object
  })

  const range = computed({
    get() {
      return props.modelValue
    },

    set(val) {
      if (!val) return
      Object.keys(val).forEach(key => val[key] = val[key].toISOString())
      emit('update:modelValue', val)
    }
  })

  const masks = {
    input: 'YYYY-MM-DD'
  }
</script>

<style>
  .range {
    display: flex;
  }

  .range input {
    outline: none;
    border-block-end-width: 1px !important;
    border-color: var(--color-gray-4) !important;
  }

  .range div:last-child {
    margin-left: 10px;
  }

  .color-dark {
    color: var(--color-dark);

  }

  .w-170 {
    width: 185px;
  }

  .p-5 {
    padding: 5px;

    pointer-events: none;
  }

  .field-calendar {
    position: relative;
  }

  .field-calendar svg {
    position: absolute;

    right: 0;
    top: 50%;
    transform: translateY(-50%);
    user-select: none;
    user-focus: none;
    pointer-events: none;
  }
</style>
