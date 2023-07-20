import { ReactNode } from 'react';
import * as RadixDropdownMenu from '@radix-ui/react-dropdown-menu';

import './styles.css';
import style from './style.module.scss';

export type DropdownMenuProps = { trigger: ReactNode };

export const DropdownMenu = ({ trigger }: DropdownMenuProps) => (
  <RadixDropdownMenu.Root>
    <RadixDropdownMenu.Trigger className={style.trigger}>{trigger}</RadixDropdownMenu.Trigger>

    <RadixDropdownMenu.Portal>
      <RadixDropdownMenu.Content className={style.content}>
        <RadixDropdownMenu.Item className="DropdownMenuItem">New Window</RadixDropdownMenu.Item>
        <RadixDropdownMenu.Item className="DropdownMenuItem">New Window 2</RadixDropdownMenu.Item>

        <RadixDropdownMenu.Arrow className={style.menu_icon} />

        <div style={{ position: 'absolute' }}>123</div>
      </RadixDropdownMenu.Content>
    </RadixDropdownMenu.Portal>
  </RadixDropdownMenu.Root>
);
