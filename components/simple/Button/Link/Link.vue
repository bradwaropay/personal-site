<script lang="ts" setup>
const $style = useCssModule();

interface Props {
  label: string,
  path: string,
  fullWidth?: boolean,
}

const props = defineProps<Props>();

const buttonClasses = computed(() => {
  const classes = [$style.button];

  if (props.fullWidth) classes.push($style['button--is-full-width']);

  return classes
})

const isExternal = computed(() => {
  return props.path.startsWith('http') || props.path.includes('#') || props.path.includes('.pdf')
})
</script>

<template>
  <NuxtLink :class="buttonClasses" :to="path" :external="isExternal">
    {{ label }}
  </NuxtLink>
</template>

<style lang="scss" module>
@import "../Button";
</style>