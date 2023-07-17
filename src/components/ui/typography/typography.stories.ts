import type { Meta, StoryObj } from '@storybook/react';
import { Typography } from '.';

type Story = StoryObj<typeof meta>;

const meta = {
  title: 'Components/UI/Typography',
  component: Typography,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      options: [
        'body1',
        'body2',
        'h1',
        'h2',
        'h3',
        'large',
        'subtitle1',
        'subtitle2',
        'caption',
        'overline',
        'link1',
        'link2',
      ],
      control: { type: 'radio' },
    },
    component: { control: { type: 'text' } },
  },
} satisfies Meta<typeof Typography>;

export const Body1: Story = {
  args: { children: 'Lorem ipsum dolor sit amet consectetur.', variant: 'body1' },
};

export const Body2: Story = {
  args: { children: 'Lorem ipsum dolor sit amet consectetur.', variant: 'body2' },
};

export const H1: Story = {
  args: { children: 'Lorem ipsum dolor sit amet consectetur.', variant: 'h1' },
};

export const H2: Story = {
  args: { children: 'Lorem ipsum dolor sit amet consectetur.', variant: 'h2' },
};

export const H3: Story = {
  args: { children: 'Lorem ipsum dolor sit amet consectetur.', variant: 'h3' },
};

export const Large: Story = {
  args: { children: 'Lorem ipsum dolor sit amet consectetur.', variant: 'large' },
};

export const Subtitle1: Story = {
  args: { children: 'Lorem ipsum dolor sit amet consectetur.', variant: 'subtitle1' },
};

export const Subtitle2: Story = {
  args: { children: 'Lorem ipsum dolor sit amet consectetur.', variant: 'subtitle2' },
};

export const Caption: Story = {
  args: { children: 'Lorem ipsum dolor sit amet consectetur.', variant: 'caption' },
};

export const Overline: Story = {
  args: { children: 'Lorem ipsum dolor sit amet consectetur.', variant: 'overline' },
};

export const Link1: Story = {
  args: { children: 'Lorem ipsum dolor sit amet consectetur.', variant: 'link1' },
};

export const Link2: Story = {
  args: { children: 'Lorem ipsum dolor sit amet consectetur.', variant: 'link2' },
};

export default meta;
