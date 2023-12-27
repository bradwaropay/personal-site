<script setup lang="ts">

const date = new Date().getFullYear();

const fluxRangeStart = 25;
const fluxInterval = ref(4);

const generateFlux = (rangeStart = fluxRangeStart) => {
  const getRadius = () => {
    return Math.floor(Math.random() * (101 - rangeStart)) + rangeStart;
  }

  const flux1 = [];
  const flux2 = [];

  for (let i = 0; i < 2; i++) {
    flux1.push(`${getRadius()}%`);
    flux2.push(`${getRadius()}%`);
  }

  return `${flux1.join(' ')} 0% 0% /  ${flux2.join(' ')} 0% 0%`
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

onMounted(() => {
  updateFlux();
})
</script>

<template>
  <footer :class="$style.footer">
    <div :class="$style['footer-content']">
      <p>All materials &copy; Brad Waropay {{ date }}</p>
    </div>
    <div :class="$style['flux-container']">
      <div :class="$style.flux" />
    </div>
  </footer>
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

.footer {
  margin-top: useSpacing(lg);
  position: relative;

  @media screen and (min-width: useBreakpoint(md)) {
    margin-top: useSpacing(xl);
  }

  @media screen and (min-width: useBreakpoint(lg)) {
    margin-top: useSpacing(xxl);
  }
}

.footer-content {
  @include content;
  padding-top: useSpacing(md);
  padding-bottom: useSpacing(md);
  position: relative;
  z-index: useLayer(page);
}

.flux-container {
  overflow: hidden;
  max-height: 100%;
  position: absolute;
  bottom: 0;
  mask-image: linear-gradient(rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 100%);
}

.flux,
.flux::before,
.flux::after {
  height: 100vw;
  transition: border-radius calc(v-bind(fluxInterval) * 1s) linear;
  width: 300vw;
}

.flux {
  background-color: rgba(var(--color-accent-secondary-200-rgb), 0.25);
  border-radius: v-bind(flux);
  transform: translateX(-33.333%);

  &::before,
  &::after {
    content: "";
    display: block;
  }

  &::before {
    background-color: rgba(var(--color-brand-primary-100-rgb), 0.25);
    border-radius: v-bind(fluxBefore);
  }

  &::after {
    background-color: rgba(var(--color-brand-secondary-100-rgb), 0.25);
    border-radius: v-bind(fluxAfter);
    transform: translateY(-100vw);
  }
}
</style>