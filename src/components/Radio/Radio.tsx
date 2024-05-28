import MuiRadio from '@mui/material/Radio';
import { styled } from '@mui/material/styles';
import React, { memo } from 'react';

import type { RadioProps } from './types';

const Icon = styled('span')(({ theme }) => ({
	backgroundColor: theme.palette['D-5'],
	border: '1px solid',
	borderColor: theme.palette['D-40'],
	borderRadius: '50%',
	boxSizing: 'border-box',
	height: 16,
	width: 16,
}));

const CheckedIcon = styled(Icon)(({ theme }) => ({
	backgroundColor: theme.palette['P-50'],
	border: 'none',

	'&:before': {
		backgroundImage:
			"url(\"data:image/svg+xml,%3Csvg width='8' height='8' viewBox='0 0 8 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='4' cy='4' r='4' fill='%23807F81'/%3E%3Ccircle cx='4' cy='4' r='4' fill='white'/%3E%3C/svg%3E%0A\")",
		backgroundPosition: 'center',
		backgroundRepeat: 'no-repeat',
		content: '""',
		display: 'block',
		height: 16,
		width: 16,
	},
}));

const Radio = (props: RadioProps) => (
	<MuiRadio
		{...props}
		checkedIcon={<CheckedIcon className="icon" />}
		icon={<Icon className="icon" />}
	/>
);

export default memo(Radio);
