<template>
  <article :class="$style.card">
    <slot />
  </article>
</template>

<style lang="scss" module>
:root {
  --card-background: var(--color-accent-secondary-200-rgb);
}

.card {
  background-color: rgba(var(--card-background), 0.125);
  border-radius: 1rem;
  padding: useSpacing(md);
}
</style>