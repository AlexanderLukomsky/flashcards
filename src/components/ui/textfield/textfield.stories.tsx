import type { Meta, StoryObj } from '@storybook/react';
import { TextField } from '.';

type Story = StoryObj<typeof meta>;

const meta = {
  title: 'Components/TextField',
  component: TextField,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof TextField>;

export const Text: Story = {
  args: {
    type: 'text',
    label: 'label',
    placeholder: 'placeholder',
    disabled: false,
    id: 'text',
  },
};

export const Password: Story = {
  args: {
    type: 'password',
    label: 'label',
    placeholder: 'placeholder',
    disabled: false,
  },
};

export const Search: Story = {
  args: { label: 'label', type: 'search', value: 'default value', id: 'search' },
};

export const WithErrorMessage: Story = {
  args: {
    isError: true,
    errorMessage: 'error message',
    label: 'error textfield label',
    value: 'disabled textfield value',
  },
};

export const DisabledSearch: Story = {
  args: {
    type: 'search',
    value: 'disabled',
    disabled: true,
  },
};

export default meta;
