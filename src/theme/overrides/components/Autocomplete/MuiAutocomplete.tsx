import type { Theme } from '@mui/material/styles';
import type { Components } from '@mui/material/styles/components';
import React from 'react';

import { Icon } from '../../../../components';

export const MuiAutocomplete: Components<Theme>['MuiAutocomplete'] = {
	defaultProps: {
		popupIcon: <Icon iconName="CaretDown" size={16} weight="bold" />,
		clearIcon: <Icon iconName="X" size={16} weight="bold" />,
	},

	styleOverrides: {
		inputRoot: ({ theme }) => ({
			padding: `${theme.spacing(2.25, 4)} !important`,
		}),

		input: () => ({
			padding: '0 !important',
		}),

		endAdornment: ({ theme }) => ({
			display: 'flex',
			position: 'relative',
			top: 'unset',
			right: 'unset',
			gap: theme.spacing(2),

			'& button': {
				padding: theme.spacing(0),
			},
		}),

		option: ({ theme }) => ({
			...theme.typography.bodyMedium,
		}),

		noOptions: ({ theme }) => ({
			...theme.typography.bodyMedium,
		}),

		loading: ({ theme }) => ({
			...theme.typography.bodyMedium,
		}),
	},
};
