import type { Meta, StoryObj } from '@storybook/react';
import { TextField } from '.';

type Story = StoryObj<typeof meta>;

const meta = {
  title: 'Components/TextField',
  component: TextField,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof TextField>;

export const Text: Story = {
  args: {
    type: 'text',
  },
};

export const Password: Story = {
  args: {
    type: 'password',
  },
};

export const Search: Story = {
  args: {
    type: 'search',
    value: '',
  },
};

export default meta;
