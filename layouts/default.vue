<template>
  <div ref="app" class="app">
    <div class="app__layer app__layer--planet-3" />
    <div class="app__layer app__layer--planet-2" />
    <div class="app__layer app__layer--planet-1" />
    <div class="app__foreground">
      <app-header class="app__header" />
      <main class="app__main">
        <nuxt />
      </main>
      <app-footer class="app__footer" />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

import AppFooter from '@/components/AppFooter.vue'
import AppHeader from '@/components/AppHeader.vue'

export default {
  components: {
    AppFooter,
    AppHeader,
  },
  data() {
    return {
      backgroundHeight: {
        height: 0,
      },
    }
  },
  computed: mapState(['appNavOpen']),
  watch: {
    appNavOpen(val) {
      this.$refs.app.style.overflow = val ? 'hidden' : ''
      this.$refs.app.scrollTo(0, 0)
    },
  },
}
</script>

<style lang="scss" scoped>
.app {
  background-attachment: fixed;
  background-color: $dark;
  background-image: url('~assets/images/stars.svg');
  background-position: top center;
  background-repeat: repeat;
  background-size: 1920px auto;
  height: 100%;
  overflow-y: scroll;
  scroll-behavior: smooth;
  perspective: 1px;
  perspective-origin: 0;

  &__layer {
    height: 100%;
    position: absolute;
    transform-origin: 0;
    width: 100%;
    @include css-lock();

    &--planet-1 {
      background-image: url('~assets/images/planet-medium.svg');
      background-position: bottom 15% left calc(50%);
      background-repeat: no-repeat;
      background-size: 240px auto;
      transform: translateZ(-3px) scale(4);
    }

    &--planet-2 {
      background-image: url('~assets/images/planet-small.svg');
      background-position: bottom 60% left calc(2rem - 90px);
      background-repeat: no-repeat;
      background-size: 180px auto;
      transform: translateZ(-6px) scale(7);

      @media screen and (min-width: $lockMin) {
        background-position: bottom 60% right calc(50% + 16.5em);
      }
    }

    &--planet-3 {
      background-image: url('~assets/images/planet-large.svg');
      background-position: bottom 0 right calc(2rem - 680px);
      background-repeat: no-repeat;
      background-size: 1390px auto;
      transform: translateZ(-12px) scale(13);

      @media screen and (min-width: $lockMin) {
        background-position: bottom 0 left calc(50% + 16.5em);
      }
    }
  }

  &__foreground {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto 1fr auto;
    height: 100%;
    transform: translateZ(0);
    width: 100%;
  }

  &__main {
    background-image: url('~assets/images/surface.svg');
    background-position: bottom -1px center;
    background-repeat: repeat-x;
    background-size: 1920px auto;
    color: $light;
    padding: 3rem 2rem 15rem;
  }

  &__footer {
    background-color: $light;
  }
}
</style>
