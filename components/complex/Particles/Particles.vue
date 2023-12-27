<script setup lang="ts">
import { initParticles, destroyParticles } from './Particle'

import Options from './Options'

const particlesRef = ref();
const connectionsRef = ref();

onMounted(() => {
  initParticles(particlesRef.value, connectionsRef.value, Options);
})

onUnmounted(() => {
  destroyParticles();
})
</script>

<template>
  <canvas :class="[$style.canvas, $style['canvas--is-connections']]" ref="connectionsRef" />
  <canvas :class="[$style.canvas, $style['canvas--is-particles']]" ref="particlesRef" />
  <!-- <ParticlesControlsToggle />
  <ParticlesControls /> -->
</template>

<style lang="scss" module>
.canvas {
  position: fixed;
  height: 100%;
  width: 100%;
  transition: opacity 0.4s linear;

  &:global {
    &.is-resizing {
      opacity: 0;
    }
  }

}
</style>