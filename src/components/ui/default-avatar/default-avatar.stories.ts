import type { Meta, StoryObj } from '@storybook/react';
import { DefaultAvatar } from './default-avatar';

type Story = StoryObj<typeof meta>;

const meta = {
  title: 'Components/UI/Default Avatar',
  component: DefaultAvatar,
  tags: ['autodocs'],
} satisfies Meta<typeof DefaultAvatar>;

export const Primary: Story = {};

export default meta;
