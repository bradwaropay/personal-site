import { reactive } from "vue";

export const Options: Options = reactive({
  backgroundColor: '#0d1b27',
  density: 20,
  particle: {
    color: '#efefef',
    size: 1,
    velocity: 0.5,
  },
  connect: {
    color: '#3eafc4',
    width: 0.5,
    distance: 100,
    detectRadius: 200,
  }
});

export default Options;