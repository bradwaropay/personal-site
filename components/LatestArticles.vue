<template>
  <app-section
    :footer-link="footerLink"
    :heading="heading"
    class="latest-articles"
  >
    <article-list-item
      v-for="(article, articleIndex) in articles"
      :key="articleIndex"
      :article="article"
      class="atest-articles__article"
    />
  </app-section>
</template>

<script>
import AppSection from '@/components/AppSection.vue'
import ArticleListItem from '@/components/ArticleListItem.vue'

export default {
  components: {
    AppSection,
    ArticleListItem,
  },
  props: {
    articles: {
      type: Array,
      default() {
        return []
      },
    },
  },
  data() {
    return {
      footerLink: {
        label: 'Previous Articles',
        route: '/articles',
      },
      heading: 'Latest Articles',
    }
  },
}
</script>

<style lang="scss">
.latest-articles {
  &__article {
    @include rhythm-spacing();
  }
}
</style>
