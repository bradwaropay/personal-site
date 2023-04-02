<template>
  <Dust />
  <main class="container">
    <slot />
  </main>
</template>

<style lang="scss" scoped>
.container {
  background-attachment: fixed;
  background-image: $backgroundGradient;
  pointer-events: none;
  position: relative;
}
</style>