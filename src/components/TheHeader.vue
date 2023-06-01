<script setup>
  import TheLogo from '@/components/TheLogo'
  import TheMenu from '@/components/TheMenu'
  import ThePersonal from '@/components/ThePersonal'
</script>

<template>
  <v-toolbar color='white' class='px-7 pb-7 pt-6 header' height='auto'>
    <div class='d-flex align-end'>
      <the-logo />
      <div class='line'></div>
      <v-toolbar-title class='header__title' tag='h2'>
        Система обнаружения персонала в опасных зонах СПП корпус 1 (версия: 1.1.1)
      </v-toolbar-title>
    </div>

    <div class='ml-auto d-flex'>
      <the-personal />
      <the-menu />
    </div>
  </v-toolbar>
</template>

<style>
  .header {
    border-radius: 7px;
    box-shadow: 0 4px 30px 0 rgba(28, 73, 142, .10);
  }

  .header__title {
    width: 280px;
  }

  .header__title > div {
    white-space: normal;

    color: var(--color-dark);
    font-style: normal;
    font-size: 12px;
    line-height: 14px;
    text-transform: uppercase;
  }

  .line {
    margin: 0 20px;
    width: 1px;
    height: 40px;
    background: var(--color-light-blue);
  }
</style>
