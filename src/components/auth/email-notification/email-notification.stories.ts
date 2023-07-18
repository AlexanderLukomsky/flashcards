import { Meta, StoryObj } from '@storybook/react';
import { withRouter } from 'storybook-addon-react-router-v6';
import { EmailNotification } from '.';

type Story = StoryObj<typeof meta>;

const meta = {
  title: 'Components/Auth/Email Notification',
  component: EmailNotification,
  tags: ['autodocs'],
} satisfies Meta<typeof EmailNotification>;

export const Primary: Story = {
  decorators: [withRouter],
};

export default meta;
