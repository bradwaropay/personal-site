<script setup lang="ts">

interface Props {
  image: string,
}

const props = withDefaults(defineProps<Props>(), {
  image: "Warlock"
})

const Image = defineAsyncComponent(() => import(`./Source/${props.image}.vue`))
</script>

<template>
  <Image :class="$style.image" />
</template>

<style lang="scss" module>
.image {
  max-width: 100%;
}
</style>