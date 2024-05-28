import { useTheme } from '@mui/material';
import React, { memo, useMemo } from 'react';

import { getColor } from '../../utils/commonUtils';
import { Icon } from '../Icon';
import BaseChip from './BaseChip';
import { type FilterChipPropsType, CustomVariant } from './type';

const FilterChip = (props: FilterChipPropsType) => {
	const theme = useTheme();
	const {
		startIconConfig,
		endIconConfig,
		contentColor = 'P-50',
		borderColor = 'P-50',
		backgroundColor = 'P-10',
		customVariant,
		sx,
		...restProps
	} = props;
	const customProps: unknown = useMemo(() => {
		switch (customVariant) {
			case CustomVariant.outlined:
				return {
					variant: 'outlined',
					style: {
						color: getColor(contentColor, theme.palette),
						borderColor: getColor(borderColor, theme.palette),
					},
				};

			case CustomVariant.filled:
				return {
					variant: 'filled',
					style: {
						backgroundColor: getColor(
							backgroundColor,
							theme.palette
						),
						color: getColor(contentColor, theme.palette),
					},
				};

			case CustomVariant.outlinedWithBgColor:
				return {
					variant: 'outlined',
					style: {
						backgroundColor: getColor(
							backgroundColor,
							theme.palette
						),
						color: getColor(contentColor, theme.palette),
						borderColor: getColor(borderColor, theme.palette),
					},
				};

			default:
				return {
					variant: 'outlined',
					style: {
						backgroundColor: getColor(
							backgroundColor,
							theme.palette
						),
						color: getColor(contentColor, theme.palette),
						borderColor: getColor(borderColor, theme.palette),
					},
				};
		}
	}, []);

	return (
		<BaseChip
			sx={{
				'& .MuiChip-label': {
					padding: 0,
				},
				'.MuiChip-deleteIcon': {
					margin: 0,
				},
				padding: '4px 12px',
				...sx,
			}}
			{...{
				...(endIconConfig
					? {
							deleteIcon: (
								<Icon
									{...{
										...endIconConfig,
										color: contentColor,
									}}
								/>
							),
					  }
					: {}),
				...(startIconConfig
					? {
							avatar: (
								<Icon
									{...{
										...startIconConfig,
										color: contentColor,
									}}
								/>
							),
					  }
					: {}),
				...restProps,
				...(customProps as object),
			}}
		/>
	);
};

export default memo(FilterChip);
