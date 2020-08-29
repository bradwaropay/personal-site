<template>
  <section class="app-section">
    <app-section-header v-if="heading" :heading="heading" />
    <slot />
    <app-section-footer v-if="footerLink" :link="footerLink" />
  </section>
</template>

<script>
import AppSectionFooter from '@/components/AppSectionFooter.vue'
import AppSectionHeader from '@/components/AppSectionHeader.vue'

export default {
  components: {
    AppSectionFooter,
    AppSectionHeader,
  },
  props: {
    footerLink: {
      type: Object,
      default() {
        return null
      },
    },
    heading: {
      type: String,
      default: null,
    },
  },
}
</script>