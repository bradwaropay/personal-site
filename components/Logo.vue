<script setup lang="ts">
import { computed } from 'vue';

interface Props {
  startColor?: `#${string}`
  endColor?: `#${string}`
  duration?: number
}

const props = withDefaults(defineProps<Props>(), {
  startColor: "#7a5fff",
  endColor: "#01ff89",
  duration: 10
})

const startGradient = computed(() => { return `${props.startColor}; ${props.endColor}; ${props.startColor}` });
const endGradient = computed(() => { return `${props.endColor}; ${props.startColor}; ${props.endColor}` });
const durationSeconds = computed(() => { return `${props.duration}s` });
</script>

<template>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 89.01" aria-labelledby="logo-title">
    <title id="logo-title">Brad Waropay Logo</title>
    <defs>
      <linearGradient id="logo-gradient" x1="50%" y1="0%" x2="50%" y2="100%">
        <stop offset="0%" :stop-color="startColor">
          <animate attributeName="stop-color" :values="startGradient" :dur="durationSeconds" repeatCount="indefinite">
          </animate>
        </stop>
        <stop offset="100%" :stop-color="endColor">
          <animate attributeName="stop-color" :values="endGradient" :dur="durationSeconds" repeatCount="indefinite">
          </animate>
        </stop>
      </linearGradient>
    </defs>
    <g fill="url('#logo-gradient')">
      <path
        d="m14.84,58.52c0,8.63,7.02,15.66,15.66,15.66s15.66-7.02,15.66-15.66-7.02-15.66-15.66-15.66v7.14c4.7,0,8.52,3.82,8.52,8.52s-3.82,8.52-8.52,8.52-8.52-3.82-8.52-8.52V0h-7.14v58.52Z" />
      <path
        d="m53.85,58.52c0,8.63,7.02,15.66,15.66,15.66s15.66-7.02,15.66-15.66v-15.66h-15.66v7.14h8.52v8.52c0,4.7-3.82,8.52-8.52,8.52s-8.52-3.82-8.52-8.52c0-16.81-13.68-30.49-30.49-30.49v7.14c12.88,0,23.35,10.48,23.35,23.35Z" />
      <path
        d="m69.51,28.02v7.14h23.35v23.35c0,12.88-10.48,23.35-23.35,23.35-8.15,0-15.33-4.19-19.51-10.53-4.18,6.34-11.36,10.53-19.51,10.53-6.02,0-11.51-2.29-15.66-6.04v2.2h-7.69V0H0v78.02h7.08c5.6,6.71,14.02,10.99,23.42,10.99,7.41,0,14.21-2.66,19.51-7.08,5.29,4.41,12.09,7.08,19.51,7.08,16.81,0,30.49-13.68,30.49-30.49v-30.49h-30.49Z" />
    </g>
  </svg>
</template>