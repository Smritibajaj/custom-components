import type { Theme } from '@mui/material/styles';
import type { Components } from '@mui/material/styles/components';

export const MuiFormHelperText: Components<Theme>['MuiFormHelperText'] = {
	defaultProps: {},

	styleOverrides: {
		root: ({ theme }) => ({
			...theme.typography.captionMedium,
			color: theme.palette['D-40'],
			margin: 0,

			'&.Mui-error': {
				color: theme.palette['R-40'],
			},
		}),
	},
};
