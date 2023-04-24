import type { Meta, StoryObj } from '@storybook/vue3';

import Hero from './Hero.vue';

import data from '~/assets/data/data.json';
const { hero } = data;

const meta: Meta<typeof Hero> = {
  title: 'Hero',
  component: Hero,
  parameters: {
    layout: 'centered',
  },
  args: {
    heading: hero.heading,
    description: hero.description,
    links: hero.links
  },
  argTypes: {
    links: hero.links
  }
};

export default meta;
type Story = StoryObj<typeof Hero>;

export const Primary: Story = {
  parameters: {

  },
};