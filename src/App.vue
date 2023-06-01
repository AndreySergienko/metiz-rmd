<template>
  <v-app>
    <v-main class='bg'>
      <v-alert-custom />
      <component :is='currentLayout'></component>
    </v-main>
  </v-app>
</template>

<script>
  import { useLayout } from '@/modules/layouts/useLayout'
  import AuthLayout from '@/layouts/AuthLayout'
  import DefaultLayout from '@/layouts/DefaultLayout'
  import VAlertCustom from '@/components/ui/alert/VAlertCustom'
  import { ManualService } from '@/http/services/ManualService'
  import { onBeforeMount, watch } from 'vue'
  import { useUserStore } from '@/store/user/useUserStore'
  import { storeToRefs } from 'pinia'
  import { useManualStore } from '@/store/manual/useManualStore'

  export default {
    setup() {
      const store = useUserStore()
      const manual = useManualStore()
      const { isReady } = storeToRefs(manual)
      const { isAuth } = storeToRefs(store)
      const manualService = new ManualService()

      watch(isAuth, async () => {
        if (isAuth.value && !isReady.value) {
          await manualService.allManualInitial()
        }
      })

      onBeforeMount(() => {
        document.title = 'ММК-Метиз'
      })

      return {
        ...useLayout()
      }
    },
    components: {
      VAlertCustom,
      AuthLayout,
      DefaultLayout
    }
  }
</script>

<style>
  .bg {
    background-color: var(--color-gray-1);
  }
</style>
