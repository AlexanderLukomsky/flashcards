import type { Meta, StoryObj } from '@storybook/react';
import { withRouter } from 'storybook-addon-react-router-v6';
import { RegistrationForm } from '.';

type Story = StoryObj<typeof meta>;

const meta = {
  title: 'Components/RegistrationForm',
  component: RegistrationForm,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      options: ['primary', 'secondary', 'tertiary', 'link'],
      control: { type: 'radio' },
    },
    component: { control: { type: 'text' } },
  },
} satisfies Meta<typeof RegistrationForm>;

export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'Primary Button',
    disabled: false,
  },
  decorators: [withRouter],
};

export default meta;
