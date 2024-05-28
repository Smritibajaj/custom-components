
import type { Variant } from './types';

// eslint-disable-next-line no-unused-vars
type VariantOverrides = { [K in Variant]: true } & {
	h1: false;
	h2: false;
	h3: false;
	h4: false;
	h5: false;
	h6: false;
	subtitle1: false;
	subtitle2: false;
	body1: false;
	body2: false;
	button: false;
	caption: false;
	overline: false;
	inherit: false;
};

declare module '@mui/material/Typography' {
	interface TypographyPropsVariantOverrides extends VariantOverrides {}
}
