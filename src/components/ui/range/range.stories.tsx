import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Range, RangeProps } from '.';
import { Typography } from '../typography';

type Story = StoryObj<typeof meta>;

const Template = ({ value }: RangeProps) => {
  const [currentValue, setCurrentValue] = useState(value);

  return (
    <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
      <Typography style={{ minWidth: '27px' }}>{currentValue[0]}</Typography>

      <Range value={currentValue} onValueChange={setCurrentValue} />

      {currentValue[1] && <Typography style={{ minWidth: '27px' }}>{currentValue[1]}</Typography>}
    </div>
  );
};

const meta = {
  title: 'Components/UI/Range',
  component: Range,
  tags: ['autodocs'],
} satisfies Meta<typeof Range>;

export const Multiple: Story = {
  render: (args) => <Template {...args} />,
  args: {
    value: [10, 90],
    onValueChange: () => {},
  },
};

export const Single: Story = {
  render: (args) => <Template {...args} />,
  args: {
    value: [10],
    onValueChange: () => {},
  },
};

export default meta;
