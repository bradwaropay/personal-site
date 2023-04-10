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
      <p class="description">{{ description }}</p>
    </div>
    <img class="image" src="http://via.placeholder.com/640x640" alt="Brad Waropay Portrait" />
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
  width: 20rem;
  min-width: 20rem;
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
</style>