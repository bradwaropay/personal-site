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
  background-color: $actionPrimary;
  padding: 0 $spXs;
  text-align: center;
  cursor: pointer;
  font-size: $textMd;
  transition:
    background-color 0.2s linear,
    color 0.2s linear;

  &:hover,
  &:active,
  &:focus {
    background-color: $actionSecondary;
    color: $backgroundPrimary;
  }

  &--is-full-width {
    width: 100%;
  }
}
</style>