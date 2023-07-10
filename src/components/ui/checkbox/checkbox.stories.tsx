import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox, CheckboxControlLabel } from '.';

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
  render: () => <CheckboxControlLabel control={<Checkbox />} label="Check-box" />,
  args: { checked: false },
};

export const CheckboxDisabled: Story = {
  render: () => <CheckboxControlLabel disabled control={<Checkbox />} label="Check-box" />,
};

export default meta;
