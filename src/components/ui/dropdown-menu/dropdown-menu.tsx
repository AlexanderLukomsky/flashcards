import { ReactNode, useState } from 'react';
import * as RadixDropdownMenu from '@radix-ui/react-dropdown-menu';
import { Typography } from '../typography';
import style from './style.module.scss';

export type DropdownMenuProps = { trigger: ReactNode; children: ReactNode };

export const DropdownMenu = ({ trigger, children }: DropdownMenuProps) => {
  const [open, setOpen] = useState(false);

  return (
    <RadixDropdownMenu.Root open={open} onOpenChange={setOpen}>
      <RadixDropdownMenu.Trigger asChild>
        <button type="button" className={style.trigger_button}>
          {trigger}
        </button>
      </RadixDropdownMenu.Trigger>

      <RadixDropdownMenu.Portal>
        <RadixDropdownMenu.Content className={style.content} align="end">
          {children}

          <RadixDropdownMenu.Arrow asChild>
            <div className={style.arrow} />
          </RadixDropdownMenu.Arrow>
        </RadixDropdownMenu.Content>
      </RadixDropdownMenu.Portal>
    </RadixDropdownMenu.Root>
  );
};

export type DropdownMenuItemProps = {
  children?: ReactNode;
  title?: string;
  onSelect?: (event: Event) => void;
};

export const DropdownMenuItem = ({ children, title, onSelect }: DropdownMenuItemProps) => (
  <RadixDropdownMenu.Item className={style.item} onSelect={onSelect}>
    {children}

    <Typography variant="caption" component="span">
      {title}
    </Typography>
  </RadixDropdownMenu.Item>
);
