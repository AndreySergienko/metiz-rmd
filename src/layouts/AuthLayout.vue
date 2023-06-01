<script setup>
  import TheHeader from '@/components/TheHeader'
</script>

<template>
  <v-container fluid class='container'>
    <the-header class='mb-15' />
    <router-view />
  </v-container>
</template>
