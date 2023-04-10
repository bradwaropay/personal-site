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
  gap: $spMd;
  padding-top: $spLg;

  @media screen and (min-width: $bpLg) {
    flex-direction: row;
    padding-top: $spXl;
    text-align: left;
  }
}

.logo {
  min-width: 20rem;
  width: 20rem;
}

.intro {
  flex-grow: 1;
  position: relative;

  @media screen and (min-width: $bpMd) {
    font-size: $textMd;
  }
}

.heading {
  @include heading(lg);
}

.description {
  margin-top: $spSm;
}

.nav {
  margin-top: $spSm;
}

.list {
  display: inline-flex;
  gap: $spXs;
}

.item {
  &::before {
    content: "/";
    padding-right: $spXs;
  }

  &:first-child::before {
    display: none;
  }
}
</style>