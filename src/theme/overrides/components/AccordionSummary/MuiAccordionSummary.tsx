import type { Components, Theme } from '@mui/material/styles';
import React from 'react';

import { Icon } from '../../../../components';

export const MuiAccordionSummary: Components<Theme>['MuiAccordionSummary'] = {
	defaultProps: {
		expandIcon: <Icon iconName="CaretDown" />,
	},

	styleOverrides: {
		root: ({ theme }) => ({
			border: 'none',
			borderRadius: theme.shape.borderRadius,
			gap: theme.spacing(2),
			minHeight: 'unset',
			padding: theme.spacing(3),

			':hover': {
				background: theme.palette['P-5'],
			},

			'&.Mui-expanded': {
				minHeight: 'unset',

				':hover': {
					background: 'initial',
				},
			},
		}),

		content: ({ theme }) => ({
			gap: theme.spacing(4),
			margin: theme.spacing(0),

			'&.Mui-expanded': {
				margin: theme.spacing(0),
			},
		}),
	},
};
