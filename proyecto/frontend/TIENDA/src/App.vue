<script setup>
import { RouterLink, RouterView } from 'vue-router'
import MenuView from './views/MenuView.vue'
</script>

<template>
  <header>
    <h1>
    <MenuView/>
    </h1>
  </header>

  <RouterView />
</template>

<style scoped>

</style>
