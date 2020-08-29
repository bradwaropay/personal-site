<template>
  <app-section :footer-link="footerLink" :heading="heading" class="about-intro">
    <p class="about-intro__description">{{ description }}</p>
    <inline-link-list :links="links" />
  </app-section>
</template>

<script>
import AppSection from '@/components/AppSection.vue'
import InlineLinkList from '@/components/InlineLinkList.vue'

export default {
  components: {
    AppSection,
    InlineLinkList,
  },
  props: {
    description: {
      type: String,
      default: null,
    },
    heading: {
      type: String,
      default: null,
    },
    links: {
      type: Array,
      default() {
        return []
      },
    },
  },
  data() {
    return {
      footerLink: {
        label: "About",
        route: '/about',
      },
    }
  },
}
</script>

<style lang="scss" scoped>
.about-intro {
  &__description {
    margin-top: 0;
  }
}
</style>
