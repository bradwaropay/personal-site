<script setup lang="ts">
export interface Link {
  title: string,
  path: string,
}

interface Props {
  heading: string,
  description: string,
  links?: Link[]
}

defineProps<Props>()
</script>

<template>
  <header class="hero">
    <Logo class="logo" />
    <div class="intro">
      <h1 class="heading">{{ heading }}</h1>
      <p class="description">{{ description }}</p>
      <nav class="nav" v-if="links?.length">
        <ul class="list">
          <li class="item" v-for="link in links">
            <a class="link" :href="link.path">{{ link.title }}</a>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.hero {
  @include content;

  align-items: center;
  display: flex;
  flex-direction: column;
  gap: useSpacing(lg);
  padding-top: useSpacing(xl);

  @media screen and (min-width: useBreakpoint(lg)) {
    flex-direction: row;
    padding-top: useSpacing(xxl);
    text-align: left;
  }
}

.logo {
  min-width: 20rem;
}

.intro {
  @include text(md);

  flex-grow: 1;
}

.heading {
  @include heading(lg);
}

.description {
  margin-top: useSpacing(md);
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