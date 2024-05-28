import type { Theme } from '@mui/material/styles';
import type { Components } from '@mui/material/styles/components';

export const MuiCard: Components<Theme>['MuiCard'] = {
	defaultProps: {},

	styleOverrides: {
		root: ({ theme }) => ({
			border: `1px solid ${theme.palette['D-15']}`,
			borderRadius: theme.shape.borderRadius,
			display: 'flex',
			flexDirection: 'column',
			padding: theme.spacing(0),
		}),
	},
};
