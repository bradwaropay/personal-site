<template>
  <article class="app-article">
    <header class="app-article__header">
      <h1 class="app-article__heading">{{ article.title }}</h1>
      <time
        :datetime="getRobotDate(article.publishedAt)"
        class="app-article__date"
      >
        {{ article.publishedAt }}
      </time>
    </header>
    <nuxt-content :document="article" />
    <footer v-if="next || prev" class="app-article__footer">
      <nuxt-link
        v-if="prev"
        :to="prev.path"
        class="app-article__footer-link app-article__footer-link--newer"
      >
        &laquo; Previous
      </nuxt-link>
      <nuxt-link
        v-if="next"
        :to="next.path"
        class="app-article__footer-link app-article__footer-link--older"
      >
        Next &raquo;
      </nuxt-link>
    </footer>
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
    next: {
      type: Object,
      default() {
        return null
      },
    },
    prev: {
      type: Object,
      default() {
        return null
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
.app-article {
  &__header {
    & + * {
      @include rhythm-spacing($multiplier: 1.5);
    }
  }

  &__heading {
    font: $headingLg;
  }

  &__date {
    color: $primaryLight;
    display: block;
    font: $copySm;
  }

  &__footer {
    border-top: 1px solid $primary;
    display: grid;
    grid-auto-flow: column;
    @include rhythm-spacing($multiplier: 2);
    @include rhythm-spacing($multiplier: 0.5, $property: padding-top);
  }

  &__footer-link {
    cursor: pointer;
    font: $copyAccent;
    text-decoration: underline;

    &--newer {
      justify-self: start;
    }

    &--older {
      justify-self: end;
    }
  }
}
</style>
