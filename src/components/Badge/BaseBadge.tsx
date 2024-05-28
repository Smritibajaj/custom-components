import { Box, Grid } from '@mui/material';
import React, { forwardRef, memo } from 'react';

import { Icon } from '../Icon';
import type { BaseBadgeProps } from './types';

const BaseBadge = forwardRef<HTMLSpanElement, BaseBadgeProps>((props, ref) => {
	const { startIcon, endIcon, body, sx = {} } = props;
	return (
		<Box
			className="baseBadge"
			sx={theme => ({
				'&.baseBadge': {
					display: 'flex',
					borderRadius: 16,
					padding: '2px 6px 2px 6px',
					alignItems: 'center',
					width: 'fit-content',
					...sx,
				},
			})}
		>
			<Grid
				className="startIconWrapper"
				sx={theme => ({
					'&.startIconWrapper': {
						...startIcon?.sx,
					},
				})}
			>
				{startIcon?.component ? (
					startIcon.component
				) : startIcon?.iconConfig ? (
					<Icon {...startIcon?.iconConfig} />
				) : null}
			</Grid>
			<Grid
				className="badgeBody"
				sx={theme => ({
					'&.badgeBody': {
						...body?.sx,
					},
				})}
			>
				{body?.component}
			</Grid>
			<Grid
				className="endIconWrapper"
				sx={theme => ({
					'&.endIconWrapper': {
						...endIcon?.sx,
					},
				})}
			>
				{endIcon?.component ? (
					endIcon.component
				) : endIcon?.iconConfig ? (
					<Icon {...endIcon?.iconConfig} />
				) : null}
			</Grid>
		</Box>
	);
});

BaseBadge.displayName = 'BaseBadge';
export default memo(BaseBadge);
