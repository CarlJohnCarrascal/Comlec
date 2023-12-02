<script setup>
import { RouterView } from 'vue-router'
</script>

<template>
  <header>
    <a v-on:click="$router.push('/home')" class="btn">Home</a>
    <a v-on:click="$router.push('/list')" class="btn">List</a>
  </header>

  <main>
    <RouterView/>
  </main>
</template>

<style scoped>

</style>
