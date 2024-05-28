import MuiAvatar from '@mui/material/Avatar';
import type { TypographyProps } from '@mui/material/Typography';
import React, { memo } from 'react';

import { ConditionalWrapper } from '../ConditionalWrapper';
import { Tooltip } from '../Tooltip';
import { Typography } from '../Typography';
import type { Size, User, UserAvatarProps } from './types';

const SIZE_TO_TYPOGRAPHY_VARIANT: Record<Size, TypographyProps['variant']> = {
	96: 'superTitleMedium',
	48: 'subHeadingMedium',
	40: 'bodyMedium',
	32: 'bodyMedium',
	24: 'descriptionMedium',
	18: 'descriptionMedium',
	16: 'captionMedium',
};

const getInitials = (size: Size, displayName: User['displayName']) =>
	displayName
		?.split(' ')
		.slice(0, size <= 18 ? 1 : 2)
		.map(i => i.charAt(0).toUpperCase())
		.join('');

const UserAvatar = (props: UserAvatarProps) => {
	const {
		color = 'P-50',
		disableTooltip = false,
		size = 40,
		user,
		...rest
	} = props;

	return (
		<ConditionalWrapper
			condition={!disableTooltip}
			wrapper={children => (
				<Tooltip title={user?.displayName}>{children}</Tooltip>
			)}
		>
			{user?.displayName || user?.name ? (
				<MuiAvatar
					{...rest}
					color={color}
					src={user?.img}
					sx={{ height: `${size}px`, width: `${size}px` }}
				>
					<Typography
						variant={
							SIZE_TO_TYPOGRAPHY_VARIANT[size] ?? 'bodyMedium'
						}
						sx={theme => ({
							color: theme.palette[color],
						})}
					>
						{getInitials(size, user?.displayName || user?.name)}
					</Typography>
				</MuiAvatar>
			) : (
				<></>
			)}
		</ConditionalWrapper>
	);
};

export default memo(UserAvatar);
