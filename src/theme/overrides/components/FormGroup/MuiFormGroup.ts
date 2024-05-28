import type { Theme } from '@mui/material/styles';
import type { Components } from '@mui/material/styles/components';

export const MuiFormGroup: Components<Theme>['MuiFormGroup'] = {
	defaultProps: {
		row: true,
	},

	styleOverrides: {
		root: ({ theme }) => ({
			gap: theme.spacing(2),
		}),

		row: ({ theme }) => ({
			gap: theme.spacing(4),
		}),
	},
};
