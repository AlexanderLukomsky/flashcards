import type { Meta, StoryObj } from '@storybook/react';
import { Rating } from '.';

type Story = StoryObj<typeof meta>;

const meta = {
  title: 'Components/UI/Rating',
  component: Rating,
  tags: ['autodocs'],
} satisfies Meta<typeof Rating>;

export const Primary: Story = {};

export const ThreeStars: Story = {
  args: {
    value: 3,
  },
};

export default meta;
