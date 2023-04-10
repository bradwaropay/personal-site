<template>
  <section class="section">
    <slot />
  </section>
</template>

<style lang="scss" scoped>
.section {
  @include content;

  margin-top: $spLg;

  @media screen and (min-width: $bpLg) {
    margin-top: $spXl;
  }
}
</style>