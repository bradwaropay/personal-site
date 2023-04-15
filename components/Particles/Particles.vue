<script setup lang="ts">
import { initParticles, destroyParticles } from './assets/scripts/particles';

import { Options } from './Options'

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
  <canvas class="canvas canvas--is-connections" ref="connectionsRef" />
  <canvas class="canvas canvas--is-particles" ref="particlesRef" />
  <ParticlesControlsToggle />
  <ParticlesControls />
</template>

<style lang="scss" scoped>
.canvas {
  position: fixed;
  height: 100%;
  width: 100%;
}
</style>