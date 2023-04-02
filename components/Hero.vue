<script setup lang="ts">
export interface Link {
  title: string,
  path: string,
  target?: "self" | "blank"
}

interface Props {
  heading: string,
  description: string,
  links: Link[]
}

defineProps<Props>()
</script>

<template>
  <article class="hero">
    <Logo class="logo" />
    <div class="intro">
      <h1 class="heading">{{ heading }}</h1>
      <p class="description">{{ description }}</p>
      <footer class="footer">
        <ul class="list">
          <li class="item" v-for="link in links">
            <a class="link" :target="`_${link.target}`" :href="link.path">{{ link.title }}</a>
          </li>
        </ul>
      </footer>
    </div>
  </article>
</template>

<style lang="scss" scoped>
.hero {
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: $spMd;

  @media screen and (min-width: $bpLg) {
    flex-direction: row;
    text-align: left;
  }
}

.logo {
  min-width: 20rem;
  width: 20rem;
}

.intro {
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

.footer {
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