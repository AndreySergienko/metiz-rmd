<script setup>
  import VCustomIcon from '@/modules/customIcon/VCustomIcon'
  import { useRoute, useRouter } from 'vue-router'
  import { routesNameList } from '@/router/routesNameList'
  import { useIsState } from '@/composables/useIsState'

  const router = useRouter()
  const route = useRoute()
  const items = [
    {
      iconName: 'User',
      value: 'Пользователи',
      routeValue: routesNameList.USERS,
      classIcon: ['user']
    },
    {
      iconName: 'Camera',
      value: 'Камеры',
      routeValue: routesNameList.CAMERAS,
      classIcon: ['camera']
    },
    {
      iconName: 'Zona',
      value: 'Зоны',
      routeValue: routesNameList.ZONES,
      classIcon: ['zone']
    }
  ]

  const { isState, toggle } = useIsState()

  async function goRoute(item) {
    toggle()
    await router.push({ name: item.routeValue })
    toggle()
  }
</script>

<template>
  <div class='d-flex align-center gap-40'>
    <button
      v-for='item in items'
      :key='item.value'
      :class='[
        "d-flex align-center btn--journal",
        item.routeValue === route.name && "active",
        item.classIcon
       ]'
      :disabled='isState'
      @click='goRoute(item)'
    >
      <v-custom-icon
        class='mr-3'
        :icon-name='item.iconName'
        width='32' height='31'
      />
      {{ item.value }}
    </button>
  </div>
</template>

<style>
  .btn--journal.active {
    color: var(--color-blue);
  }

  .btn--journal.active.zone circle {
    stroke: var(--color-blue);
  }

  .btn--journal.active.camera path {
    stroke: var(--color-blue);
  }

  .btn--journal.active.camera circle {
    fill: var(--color-blue);
  }

  .btn--journal:not(.active).user path,
  .btn--journal:not(.active).user circle {
    stroke: #95A4C0;
  }
</style>

<style scoped>
  .gap-40 {
    gap: 40px;
  }
</style>
