import type { CSSProperties } from 'react';
import type { variants } from './constants';
export type Variant = (typeof variants)[number];
export type TypographyOverrides = {
    [K in Variant]: CSSProperties;
};
//# sourceMappingURL=types.d.ts.map