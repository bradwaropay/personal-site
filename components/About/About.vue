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
    <img class="image" src="~/assets/images/photo.webp" alt="Brad Waropay Portrait" height="320" width="320" />
  </article>
</template>

<style lang="scss" scoped>
.about {
  display: flex;
  flex-direction: column-reverse;
  gap: $spSm;
  align-items: flex-start;

  @media screen and (min-width: $bpLg) {
    font-size: $textMd;
    gap: $spMd;
    flex-direction: row;
  }
}

.image {
  max-width: 100%;
  border-radius: 50%;
  align-self: center;

  @media screen and (min-width: $bpLg) {
    align-self: flex-start;
  }
}

.content {
  flex-grow: 1;

  @media screen and (min-width: $bpMd) {
    font-size: $textMd;
  }
}

.heading {
  @include heading;
}

.description {
  :deep(p + p) {
    margin-top: $spXs;
  }
}
</style>