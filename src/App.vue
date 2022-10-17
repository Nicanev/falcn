<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import TheHeader from "./components/TheHeader.vue";
</script>

<template>
  <TheHeader />
  <div class="wrapper">
    <main class="main">
      <RouterView />
    </main>
  </div>
</template>

<style scoped>
.main {
  margin-top: 6rem;
}
</style>
