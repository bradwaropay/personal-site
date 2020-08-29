<template>
  <app-content-container>
    <project-list :projects="projects" />
  </app-content-container>
</template>

<script>
import AppContentContainer from '@/components/AppContentContainer.vue'
import ProjectList from '@/components/ProjectList.vue'

export default {
  components: {
    AppContentContainer,
    ProjectList,
  },
  async asyncData({ $content }) {
    const projects = await $content('projects')
      .where({ published: true })
      .without(['body'])
      .fetch()

    return {
      projects,
    }
  },
  head: {
    title: 'Projects - Brad Waropay',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content:
          "What I've been working on. A collection of personal and professional projects.",
      },
    ],
  },
}
</script>
