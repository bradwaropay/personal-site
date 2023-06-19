<script lang="ts" setup>
import Open from "~/components/Particles/ControlsState"

const page = ref();

watch(Open, async () => {
  page.value.inert = Open.value
});
</script>

<template>
  <Particles />
  <div class="container" ref="page">
    <slot name="header" />
    <main>
      <slot />
    </main>
    <slot name="footer" />
  </div>
</template>

<style>
:root {
  --site-container-background-gradient: linear-gradient(0deg, var(--color-base-secondary-100) 0%, transparent 75%, transparent 100%);
}
</style>

<style lang="scss" scoped>
.container {
  grid-template-rows: 1fr auto auto;
  position: relative;

  &::before {
    background-attachment: fixed;
    background-image: var(--site-container-background-gradient);
    content: "";
    opacity: .75;
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
}
</style>