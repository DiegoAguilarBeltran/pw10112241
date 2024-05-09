<script setup>
import { RouterView } from 'vue-router'
import MenuView from './views/MenuView.vue'
import ClientesView from './views/ClientesView.vue'
</script>

<template>
  <header>
    <MenuView/>
  </header>

  <RouterView />
</template>

<style scoped>

</style>
