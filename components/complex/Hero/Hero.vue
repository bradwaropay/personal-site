<script setup lang="ts">
const { data } = await useAsyncData(`hero`, () => {
  return queryContent('/_partials/hero').findOne()
});
</script>

<template>
  <header :class="$style.hero">
    <div :class="$style['logo-container']">
      <Logo :class="$style.logo" />
    </div>
    <div :class="$style.intro">
      <h1 :class="$style.heading" v-html="data.title" v-if="data" />
      <div :class="$style.description">
        <ContentRenderer :value="data" v-if="data" />
      </div>
      <nav :class="$style.nav" v-if="data?.links?.length">
        <ul :class="$style.list">
          <li :class="$style.item" v-for="link in data.links">
            <NuxtLink class="$style.link" :to="link.path" external="true">{{
              link.label }}
            </NuxtLink>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<style lang="scss" module>
.hero {
  @include content;
  @include grid(lg, lg);

  grid-auto-rows: auto;
  padding-top: useSpacing(lg);
  padding-bottom: useSpacing(xl);

  @media screen and (min-width: useBreakpoint(md)) {
    padding-top: useSpacing(xl);
  }

  @media screen and (min-width: useBreakpoint(lg)) {
    align-items: center;
    padding-top: useSpacing(xxl);
    padding-bottom: useSpacing(xxl);
  }
}

.logo-container {
  grid-column: 1 / -1;
  justify-self: center;

  @media screen and (min-width: useBreakpoint(lg)) {
    grid-column: span 4;
  }
}

.intro {
  @include text(md);

  grid-column: 1 / -1;

  @media screen and (min-width: useBreakpoint(lg)) {
    grid-column: span 8;
  }
}

.heading {
  @include heading(lg);
}

.nav {
  margin-top: useSpacing(md);
}

.list {
  display: inline-flex;
  gap: useSpacing(sm);
}

.item {
  &:first-child::before {
    display: none;
  }

  &::before {
    content: "/";
    padding-right: useSpacing(sm);
  }
}
</style>