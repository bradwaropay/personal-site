<template>
  <div class="vuepoint">
    <div
      v-for="(layer, layerIndex) in layers"
      :key="layerIndex"
      :class="`vuepoint__layer vuepoint__layer--${layerIndex}`"
      :style="{
        transform: `translateZ(-${layer.depth}px) scale(${layerDepth + 1})`,
      }"
    >
      <slot :name="`layer-${layerIndex}`" />
    </div>
    <div class="vuepoint__foreground">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    layers: {
      type: Array,
      default() {
        return []
      },
    },
  },
}
</script>

<style lang="scss" scoped>
.vuepoint {
  height: 100%;
  overflow-y: scroll;
  perspective: 1px;
  perspective-origin: 0;
  position: relative;

  &__layer,
  &__foreground {
    height: 100%;
  }

  &__layer {
    position: absolute;
    transform-origin: 0;
    width: 100%;
  }

  &__foreground {
    transform: translateZ(0);
  }
}
</style>
