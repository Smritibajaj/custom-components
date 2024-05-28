/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Palette } from '@mui/material';

import { colorPalette } from '../theme/colors';

export const isObjKey = <T>(key: any, obj: T): key is keyof T =>
	key in (obj as any);

export const getColor = (color: string, themePalette: Palette) =>
	isObjKey(color, colorPalette) ? themePalette[color] : color;
