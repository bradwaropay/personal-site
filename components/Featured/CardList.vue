<script setup lang="ts">
import { computed } from '@vue/reactivity';
import { Card } from "~/components/Featured/Card.vue";

interface Props {
  cards: Card[]
}

const props = defineProps<Props>()

const listClasses = computed(() => {
  const evenOdd = props.cards.length % 2 === 0 ? 'even' : "odd";
  return `list list--has-${evenOdd}-items`
});
</script>

<template>
  <h2 class="heading">Featured Work</h2>
  <p class="description">A selection of recent work and personal projects. For more of my work check out my <a
      href="#">GitHub</a> and <a href="#">CodePen</a> accounts.</p>
  <ul :class="listClasses">
    <li class="item" v-for="card in cards">
      <FeaturedCard :card="card" />
    </li>
  </ul>
</template>

<style lang="scss" scoped>
.heading {
  @include heading;
}

.description {
  @media screen and (min-width: $bpMd) {
    font-size: $textMd;
  }
}

.list {
  display: grid;
  gap: $spSm;
  grid-auto-rows: 1fr;
  grid-template-columns: repeat(1, 1fr);
  margin-top: $spSm;

  @media screen and (min-width: $bpMd) {
    margin-top: $spMd;
  }

  @media screen and (min-width: $bpLg) {
    grid-template-columns: repeat(2, 1fr);
    margin-top: $spMd;

    &--has-odd-items {
      .item:first-child {
        grid-column: span 2;
      }
    }
  }
}
</style>