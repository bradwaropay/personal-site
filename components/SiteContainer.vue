<script lang="ts" setup>
import Open from "~/components/Particles/ControlsState"

const page = ref();

watch(Open, async () => {
  page.value.inert = Open.value
});

const containerClasses = computed(() => {
  const classes = ['container'];

  if (Open.value) classes.push('container--has-active-modal');

  return classes
})
</script>

<template>
  <Particles />
  <div :class="containerClasses" scroll="no" ref="page">
    <slot name="header" />
    <main class="main">
      <slot />
    </main>
    <slot name="footer" />
  </div>
</template>

<style lang="scss" scoped>
.container {
  grid-template-rows: 1fr auto auto;
  position: relative;

  &::before {
    background-attachment: fixed;
    background-image: $backgroundGradient;
    content: "";
    position: fixed;
    width: 100%;
    height: 100%;
    bottom: 0;
  }

  :deep(*) {
    >* {
      position: relative;
    }
  }

  &--has-active-modal {}
}
</style>