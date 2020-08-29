<template>
  <ul class="inline-link-list">
    <li
      v-for="(link, linkIndex) in links"
      :key="linkIndex"
      class="inline-link-list__list-item"
    >
      <component
        :is="link.route ? 'nuxt-link' : 'a'"
        :href="link.url"
        :target="link.target || '_self'"
        :to="link.route"
        class="inline-link-list__list-link"
      >
        {{ link.label }}
      </component>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    links: {
      type: Array,
      default() {
        return []
      },
    },
  },
}
</script>

<style lang="scss" scoped>
.inline-link-list {
  display: flex;
  flex-wrap: wrap;
  font: $copyAccentSm;
  column-gap: 0.5em;
  @include rhythm-spacing($multiplier: 0.75);

  &__list-item {
    &::before {
      content: '/';
      margin-right: 0.25em;
    }

    &:first-child::before {
      display: none;
    }
  }
}
</style>
