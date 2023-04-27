import type { Meta, StoryObj } from '@storybook/vue3';

import InputButton from './InputButton.vue';

const meta: Meta<typeof InputButton> = {
  title: 'Simple/Input/Button',
  component: InputButton,
  parameters: {
    layout: 'centered',
  },
  args: {
    label: 'Button Label',
    action: () => alert('clicked!')
  }
};

export default meta;
type Story = StoryObj<typeof InputButton>;

export const Primary: Story = {}; 