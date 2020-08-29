<template>
  <footer class="section-footer">
    <nuxt-link v-if="link" :to="link.route" class="section-footer__link">
      {{ link.label }} &raquo;
    </nuxt-link>
  </footer>
</template>

<script>
export default {
  props: {
    link: {
      type: Object,
      default() {
        return null
      },
    },
  },
}
</script>

<style lang="scss" scoped>
.section-footer {
  border-top: 1px solid $primary;
  display: flex;
  justify-content: flex-end;
  @include rhythm-spacing();
  @include rhythm-spacing($multiplier: 0.5, $property: padding-top);

  &__link {
    display: inline-block;
    font: $copyAccent;
  }
}
</style>
