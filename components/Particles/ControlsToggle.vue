<script lang="ts" setup>
import Open, { toggleOpen } from './ControlsState';

const toggleClasses = computed(() => {
  return Open.value ? ['toggle', 'toggle--is-open'] : ['toggle']
})

</script>

<template>
  <button :class="toggleClasses" aria-label="Toggle particle controls" @click="toggleOpen" />
</template>

<style lang="scss" scoped>
.toggle {
  border-radius: 50%;
  border: 0.75rem solid $actionPrimary;
  cursor: pointer;
  display: block;
  height: 1.5rem;
  position: fixed;
  right: $spSm;
  top: $spSm;
  transition:
    border-color 0.2s linear,
    border-width 0.2s ease-in-out;
  width: 1.5rem;
  z-index: 2;

  &::before,
  &::after {
    background-color: transparent;
    content: "";
    height: 100%;
    left: calc(50% - 0.125rem);
    position: absolute;
    top: 0;
    transition:
      background-color 0.2s linear;
    width: 0.25rem;
  }

  &::before {
    transform: rotate(45deg);
  }

  &::after {
    transform: rotate(-45deg);
  }

  &:active,
  &:hover,
  &:focus {
    border-width: 0.5rem;
  }

  &:active,
  &:hover,
  &:focus {
    border-color: $actionSecondary;
  }

  &--is-open {
    border-width: 0.125rem;

    &::before,
    &::after {
      background-color: $actionPrimary;
    }

    &:active,
    &:hover,
    &:focus {
      border-width: 0.125rem;

      &::before,
      &::after {
        background-color: $actionSecondary;
      }
    }


  }
}
</style>