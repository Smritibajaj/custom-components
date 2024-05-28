import type { Theme } from '@mui/material/styles';
import type { Components } from '@mui/material/styles/components';

export const MuiFormControl: Components<Theme>['MuiFormControl'] = {
	defaultProps: {
		fullWidth: true,
	},

	styleOverrides: {
		root: ({ theme }) => ({
			gap: theme.spacing(2),
		}),
	},
};
