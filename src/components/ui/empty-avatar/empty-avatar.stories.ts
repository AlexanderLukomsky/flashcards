import type { Meta, StoryObj } from '@storybook/react';
import { EmptyAvatar } from './empty-avatar';

type Story = StoryObj<typeof meta>;

const meta = {
  title: 'Components/UI/Empty Avatar',
  component: EmptyAvatar,
  tags: ['autodocs'],
} satisfies Meta<typeof EmptyAvatar>;

export const Primary: Story = {};

export default meta;
