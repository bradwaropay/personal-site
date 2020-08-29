<template>
  <app-content-container>
    <about-section
      :description="about.description"
      :heading="about.title"
      :links="about.links"
    >
      <nuxt-content :document="about" />
    </about-section>
  </app-content-container>
</template>

<script>
import AboutSection from '@/components/AboutSection.vue'
import AppContentContainer from '@/components/AppContentContainer.vue'

export default {
  components: {
    AboutSection,
    AppContentContainer,
  },
  async asyncData({ $content }) {
    const about = await $content('about').fetch()

    return {
      about,
    }
  },
  head: {
    title: 'About - Brad Waropay',
  },
}
</script>
