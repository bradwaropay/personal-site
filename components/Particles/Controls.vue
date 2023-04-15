<script lang="ts" setup>
import Open from "./ControlsState"
import Options from './Options'

const close = () => {
  Open.value = false;
}

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
  <Transition name="modal">
    <div class="container" v-if="Open" @click="close">
      <div class="modal" role="dialog" aria-label="Particle Controls" aria-modal="true" v-if="Open" @click.stop>
        <h3 class=" heading">Particles</h3>
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
  </Transition>
</template>

<style lang="scss" scoped>
@keyframes fade-in {
  0% {
    transform: translateY(10rem);
  }

  100% {
    transform: translateY(0);
  }
}

.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.4s ease-in-out;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

.modal-enter-active {
  .modal {
    animation: fade-in 0.4s;
  }
}

.modal-leave-active {
  .modal {
    animation: fade-in 0.4s reverse;
  }
}

.container {
  align-items: center;
  background-color: rgba($backgroundPrimary, 0.5);
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