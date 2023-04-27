import type { Meta, StoryObj } from '@storybook/vue3';

import ClientList from './ClientList.vue';

import data from '~/assets/data/data.json';

const { featured } = data;

const meta: Meta<typeof ClientList> = {
  title: 'Complex/Client List',
  component: ClientList,
  parameters: {
    layout: 'centered',
  },
  args: {
    heading: featured.clientsHeading,
    clients: featured.clients
  }
};

export default meta;
type Story = StoryObj<typeof ClientList>;

export const Primary: Story = {};