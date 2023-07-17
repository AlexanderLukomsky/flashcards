import type { Meta, StoryObj } from '@storybook/react';
import { withRouter } from 'storybook-addon-react-router-v6';
import { NewPasswordForm } from '.';

type Story = StoryObj<typeof meta>;

const meta = {
  title: 'Components/Forms/New Password Form',
  component: NewPasswordForm,
  tags: ['autodocs'],
} satisfies Meta<typeof NewPasswordForm>;

export const Primary: Story = {
  decorators: [withRouter],
};

export default meta;
