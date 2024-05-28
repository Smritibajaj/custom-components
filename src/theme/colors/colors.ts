import { mix } from 'chroma-js';

import { baseColors, colorShades } from './constants';
import type { ColorKey, ColorPalette } from './types';

// @ts-ignore
const colorPalette: ColorPalette = {};

// color to mix with the base color ( white for light shade and black for dark shade )
const getMixColor = (shade: number) => (shade < 50 ? '#ffffff' : '#000000');

// defining the ratio at which to mix the color
const getMixRatio = (shade: number) => {
	switch (shade) {
		case 5:
			return ((50 - shade) * 2 + 5) / 100;
		case 10:
		case 15:
			return ((50 - shade) * 2 + 10) / 100;
		default:
			return shade < 50
				? ((50 - shade) * 2) / 100
				: shade > 50
				? ((shade - 50) * 2) / 100
				: 0;
	}
};

Object.entries(baseColors).forEach(([colorName, baseColor]) => {
	colorShades.forEach(shade => {
		colorPalette[
			`${colorName.charAt(0).toUpperCase() as ColorKey}-${shade}`
		] = mix(baseColor, getMixColor(shade), getMixRatio(shade), 'rgb').hex();
	});
});

export { colorPalette };
