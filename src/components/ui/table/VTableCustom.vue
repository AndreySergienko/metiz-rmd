<script setup>
  import { defineProps } from 'vue'
  import { useTableEvent } from '@/composables/useTableEvent'
  import VCustomIcon from '@/modules/customIcon/VCustomIcon'
  import VDateCell from '@/components/ui/table/cell/VDateCell'
  import VMenuStateEvent from '@/components/VMenuStateEvent'
  import VModalCustom from '@/components/ui/modal/VModalCustom'
  import VBeforeAfterCell from '@/components/ui/table/cell/VBeforeAfterCell'
  import VPasswordCell from '@/components/ui/table/cell/VPasswordCell'
  import VActionsCell from '@/components/ui/table/cell/VActionsCell'

  const props = defineProps({
    page: {
      type: Number,
      required: true
    },
    perPage: {
      type: Number,
      required: true
    },
    currentRegistry: {
      type: Object,
      required: true
    },
    updateSort: {
      type: Function,
      required: true
    },
    updatePage: {
      type: Function,
      required: true
    },
    updatePerPage: {
      type: Function,
      required: true
    }
  })
  const {
    items,
    totalEvents,
    headers,
    checkIsManual,
    pushRoute,
    getItem
  } = useTableEvent(props.currentRegistry)

  const checkIsSelect = (e) => e.target.closest('.v-select')
  const checkIsButton = (e) => e.target.closest('button') || e.target.classList.contains('card__button')

  const toRow = (e, { item }) => {
    if (checkIsSelect(e) || checkIsButton(e) || e.target.children.length || checkIsManual.value) return
    pushRoute(item.raw.id)
  }
</script>

<template>

  <v-data-table-server
    :headers='headers'
    :items-length='totalEvents'
    :items='items'
    :items-per-page='perPage'
    no-data-text='Элементов нет'
    class='elevation-1'
    item-title='name'
    item-value='name'
    @click:row='toRow'
    @update:page='updatePage'
    @update:sortBy='updateSort'
    @update:itemsPerPage='updatePerPage'
  >
    <template #item.start_time='{ item }'>
      <v-date-cell :date='getItem(item, "start_time")' />
    </template>

    <template #item.end_time='{ item }'>
      <v-date-cell :date='getItem(item, "end_time")' />
    </template>

    <template #item.probability='{ item }'>
      {{ getItem(item, 'probability') }}%
    </template>

    <template #item.processed='{ item }'>
      {{ getItem(item, 'processed') ? 'Да' : 'Нет' }}
    </template>

    <template #item.approved='{ item }'>
      <v-menu-state-event :item='item.value'></v-menu-state-event>
    </template>

    <template #item.photo_url='{ item }'>
      <v-modal-custom>
        <template #activate='{ toggleOpen }'>
          <button class='d-flex align-center link-cell' @click='toggleOpen' data-stop-navigation>
            <v-custom-icon height='18' width='21' icon-name='Photo' class='mr-2 icon-size' />
            Фото на событие
          </button>
        </template>
        <template #content>
          <img :src='getItem(item ,"photo_url")' alt='photo' />
        </template>
      </v-modal-custom>
    </template>

    <template #item.has_video='{ item }'>
      <v-modal-custom>
        <template #activate='{ toggleOpen }'>
          <button
            :class='["d-flex align-center link-cell", !getItem(item, "has_video") && "disabled-item"]'
            @click='toggleOpen' :disabled='!getItem(item ,"has_video")'
          >
            <v-custom-icon height='18' width='21' icon-name='VideoPlay' class='mr-2 icon-size' />
            Видео-сэмпл
          </button>
        </template>
        <template #content>
          <video controls>
            <source :src='item.value.video_url' />
          </video>
        </template>
      </v-modal-custom>
    </template>

    <template #item.after='{ item }'>
      <v-before-after-cell :status='getItem(item, "after")' />
    </template>

    <template #item.before='{ item }'>
      <v-before-after-cell :status='getItem(item, "before")' />
    </template>

    <template #item.created_at='{ item }'>
      <v-date-cell :date='getItem(item, "created_at")' />
    </template>

    <template #item.password='{ item }'>
      <v-password-cell :item='getItem(item, "password")'></v-password-cell>
    </template>

    <template #item.roles='{ item }'>
      {{ item.columns?.roles?.[0]?.name }}
    </template>

    <template #item.subject_id='{ item }'>
      ID: {{ getItem(item, 'subject_id') }}
    </template>

    <template #item.actions='{ item }'>
      <v-actions-cell :item='item' />
    </template>
  </v-data-table-server>
</template>

<style>
  .v-table__wrapper::-webkit-scrollbar {
    height: 9px;
  }

  .v-table__wrapper::-webkit-scrollbar-thumb {
    background-color: var(--color-light);
  }

  .v-data-table__td {
    padding: 16px !important;
  }

  .link-cell {
    transition-duration: 300ms;
  }

  .link-cell:hover {
    color: var(--color-light-blue);
  }

  /* hover mousemove in tr */
  .v-data-table__td {
    cursor: pointer;
    transition-duration: 300ms;
  }

  .v-data-table__tbody .v-data-table__td {
    transition-duration: 300ms;
  }

  .v-data-table__tbody tr:hover .v-data-table__td {
    cursor: pointer;
    background-color: var(--color-gray-2);
  }

  .icon-size {
    min-width: 20px;
    min-height: 17px;
  }

  /* disable video  */
  .disabled-item span {
    cursor: no-drop;
  }

  .disabled-item,
  .disabled-item:hover {
    color: var(--color-gray-4) !important;
  }

  .disabled-item rect {
    stroke: var(--color-gray-4);
  }

  .disabled-item path {
    fill: var(--color-gray-4);
  }

</style>

