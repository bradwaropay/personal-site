<template>
  <section class="article-list">
    <app-section-header :heading="heading" class="article-list__header" />
    <article-list-item
      v-for="(article, articleIndex) in articlesPaged"
      :key="articleIndex"
      :article="article"
      class="article-list__article"
    />
    <app-no-content v-if="!articlesPaged.length" />
    <footer v-if="hasFooter" class="article-list__footer">
      <a
        v-if="hasNewer"
        class="article-list__footer-link article-list__footer-link--newer"
        @click="newer(page)"
      >
        &laquo; Newer
      </a>
      <a
        v-if="hasOlder"
        class="article-list__footer-link article-list__footer-link--older"
        @click="older(page)"
      >
        Older &raquo;
      </a>
    </footer>
  </section>
</template>

<script>
import AppSectionHeader from '@/components/AppSectionHeader.vue'
import ArticleListItem from '@/components/ArticleListItem.vue'

export default {
  components: {
    AppSectionHeader,
    ArticleListItem,
  },
  props: {
    articles: {
      type: Array,
      default() {
        return []
      },
    },
    page: {
      type: Number,
      default: 1,
    },
    perPage: {
      type: Number,
      default: 5,
    },
  },
  data() {
    return {
      heading: 'Articles',
    }
  },
  computed: {
    articlesPaged() {
      if (this.perPage < 1) return this.articles
      const page = this.page >= 1 ? this.page : 1
      const start = (page - 1) * this.perPage
      const end = start + this.perPage
      return this.articles.slice(start, end)
    },
    hasFooter() {
      return this.perPage > 0 && (this.hasOlder || this.hasNewer)
    },
    hasNewer() {
      return this.page > 1
    },
    hasOlder() {
      return (
        (this.page - 1) * this.perPage + this.perPage < this.articles.length
      )
    },
  },
  methods: {
    newer(page) {
      page--
      this.$router.push({
        path: this.$route.path,
        query: { page },
      })
    },
    older(page) {
      page++
      this.$router.push({
        path: this.$route.path,
        query: { page },
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.article-list {
  &__footer {
    border-top: 1px solid $primary;
    display: grid;
    grid-auto-flow: column;
    @include rhythm-spacing();
    @include rhythm-spacing($multiplier: 0.5, $property: padding-top);
  }

  &__footer-link {
    cursor: pointer;
    font-family: $copyAccent;
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
