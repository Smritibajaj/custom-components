import type { FirstCharacter, ReadOnlyArrayToUnion } from '../../utils';
import type { baseColors, colorShades } from './constants';

export type Shades = ReadOnlyArrayToUnion<typeof colorShades>;

export type Colors = keyof typeof baseColors;

export type ColorKey = Capitalize<FirstCharacter<Colors>>;

export type ColorPalette = {
	// eslint-disable-next-line no-unused-vars
	[K in `${ColorKey}-${Shades}`]: string;
} & {
	black: string;
	white: string;
};
