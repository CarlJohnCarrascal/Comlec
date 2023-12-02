<script setup>
import { RouterView } from 'vue-router'
</script>

<template>
  <header class="bg-info border-rounded">
    <a v-on:click="$router.push('/home')" class="btn btn-info">Home</a>
    <a v-on:click="$router.push('/voters')" class="btn btn-info">Voters</a>
  </header>

  <main >
    <RouterView/>
  </main>
</template>

<style scoped>

</style>
