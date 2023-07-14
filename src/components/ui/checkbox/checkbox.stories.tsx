import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from '.';

type Story = StoryObj<typeof meta>;

const meta = {
  title: 'Components/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  args: {
    disabled: false,
  },
} satisfies Meta<typeof Checkbox>;

export const Primary: Story = {};

export const Checked: Story = { args: { checked: true } };

export const UnChecked: Story = { args: { checked: false } };

export const CheckboxWithLabel: Story = {
  args: { disabled: false, label: 'Check-box' },
};

export const CheckboxDisabled: Story = {
  args: { disabled: true, label: 'Check-box' },
};

export default meta;
