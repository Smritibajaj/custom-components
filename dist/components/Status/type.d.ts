/// <reference types="react" />
import type { IconProps } from '../Icon/types';
import type { ChipProps } from '@mui/material/Chip';
export declare enum Type {
    primary = "blue",
    success = "green",
    error = "red",
    default = "grey",
    warning = "yellow",
    info = "orange"
}
type ButtonListItem = {
    label: string;
    value: unknown;
    onClick: (value: unknown, event: React.MouseEvent<HTMLLIElement, MouseEvent>) => void;
};
export type StatusPropsType = {
    endIconConfig?: IconProps;
    startIconConfig?: IconProps;
    type?: Type;
    list?: ButtonListItem[];
    label: string;
    onDelete?: ChipProps['onDelete'];
    sx?: ChipProps['sx'];
};
export {};
//# sourceMappingURL=type.d.ts.map