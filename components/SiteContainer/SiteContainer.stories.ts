import type { Meta, StoryObj } from '@storybook/vue3';

import SiteContainer from './SiteContainer.vue';

const meta: Meta<typeof SiteContainer> = {
  title: 'Structural/Site Container',
  component: SiteContainer,
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof SiteContainer>;

export const Primary: Story = {};