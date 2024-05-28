/// <reference types="react" />
import type { ButtonProps as MuiButtonProps } from '@mui/material/Button';
import type { ColorPalette } from '../../theme/colors';
import type { ButtonType, ButtonVariant } from '../../theme/overrides/components/Button';
import type { IconName } from '../Icon';
export type ButtonProps = Omit<MuiButtonProps<'button'>, 'color' | 'size' | 'variant'> & {
    /**
     * Color of the button to render
     * @default P-50
     */
    color?: keyof ColorPalette;
    /**
     * Size of the button to render
     * @default medium
     */
    size?: Exclude<MuiButtonProps['size'], 'large'>;
    /**
     * Variant of the button to use
     * @default primary
     */
    variant?: ButtonVariant;
    buttonType?: ButtonType;
};
export type IconButtonProps = Omit<ButtonProps, 'children' | 'startIcon' | 'endIcon'> & {
    /**
     * Name of the icon to render
     * @default null
     */
    iconName?: IconName;
    /**
     * Icon placed inside button.
     */
    icon?: ButtonProps['startIcon'];
};
type ButtonListItem = {
    label: string;
    value: unknown;
    onClick: (value: unknown, event: React.MouseEvent<HTMLLIElement, MouseEvent>) => void;
};
export type SplitButtonProps = ButtonProps & {
    list: ButtonListItem[];
    buttonLabel: string;
};
export {};
//# sourceMappingURL=types.d.ts.map