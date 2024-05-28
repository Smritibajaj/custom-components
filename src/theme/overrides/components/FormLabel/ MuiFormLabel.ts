import type { Theme } from '@mui/material/styles';
import type { Components } from '@mui/material/styles/components';

export const MuiFormLabel: Components<Theme>['MuiFormLabel'] = {
	defaultProps: {
		focused: false,
	},

	styleOverrides: {
		root: ({ theme }) => ({
			color: theme.palette.text.secondary,
			// display: 'flex',
			// flex: 1,
			// gap: theme.spacing(1),
			...theme.typography.descriptionMedium,
			display: 'block  !important',
			overflow: 'unset !important',
			whiteSpace: 'unset !important',

			'&.Mui-error': {
				color: theme.palette.text.secondary,
			},
		}),

		asterisk: ({ theme }) => ({
			color: theme.palette['R-40'],

			'&.Mui-error': {
				color: theme.palette['R-40'],
			},
		}),
	},
};
