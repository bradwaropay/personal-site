<template>
  <app-content-container>
    <article-list :articles="articles" :page="$route.query.page" />
  </app-content-container>
</template>

<script>
import AppContentContainer from '@/components/AppContentContainer.vue'
import ArticleList from '@/components/ArticleList.vue'

export default {
  components: {
    AppContentContainer,
    ArticleList,
  },
  async asyncData({ $content }) {
    const articles = await $content('articles')
      .where({ published: true })
      .without(['body'])
      .sortBy('publishedAt', 'desc')
      .fetch()

    return {
      articles,
    }
  },
  head: {
    title: 'Articles - Brad Waropay',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content:
          'Thoughts, learnings, and tutorials on all things development and design.',
      },
    ],
  },
}
</script>
