<script setup>
  import VButtonsState from '@/components/ui/button/VButtonsState'
  import { computed, defineProps } from 'vue'
  import VCustomIcon from '@/modules/customIcon/VCustomIcon'
  import { useAuthService } from 'auth-analytic-vue'
  import { accessScopes } from '@/modules/auth/access.scopes'
  import { useChangeStateEvent } from '@/composables/useChangeStateEvent'

  const { checkHasScope } = useAuthService()

  const props = defineProps({
    item: {
      type: Object,
      required: true
    },
    isModeCard: {
      type: Boolean,
      required: false,
      default: false
    },
    isShowDescription: {
      type: Boolean,
      required: false,
      default: false
    }
  })

  const getItem = computed(() => props.item)
  const state = computed(() => props.item)
  const { send, isDisabled } = useChangeStateEvent(props.item)
  const selectState = computed({
    get() {
      return state.value.approved
    },
    async set(val) {
      const method = val === 0 ? 'rejectItem' : 'acceptItem'
      await send(method, getItem.value.id)
    }
  })
  const stateList = [{
    title: 'Подтверждено',
    value: 1
  },
    {
      title: 'Отклонено',
      value: 0
    }
  ]

  const isProcessed = computed(() => state.value.processed)
  const isApproved = computed(() => state.value.approved)
  const getPrependIcon = computed(() => isApproved.value === 1 ? 'mdi-check' : 'mdi-close')
  const getClassSelect = computed(() => isApproved.value === 1 ? 'accept' : 'cancel')
  const getDescription = computed(() => isApproved.value === 1 ? 'Подтверждено' : 'Отклонено')
  const getColor = computed(() => isApproved.value === 1 ? '#2aab6d' : '#f06d2f')
  const getIcon = computed(() => isApproved.value === 1 ? 'Success' : 'Cancel')
</script>

<template>
  <div>
    <div
      v-if='isProcessed'
      :style='{color: getColor}'
      class='d-flex align-center'
    >
      <div v-if='checkHasScope([accessScopes.ACCEPT_CHANGE, accessScopes.REJECT_CHANGE]) && !isShowDescription'>
        <v-select
          v-if='!isModeCard'
          v-model='selectState'
          bg-color='white'
          variant='underlined'
          density='comfortable'
          no-data-text='Нет возможных статусов'
          item-title='title'
          hide-details
          item-value='value'
          :disabled='isDisabled'
          :items='stateList'
          :prepend-inner-icon='getPrependIcon'
          :class='["select-cell", getClassSelect]'
        />
        <v-buttons-state
          v-else
          :is-mode-card='isModeCard'
          :send='send'
          :is-disabled='isDisabled'
          :id='getItem.id'
          :item='getItem'
        />
      </div>
      <div v-else>
        <v-custom-icon :icon-name='getIcon' width='17' height='17' class='mr-1 description-icon' />
        {{ getDescription }}
      </div>
    </div>

    <v-buttons-state
      v-else
      :is-mode-card='isModeCard'
      :send='send'
      :is-disabled='isDisabled'
      :id='getItem.id'
      :item='getItem'
    />
  </div>
</template>

<style>
  .description-icon {
    position: relative;
    top: 3px;
  }

  .select-cell {
    max-width: 250px;
    min-width: 170px;
  }

  .select-cell .v-field__prepend-inner {
    padding-top: 12px;
  }

  .select-cell .v-field__input,
  .select-cell .v-field__append-inner {
    padding-top: 10px;
  }

  .select-cell .v-field__prepend-inner i {
    font-size: 18px;
  }

  .select-cell .v-label {
    color: var(--color-dark);
  }

  .select-cell.accept i,
  .select-cell.accept span {
    color: var(--color-green) !important;
  }

  .select-cell.cancel i,
  .select-cell.cancel span {
    color: var(--color-orange) !important;
  }
</style>
