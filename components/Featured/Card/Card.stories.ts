import type { Meta, StoryObj } from '@storybook/vue3';

import Card from './Card.vue';

import data from '~/assets/data/data.json';

const { features } = data.featured;

const meta: Meta<typeof Card> = {
  title: 'Featured/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  args: {
    card: features[0]
  }
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Primary: Story = {};