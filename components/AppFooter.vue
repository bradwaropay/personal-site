<template>
  <footer class="app-footer">
    <a
      v-for="(link, linkIndex) in $options.links"
      :key="linkIndex"
      :href="link.url"
      class="app-footer__link"
      target="_blank"
    >
      <p class="app-footer__link-copy">
        <span class="app-footer__link-copy-description">
          {{ link.discription }}
        </span>
        <span class="app-footer__link-copy-name">
          <font-awesome-icon
            :icon="[link.icon.type, link.icon.name]"
            class="app-footer__link-icon"
          />
          {{ link.name }}
        </span>
      </p>
    </a>
  </footer>
</template>

<script>
export default {
  links: [
    {
      url: 'https://github.com/bradwaropay',
      discription: 'Find me on',
      name: 'GitHub',
      icon: {
        type: 'fab',
        name: 'github-square',
      },
    },
    {
      url: 'https://twitter.com/bradwaropay',
      discription: 'Follow me on',
      name: 'Twitter',
      icon: {
        type: 'fab',
        name: 'twitter-square',
      },
    },
    {
      url: 'mailto:brad.waropay@gmail.com',
      discription: 'Get in touch by',
      name: 'Email',
      icon: {
        type: 'fas',
        name: 'envelope-square',
      },
    },
  ],
}
</script>

<style lang="scss" scoped>
.app-footer {
  display: grid;
  grid-auto-flow: row;

  @media screen and (min-width: $lockMid) {
    grid-auto-flow: column;
  }

  &__link {
    align-items: center;
    background-color: $light;
    color: $midDark;
    display: flex;
    padding: 2rem 3rem;
    text-decoration: none;
    transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;

    &:hover {
      background-color: $primary;
      color: $primaryLight;
    }
  }

  &__link-copy {
    line-height: 1;
    font-size: 2rem;
    white-space: nowrap;
  }

  &__link-copy-description {
    font-size: 1rem;
    display: block;
  }

  &__link-copy-name {
    font-family: $secondaryFont;
  }
}
</style>
