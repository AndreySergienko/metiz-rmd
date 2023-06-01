<template>
  <div class='switch'>
    <div>
      <input type='checkbox' id='toggle' :checked='customSwitch' v-model='customSwitch' />
      <label for='toggle'></label>
    </div>

    <p>{{ label }}</p>
  </div>
</template>

<script setup>
  import { computed, defineEmits, defineProps } from 'vue'

  const emit = defineEmits(['update:modelValue'])

  const props = defineProps({
    label: {
      type: String,
      required: false
    },
    modelValue: {
      type: [Boolean, Number]
    }
  })

  const customSwitch = computed({
    get() {
      return !!props.modelValue
    },
    set(val) {
      let current
      if (typeof props.modelValue === 'number') {
        current = props.modelValue ? 0 : 1
      } else {
        current = !val
      }
      emit('update:modelValue', current)
    }
  })
</script>

<style scoped>
  .switch {
    display: flex;
    align-items: center;
  }

  .switch p {
    padding-top: 25px;
    padding-left: 15px;
    color: var(--color-dark);

    font-size: var(--font-size-primary);
    line-height: 19px;
  }

  input[type="checkbox"] {
    visibility: hidden;
  }

  input[type="checkbox"]:checked + label::before {
    transform: translateX(26px);
    background-color: var(--color-light-blue);
  }

  label {
    display: flex;
    width: 50px;
    height: 24px;
    border: 1px solid var(--color-light-blue);
    border-radius: 99em;
    position: relative;
    transition: transform .75s ease-in-out;
    transform-origin: 50% 50%;
    cursor: pointer;
  }

  label:before {
    transition: transform .75s ease;
    content: "";
    display: block;
    position: absolute;
    width: 22px;
    height: 22px;
    background-color: transparent;
    border: 1px solid var(--color-light-blue);
    border-radius: 50%;
    top: 0;
    left: 0;
  }
</style>
