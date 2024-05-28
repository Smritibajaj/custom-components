import MuiAvatar from '@mui/material/Avatar';
import React, { memo } from 'react';

import { Icon } from '../Icon';
import type { IconAvatarProps, Size } from './types';

const SIZE_TO_ICON_SIZE: Record<Size, number> = {
	96: 32,
	48: 24,
	40: 20,
	32: 16,
	24: 16,
	18: 12,
	16: 10,
};

const IconAvatar = (props: IconAvatarProps) => {
	const { color = 'P-50', iconName, size = 40, ...rest } = props;

	return (
		<MuiAvatar
			{...rest}
			color={color}
			sx={{ height: `${size}px`, width: `${size}px` }}
		>
			<Icon
				color={color}
				hoverColor={color}
				iconName={iconName}
				size={SIZE_TO_ICON_SIZE[size]}
			/>
		</MuiAvatar>
	);
};

export default memo(IconAvatar);
