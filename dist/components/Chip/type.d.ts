import type { ChipProps } from '@mui/material/Chip';
import type { ColorKey, Shades } from '../../theme/colors/types';
import type { IconProps } from '../Icon/types';
export declare enum CustomVariant {
    outlined = "outlined",
    filled = "filled",
    outlinedWithBgColor = "outlinedWithBgColor"
}
export type FilterChipPropsType = Omit<ChipProps, 'variant'> & {
    contentColor?: `${ColorKey}-${Shades}`;
    backgroundColor?: `${ColorKey}-${Shades}`;
    borderColor?: `${ColorKey}-${Shades}`;
    customVariant?: CustomVariant;
    isSelected?: boolean;
    endIconConfig?: IconProps;
    startIconConfig?: IconProps;
};
//# sourceMappingURL=type.d.ts.map