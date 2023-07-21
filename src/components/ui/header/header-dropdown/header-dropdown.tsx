import { Avatar } from '@components/ui/avatar';
import { DropdownMenu, DropdownMenuItem } from '@components/ui/dropdown-menu';
import { Typography } from '@components/ui/typography';
import { LogoutIcon, PersonOutlineIcon } from '@assets/icons';
import style from './style.module.scss';

export type HeaderDropdownProps = { src: string; userName: string; email: string };

export const HeaderDropdown = ({ src, userName, email }: HeaderDropdownProps) => (
  <DropdownMenu trigger={<Avatar src={src} />}>
    <DropdownMenuItem>
      <Avatar src={src} />

      <div className={style.dropdown_head}>
        <Typography variant="subtitle2" className={style.title}>
          {userName}
        </Typography>

        <Typography variant="caption" className={style.caption}>
          {email}
        </Typography>
      </div>
    </DropdownMenuItem>

    <DropdownMenuItem title="My Profile">
      <PersonOutlineIcon />
    </DropdownMenuItem>

    <DropdownMenuItem title="Sign Out">
      <LogoutIcon />
    </DropdownMenuItem>
  </DropdownMenu>
);
