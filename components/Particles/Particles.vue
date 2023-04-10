<script setup lang="ts">
import { onMounted } from 'vue';
import generateParticles from './assets/scripts/particles';

interface Props {
  id?: string
}

const props = withDefaults(defineProps<Props>(), {
  id: "particles"
})

onMounted(() => {
  generateParticles({
    color: "#efefef",
    connect: {
      color: "#3eafc4"
    },
  });
})
</script>

<template>
  <canvas :id="id" />
</template>

<style lang="scss" scoped>
#particles {
  background-color: $backgroundPrimary;
  position: fixed;
  height: 100%;
  top: 0;
}
</style>