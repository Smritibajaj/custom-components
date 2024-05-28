import type { Theme } from '@mui/material/styles';
import type { Components } from '@mui/material/styles/components';

export const MuiDivider: Components<Theme>['MuiDivider'] = {
	defaultProps: {
		orientation: 'horizontal',
		variant: 'fullWidth',
	},

	styleOverrides: {
		root: ({ theme }) => ({
			borderColor: theme.palette['D-15'],
		}),
	},
};
