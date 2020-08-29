<template>
  <ul
    :class="{ 'app-navigation--is-open': appNavOpen }"
    class="app-navigation"
    @click="closeNav()"
  >
    <li
      v-for="(link, linkIndex) in links"
      :key="linkIndex"
      class="app-navigation__item"
    >
      <nuxt-link :to="link.route" class="app-navigation__link">
        <span class="app-navigation__link-text">
          {{ link.name }}
        </span>
      </nuxt-link>
    </li>
  </ul>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  data() {
    return {
      links: [
        {
          route: '/articles',
          name: 'Articles',
        },
        {
          route: '/projects',
          name: 'Projects',
        },
        {
          route: '/about',
          name: 'About',
        },
      ],
    }
  },
  computed: mapState(['appNavOpen']),
  methods: {
    ...mapMutations({ closeNav: 'closeAppNav' }),
  },
}
</script>

<style lang="scss" scoped>
.app-navigation {
  background-color: $darker;
  display: grid;
  grid-auto-rows: auto;
  height: 100vh;
  left: -75%;
  overflow-y: scroll;
  position: fixed;
  top: 0;
  transition: left 0.3s ease-in-out;
  width: 75%;
  z-index: $zAppNavigation;

  &::after {
    content: '';
    background-color: $darker;
    display: block;
    height: 100%;
    left: -100%;
    opacity: 0;
    position: fixed;
    transition: left 0.3s 0.3s ease-in-out, opacity 0.3s ease-in-out;
    width: 100%;
    z-index: -1;
  }

  &--is-open {
    left: 0;

    &::after {
      left: 0;
      opacity: 0.5;
      transition: opacity 0.3s ease-in-out;
    }
  }

  &__item {
    display: flex;
  }

  &__link {
    align-items: center;
    background-color: $darker;
    color: $accent;
    display: flex;
    font-family: $secondaryFont;
    font-size: 10vmin;
    flex-grow: 1;
    line-height: 1;
    justify-content: center;
    text-decoration: none;
    transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;

    &:hover,
    &:focus,
    &:active {
      background-color: $accent;
      color: $darker;
    }
  }
}
</style>
