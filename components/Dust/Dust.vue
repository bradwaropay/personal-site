<script setup lang="ts">
import Particles from './assets/scripts/particles';

interface Props {
  id?: string
}

const props = withDefaults(defineProps<Props>(), {
  id: "dust"
})

onMounted(() => {
  Particles(props.id);
})
</script>

<template>
  <canvas :id="id" />
</template>

<style lang="scss" scoped>
#dust {
  background-color: $backgroundPrimary;
  position: fixed;
  height: 100%;
  top: 0;
}
</style>