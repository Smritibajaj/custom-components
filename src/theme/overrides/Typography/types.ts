import type { CSSProperties } from 'react';

import type { variants } from './constants';

export type Variant = (typeof variants)[number];

// eslint-disable-next-line no-unused-vars
export type TypographyOverrides = { [K in Variant]: CSSProperties };
