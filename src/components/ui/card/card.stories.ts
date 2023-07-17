import type { Meta, StoryObj } from '@storybook/react';

import { Card } from './card';

type Story = StoryObj<typeof meta>;

const meta = {
  title: 'Components/UI/Card',
  component: Card,
  tags: ['autodocs'],
} satisfies Meta<typeof Card>;

export const Primary: Story = {
  args: {
    children: 'Card',
  },
};

export default meta;
