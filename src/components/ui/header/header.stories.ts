import type { Meta, StoryObj } from '@storybook/react';

import { Header } from '.';

type Story = StoryObj<typeof meta>;

const meta = {
  title: 'Components/UI/Header',
  component: Header,
  tags: ['autodocs'],
} satisfies Meta<typeof Header>;

export const Primary: Story = {
  args: {},
};

export default meta;
