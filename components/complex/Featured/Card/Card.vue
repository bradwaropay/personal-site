<script setup lang="ts">
import type { ParsedContent } from '@nuxt/content/dist/runtime/types'

export interface CardProps extends ParsedContent {
  image: string,
  heading: string,
  description: string,
  path: string,
  madeWith: string[]
}

interface Props {
  card: CardProps,
}

defineProps<Props>()
</script>

<template>
  <a :class="$style.link" :href="card.path">
    <Card :class="$style.card">
      <div :class="$style['image-container']">
        <FeaturedCardImage :class="$style.image" :image="card.image" />
      </div>
      <div :class="$style.content">
        <h3 :class="$style.heading">{{ card.heading }}</h3>
        <p :class="$style.description">{{ card.description }}</p>
      </div>
      <footer :class="$style.footer" v-if="card.madeWith?.length > 0">
        <p :class="$style.label">Made with:</p>
        <ul :class="$style.list">
          <li :class="$style.item" v-for="icon in card.madeWith">
            <DevIcon :class="$style.icon" :icon="icon" />
          </li>
        </ul>
      </footer>
    </Card>
  </a>
</template>

<style lang="scss" module>
:root {
  --featured-card-background-hover: rgba(var(--color-accent-secondary-200-rgb), 0.375);
  --featured-card-color-link: var(--color-content-primary-100);
  --featured-card-color-image: var(--color-accent-primary-200);
  --featured-card-color-label: var(--color-accent-secondary-100);
  --featured-card-color-icon: var(--color-accent-primary-200);
}

.link {
  color: var(--featured-card-color-link);
  text-decoration: none;

  &:hover,
  &:focus,
  &:active {
    text-decoration: none;

    .card {
      background-color: var(--featured-card-background-hover);
    }

    .heading {
      @include linkHover;
    }
  }
}

.card {
  display: grid;
  gap: useSpacing(sm) useSpacing(md);
  grid-template-areas:
    "image"
    "content"
    "footer";
  grid-template-rows: auto 1fr auto;
  height: 100%;
  padding: useSpacing(md);
  transition:
    background-color 0.2s linear,
    border-color 0.2s linear;

  @media screen and (min-width: useBreakpoint(sm)) {
    grid-template-areas:
      "image content"
      "image footer";
    grid-template-columns: auto 1fr;
    grid-template-rows: 1fr auto;
  }
}

.image-container {
  grid-area: image;
}

.image {
  color: var(--featured-card-color-image);
  height: 5rem;
  width: 5rem;
}

.content {
  grid-area: content;
}

.heading {
  @include link;
  @include heading(sm);
}

.footer {
  align-items: center;
  display: flex;
  gap: useSpacing(sm);
  grid-area: footer;
  margin-top: useSpacing(sm);
}

.label {
  color: var(--featured-card-color-label);
}

.list {
  display: flex;
  gap: useSpacing(sm);
}

.icon {
  color: var(--featured-card-color-icon);
  font-size: useSpacing(md);
  vertical-align: middle;
}
</style>