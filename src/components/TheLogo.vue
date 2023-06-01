<template>
  <router-link :to="{ path: '/' }" class='height-40'>
    <img :src="require('@/assets/icons/logo.png')" alt='logo' />
  </router-link>
</template>

<style scoped>
  .height-40 {
    max-height: 40px;
  }
</style>
