<template>
  <section class="about-section">
    <header class="about-section__header">
      <img
        alt="Brad Waropay Portrait"
        class="about-section__image"
        sizes="500px"
        srcset="
          @/assets/images/logo-primary_light-primary-500x500.jpg    500w,
          @/assets/images/logo-primary_light-primary-1000x1000.jpg 1000w
        "
      />
      <div class="about-section__content">
        <h1 class="about-section__title">{{ heading }}</h1>
        <p class="about-section__description">{{ description }}</p>
      </div>
    </header>
    <slot />
    <footer class="about-section__footer">
      <h3 class="about-section__links-heading">
        {{ linksHeading }}
      </h3>
      <inline-link-list :links="links" class="about-section__links" />
    </footer>
  </section>
</template>

<script>
import InlineLinkList from '@/components/InlineLinkList.vue'

export default {
  components: {
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
      linksHeading: 'Other places you can find me…',
    }
  },
}
</script>

<style lang="scss" scoped>
.about-section {
  &__header {
    align-items: center;
    display: grid;
    grid-template-rows: auto auto;
    @include rhythm-spacing($multiplier: 1.5, $property: 'gap');

    @media screen and (min-width: $lockMid) {
      grid-template-columns: 33% 1fr;
      grid-template-rows: 1fr;
      @include rhythm-spacing($property: 'gap');
    }

    & + * {
      @include rhythm-spacing($multiplier: 1.5);
    }
  }

  &__image {
    justify-self: center;
    border-radius: 100%;
    max-width: 300px;
    width: 100%;

    @media screen and (min-width: $lockMid) {
      max-width: 100%;
    }
  }

  &__title {
    font: $headingLg;
  }

  &__description {
    @media screen and (min-width: $lockMid) {
      font-size: 0.75em;
    }
  }

  &__footer {
    border-top: 1px solid $primary;
    @include rhythm-spacing($multiplier: 2);
  }

  &__links-heading {
    font-family: $secondaryFont;
    font-size: 1.25em;
    @include rhythm-spacing($multiplier: 0.5);
  }

  &__links {
    margin-top: 0;
  }
}
</style>
