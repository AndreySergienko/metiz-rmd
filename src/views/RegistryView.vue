<template>
  <the-layout-camera v-if='isShowLayoutCamera' />

  <h2 class='mt-10'>{{ currentRegistry.name }}</h2>

  <v-table-filter
    v-if='isShowFilter'
    :isShowChecked='isShowChecked'
    :isShowReportsButton='isShowReportsButton'
    class='mb-5'
  />

  <div
    class='d-flex justify-end align-center mb-10 mt-10'
    v-if='isShowSearch || isShowComponent'
  >
    <v-journal-bar-list />

    <v-text-field
      v-if='isShowSearch'
      v-model='search'
      bg-color='white'
      color='primary'
      placeholder='Поиск'
      class='search search-margin'
      append-inner-icon='mdi-magnify'
      autofocus
      hide-details
      focused
    ></v-text-field>
    <router-view v-if='isShowComponent' />
  </div>

  <v-table-custom
    :page='page'
    :per-page='perPage'
    :currentRegistry='currentRegistry'
    :updateSort='updateSort'
    :updatePage='updatePage'
    :updatePerPage='updatePerPage'
  />
  <VButtonPrimary
    v-if='isShowReportAllButton'
    class='mt-10 btn-fill'
    @click='eventService.getReport(isShowReportsButton)'
  >
    Выгрузить отчёт
  </VButtonPrimary>
</template>

<script setup>
  import TheLayoutCamera from '@/components/camera/TheLayoutCamera'
  import VTableCustom from '@/components/ui/table/VTableCustom'
  import { computed, defineProps } from 'vue'
  import VTableFilter from '@/components/ui/table/VTableFilter'
  import { useRegistry } from '@/composables/useRegistry'
  import { useFetchEvent } from '@/composables/useFetchEvent'
  import VButtonPrimary from '@/components/ui/button/VButtonPrimary'
  import { EventService } from '@/http/services/EventService'
  import VJournalBarList from '@/components/list/VJournalBarList'

  const props = defineProps({
    registry: {
      type: Object,
      required: true
    }
  })

  const eventService = new EventService()
  const currentRegistry = computed(() => props.registry)
  const {
    isShowReportAllButton,
    isShowFilter,
    isShowChecked,
    isShowReportsButton,
    isShowLayoutCamera,
    isShowSearch,
    isShowComponent
  } = useRegistry(currentRegistry)

  const {
    page,
    search,
    perPage,
    updatePerPage,
    updatePage,
    updateSort
  } = useFetchEvent(currentRegistry)
</script>
