<script lang="ts" setup>
import Options from './Options'

const particleControls = reactive([
  {
    label: 'Color',
    key: 'color',
    type: 'text'
  },
  {
    label: 'Size',
    key: 'size',
    type: 'range',
    rangeMin: 1,
    rangeMax: 10,
    rangeStep: 1
  },
  {
    label: 'Velocity',
    key: 'velocity',
    type: 'range',
    rangeMin: 0.5,
    rangeMax: 10,
    rangeStep: 0.5
  },
])

const connectControls = reactive([
  {
    label: 'Color',
    key: 'color',
    type: 'text'
  },
  {
    label: 'Width',
    key: 'width',
    type: 'range',
    rangeMin: 0.5,
    rangeMax: 10,
    rangeStep: 0.5
  },
  {
    label: 'Distance',
    key: 'distance',
    type: 'range',
    rangeMin: 1,
    rangeMax: 400,
    rangeStep: 1
  },
  {
    label: 'Detect Radius',
    key: 'detectRadius',
    type: 'range',
    rangeMin: 0,
    rangeMax: 800,
    rangeStep: 1
  },
])
</script>

<template>
  <div class="container">
    <div class="modal">
      <h3 class="heading">Particles</h3>
      <ul class="controls">
        <li class="control" v-for="control in particleControls">
          <label class="label">{{ control.label }}</label>
          <input v-if="control.type === 'range'" :class="`input input--is-${control.type}`" :type="control.type"
            :min="control.rangeMin" :max="control.rangeMax" :step="control.rangeStep"
            v-model="Options.particle[control.key as keyof ParticleOptions]" />
          <input v-else :class="`input input--is-${control.type}`" :type="control.type"
            v-model="Options.particle[control.key as keyof ParticleOptions]" />
          <span class="value">{{ Options.particle[control.key as keyof ParticleOptions] }}</span>
        </li>
      </ul>
      <h3 class="heading">Connections</h3>
      <ul class="controls">
        <li class="control" v-for="control in connectControls">
          <label class="label">{{ control.label }}</label>
          <input v-if="control.type === 'range'" :class="`input input--is-${control.type}`" :type="control.type"
            :min="control.rangeMin" :max="control.rangeMax" :step="control.rangeStep"
            v-model="Options.connect[control.key as keyof ConnectOptions]" />
          <input v-else :class="`input input--is-${control.type}`" :type="control.type"
            v-model="Options.connect[control.key as keyof ConnectOptions]" />
          <span class="value">{{ Options.connect[control.key as keyof ConnectOptions] }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
  position: fixed;
  width: 100%;
  z-index: 1;
}

.modal {
  background-color: rgba($accentPrimary, 0.95);
  box-shadow: 0 0 0.5rem 0 rgba(black, 0.5);
  font-size: $textMd;
  padding: $spSm;
  border-radius: 1rem;
  width: 100%;
  max-width: 40rem;
}

.heading {
  @include heading(sm);
}

.controls {
  &+* {
    margin-top: $spSm;
  }
}

.controls {
  background-color: rgba($backgroundPrimary, 0.125);
  box-shadow: inset 0 0 0.25rem 0 rgba(black, 0.1);
  padding: $sp2Xs $spXs;
}

.control {
  display: flex;
  gap: $spSm;
}

.label {
  width: 25%;
}

.input {
  flex-grow: 1;

  &--is-range {}
}

.value {
  width: 25%;
}
</style>