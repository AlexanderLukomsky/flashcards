import type { Meta, StoryObj } from '@storybook/react';
import { withRouter } from 'storybook-addon-react-router-v6';
import { RegistrationForm } from '.';

type Story = StoryObj<typeof meta>;

const meta = {
  title: 'Components/Auth/Registration Form',
  component: RegistrationForm,
  tags: ['autodocs'],
} satisfies Meta<typeof RegistrationForm>;

export const Primary: Story = {
  decorators: [withRouter],
};

export default meta;
