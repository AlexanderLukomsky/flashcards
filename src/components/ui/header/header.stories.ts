import type { Meta, StoryObj } from '@storybook/react';
import { withRouter } from 'storybook-addon-react-router-v6';
import { Header } from '.';

type Story = StoryObj<typeof meta>;

const meta = {
  title: 'Components/UI/Header',
  component: Header,
  tags: ['autodocs'],
} satisfies Meta<typeof Header>;

export const Primary: Story = {
  args: {
    onSignOut: () => {},
  },
  decorators: [withRouter],
};

export default meta;
