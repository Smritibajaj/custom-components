import type { Theme } from '@mui/material/styles';
import type { Components } from '@mui/material/styles/components';

export const MuiDialogActions: Components<Theme>['MuiDialogActions'] = {
	defaultProps: {},

	styleOverrides: {
		root: ({ theme }) => ({
			gap: theme.spacing(3),
			padding: theme.spacing(3, 6),

			'> :not(:first-of-type)': {
				margin: theme.spacing(0),
			},
		}),
	},
};
