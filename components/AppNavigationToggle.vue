<template>
  <div
    :aria-pressed="appNavOpen"
    :class="{ 'app-navigation-toggle--is-open': appNavOpen }"
    class="app-navigation-toggle"
    role="button"
    tabindex="0"
    @click="toggleOpen"
    @keyup.enter.space="toggleOpen"
  >
    <div class="app-navigation-toggle__bar" />
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  computed: {
    ...mapState(['appNavOpen']),
  },
  methods: {
    ...mapMutations({ toggleOpen: 'toggleAppNavOpen' }),
  },
}
</script>

<style lang="scss" scoped>
$toggleSize: 3.5rem;
$barColor: $primary;
$barColorHover: $primaryLight;
$barHeight: 6px;
$timing: 0.2s;

.app-navigation-toggle {
  align-items: center;
  cursor: pointer;
  display: flex;
  height: $toggleSize;
  z-index: $zAppOverlay;

  &:hover,
  &:focus,
  &:active {
    outline: none;
  }

  &__bar {
    background-color: $barColor;
    height: $barHeight;
    width: $toggleSize;
    transition: background-color $timing ease-in-out;

    .app-navigation-toggle:hover &,
    .app-navigation-toggle:focus &,
    .app-navigation-toggle:active & {
      background-color: $barColorHover;

      &::before,
      &::after {
        background-color: $barColorHover;
      }
    }

    .app-navigation-toggle--is-open & {
      transition: background-color 0s $timing ease-in-out;

      &::before,
      &::after {
        transition: background-color $timing ease-in-out,
          top $timing ease-in-out, transform $timing $timing ease-in-out;
      }

      &::before {
        top: 0;
        transform: rotate(45deg);
      }

      &::after {
        top: -#{$barHeight};
        transform: rotate(-45deg);
      }
    }

    .app-navigation-toggle--is-open &,
    .app-navigation-toggle--is-open:hover &,
    .app-navigation-toggle--is-open:focus &,
    .app-navigation-toggle--is-open:active & {
      background-color: transparent;
    }

    &::before,
    &::after {
      background-color: $barColor;
      content: '';
      display: block;
      height: $barHeight;
      position: relative;
      transition: background-color $timing ease-in-out,
        top $timing $timing ease-in-out, transform $timing ease-in-out;
    }

    &::before {
      top: -#{$barHeight * 2};
    }

    &::after {
      top: $barHeight;
    }
  }
}
</style>
