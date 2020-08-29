<template>
  <app-content-container>
    <app-article :article="article" :next="next" :prev="prev" />
  </app-content-container>
</template>

<script>
import AppArticle from '@/components/AppArticle'
import AppContentContainer from '@/components/AppContentContainer.vue'

export default {
  components: {
    AppArticle,
    AppContentContainer,
  },
  async asyncData({ params, $content }) {
    const article = await $content('articles', params.slug).fetch()

    const [prev, next] = await $content('articles')
      .only(['path'])
      .sortBy('publishedDate')
      .where({ published: true })
      .surround(params.slug)
      .fetch()

    return {
      article,
      next,
      prev,
    }
  },
  head() {
    return {
      title: `${this.article.title} - Brad Waropay`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.article.description,
        },
      ],
    }
  },
}
</script>
