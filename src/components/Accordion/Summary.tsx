import AccordionSummary from '@mui/material/AccordionSummary';
import React, { memo } from 'react';

import { Typography } from '../Typography';
import type { SummaryProps } from './types';

const Summary = ({
	iconPosition = 'end',
	title,
	subTitle,
	...rest
}: SummaryProps) => (
	<AccordionSummary
		{...rest}
		sx={{
			flexDirection: iconPosition === 'start' ? 'row-reverse' : 'row',
		}}
	>
		<Typography variant="subHeadingMedium">{title}</Typography>

		{subTitle ? (
			<Typography
				variant="subHeadingMedium"
				sx={theme => ({
					color: theme.palette.text.secondary,
				})}
			>
				{subTitle}
			</Typography>
		) : null}
	</AccordionSummary>
);

export default memo(Summary);
