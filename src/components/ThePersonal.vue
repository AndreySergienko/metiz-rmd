<script setup>
  import VCustomIcon from '@/modules/customIcon/VCustomIcon'
  import { useUserStore } from '@/store/user/useUserStore'
  import { AuthService } from '@/http/services/AuthService'
  import { storeToRefs } from 'pinia'
  import VAvatarCustom from '@/components/VAvatarCustom'

  const authService = new AuthService()
  const store = useUserStore()
  const { personal, isAuth } = storeToRefs(store)
</script>

<template>
  <v-menu
    v-if='isAuth'
    transition='slide-x-transition'
  >
    <template v-slot:activator='{ props }'>
      <div class='d-flex align-center pointer' v-bind='props'>
        <v-avatar-custom :user='personal' />

        <v-custom-icon width='12' height='12' icon-name='Arrow' />
      </div>
    </template>

    <v-list class='mt-10 light-box-shadow py-1'>
      <div class='triangle'></div>
      <v-list-item class='px-0'>
        <template #default>
          <button class='d-flex align-center personal-button' @click='authService.logout'>
            <v-custom-icon icon-name='OutDoor' width='26' height='25' />
            <span class='ml-2'>Выйти из аккаунта</span>
          </button>
        </template>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<style>
  /* Effect hover menu item */
  .personal-button {
    padding: 20px;
    transition: background-color 300ms linear;
  }

  .personal-button path {
    transition-duration: 300ms;
  }

  .personal-button:hover {
    background-color: var(--color-gray-2);
  }

  .personal-button span {
    color: var(--color-dark);
  }

  .personal-button:hover path:first-child {
    stroke: var(--color-light-blue);
  }

  .personal-button:hover path:last-child {
    fill: var(--color-light-blue);
  }
</style>
