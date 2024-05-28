import { useTheme } from '@mui/material';
import React, { memo, useMemo } from 'react';

import type { ColorPalette } from '../../theme/colors';
import type { IconName } from '../Icon';
import BaseBadge from './BaseBadge';
import { type TrendBadgeProps, TrendBadgeTypes } from './types';

const TrendBadge = (props: TrendBadgeProps) => {
	const { value, startIconConfig, variant, type } = props;
	const theme = useTheme();

	const { backgroundColor, contentColor, defaultIconName, content } =
		useMemo(() => {
			switch (type) {
				case TrendBadgeTypes.positive:
					return {
						backgroundColor: 'G-10',
						contentColor: 'G-70',
						defaultIconName: 'TrendUp',
						content: value ?? '1%',
					};
				case TrendBadgeTypes.negative:
					return {
						backgroundColor: 'R-5',
						contentColor: 'R-60',
						defaultIconName: 'TrendDown',
						content: value ?? '1%',
					};
				case TrendBadgeTypes.neutral:
					return {
						backgroundColor: 'D-10',
						contentColor: 'D-60',
						defaultIconName: '',
						content:
							props.variant === 'withIcon' ? 'No Change' : '-',
					};
				default:
					return {
						backgroundColor: 'D-15',
						contentColor: 'D-60',
						defaultIconName: '',
						content: value ?? '',
					};
			}
		}, [type, value, variant]);
	return (
		<BaseBadge
			sx={{
				backgroundColor,
				borderRadius: '16px',
				display: 'flex',
				flexDirection: 'row',
				gap: theme.spacing(1),
				justifyContent: 'center',
				padding: theme.spacing(1, 1.5),
				width: 'max-content',
				alignItems: 'center',
			}}
			body={{
				component: <span>{content}</span>,
				sx: {
					color: contentColor,
					fontWeight: 500,
					fontSize: 13,
					fontFamily: 'Poppins',
					lineHeight: '18px',
				},
			}}
			{...(variant === 'withIcon' && (defaultIconName || startIconConfig)
				? {
						startIcon: {
							iconConfig: {
								iconName: defaultIconName as IconName,
								color: contentColor as keyof ColorPalette,
								...startIconConfig,
							},
						},
				  }
				: {})}
		/>
	);
};

export default memo(TrendBadge);
