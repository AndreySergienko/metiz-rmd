<template>
  <v-container fluid class='container'>
    <the-header class='mb-10' />
    <router-view></router-view>
  </v-container>
</template>

<script setup>
  import TheHeader from '@/components/TheHeader'
</script>
