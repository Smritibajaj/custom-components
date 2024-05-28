import type { Theme } from '@mui/material/styles';
import type { Components } from '@mui/material/styles/components';

export const MuiCardActions: Components<Theme>['MuiCardActions'] = {
	defaultProps: {},

	styleOverrides: {
		root: ({ theme }) => ({
			borderTop: `1px solid ${theme.palette['D-15']}`,
			padding: theme.spacing(0),
			margin: theme.spacing(0, 4),

			':last-child': {
				marginTop: theme.spacing(3),
			},
		}),
	},
};
