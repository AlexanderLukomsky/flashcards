import type { Meta, StoryObj } from '@storybook/react';
import { withRouter } from 'storybook-addon-react-router-v6';
import { SignUpForm } from '.';

type Story = StoryObj<typeof meta>;

const meta = {
  title: 'Components/Auth/Sign Up Form',
  component: SignUpForm,
  tags: ['autodocs'],
} satisfies Meta<typeof SignUpForm>;

export const Primary: Story = {
  decorators: [withRouter],
};

export default meta;
