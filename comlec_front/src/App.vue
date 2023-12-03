<script setup>
import { RouterView } from 'vue-router'
</script>

<template>
  <header class="d-flex justify-content-between border-rounded p-1 py-3">
    <a v-on:click="$router.push('/home')" class="btn ">Menu</a>
    <span>
      <a v-on:click="$router.push('/home')" class="btn">Home</a>
      <a v-on:click="$router.push('/voters')" class="btn">Voters</a>
    </span>
  </header>

  <main>
    <RouterView/>
  </main>
</template>

<style scoped>
header {
  background-color: rgb(255, 255, 255);
}
main {

}

</style>
