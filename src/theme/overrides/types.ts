import type { ColorPalette } from '../colors';

// internal color palette provided by the MUI for almost all the components.
export type MuiInternalColors =
	| 'inherit'
	| 'primary'
	| 'secondary'
	| 'success'
	| 'error'
	| 'info'
	| 'warning';

export type MuiInternalSizes = 'small' | 'medium' | 'large';

// this is global color overrides for all the components
export type ColorOverrides =
	// disabling internal color palette and enabling custom color palette defined in the theme
	// eslint-disable-next-line no-unused-vars
	{ [K in keyof ColorPalette]: true } & { [K in MuiInternalColors]: false };
