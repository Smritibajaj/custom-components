import type { ColorPalette } from '../colors';
export type MuiInternalColors = 'inherit' | 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning';
export type MuiInternalSizes = 'small' | 'medium' | 'large';
export type ColorOverrides = {
    [K in keyof ColorPalette]: true;
} & {
    [K in MuiInternalColors]: false;
};
//# sourceMappingURL=types.d.ts.map