<script lang="ts" setup>
import Open, { closeModal } from "./ControlsState"
import Options, { getInitialOptions, defaults } from './Options'

const particleControls = reactive([
  {
    label: 'Color',
    key: 'color',
    type: 'color'
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
    type: 'color'
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

const resetParticles = () => {
  Options.particle = { ...defaults.particle };
}
const resetConnections = () => {
  Options.connect = { ...defaults.connect };
}
</script>

<template>
  <Transition name="modal">
    <div class="container" v-if="Open" @click="closeModal">
      <div class="modal" role="dialog" aria-label="Particle Controls" aria-modal="true" v-if="Open" @click.stop>
        <h3 class=" heading">Particles</h3>
        <ul class="controls">
          <li class="control" v-for="control in particleControls">
            <label class="label">{{ control.label }}</label>
            <input v-if="control.type === 'range'" :class="`input input--is-${control.type}`" :type="control.type"
              :min="control.rangeMin" :max="control.rangeMax" :step="control.rangeStep"
              v-model="Options.particle[control.key as keyof ParticleOptions]" />
            <input v-if="control.type === 'color'" :class="`input input--is-${control.type}`" :type="control.type"
              v-model="Options.particle[control.key as keyof ParticleOptions]" />
            <span class="value">{{ Options.particle[control.key as keyof ParticleOptions] }}</span>
          </li>
          <li class="control control--is-reset">
            <InputButton label="Reset Particles" fullWidth :action="resetParticles" />
          </li>
        </ul>
        <h3 class="heading">Connections</h3>
        <ul class="controls">
          <li class="control" v-for="control in connectControls">
            <label class="label">{{ control.label }}</label>
            <input v-if="control.type === 'range'" :class="`input input--is-${control.type}`" :type="control.type"
              :min="control.rangeMin" :max="control.rangeMax" :step="control.rangeStep"
              v-model="Options.connect[control.key as keyof ConnectOptions]" />
            <input v-if="control.type === 'color'" :class="`input input--is-${control.type}`" :type="control.type"
              v-model="Options.connect[control.key as keyof ConnectOptions]" />
            <span class="value">{{ Options.connect[control.key as keyof ConnectOptions] }}</span>
          </li>
          <li class="control control--is-reset">
            <InputButton label="Reset Connections" fullWidth :action="resetConnections" />
          </li>
        </ul>
      </div>
    </div>
  </Transition>
</template>

<style lang="scss" scoped>
@keyframes fade-in {
  0% {
    transform: scale(0);
  }

  100% {
    transform: scale(1);
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
  background-color: rgba(var(--color-overlay-background-rgb), 0.5);
  display: grid;
  grid-template-columns: 1fr;
  place-items: center;
  height: 100vh;
  justify-content: center;
  position: fixed;
  width: 100%;
  z-index: 1;
  padding: var(--content-gutter);
  overflow-x: hidden;
  overflow-y: scroll;
}

.modal {
  background-color: rgba(var(--color-overlay-modal-rgb), 0.95);
  box-shadow: 0 0 0.5rem 0 rgba(black, 0.5);
  padding: useSpacing(md);
  border-radius: 1rem;
  width: 100%;
  max-width: 46rem;
}

.heading {
  @include heading(sm);
}

.controls {
  background-color: rgba(var(--color-neutral-baseAlt-rgb), 0.125);
  box-shadow: inset 0 0 0.25rem 0 rgba(black, 0.1);
  padding: useSpacing(md);

  &+* {
    margin-top: useSpacing(md);
  }
}

.control {
  align-items: center;
  display: flex;
  gap: useSpacing(md);
  position: relative;

  &+& {
    margin-top: useSpacing(xs);

    &--is-reset {
      margin-top: useSpacing(md);
    }
  }
}

.label {
  width: 20%;
  line-height: 1;
}

.input {
  flex-grow: 1;

  &--is-range {
    cursor: grab;

    &:active {
      cursor: grabbing;
    }

    &::-webkit-slider-runnable-track {
      background-color: var(--color-content-base);
      height: 0.125rem;
    }

    &::-webkit-slider-thumb {
      appearance: none;
      background-color: var(--color-action-base);
      border: none;
      border-radius: 50%;
      height: 1rem;
      width: 1rem;
      margin-top: -0.4375rem;
    }

    &:active,
    &:focus,
    &:hover {

      &::-webkit-slider-thumb {
        background-color: var(--color-action-accent);
        outline: 3px solid var(--color-content-base);
        outline-offset: 0.125rem;
      }
    }


    &::-moz-range-track {
      background-color: var(--color-content-base);
      height: 0.125rem;
    }

    &::-moz-range-thumb {
      appearance: none;
      background-color: var(--color-action-base);
      border: none;
      border-radius: 50%;
      height: 1rem;
      width: 1rem;
      margin-top: -0.4375rem;
    }

    &:active,
    &:focus,
    &:hover {

      &::-moz-range-thumb {
        background-color: var(--color-action-accent);
        outline: 3px solid var(--color-content-base);
        outline-offset: 0.125rem;
      }
    }
  }

  &--is-color {
    cursor: pointer;
    height: 1.25rem;

    &::-webkit-color-swatch-wrapper {
      padding: 0;
    }

    &::-webkit-color-swatch {
      border: none;
      box-shadow: 0 0 0.125rem 0 rgba(black, 0.25);
    }
  }
}

.value {
  width: 15%;
}
</style>