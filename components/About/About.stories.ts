import type { Meta, StoryObj } from '@storybook/vue3';

import About from './About.vue';

import data from '~/assets/data/data.json';

const { about } = data;

const meta: Meta<typeof About> = {
  title: 'Complex/About',
  component: About,
  parameters: {
    layout: 'centered',
  },
  args: {
    heading: about.heading,
    description: about.description
  }
};

export default meta;
type Story = StoryObj<typeof About>;

export const Primary: Story = {};