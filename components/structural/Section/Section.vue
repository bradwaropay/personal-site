<template>
  <section :class="$style.section">
    <slot />
  </section>
</template>

<style lang="scss" module>
.section {
  @include content;

  position: relative;
  z-index: useLayer(page);

  &+& {
    margin-top: useSpacing(xl);

    @media screen and (min-width: useBreakpoint(lg)) {
      margin-top: useSpacing(xxl);
    }
  }
}
</style>