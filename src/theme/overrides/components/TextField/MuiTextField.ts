import type { Theme } from '@mui/material/styles';
import type { Components } from '@mui/material/styles/components';

export const MuiTextField: Components<Theme>['MuiTextField'] = {
	defaultProps: {
		autoComplete: 'off',
		fullWidth: true,
		type: 'text',
		variant: 'standard',
	},

	styleOverrides: {
		root: ({ theme }) => ({
			flexDirection: 'column',
			gap: theme.spacing(2),
		}),
	},
};
