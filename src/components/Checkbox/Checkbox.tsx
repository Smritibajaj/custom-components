import MuiCheckbox from '@mui/material/Checkbox';
import { styled } from '@mui/material/styles';
import React, { memo } from 'react';

import type { CheckboxProps } from './types';

const UncheckIcon = styled('span')(({ theme }) => ({
	backgroundColor: theme.palette['D-5'],
	border: '1px solid',
	borderColor: theme.palette['D-40'],
	borderRadius: 4,
	boxSizing: 'border-box',
	height: 16,
	width: 16,
}));

const CheckedIcon = styled(UncheckIcon)(({ theme }) => ({
	backgroundColor: theme.palette['P-50'],
	border: 'none',

	'&:before': {
		backgroundImage:
			"url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M12 5c-.28 0-.53.11-.71.29L7 9.59l-2.29-2.3a1.003 1.003 0 00-1.42 1.42l3 3c.18.18.43.29.71.29s.53-.11.71-.29l5-5A1.003 1.003 0 0012 5z' fill='%23fff'/%3E%3C/svg%3E\")",
		content: '""',
		display: 'block',
		height: 16,
		width: 16,
	},
}));

const IndeterminateIcon = styled(UncheckIcon)(({ theme }) => ({
	backgroundColor: theme.palette['P-50'],
	border: 'none',

	'&:before': {
		backgroundImage:
			"url(\"data:image/svg+xml,%3Csvg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M4 8H12' stroke='%23807F81' stroke-width='2' stroke-linecap='round'/%3E%3Cpath d='M4 8H12' stroke='white' stroke-width='2' stroke-linecap='round'/%3E%3C/svg%3E%0A\")",
		content: '""',
		display: 'block',
		height: 16,
		width: 16,
	},
}));

const Checkbox = (props: CheckboxProps) => (
	<MuiCheckbox
		{...props}
		checkedIcon={<CheckedIcon className="icon" />}
		icon={<UncheckIcon className="icon" />}
		indeterminateIcon={<IndeterminateIcon className="icon" />}
	/>
);

export default memo(Checkbox);
