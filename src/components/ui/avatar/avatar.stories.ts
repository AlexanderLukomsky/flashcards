import type { Meta, StoryObj } from '@storybook/react';
import { Avatar } from '.';

type Story = StoryObj<typeof meta>;

const meta = {
  title: 'Components/UI/Avatar',
  component: Avatar,
  tags: ['autodocs'],
} satisfies Meta<typeof Avatar>;

export const Primary: Story = {
  args: {
    src: 'https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&w=128&h=128&dpr=2&q=80',
  },
};

export const Custom: Story = {
  args: {
    src: 'https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&w=128&h=128&dpr=2&q=80',
    style: {
      width: '12rem',
      height: '12rem',
      borderRadius: '0.5rem',
    },
  },
};

export default meta;
