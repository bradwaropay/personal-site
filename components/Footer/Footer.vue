<script setup lang="ts">
const date = new Date().getFullYear();
</script>

<template>
  <footer class="footer">
    <p>All materials &copy; Brad Waropay {{ date }}</p>
  </footer>
</template>

<style lang="scss" scoped>
.footer {
  margin: useSpacing(xl) auto;
  max-width: var(--content-container);
  padding: 0 var(--content-gutter) useSpacing(sm);
  pointer-events: none;

  :deep(*) {
    pointer-events: all;
  }

  @media screen and (min-width: useBreakpoint(md)) {
    margin-top: useSpacing(xxl);
  }
}
</style>