import { reactive } from "vue";

export const getInitialOptions = () => ({
  backgroundColor: '#0d2529',
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
} as Options);

export const defaults: Options = getInitialOptions();

export const Options: Options = reactive(getInitialOptions());

export default Options;