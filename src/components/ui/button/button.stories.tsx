import type { Meta, StoryObj } from '@storybook/react';
import { LogoutIcon } from '@assets/icons';
import { Button } from '.';

type Story = StoryObj<typeof meta>;

const meta = {
  title: 'Components/UI/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      options: ['primary', 'secondary', 'tertiary', 'link'],
      control: { type: 'radio' },
    },
    component: { control: { type: 'text' } },
  },
} satisfies Meta<typeof Button>;

export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'Primary Button',
    disabled: false,
  },
};

export const PrimaryWithIcon: Story = {
  args: {
    variant: 'primary',
    children: 'Primary Button',
    disabled: false,
    IconStart: <LogoutIcon />,
  },
};

export const IconButton: Story = {
  args: {
    variant: 'icon',
    disabled: false,
    IconStart: <LogoutIcon />,
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Secondary Button',
    disabled: false,
  },
};

export const Tertiary: Story = {
  args: {
    variant: 'tertiary',
    children: 'Tertiary Button',
    disabled: false,
  },
};

export const Link: Story = {
  args: {
    variant: 'link',
    children: 'Tertiary Button',
    disabled: false,
  },
};

export const FullWidth: Story = {
  args: {
    variant: 'primary',
    children: 'Full Width Button',
    disabled: false,
    fullWidth: true,
  },
};

export const AsLink: Story = {
  args: {
    href: '123',
    variant: 'primary',
    children: 'Link that looks like a button',
    component: 'a',
  },
};

export default meta;
