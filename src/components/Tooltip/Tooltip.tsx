import Box from '@mui/material/Box';
import MuiTooltip from '@mui/material/Tooltip';
import React, { memo } from 'react';

import { Icon } from '../Icon';
import { Typography } from '../Typography';
import type { IProps } from './ types';

const Tooltip = (props: IProps) => {
	const { children, iconName, title, ...rest } = props;

	return (
		<MuiTooltip
			arrow
			title={
				<Box display="flex" alignItems="flex-start" gap={1}>
					{iconName ? <Icon iconName={iconName} /> : null}
					<Typography variant="captionMedium">{title}</Typography>
				</Box>
			}
			{...rest}
		>
			{children}
		</MuiTooltip>
	);
};

export default memo(Tooltip);