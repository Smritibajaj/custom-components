import type { CSSProperties } from '@mui/styled-engine';
import type { IconWeight } from 'phosphor-react';
import * as Icon from 'phosphor-react';
import type { ComponentPropsWithRef } from 'react';

import type { ColorPalette } from '../../theme/colors';
import type { ReadOnlyArrayToUnion } from '../../utils';

const icons = Object.keys(Icon).filter(
	k => k !== 'IconContext'
) as ReadonlyArray<Exclude<keyof typeof Icon, 'IconContext'>>;

export type IconName = ReadOnlyArrayToUnion<typeof icons>;

export type IconProps = ComponentPropsWithRef<'svg'> & {
	/**
	 * If `true`, the component is disabled.
	 * @default false
	 */
	disabled?: boolean;
	/**
	 * Color of the icon to render
	 * @default D-50
	 */
	color?: keyof ColorPalette | CSSProperties;
	/**
	 * HoverColor of the icon to render
	 * @default P-50
	 */
	hoverColor?: keyof ColorPalette | CSSProperties;
	/**
	 * Name of the icon to render
	 * @default null
	 */
	iconName: IconName;
	/**
	 * If `true`, the icon will be mirrored.
	 * @default false
	 */
	mirrored?: boolean;
	/**
	 * Size of the icon to render
	 * @default 16
	 */
	size?: number;
	/**
	 * Weight of the icon to render
	 * @default bold
	 */
	weight?: IconWeight;
};
