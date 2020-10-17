<template>
  <header class="app-header">
    <nuxt-link to="/">
      <app-logo class="app-header__logo" />
    </nuxt-link>
    <app-navigation-toggle
      class="app-header__nav-toggle"
      @toggle-open="setNav($event)"
    />
    <app-navigation class="app-header__nav" />
  </header>
</template>

<script>
import AppLogo from '@/components/AppLogo.vue'
import AppNavigation from '@/components/AppNavigation.vue'
import AppNavigationToggle from '@/components/AppNavigationToggle.vue'

export default {
  components: {
    AppLogo,
    AppNavigation,
    AppNavigationToggle,
  },
  data() {
    return {
      navOpen: false,
    }
  },
}
</script>

<style lang="scss" scoped>
.app-header {
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 2rem;

  &__logo {
    fill: $accent;
    height: 4rem;
    transition: fill 0.2s ease-in-out;

    &:hover {
      fill: $accentLight;
    }
  }
}
</style>
