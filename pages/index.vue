<template>
  <section :class="{ 'intro--loaded': loaded }" class="intro">
    <h1 class="intro__heading">
      {{ $options.heading }}
    </h1>
    <p class="intro__body">
      {{ $options.body }}
    </p>
    <div class="intro__list-container">
      <ul class="intro__list" @mouseleave="resetLinkIndicator()">
        <li
          v-for="(listItem, listItemIndex) in $options.linkList"
          :key="listItemIndex"
          class="intro__list-item"
        >
          <a
            :href="listItem.link"
            class="intro__list-link"
            @mouseover="setLinkIndicator($event.target)"
          >
            {{ listItem.label }}
          </a>
        </li>
      </ul>
      <div
        :style="{
          left: linkIndicator.position + 'px',
          width: linkIndicator.width + 'px'
        }"
        class="intro__list-link-indicator"
      />
    </div>
  </section>
</template>

<script>
export default {
  heading: "Hi, I'm Brad Waropay.",
  body:
    "I'm a developer, designer, and technology enthusiast with a passion for problem solving and an obsession with craftsmanship. I create clean, maintainable, and reusable design systems and component libraries with emphasis on scalability, intuitive patterns, and meaningful interactions.",
  linkList: [
    {
      link: "https://codepen.io/bradwaropay",
      label: "CodePen"
    },
    {
      link: "https://github.com/bradwaropay",
      label: "GitHub"
    },
    {
      link: "https://twitter.com/bradwaropay",
      label: "Twitter"
    },
    {
      link: "mailto:brad.waropay@gmail.com",
      label: "Contact"
    },
    {
      link: "Brad_Waropay_Resume_2019.pdf",
      label: "Resume"
    }
  ],
  data() {
    return {
      loaded: false,
      linkIndicator: {
        active: false,
        position: 0,
        width: 0
      }
    }
  },
  mounted() {
    setTimeout(() => {
      this.loaded = true
    }, 1000)
  },
  methods: {
    setLinkIndicator: function(link) {
      this.linkIndicator.active = true
      this.linkIndicator.position = link.offsetLeft
      this.linkIndicator.width = link.offsetWidth
    },
    resetLinkIndicator: function() {
      this.linkIndicator.active = false
      setTimeout(() => {
        if (this.linkIndicator.active === false) {
          this.linkIndicator.position = 0
          this.linkIndicator.width = 0
        }
      }, 500)
    }
  }
}
</script>

<style lang="postcss">
.intro {
  opacity: 0;
  position: relative;
  max-width: 64rem;
  transform: scale(0.95);
  transition: opacity 0.8s ease-out, transform 0.8s ease-out;

  &--loaded {
    opacity: 1;
    transform: scale(1);
  }

  &__heading {
    font-family: "Abril Fatface", serif;
    font-size: 6.3rem;
    line-height: 1;
  }

  &__body {
    font-family: "Roboto", sans-serif;
    font-size: 1.8rem;
    line-height: 1.6;
    margin-top: 2.88rem;
  }

  &__list-container {
    margin-top: 2.88rem;
  }

  &__list {
    display: flex;
    font-family: "Roboto", sans-serif;
    font-size: 1.8rem;
    line-height: 1.6;
  }

  &__list-item {
    & + * {
      & > * {
        margin-left: 1rem;
      }

      &::before {
        content: "/";
        margin-left: 1rem;
      }
    }
  }

  &__list-link {
    color: #00a99d;
    display: inline-block;
    text-decoration: none;

    &--active {
      background-color: yellow;
    }
  }

  &__list-link-indicator {
    background-color: #00a99d;
    height: 0.3rem;
    position: relative;
    transition: left 0.2s ease-in-out, width 0.2s ease-in-out;
  }
}
</style>
