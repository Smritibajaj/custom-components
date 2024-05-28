import type { Theme } from '@mui/material/styles';
import type { Components } from '@mui/material/styles/components';

export const MuiDialogContent: Components<Theme>['MuiDialogContent'] = {
	defaultProps: {
		dividers: true,
	},

	styleOverrides: {
		root: ({ theme }) => ({
			padding: theme.spacing(6),
		}),

		dividers: ({ theme }) => ({
			borderColor: theme.palette['D-15'],
		}),
	},
};
