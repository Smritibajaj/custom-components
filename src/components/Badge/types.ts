import { Theme } from '@mui/material';
import { SxProps } from '@mui/system';
import type React from 'react';

import type { IconProps } from '../Icon/types';

export type BaseBadgeProps = {
	startIcon?: {
		component?: React.ReactChild;
		iconConfig?: IconProps;
		sx?: any;
	};
	endIcon?: {
		component?: React.ReactChild;
		iconConfig?: IconProps;
		sx?: any;
	};
	body?: { component?: string | React.ReactChild; sx?: any };
	sx?: any;
};
export enum TrendBadgeTypes {
	positive = 'positive',
	negative = 'negative',
	neutral = 'neutral',
}
export type TrendBadgeProps = {
	variant: 'withoutIcon' | 'withIcon';
	type: TrendBadgeTypes;
	startIconConfig?: IconProps;
	value?: any;
};

export type CountBadgeProps = {
	type: TrendBadgeTypes;
	value?: any;
};
