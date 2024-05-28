import type { AvatarProps } from '@mui/material/Avatar';
import type { ColorKey } from '../../theme/colors/types';
import type { IconName } from '../Icon/types';
export type Color = {
    [K in `${ColorKey}-50`]: string;
};
export type Size = 16 | 18 | 24 | 32 | 40 | 48 | 96;
export type User = {
    displayName: string;
    email?: string;
    employeeId?: string;
    img?: string;
};
export type UserAvatarProps = Omit<AvatarProps, 'children' | 'src'> & {
    /**
     * Color of the user avatar to render
     * @default P-50
     */
    color?: keyof Color;
    /**
     * Disable Tooltip that shows user display name on hover
     * @default true
     */
    disableTooltip?: boolean;
    /**
     * User object that the component accepts
     */
    user: User;
    /**
     * Size of the user avatar to render
     * @default 40
     */
    size?: Size;
};
export type IconAvatarProps = Omit<UserAvatarProps, 'user' | 'src'> & {
    /**
     * Name of the icon to render
     * @default Activity
     */
    iconName: IconName;
};
//# sourceMappingURL=types.d.ts.map