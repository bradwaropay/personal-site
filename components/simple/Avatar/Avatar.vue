<script setup lang="ts">

const fluxRangeStart = 75;
const fluxInterval = ref(2);

const generateFlux = (rangeStart = fluxRangeStart) => {
  const getRadius = () => {
    return Math.floor(Math.random() * (101 - rangeStart)) + rangeStart;
  }

  const flux1 = [];
  const flux2 = [];

  for (let i = 0; i < 4; i++) {
    flux1.push(`${getRadius()}%`);
    flux2.push(`${getRadius()}%`);
  }

  return `${flux1.join(' ')} / ${flux2.join(' ')}`
}

let flux = ref(generateFlux());
let fluxBefore = ref(generateFlux());
let fluxAfter = ref(generateFlux());

const updateFlux = () => {
  flux.value = generateFlux();
  fluxBefore.value = generateFlux();
  fluxAfter.value = generateFlux();
  setTimeout(updateFlux, fluxInterval.value * 1000);
}

updateFlux();

</script>

<template>
  <div :class="$style.avatar">
    <div :class="$style['flux-container']">
      <div :class="$style.flux" />
    </div>
    <img :class="$style.image" src="/images/photo.webp" alt="Brad Waropay Portrait" height="320" width="320" />
  </div>
</template>

<style lang="scss" module>
:root {
  --avatar-size-height: 20rem;
  --avatar-flux-background-opacity: 0.25;
  --avatar-flux-background: rgba(var(--color-accent-secondary-200-rgb), var(--avatar-flux-background-opacity));
  --avatar-flux-background-before: rgba(var(--color-brand-primary-100-rgb), var(--avatar-flux-background-opacity));
  --avatar-flux-background-after: rgba(var(--color-brand-secondary-100-rgb), var(--avatar-flux-background-opacity));
  --avatar-flux-scale: 1.0125;
}

.avatar {
  aspect-ratio: 1;
  height: var(--avatar-size-height);
  position: relative;
}

.flux-container {
  @keyframes flux-rotate {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }

  animation: flux-rotate 60s linear infinite;
  height: 100%;
  position: absolute;
}

.flux,
.flux::before,
.flux::after {
  aspect-ratio: 1;
  height: 100%;
  transition: border-radius calc(v-bind(fluxInterval) * 1s) linear;
}

.flux {
  background-color: var(--avatar-flux-background);
  border-radius: v-bind(flux);
  transform: scale(var(--avatar-flux-scale));

  &::before,
  &::after {
    content: "";
    display: block;
  }

  &::before {
    background-color: var(--avatar-flux-background-before);
    border-radius: v-bind(fluxBefore);
  }

  &::after {
    background-color: var(--avatar-flux-background-after);
    border-radius: v-bind(fluxAfter);
    transform: translateY(-100%);
  }
}

.image {
  display: block;
  border-radius: 100%;
  position: relative;
}
</style>
