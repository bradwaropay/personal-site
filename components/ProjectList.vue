<template>
  <section class="project-list">
    <app-section-header :heading="heading" class="project-list__header" />
    <project-list-item
      v-for="(project, projectIndex) in projects"
      :key="projectIndex"
      :project="project"
      class="project-list__project"
    />
    <app-no-content v-if="!projects.length" />
  </section>
</template>

<script>
import AppNoContent from '@/components/AppNoContent.vue'
import AppSectionHeader from '@/components/AppSectionHeader.vue'
import ProjectListItem from '@/components/ProjectListItem.vue'

export default {
  components: {
    AppNoContent,
    AppSectionHeader,
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
      heading: 'Projects',
    }
  },
}
</script>
