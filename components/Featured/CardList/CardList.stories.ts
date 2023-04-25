import type { Meta, StoryObj } from '@storybook/vue3';

import CardList from './CardList.vue';

import data from '~/assets/data/data.json';

const { featured } = data;

const meta: Meta<typeof CardList> = {
  title: 'Featured Card List',
  component: CardList,
  parameters: {
    layout: 'centered',
  },
  args: {
    heading: featured.heading,
    description: featured.description,
    cards: featured.features
  }
};

export default meta;
type Story = StoryObj<typeof CardList>;

export const Primary: Story = {};