<script lang="ts" setup>

interface Props {
  label: string,
  value: string,
}

defineProps<Props>();

</script>

<template>
  <div :class="$style.input">
    <label :class="$style.label">{{ label }}</label>
    <textarea :class="$style.field" />
    <span :class="$style.error" v-if="error">Error:</span>
  </div>
</template>

<style lang="scss" module>
@import '../Input';

.field {
  min-height: useSpacing(xxl) * 1.5;
  resize: vertical;
}
</style>