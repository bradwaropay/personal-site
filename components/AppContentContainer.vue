<template>
  <div class="app-content-container">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.app-content-container {
  margin: 0 auto;
  max-width: $contentWidthMax;
  @include css-lock();

  > * + * {
    @include rhythm-spacing();
  }
}
</style>
