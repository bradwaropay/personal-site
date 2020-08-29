<template>
  <app-content-container>
    <about-intro
      :description="about.description"
      :heading="about.title"
      :links="about.links"
    />
    <latest-articles v-if="hasArticles" :articles="articles" />
    <featured-projects v-if="hasProjects" :projects="projects" />
  </app-content-container>
</template>

<script>
import AboutIntro from '@/components/AboutIntro.vue'
import AppContentContainer from '@/components/AppContentContainer.vue'
import LatestArticles from '@/components/LatestArticles.vue'
import FeaturedProjects from '@/components/FeaturedProjects.vue'

export default {
  components: {
    AboutIntro,
    AppContentContainer,
    LatestArticles,
    FeaturedProjects,
  },
  async asyncData({ $content }) {
    const about = await $content('about').fetch()

    const articles = await $content('articles')
      .where({ published: true })
      .without(['body'])
      .sortBy('publishedAt', 'desc')
      .limit(3)
      .fetch()

    const projects = await $content('projects')
      .where({ published: true, featured: true })
      .without(['body'])
      .fetch()

    return {
      about,
      articles,
      projects,
    }
  },
  computed: {
    hasArticles() {
      return this.articles.length > 0
    },
    hasProjects() {
      return this.projects.length > 0
    },
  },
}
</script>
