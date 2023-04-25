<script setup lang="ts">
import { computed } from '@vue/reactivity';

interface Client {
  name: string,
  logo: string
}

interface Props {
  heading?: string,
  clients: Client[]
}

const props = defineProps<Props>()


const clientLogo = (logo: string) => {
  return `./svg/clients/${logo}.svg`
}

const listClasses = computed(() => {
  const classList = ['list'];
  const oddCheck = props.clients.length % 4;
  const evenOdd = oddCheck === 0 ? 'even' : "odd";

  if (evenOdd === 'odd') {
    classList.push(`list--has-odd-items`);

    switch (oddCheck) {
      case 1:
        classList.push(`list--has-odd-items-one`);
        break;
      case 3:
        classList.push(`list--has-odd-items-three`);
        break;
    }
  }

  return classList;
});
</script>


<template>
  <h3 class="heading" v-if="!!heading">{{ heading }}</h3>
  <ul :class="listClasses">
    <li class="item" v-for="client in clients">
      <img class="logo" :src="clientLogo(client.logo)" :alt="client.name" height="110" width="300" />
    </li>
  </ul>
  <p class="more-info">Check out <a href="/Brad_Waropay-Resume-2023.pdf">my resume</a> for more info.
  </p>
</template>

<style lang="scss" scoped>
.heading {
  @include heading(sm);

  *+& {
    margin-top: 6rem;
  }
}

.list {
  align-items: center;
  display: grid;
  gap: $spSm $spMd;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  margin-top: $spSm;

  @media screen and (min-width: $bpSm) {
    gap: $spSm $spMd;
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }

  @media screen and (min-width: $bpLg) {
    gap: $spMd $spLg;
    margin-top: $spMd;
  }

  &--has-odd-items {
    grid-template-columns: repeat(4, minmax(0, 1fr));

    .item {
      grid-column: span 2;

      &:last-child {
        grid-column: 2 / 4;
      }

      @media screen and (min-width: $bpSm) {
        &:last-child {
          grid-column: span 2;
        }
      }
    }
  }

  &--has-odd-items-one {

    @media screen and (min-width: $bpSm) {
      grid-template-columns: repeat(6, minmax(0, 1fr));
    }

    @media screen and (min-width: $bpLg) {
      grid-template-columns: repeat(10, minmax(0, 1fr));
    }

    .item {
      @media screen and (min-width: $bpLg) {
        &:nth-last-child(4) {
          grid-column: 2 / 4;
        }
      }

    }
  }

  &--has-odd-items-three {

    @media screen and (min-width: $bpSm) {
      grid-template-columns: repeat(8, minmax(0, 1fr));
    }

    .item {

      @media screen and (min-width: $bpSm) {

        &:nth-last-child(3) {
          grid-column: 2 / 4;
        }
      }
    }
  }
}

.logo {
  height: auto;
}

.more-info {
  text-align: center;
  margin-top: $spMd;

  @media screen and (min-width: $bpSm) {
    font-size: $textMd;
  }
}
</style>