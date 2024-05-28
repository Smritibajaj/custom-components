import type { AvatarGroupProps as MuiAvatarGroupProps } from '@mui/material/AvatarGroup';
import type { Size, User } from '../Avatar/types';
export type AvatarGroupProps = Omit<MuiAvatarGroupProps, 'children'> & {
    /**
     * Size of the user avatar to render
     * @default 40
     */
    avatarSize?: Size;
    /**
     * List of User object that the component accepts
     */
    users: User[];
};
//# sourceMappingURL=types.d.ts.map