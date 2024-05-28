import Box from '@mui/material/Box';
import * as PhIcons from 'phosphor-react';
import React, { forwardRef, memo } from 'react';

import { colorPalette } from '../../theme/colors';
import { isObjKey } from '../../utils';
import type { IconProps } from './types';

const Icon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
	const {
		disabled = false,
		color = 'D-50',
		hoverColor = 'P-50',
		iconName,
		size = 16,
		weight = 'bold',
		onClick,
		...rest
	} = props;
	const IconComp = PhIcons[iconName];
	return (
		<Box
			component="span"
			sx={theme => ({
				cursor: disabled
					? 'not-allowed'
					: onClick
					? 'pointer'
					: 'default',
				display: 'flex',
				width: 'max-content',

				'& svg': {
					pointerEvents: disabled ? 'none' : 'all',

					'& *:not(rect:first-of-type)': {
						stroke: isObjKey(color, colorPalette)
							? theme.palette[color]
							: color,
					},
					...(onClick
						? {
								'&:hover': {
									'*:not(rect:first-of-type)': {
										stroke: isObjKey(
											hoverColor,
											colorPalette
										)
											? theme.palette[hoverColor]
											: hoverColor,
									},
									fill: isObjKey(hoverColor, colorPalette)
										? theme.palette[hoverColor]
										: hoverColor,
								},
						  }
						: {}),
				},
			})}
		>
			<IconComp
				{...rest}
				ref={ref}
				size={size}
				weight={weight}
				onClick={onClick}
			/>
		</Box>
	);
});
Icon.displayName = 'Icon';
export default memo(Icon);
