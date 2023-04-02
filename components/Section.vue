<template>
  <section class="section">
    <slot />
  </section>
</template>

<style lang="scss" scoped>
.section {
  margin: $spLg auto 0;
  max-width: $contentContainer;
  padding: 0 $contentGutter;
  width: 100%;
  pointer-events: none;

  :deep(*) {
    pointer-events: all;
  }

  @media screen and (min-width: $bpMd) {
    padding: 0 $contentGutterMd;
  }

  @media screen and (min-width: $bpLg) {
    margin-top: $spXl;
    max-width: $contentContainerLg;
  }

  &:first-child {
    margin-top: $spLg;

    @media screen and (min-width: $bpLg) {
      margin-top: $sp2Xl;
    }
  }

  &:only-child {
    align-items: center;
    display: flex;
    min-height: 100vh;
    margin-top: 0;
    padding-top: $spLg;
    padding-bottom: $spLg;
  }
}
</style>