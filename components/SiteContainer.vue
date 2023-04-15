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
  }

  :deep(*) {
    >* {
      position: relative;
    }
  }
}
</style>