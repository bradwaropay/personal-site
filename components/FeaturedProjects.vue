<template>
  <app-section
    :footer-link="footerLink"
    :heading="heading"
    class="featured-projects"
  >
    <project-list-item
      v-for="(project, projectIndex) in projects"
      :key="projectIndex"
      :project="project"
      class="featured-projects__project"
    />
  </app-section>
</template>

<script>
import AppSection from '@/components/AppSection.vue'
import ProjectListItem from '@/components/ProjectListItem.vue'

export default {
  components: {
    AppSection,
    ProjectListItem,
  },
  props: {
    projects: {
      type: Array,
      default() {
        return []
      },
    },
  },
  data() {
    return {
      footerLink: {
        label: 'More Projects',
        route: '/projects',
      },
      heading: 'Featured Projects',
    }
  },
}
</script>
