<template>
  <header class="section-header">
    <h2 class="section-header__heading">{{ heading }}</h2>
  </header>
</template>

<script>
export default {
  props: {
    heading: {
      type: String,
      default: null,
    },
  },
}
</script>

<style lang="scss">
.section-header {
  & + * {
    @include rhythm-spacing();
  }

  &__heading {
    font: $headingMd;
  }
}
</style>
