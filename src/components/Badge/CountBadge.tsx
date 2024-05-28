import { useTheme } from '@mui/material';
import React, { memo, useMemo } from 'react';

import type { ColorPalette } from '../../theme/colors';
import type { IconName } from '../Icon';
import BaseBadge from './BaseBadge';
import { type CountBadgeProps, TrendBadgeTypes } from './types';

const CountBadge = (props: CountBadgeProps) => {
	const { value, type } = props;
	const theme = useTheme();

	const { backgroundColor, contentColor } = useMemo(() => {
		switch (type) {
			case TrendBadgeTypes.positive:
				return {
					backgroundColor: 'P-40',
					contentColor: 'white',
				};
			case TrendBadgeTypes.negative:
				return {
					backgroundColor: 'R-40',
					contentColor: 'white',
				};
			case TrendBadgeTypes.neutral:
				return {
					backgroundColor: 'D-15',
					contentColor: 'D-80',
				};
			default:
				return {
					backgroundColor: 'D-15',
					contentColor: 'D-80',
				};
		}
	}, [type]);
	return (
		<BaseBadge
			sx={{
				backgroundColor,
				borderRadius: value !== undefined ? '16px' : '50%',
				display: 'flex',
				flexDirection: 'row',
				justifyContent: 'center',
				gap: value !== undefined ? theme.spacing(1) : 0,
				padding:
					value !== undefined
						? theme.spacing(0.5, 1.5)
						: theme.spacing(1.5, 1.5),
				width: 'max-content',
				alignItems: 'center',
			}}
			body={{
				component: <span>{value}</span>,
				sx: {
					color: contentColor,
					fontWeight: 500,
					fontSize: 11,
					fontFamily: 'Poppins',
					lineHeight: '12px',
				},
			}}
		/>
	);
};

export default memo(CountBadge);
