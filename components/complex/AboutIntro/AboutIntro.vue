<script setup lang="ts">
const { data } = await useAsyncData(`about-intro`, () => {
  return queryContent('/_partials/about-intro').findOne()
});

</script>

<template>
  <article :class="$style.about">
    <div :class="$style.content">
      <header :class="$style.header" v-if="data?.title">
        <h2 :class="$style.heading">{{ data.title }}</h2>
      </header>
      <div :class="$style.description" v-if="data">
        <ContentRenderer :value="data" />
        <p>Have a project I can help with? <a href="#contact">Let's work together!</a></p>
      </div>
    </div>
    <div :class="$style.avatar">
      <Avatar />
    </div>
  </article>
</template>

<style lang="scss" module>
.about {
  @include grid;

  grid-template-areas:
    "avatar"
    "content";
  grid-template-rows: auto;

  @media screen and (min-width: useBreakpoint(lg)) {
    grid-template-areas: "content avatar";
  }
}

.content {
  @include text(md);

  grid-area: content;
  grid-column: 1 / -1;

  @media screen and (min-width: useBreakpoint(lg)) {
    grid-column: span 8;
  }
}

.header {
  &+* {
    margin-top: useSpacing(sm);
  }
}

.heading {
  @include heading(md);
}

.description {
  *+* {
    margin-top: useSpacing(sm);
  }
}

.avatar {
  grid-area: avatar;
  grid-column: 1 / -1;
  justify-self: center;
  text-align: center;

  @media screen and (min-width: useBreakpoint(lg)) {
    grid-column: span 4;
  }
}
</style>