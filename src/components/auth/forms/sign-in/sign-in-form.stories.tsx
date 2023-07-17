import type { Meta, StoryObj } from '@storybook/react';
import { withRouter } from 'storybook-addon-react-router-v6';
import { SignInForm } from '.';

type Story = StoryObj<typeof meta>;

const meta = {
  title: 'Components/SignInForm',
  component: SignInForm,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      options: ['primary', 'secondary', 'tertiary', 'link'],
      control: { type: 'radio' },
    },
    component: { control: { type: 'text' } },
  },
} satisfies Meta<typeof SignInForm>;

export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'Primary Button',
    disabled: false,
  },
  decorators: [withRouter],
};

export default meta;
