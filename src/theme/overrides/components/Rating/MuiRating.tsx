import type { Theme } from '@mui/material';
import type { Components } from '@mui/material/styles/components';

export const MuiRating: Components<Theme>['MuiRating'] = {
	defaultProps: {
		precision: 0.5,
	},

	styleOverrides: {
		root: {
			'& .MuiBox-root': {
				':hover': {
					'& svg *:not(rect:first-of-type)': {
						stroke: 'transparent',
					},
				},

				'& svg *:not(rect:first-of-type)': {
					stroke: 'transparent',
				},
			},
		},

		iconEmpty: ({ theme }) => ({
			color: theme.palette['D-20'],
		}),

		iconFilled: ({ theme }) => ({
			color: theme.palette['Y-50'],
		}),
	},
};
