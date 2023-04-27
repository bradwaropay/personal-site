<script setup lang="ts">
import { computed } from '@vue/reactivity';

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
        <ul class="list">
          <li class="item" v-for="icon in card.builtWith">
            <i :class="`icon devicon-${icon}-plain`" :title="icon" />
          </li>
        </ul>
      </footer>
    </article>
  </a>
</template>

<style lang="scss" scoped>
.link {
  color: $contentPrimary;
  text-decoration: none;

  &:hover,
  &:focus,
  &:active {

    .card {
      background-color: rgba($contentPrimary, 0.075);
      border-color: $actionPrimary;
    }

    .heading {
      @include linkHover;
    }
  }
}

.card {
  border-radius: 1rem;
  border: 0.25rem dashed $actionSecondary;
  display: grid;
  gap: $spXs $spSm;
  grid-template-areas:
    "image"
    "content"
    "footer";
  grid-template-rows: auto 1fr auto;
  height: 100%;
  padding: $spSm;
  transition:
    background-color 0.2s linear,
    border-color 0.2s linear;

  @media screen and (min-width: $bpSm) {
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

  font-size: $textLg;
  font-weight: 700;
  line-height: 1;
}

.description {
  margin-top: $sp2Xs;
}

.footer {
  display: flex;
  grid-area: footer;
  justify-content: flex-end;
}

.list {
  display: flex;
  gap: $sp2Xs;
  margin-top: $sp2Xs;
}

.icon {
  color: $accentSecondary;
  font-size: $textMd;
  vertical-align: bottom;
}

.description {
  grid-area: description;
}
</style>