import type { Meta, StoryObj } from '@storybook/react';
import { withRouter } from 'storybook-addon-react-router-v6';
import { SignInForm } from '.';

type Story = StoryObj<typeof meta>;

const meta = {
  title: 'Components/Sign In Form',
  component: SignInForm,
  tags: ['autodocs'],
} satisfies Meta<typeof SignInForm>;

export const Primary: Story = {
  decorators: [withRouter],
};

export default meta;
