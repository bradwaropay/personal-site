<script lang="ts" setup>
interface Props {
  label: string,
  action: () => void
  fullWidth?: boolean,
}

const props = defineProps<Props>();

const buttonClasses = computed(() => {
  const classes = ['button'];

  if (props.fullWidth) classes.push('button--is-full-width');

  return classes
})
</script>

<template>
  <button :class="buttonClasses" @click="action">
    {{ label }}
  </button>
</template>

<style lang="scss" scoped >
.button {
  @include text(md);

  background-color: var(--color-action-base);
  padding: 0 useSpacing(sm);
  text-align: center;
  cursor: pointer;
  transition:
    background-color 0.2s linear,
    color 0.2s linear;

  &:hover,
  &:active,
  &:focus {
    background-color: var(--color-action-accent);
    color: var(--color-background-base);
  }

  &--is-full-width {
    width: 100%;
  }
}
</style>