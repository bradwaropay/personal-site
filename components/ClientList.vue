<script setup lang="ts">
import { computed } from '@vue/reactivity';

interface Client {
  name: string,
  logo: string
}

interface Props {
  clients: Client[]
}

const props = defineProps<Props>()


const clientLogo = (logo: string) => {
  return `logos/${logo}.svg`
}

const listClasses = computed(() => {
  const evenOdd = props.clients.length % 2 === 0 ? 'even' : "odd";
  return `list list--has-${evenOdd}-items`
});
</script>


<template>
  <h3 class="heading">A few of the clients I've worked with…</h3>
  <ul :class="listClasses">
    <li class="item" v-for="client in clients">
      <img class="logo" :src="clientLogo(client.logo)" :alt="client.name" />
    </li>
  </ul>
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
  grid-template-columns: repeat(2, 1fr);
  margin-top: $spSm;

  @media screen and (min-width: $bpSm) {
    gap: $spMd;
    grid-template-columns: repeat(3, 1fr);
    margin-top: $spMd;


    &--has-even-items {
      .item:last-child {
        grid-column: span 1 / -1;
      }
    }
  }

  @media screen and (min-width: $bpLg) {
    gap: $spMd $spLg;
    grid-template-columns: repeat(4, 1fr);
  }
}
</style>