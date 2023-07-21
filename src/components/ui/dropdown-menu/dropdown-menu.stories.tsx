import { Avatar } from '@components/ui/avatar';
import { DropdownMenu, DropdownMenuItem } from '@components/ui/dropdown-menu';
import type { Meta, StoryObj } from '@storybook/react';
import { LogoutIcon, PersonOutlineIcon } from '@assets/icons';
import { Typography } from '../typography';

type Story = StoryObj<typeof meta>;

const styles = {
  wrapper: {
    padding: '0 10.5rem',
  },
  title: { lineHeight: ' var(--line-height-s)' },
  caption: { color: ' var(--color-dark-100)' },
};

const src =
  'https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&w=128&h=128&dpr=2&q=80';

const meta = {
  title: 'Components/UI/DropdownMenu',
  component: DropdownMenu,
  tags: ['autodocs'],
} satisfies Meta<typeof DropdownMenu>;

export const Primary: Story = {
  render: ({ children, trigger }) => (
    <div style={styles.wrapper}>
      <DropdownMenu trigger={trigger}>{children}</DropdownMenu>
    </div>
  ),
  args: {
    trigger: <Avatar src={src} />,

    children: (
      <>
        <DropdownMenuItem>
          <Avatar src={src} />

          <div>
            <Typography variant="subtitle2" style={styles.title}>
              Name
            </Typography>

            <Typography variant="caption" style={styles.caption}>
              j&johnson@gmail.com
            </Typography>
          </div>
        </DropdownMenuItem>

        <DropdownMenuItem title="My Profile">
          <PersonOutlineIcon />
        </DropdownMenuItem>

        <DropdownMenuItem title="Sign Out">
          <LogoutIcon />
        </DropdownMenuItem>
      </>
    ),
  },
};

export default meta;
