import type { TypographyProps } from '@mui/material/Typography';
import type { TypographyVariantType } from '../../theme/overrides/Typography';
export type Props = Omit<TypographyProps, 'variant' | 'css'> & {
    variant?: TypographyVariantType;
};
//# sourceMappingURL=types.d.ts.map