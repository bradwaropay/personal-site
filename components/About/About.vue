<script setup lang="ts">
interface Props {
  heading: string,
  description: string
}

defineProps<Props>()
</script>

<template>
  <article class="about">
    <div class="content">
      <h2 class="heading">{{ heading }}</h2>
      <div class="description" v-html="description" />
    </div>
    <img class="image" src="/images/photo.webp" alt="Brad Waropay Portrait" height="320" width="320" />
  </article>
</template>

<style lang="scss" scoped>
.about {
  @include text(md);

  display: flex;
  flex-direction: column-reverse;
  gap: useSpacing(md);
  align-items: flex-start;

  @media screen and (min-width: useBreakpoint(lg)) {
    gap: useSpacing(lg);
    flex-direction: row;
  }
}

.image {
  max-width: 100%;
  border-radius: 50%;
  align-self: center;

  @media screen and (min-width: useBreakpoint(lg)) {
    align-self: flex-start;
  }
}

.content {
  @include text(md);

  flex-grow: 1;
}

.heading {
  @include heading(md);
}

.description {
  :deep(p + p) {
    margin-top: useSpacing(sm);
  }
}
</style>