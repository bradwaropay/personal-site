<script setup lang="ts">

export interface Card {
  image: string,
  heading: string,
  description: string,
  path: string,
  builtWith: string[]
}

interface Props {
  card: Card,
}

const props = defineProps<Props>()
</script>

<template>
  <a class="link" :href="card.path">
    <article class="card">
      <img class="image" :src="`svg/featured/${card.image}.svg`" :alt="card.description" height="100" width="100" />
      <div class="content">
        <h3 class="heading">{{ card.heading }}</h3>
        <p class="description">{{ card.description }}</p>
      </div>
      <footer class="footer">
        <p class="label">Made with:</p>
        <ul class="list">
          <li class="item" v-for="icon in card.builtWith">
            <i :class="`icon devicon-${icon}-plain`" :title="icon" />
          </li>
        </ul>
      </footer>
    </article>
  </a>
</template>

<!-- Theme variables -->
<style>
:root {
  --featured-card-color-link: var(--color-content-primary-100);
  --featured-card-color-icon: var(--color-accent-primary-200);
  --featured-card-color-label: var(--color-accent-secondary-100);
  --featured-card-background: var(--color-accent-secondary-200-rgb);
}
</style>

<style lang="scss" scoped>
// Component variables

.link {
  color: var(--featured-card-color-link);
  text-decoration: none;

  &:hover,
  &:focus,
  &:active {

    .card {
      background-color: rgba(var(--featured-card-background), 0.375);
    }

    .heading {
      @include linkHover;
    }
  }
}

.card {
  background-color: rgba(var(--featured-card-background), 0.125);
  border-radius: 1rem;
  display: grid;
  gap: useSpacing(md);
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

.image {
  grid-area: image;
  height: 5rem;
  width: 5rem;
}

.content {
  grid-area: content;
}

.heading {
  @include link;
  @include text(lg);

  font-weight: 700;
  line-height: 1;
}

.description {
  margin-top: useSpacing(xs);
}

.footer {
  align-items: center;
  display: flex;
  gap: useSpacing(sm);
  grid-area: footer;
}

.label {
  color: var(--featured-card-color-label);
}

.list {
  display: flex;
  gap: useSpacing(xs);
}

.icon {
  @include text(md);

  color: var(--featured-card-color-icon);
  vertical-align: middle;
}

.description {
  grid-area: description;
}
</style>