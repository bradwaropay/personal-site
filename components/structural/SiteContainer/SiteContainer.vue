<script lang="ts" setup>
import Open from "~~/components/complex/Particles/ControlsState"

const page = ref();

watch(Open, async () => {
  page.value.inert = Open.value
});
</script>

<template>
  <Particles />
  <div :class="$style.container" ref="page">
    <slot name="header" />
    <main>
      <slot />
    </main>
    <slot name="footer" />
  </div>
</template>

<style lang="scss" module>
:root {
  --site-container-background-gradient: linear-gradient(0deg, var(--color-base-secondary-100) 0%, transparent 75%, transparent 100%);
}

.container {
  position: relative;
  overflow-x: hidden;

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

  >* {
    position: relative;
  }
}
</style>