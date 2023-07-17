import type { Meta, StoryObj } from '@storybook/react';
import { withRouter } from 'storybook-addon-react-router-v6';
import { ForgotPasswordForm } from '.';

type Story = StoryObj<typeof meta>;

const meta = {
  title: 'Components/Forgot Password Form',
  component: ForgotPasswordForm,
  tags: ['autodocs'],
} satisfies Meta<typeof ForgotPasswordForm>;

export const Primary: Story = {
  decorators: [withRouter],
};

export default meta;
