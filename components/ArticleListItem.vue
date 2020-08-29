<template>
  <article class="article-list-item">
    <header>
      <h3 class="article-list-item__title">
        <nuxt-link
          :to="`/articles/${article.slug}`"
          class="article-list-item__title-link"
        >
          {{ article.title }}
        </nuxt-link>
      </h3>
      <time
        :datetime="getRobotDate(article.publishedAt)"
        class="article-list-item__date"
      >
        {{ article.publishedAt }}
      </time>
    </header>
    <p class="article-list-item__description">
      {{ article.description }}
    </p>
  </article>
</template>

<script>
export default {
  props: {
    article: {
      type: Object,
      default() {
        return {}
      },
    },
  },
  methods: {
    getRobotDate(date) {
      const humanDate = new Date(date)
      const robotDate = humanDate.toISOString().split('T').shift()
      return robotDate
    },
  },
}
</script>

<style lang="scss" scoped>
.article-list-item {
  & + & {
    border-top: 1px solid $darker;
    @include rhythm-spacing();
    @include rhythm-spacing($multiplier: 0.75, $property: padding-top);
  }

  &__title {
    font: $headingSm;
    font-size: 1.25em;
  }

  &__date {
    color: $primaryLight;
    display: block;
    font: $copySm;
  }

  &__description {
    @include rhythm-spacing($multiplier: 0.5);
  }
}
</style>
