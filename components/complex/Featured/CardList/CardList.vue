<script setup lang="ts">
const { data } = reactive(await useAsyncData(`featured-card-list`, () => {
  return queryContent('/_partials/featured-card-list').findOne()
}));

const $style = useCssModule();

const containerClasses = computed(() => {
  const classes = [$style.container];

  if (data?.cards.length === 1) classes.push($style['container--has-one-item']);

  return classes
});

const listClasses = computed(() => {
  const classes = [$style.list];
  const evenOdd = data?.cards.length % 2 === 0 ? 'even' : "odd";

  if (data?.cards.length > 1) classes.push($style[`list--has-${evenOdd}-items`]);

  return classes
});

const description = computed(() => {
  if (data)
    return data.cards.length
      ? data.header.descriptionPrependHasCards + data.header.description
      : data.header.descriptionPrependHasNoCards + data.header.description;
});
</script>

<template>
  <article :class="containerClasses">
    <header :class="$style.header" v-if="data?.header">
      <h2 :class="$style.heading">{{ data.header.heading }}</h2>
      <p :class="$style.description" v-html="description" />
    </header>
    <ul :class="listClasses" v-if="data?.cards">
      <li :class="$style.item" v-for="card, i in data.cards">
        <FeaturedCard :card="card" />
      </li>
    </ul>
  </article>
</template>

<style lang="scss" module>
.container {
  @media screen and (min-width: useBreakpoint(lg)) {
    &--has-one-item {
      @include grid;

      .header,
      .list {
        grid-column: span 6;
      }

      .list {
        margin-top: 0;
      }
    }
  }
}

.heading {
  @include heading;
}

.description {
  @include text(md);
}

.list {
  @include grid;
  margin-top: useSpacing(md);

  @media screen and (min-width: useBreakpoint(lg)) {

    &--has-odd-items {
      .item:last-child {
        grid-column: 4 / 10;
      }
    }
  }
}

.item {
  grid-column: span 4;

  @media screen and (min-width: useBreakpoint(sm)) {
    grid-column: span 8;
  }

  @media screen and (min-width: useBreakpoint(lg)) {
    grid-column: span 6;

    &:only-child {
      grid-column: span 12;
    }
  }
}
</style>