import Button from '@mui/material/Button';
import React, { memo } from 'react';

import { Icon } from '../Icon';
import type { IconButtonProps } from './types';

const IconButton = ({ iconName, icon, ...rest }: IconButtonProps) => (
	<Button
		startIcon={iconName ? <Icon iconName={iconName} /> : icon}
		sx={theme => ({
			'&.MuiButton-sizeMedium': {
				padding: theme.spacing(2.5),
			},

			'&.MuiButton-sizeSmall': {
				padding: theme.spacing(1.5),
			},
		})}
		{...rest}
	/>
);

export default memo(IconButton);
