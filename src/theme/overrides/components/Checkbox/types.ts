/* eslint-disable no-unused-vars */
import type { ColorPalette } from '../../../colors';

type InternalColors =
	| 'inherit'
	| 'primary'
	| 'secondary'
	| 'success'
	| 'error'
	| 'info'
	| 'default'
	| 'warning';

export type ColorOverrides = { [K in keyof ColorPalette]: true } & {
	[K in InternalColors]: false;
};
