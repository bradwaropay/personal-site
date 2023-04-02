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
  margin: $spLg auto;
  max-width: $contentContainer;
  padding: 0 $contentGutter $spXs;
  pointer-events: none;

  :deep(*) {
    pointer-events: all;
  }

  @media screen and (min-width: $bpMd) {
    margin-top: $spXl;
    max-width: $contentContainerLg;
    padding: 0 $contentGutterMd $spXs;
  }

  @media screen and (min-width: $bpLg) {
    margin-top: $spXl;
    max-width: $contentContainerLg;
    padding: 0 $contentGutterMd $spXs;
  }
}
</style>