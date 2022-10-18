<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import TheHeader from "./components/TheHeader.vue";
</script>

<template>
  <TheHeader />
  <div class="wrapper">
    <main class="main">
      <transition :name="transitionName">
        <RouterView />
      </transition>
    </main>
  </div>
</template>

<style scoped>
.main {
  margin-top: 6rem;
}
</style>

<script lang="ts">
export default {
  data() {
    return {
      firstStart: true,
      transitionName: "",
    };
  },
  watch: {
    $route(to, from) {
      if (this.firstStart) {
        this.firstStart = false;
      } else {
        const routeDeep = ["/", "/analysis", "/settings"];
        const toDepth = routeDeep.indexOf(to.path);
        const fromDepth = routeDeep.indexOf(from.path);
        this.transitionName =
          toDepth > fromDepth ? "slide-left" : "slide-right";
      }
    },
  },
};
</script>
