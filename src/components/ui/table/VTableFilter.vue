<script setup>
  import { computed, defineEmits, defineProps } from 'vue'
  import VCustomIcon from '@/modules/customIcon/VCustomIcon'
  import VRangeCalendar from '@/components/ui/field/VRangeCalendar'
  import VButtonPrimary from '@/components/ui/button/VButtonPrimary'
  import { useFilterField } from '@/composables/useFilterField'
  import { useComputedManual } from '@/composables/useComputedManual'

  defineEmits(['filter'])

  defineProps({
    isShowChecked: {
      type: Boolean,
      required: false,
      default: false
    },
    isShowReportsButton: {
      type: Boolean,
      required: false,
      default: false
    }
  })

  const {
    clearFilter,
    modelIsChecked,
    modelTypeErrors,
    modelCameras,
    modelRangeDate,
    modelReportsTypes
  } = useFilterField()

  const {
    getCameras,
    getNameErrors,
    getReports
  } = useComputedManual()

  const getCustomizeReports = computed(() => {
    return getReports.value.map(customizeReportsList)
  })

  function customizeReportsList(item) {
    switch (item.id) {
      case 1:
        item.keyId = null
        break
      case 2:
        item.keyId = 1
        break
      case 3:
        item.keyId = 0
        break
    }
    return item
  }
</script>

<template>
  <v-container
    fluid
    class='d-flex align-center gap-40 pa-0'
  >
    <v-custom-icon icon-name='Options' width='33' height='32' class='mr-5' />
    <v-col
      v-if='!isShowReportsButton'
      cols='2'
    >
      <v-select
        v-model='modelCameras'
        bg-color='bg'
        class='field--select'
        hide-details
        variant='underlined'
        density='compact'
        label='Номер камеры'
        no-data-text='Значения отсутствуют'
        color='primary'
        item-title='id'
        item-value='id'
        clearable
        clear-icon='mdi-close'
        :items='getCameras'
      />
    </v-col>
    <v-col
      v-if='!isShowReportsButton'
      cols='2'
    >
      <v-select
        v-model='modelTypeErrors'
        bg-color='bg'
        class='field--select'
        hide-details
        variant='underlined'
        density='compact'
        label='Нарушения'
        no-data-text='Значения отсутствуют'
        color='primary'
        item-title='title'
        item-value='value'
        clearable
        clear-icon='mdi-close'
        :items='getNameErrors'
      />
    </v-col>
    <v-col
      v-if='isShowReportsButton'
      cols='2'
    >
      <v-select
        v-model='modelReportsTypes'
        bg-color='bg'
        class='field--select'
        density='compact'
        hide-details
        variant='underlined'
        label='Отчёт по камерам'
        no-data-text='Значения отсутствуют'
        color='primary'
        :items='getCustomizeReports'
        item-value='keyId'
      />
    </v-col>
    <v-col
      v-if='isShowChecked && !isShowReportsButton'
      class='col-checkbox'
    >
      <v-checkbox
        hide-details
        v-model='modelIsChecked'
        label='Обработано'
        color='mediumBlue'
      />
    </v-col>

    <v-col cols='4'>
      <v-range-calendar v-model='modelRangeDate' />
    </v-col>

    <v-col
      class='d-flex justify-end ml-auto'
      cols='1'
      v-if='!isShowReportsButton'
    >
      <v-button-primary
        @click='clearFilter'
      >
        Сбросить
      </v-button-primary>
    </v-col>

    <v-col
      v-if='isShowReportsButton'
      class='d-flex justify-end ml-auto'
      cols='1'
    >
      <v-button-primary>
        Сформировать
      </v-button-primary>
    </v-col>
  </v-container>
</template>

<style scoped>
  .width-250 {
    width: 250px;
  }

  .col-checkbox {
    max-width: 180px;
  }

  .gap-40 {
    gap: 40px 0;
  }
</style>
