import type { Meta, StoryObj } from '@storybook/vue3';

import Section from './Section.vue';

const meta: Meta<typeof Section> = {
  title: 'Section',
  component: Section,
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof Section>;

export const Primary: Story = {};