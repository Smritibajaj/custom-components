import type { CircularProgressProps as MuiCircularProgressProps } from '@mui/material';
import type { ColorPalette } from '../../../theme/colors';
export type CircularProgressProps = Omit<MuiCircularProgressProps, 'color' | 'size'> & {
    /**
     * Color of the progress circle to render
     * @default P-50
     */
    color?: keyof ColorPalette;
    /**
     * The size of the component.
     * If using a number, the pixel unit is assumed.
     * If using a string, you need to provide the CSS unit, e.g '3rem'.
     * @default 40
     */
    size?: number | string;
};
//# sourceMappingURL=types.d.ts.map