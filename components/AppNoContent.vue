<template>
  <div class="app-no-content">
    <p class="app-no-content__message">Nothing is posted right now, please check back later!</p>
    <p class="app-no-content__message">
      For other samples of my work find me on&hellip;<br />
      <a href="https://github.com/bradwaropay">Github</a>, <a href="https://codepen.io/bradwaropay">CodePen</a>, and
      <a href="https://dribbble.com/bradwaropay">Dribbble</a>.
    </p>
  </div>
</template>

<style lang="scss" scoped>
.app-no-content {
  &__message {
    & + & {
      @include rhythm-spacing($multiplier: 0.25);
    }
  }
}
</style>
