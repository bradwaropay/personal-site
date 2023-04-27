import type { Meta, StoryObj } from '@storybook/vue3';

import Logo from './Logo.vue';

const meta: Meta<typeof Logo> = {
  title: 'Simple/Logo',
  component: Logo,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    solidColor: { control: 'color' },
    startColor: { control: 'color' },
    endColor: { control: 'color' },
    duration: { control:  { type: 'range', min:1, max:10, step: 1 } },
  }
};

export default meta;
type Story = StoryObj<typeof Logo>;

export const AnimatedGradient: Story = {
  args: {
    startColor: "#7a5fff",
    endColor: "#01ff89",
    duration: 10
  },
  parameters: {
    controls: { exclude: ['solidColor'] },
  },
};

export const SolidColor: Story = {
  args: {
    solidColor: '#efefef',
  },
  parameters: {
    controls: { exclude: ['startColor', 'endColor', 'duration'] },
  },
};