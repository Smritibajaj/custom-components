import type { Theme } from '@mui/material/styles';
import type { Components } from '@mui/material/styles/components';

export const MuiMenuItem: Components<Theme>['MuiMenuItem'] = {
	defaultProps: {},

	styleOverrides: {
		root: ({ theme }) => ({
			...theme.typography.bodyMedium,
			borderRadius: 0,
			color: theme.palette.text.primary,
			padding: theme.spacing(2.5, 2),

			':hover': {
				background: theme.palette['P-10'],
				color: theme.palette['P-50'],
			},
		}),
	},
};
