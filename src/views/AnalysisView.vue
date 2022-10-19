<template>
  <div class="analysis">
    <div class="analysis__container">
      <button class="analysis__btn btn" @click="loading()">
        <span class="btn__content"></span>
        <span class="btn__text">АНАЛИЗ</span>
        <span class="btn__glitch"></span>
        <span class="btn__loading" :style="{ width: loadingNum + '%' }"></span>
      </button>
    </div>
  </div>
</template>

<style lang="scss">
.analysis {
  &__btn {
    overflow: hidden;
    width: 20rem;
    height: 4.2rem;
    background-color: var(--main-red-color);
    color: var(--main-blue-color);
    text-indent: 0.8rem;
    position: relative;
    text-transform: uppercase;
    z-index: 1;
    clip-path: polygon(92% 0, 100% 25%, 100% 100%, 8% 100%, 0% 75%, 0 0);
  }
}
.btn {
  &__loading {
    position: absolute;
    top: 0.2rem;
    left: 0.2rem;
    right: 0.2rem;
    bottom: 0.2rem;
    z-index: 6;
    background-color: #c53b37;
    clip-path: polygon(92% 0, 100% 25%, 100% 100%, 4% 100%, 0% 75%, 0 0);
  }
  &__content {
    display: flex;
    align-items: center;
    position: absolute;
    top: 0.2rem;
    left: 0.2rem;
    right: 0.2rem;
    bottom: 0.2rem;

    background-color: #311116;
    z-index: 5;
    clip-path: polygon(92% 0, 100% 25%, 100% 100%, 8% 100%, 0% 75%, 0 0);
  }
  &__text {
    margin-left: 0.9rem;
    font-weight: bold;
    font-size: 1.2rem;
    z-index: 7;
  }

  &__content:hover {
    background-color: #311116d3;
    transition: 0.2s;
  }
  &__glitch {
    display: none;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 10;
    background-color: #311116;
    filter: drop-shadow(-0.2rem 0.3rem #67e3f3)
      drop-shadow(-0.1rem -0.3rem #02d8f3) drop-shadow(0.2rem 0.1rem #02d8f3);
  }
}
.btn:hover .btn__glitch,
.btn:hover .btn__content::after {
  display: block;
  animation: glitch 1s linear 0s infinite;
}
.btn__text:hover .btn__content {
  background-color: #311116d3;
  transition: 0.2s;
}
</style>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      loadingNum: 0,
    };
  },
  methods: {
    loading() {
      let loadingInterval: number = setInterval(() => {
        if (this.loadingNum < 100) {
          this.loadingNum += 1;
        }
      }, 60);
    },
  },
});
</script>
