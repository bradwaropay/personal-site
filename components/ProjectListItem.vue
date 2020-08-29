<template>
  <article class="project-list-item">
    <component
      :is="primaryLink.route ? 'nuxt-link' : 'a'"
      :href="primaryLink.url"
      :target="primaryLink.target || '_self'"
      :to="primaryLink.route"
      class="project-list-item__image-link"
    >
      <img
        :alt="project.title"
        :src="
          project.imageDir
            ? projectImage
            : `//placehold.it/300x300/242b3a/384259?text=${project.title}`
        "
        class="project-list-item__image"
      />
    </component>
    <div class="project-list-item__content">
      <header class="project-list-item__header">
        <h3 class="project-list-item__title">
          <component
            :is="primaryLink.route ? 'nuxt-link' : 'a'"
            :href="primaryLink.url"
            :target="primaryLink.target || '_self'"
            :to="primaryLink.route"
            class="project-list-item__title-link"
          >
            {{ project.title }}
          </component>
        </h3>
      </header>
      <p class="project-list-item__description">
        {{ project.description }}
      </p>
      <inline-link-list :links="project.links" />
    </div>
  </article>
</template>

<script>
import InlineLinkList from '@/components/InlineLinkList.vue'

export default {
  components: {
    InlineLinkList,
  },
  props: {
    project: {
      type: Object,
      default() {
        return {}
      },
    },
  },
  computed: {
    projectImage() {
      return `${require(`@/assets/images/projects/${
        this.project.imageDir
      }/vuepoint.${this.project.imageType || 'jpg'}`)}`
    },
    primaryLink() {
      let primaryLink
      if (this.project.links) {
        this.project.links.forEach((link) => {
          if (link.primary) primaryLink = link
        })
        if (!primaryLink) primaryLink = this.project.links[0]
      }
      return primaryLink || {}
    },
  },
}
</script>

<style lang="scss" scoped>
.project-list-item {
  display: grid;
  grid-template-rows: auto auto;
  gap: 1em;

  @media screen and (min-width: $lockMid) {
    grid-template-columns: 25% 1fr;
    grid-template-rows: 1fr;
  }

  & + & {
    border-top: 1px solid $darker;
    @include rhythm-spacing();
    @include rhythm-spacing($property: padding-top);
  }

  &__image {
    border-radius: 0.5rem;
    width: 250px;

    @media screen and (min-width: $lockMid) {
      width: 100%;
    }
  }

  &__title {
    font: $headingSm;
  }

  &__description {
    @include rhythm-spacing($multiplier: 0.25);

    @media screen and (min-width: $lockMid) {
      font: $copySm;
    }
  }
}
</style>
