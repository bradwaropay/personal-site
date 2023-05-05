<template>
  <section class="section">
    <slot />
  </section>
</template>

<style lang="scss" scoped>
.section {
  @include content;

  margin-top: useSpacing(xl);

  @media screen and (min-width: useBreakpoint(lg)) {
    margin-top: useSpacing(xxl);
  }
}
</style>