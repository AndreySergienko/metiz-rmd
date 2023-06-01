<script setup>
  import VCustomIcon from '@/modules/customIcon/VCustomIcon'
  import { useAuthService } from 'auth-analytic-vue'
  import { computed, ref } from 'vue'
  import VMenuList from '@/components/list/VMenuList'
  import { useUserStore } from '@/store/user/useUserStore'
  import registry from '@/core/registry'
  import registryScopes from '@/core/scopes/registryScopes'

  const { checkHasScope } = useAuthService()
  const isOpen = ref(false)

  const user = useUserStore()
  const isDisabled = computed(() => {
    return !user.personal?.id
  })

  const values = Object.values(registry)
  values.splice(-3, 0, {
    name: 'Видеотраснляция',
    menu: {
      icon: 'Video'
    },
    route: process.env.VUE_APP_VIDEO_LINK,
    scopes: registryScopes.defaultScope,
    isLink: true,
    size: {
      width: 23,
      height: 20
    }
  })

  const itemsToRender = computed(() => {
    return values.filter((item) => checkHasScope(item.scopes))
  })
</script>

<template>
  <v-menu transition='slide-x-reverse-transition' class='menu'>
    <template #activator='{ props }'>
      <v-btn height='auto' class='ml-4' :disabled='isDisabled'>
        <v-custom-icon
          v-bind='props'
          class='menu-icon'
          icon-name='Menu'
          width='40'
          height='40'
          @click='isOpen = !isOpen'
        />
      </v-btn>
    </template>

    <v-menu-list :items='itemsToRender' />
  </v-menu>
</template>

<style>
  .menu-icon path {
    stroke: var(--color-dark);
  }

  .menu-icon.disabled path {
    stroke: var(--color-gray-4);
  }

  .menu .v-overlay__content {
    position: absolute;
    left: auto !important;
    right: 0;
    top: 125px !important;

    width: 360px;
    height: calc(100% - 125px);

    background: var(--color-medium-blue);
  }

  .menu .v-list svg path {
    stroke: white;
  }

  .menu .v-list-item {
    cursor: pointer;
  }

  .menu .v-list-item:hover path,
  .menu .v-list-item:last-child:hover rect,
  .menu .v-list-item:nth-child(5):hover rect {
    stroke: var(--color-medium-blue);
  }

  .menu .v-list-item:nth-child(5):hover path {
    fill: var(--color-medium-blue);
  }

  .menu__link {
    padding: 30px 20px;

    display: flex;
    align-items: center;

    text-decoration: none;
    color: var(--color-white);
    font-size: 16px;
  }

  .menu__link svg {
    margin-right: 15px;
  }

  .menu .v-list-item,
  .menu .v-list-item p {
    transition-duration: 300ms;
  }

  .menu .v-list-item:hover {
    color: var(--color-medium-blue);
    background-color: var(--color-light);
  }

  .menu .v-list-item:hover p {
    color: var(--color-medium-blue);
  }

  .menu .v-list {
    padding: 0;
  }
</style>
