<script lang="ts" setup>
const $style = useCssModule();

interface Props {
  label: string,
  action: () => void
  fullWidth?: boolean,
}

const props = defineProps<Props>();

const buttonClasses = computed(() => {
  const classes = [$style.button];

  if (props.fullWidth) classes.push($style['button--is-full-width']);

  return classes
})
</script>

<template>
  <button :class="buttonClasses" @click="action">
    {{ label }}
  </button>
</template>

<!-- Shared styles -->
<style lang="scss" module>
@import "../Button";
</style>