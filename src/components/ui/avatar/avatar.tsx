import * as RadixAvatar from '@radix-ui/react-avatar';
import './styles.css';

export type AvatarProps = { src: string };

export const Avatar = ({ src }: AvatarProps) => (
  <RadixAvatar.Root className="AvatarRoot">
    <RadixAvatar.Image className="AvatarImage" src={src} alt="avatar" />
  </RadixAvatar.Root>
);
