import type { ButtonProps } from '@mui/material/Button';
export type CustomVariant = 'ghost' | 'primary' | 'secondary' | 'tertiary';
export type ClassesOverrides = {
    [K in CustomVariant]: string;
} & {
    [K in `${CustomVariant}Size${Capitalize<Exclude<ButtonProps['size'], undefined>>}`]: string;
};
export type VariantOverrides = {
    [K in CustomVariant]: true;
};
//# sourceMappingURL=types.d.ts.map