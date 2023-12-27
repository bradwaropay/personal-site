<script setup lang="ts">
interface Props {
  icon: string,
}

defineProps<Props>()
</script>

<template>
  <i :class="`icon devicon-${icon}-plain`" :title="icon" />
</template>