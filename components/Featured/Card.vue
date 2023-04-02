<script setup lang="ts">
import { computed } from '@vue/reactivity';

export interface Card {
  image: string,
  heading: string,
  description: string,
  path: string,
}

interface Props {
  card: Card
}

defineProps<Props>()
</script>

<template>
  <a class="card" target="_blank" href={{ card.path }}>
    <div class="images">
      <img class="image" src="http://via.placeholder.com/640x640" alt="" />
      <ul class="list">
        <li class="item"><i class="icon devicon-react-plain" title="react" /></li>
      </ul>
    </div>
    <div class="content">
      <h3 class="heading">{{ card.heading }}</h3>
      <p class="description">{{ card.description }}</p>
    </div>
  </a>
</template>

<style lang="scss" scoped>
.card {
  border-radius: 1rem;
  border: 0.25rem dashed $sulphur;
  color: $contentPrimary;
  display: flex;
  gap: $spSm;
  min-height: 100%;
  padding: $spSm;
  text-decoration: none;

  &:hover,
  &:focus,
  &:active {
    background-color: rgba($contentPrimary, 0.025);
    border-color: $actionPrimary;

    .featured-link-heading {
      color: $actionSecondary;
    }
  }
}

.content {
  min-width: 75%;
  max-width: 75%;
}

.heading {
  color: #f1511a;
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 1;
}

.description {
  margin-top: $spXs;
}
</style>