<template>
  <section class="settings">
    <div class="settings__container">
      <label class="settings__form-control">
        <input
          type="checkbox"
          name="checkbox"
          @change="realIndicatorCheck()"
          v-model="realIndicatorChecked"
        />
        Учитывать реальные показатели локальной сети
      </label>
    </div>
  </section>
</template>

<style lang="scss">
.settings {
  &__form-control {
    font-size: 2rem;
    color: var(--main-red-color);
    display: grid;
    grid-template-columns: 1em auto;
    gap: 1em;
    margin-bottom: 2rem;
  }
  input[type="checkbox"] {
    appearance: none;
    font: inherit;
    color: currentColor;
    display: grid;
    place-content: center;
    height: 3rem;
    width: 3rem;
    margin: 0;
    background-color: #4f1e24b2;
    transform: translateY(-0.075em);
    cursor: pointer;
  }
  input[type="checkbox"]::before {
    content: "";
    position: absolute;
    left: 1rem;
    top: 0.3rem;
    width: 1.2rem;
    height: 1.9rem;
    opacity: 0;
    transform: rotate(45deg);
    border-bottom: 0.4rem solid #ff7066;
    border-right: 0.4rem solid #ff7066;
  }
  input[type="checkbox"]:checked::before {
    opacity: 100;
  }
}
</style>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  data() {
    return {
      realIndicatorChecked: false,
    };
  },
  mounted() {
    const realIndicatorLocalStorage = localStorage.getItem("realIndicator");
    if (realIndicatorLocalStorage) {
      this.realIndicatorChecked = true;
    } else {
      this.realIndicatorChecked = false;
    }
  },
  methods: {
    realIndicatorCheck() {
      if (this.realIndicatorChecked) {
        localStorage.setItem("realIndicator", "true");
      } else {
        localStorage.removeItem("realIndicator");
      }
    },
  },
});
</script>
