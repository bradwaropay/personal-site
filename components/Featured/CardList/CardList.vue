<script setup lang="ts">
import { computed } from '@vue/reactivity';
import { Card } from "~/components/Featured/Card.vue";

interface Props {
  heading?: string;
  description?: string;
  cards: Card[]
}

const props = defineProps<Props>()

const listClasses = computed(() => {
  const classes = ['list'];
  const evenOdd = props.cards.length % 2 === 0 ? 'even' : "odd";

  if (props.cards.length > 1) classes.push(`list--has-${evenOdd}-items`);

  return classes
});
</script>

<template>
  <h2 class="heading" v-if="!!heading">{{ heading }}</h2>
  <div class="description" v-if="!!description" v-html="description" />
  <ul :class="listClasses">
    <li class="item" v-for="card, i in cards">
      <FeaturedCard :card="card" />
    </li>
  </ul>
</template>

<style lang="scss" scoped>
.heading {
  @include heading;
}

.description {
  @include text(md);
}

.list {
  display: grid;
  gap: useSpacing(md);
  grid-auto-rows: 1fr;
  grid-template-columns: repeat(1, 1fr);
  margin-top: useSpacing(lg);

  @media screen and (min-width: useBreakpoint(lg)) {
    grid-template-columns: repeat(4, 1fr);

    &--has-odd-items {
      .item:last-child {
        grid-column: 2 / 4;
      }
    }
  }
}

.item {
  @media screen and (min-width: useBreakpoint(lg)) {
    grid-column: span 2;

    &:only-child {
      grid-column: span 4;
    }
  }
}
</style>