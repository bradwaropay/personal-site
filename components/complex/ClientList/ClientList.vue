<script setup lang="ts">
const $style = useCssModule();

const clients = [
  {
    "name": "AbbVie",
    "logo": "abbvie"
  },
  {
    "name": "America's Test Kitchen",
    "logo": "americas-test-kitchen"
  },
  {
    "name": "The Dyrt",
    "logo": "the-dyrt"
  },
  {
    "name": "Electrolux",
    "logo": "electrolux"
  },
  {
    "name": "Fender Musical Instruments",
    "logo": "fender"
  },
  {
    "name": "Genentech",
    "logo": "genentech"
  },
  {
    "name": "meltmedia",
    "logo": "meltmedia"
  },
  {
    "name": "Tyson Foods",
    "logo": "tyson"
  },
];

const clientLogo = (logo: string) => {
  return `./svg/clients/${logo}.svg`
}
</script>


<template>
  <article>
    <h3 :class="$style.heading">
      A few of the clients I've worked with&hellip;
    </h3>
    <ul :class="$style.list">
      <li :class="$style.item" v-for="client in clients">
        <img :class="$style.logo" :src="clientLogo(client.logo)" :alt="client.name" height="110" width="300" />
      </li>
    </ul>
  </article>
</template>

<style lang="scss" module>
.heading {
  @include heading(sm);

  text-align: center;
}

.list {
  align-items: center;
  margin-top: useSpacing(md);

  @media screen and (min-width: 0) and (max-width: calc(useBreakpoint(sm) - 1px)) {
    @include grid(md, lg);

    .item {
      grid-column: span 2;

      &:nth-child(even) {
        justify-self: flex-start;
      }

      &:nth-child(odd) {
        justify-self: flex-end;

        &:last-child {
          grid-column: 2 / 4;
          justify-self: center;
        }
      }
    }
  }

  @media screen and (min-width: useBreakpoint(sm)) and (max-width: calc(useBreakpoint(md) - 1px)) {
    @include grid(md, lg);

    .item {
      grid-column: span 2;
      justify-self: center;

      &:nth-child(3n + 1) {
        justify-self: flex-end;
      }

      &:nth-child(3n + 3) {
        justify-self: flex-start;
      }

      &:nth-last-child(2) {
        &:nth-child(3n + 4) {
          grid-column: 2 / 4;
          justify-self: center;
        }
      }

      &:nth-last-child(1) {

        &:nth-child(3n + 4),
        &:nth-child(3n + 5) {
          justify-self: center;
        }

        &:nth-child(3n + 4) {
          grid-column: 3 / 5;
        }

        &:nth-child(3n + 5) {
          grid-column: 4 / 6;
        }
      }

      &:last-child:only-child {
        grid-column: 3 / 5;
        justify-self: center;
      }
    }
  }

  @media screen and (min-width: useBreakpoint(md)) and (max-width: calc(useBreakpoint(lg) - 1px)) {
    @include grid(md, lg);

    .item {
      grid-column: span 2;
      justify-self: center;

      &:nth-last-child(5) {
        &:nth-child(4n + 1) {
          grid-column: 2 / 4;
          justify-self: flex-end;
        }
      }

      &:nth-last-child(4) {
        &:nth-child(4n + 2) {
          grid-column: 4 / 6;
        }
      }

      &:nth-last-child(3) {
        &:nth-child(4n + 1) {
          grid-column: 2 / 4;
          justify-self: flex-end;
        }

        &:nth-child(4n + 3) {
          grid-column: 6 / 8;
          justify-self: flex-start;
        }
      }

      &:nth-last-child(2) {

        &:nth-child(4n + 4),
        &:nth-child(4n + 1) {
          grid-column: 3 / 5;
        }


        &:nth-child(4n + 2) {
          grid-column: 4 / 6;
        }
      }

      &:nth-last-child(1) {

        &:nth-child(4n + 5),
        &:nth-child(4n + 2) {
          grid-column: 5 / 7;
        }

        &:nth-child(4n + 3) {
          grid-column: 6 / 8;
          justify-self: flex-start;
        }
      }

      &:last-child:only-child {
        grid-column: 4 / 6;
      }
    }
  }

  @media screen and (min-width: useBreakpoint(lg)) {
    @include grid(lg, lg);

    margin-top: useSpacing(lg);

    .item {
      grid-column: span 3;
      justify-self: center;

      &:nth-last-child(5) {
        &:nth-child(4n + 1) {
          grid-column: 1 / 5;
          justify-self: flex-end;
        }
      }

      &:nth-last-child(4) {
        &:nth-child(4n + 2) {
          grid-column: 5 / 9;
        }
      }

      &:nth-last-child(3) {
        &:nth-child(4n + 1) {
          grid-column: 1 / 5;
          justify-self: flex-end;
        }

        &:nth-child(4n + 3) {
          grid-column: 9 / 13;
          justify-self: flex-start;
        }
      }

      &:nth-last-child(2) {

        &:nth-child(4n + 4),
        &:nth-child(4n + 1) {
          grid-column: 4 / 7;
        }


        &:nth-child(4n + 2) {
          grid-column: 5 / 9;
        }
      }

      &:nth-last-child(1) {

        &:nth-child(4n + 5),
        &:nth-child(4n + 2) {
          grid-column: 7 / 10;
        }

        &:nth-child(4n + 3) {
          grid-column: 9 / 13;
          justify-self: flex-start;
        }
      }

      &:last-child:only-child {
        grid-column: 5 / 9;
      }
    }
  }
}

.logo {
  display: block;
  height: auto;
  width: 100%;
  max-width: 8rem;

  @media screen and (min-width: useBreakpoint(md)) {
    max-width: 12rem;
  }
}
</style>