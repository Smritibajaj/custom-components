import type { Theme } from '@mui/material/styles';
import type { Components } from '@mui/material/styles/components';

export const MuiCardContent: Components<Theme>['MuiCardContent'] = {
	defaultProps: {},

	styleOverrides: {
		root: ({ theme }) => ({
			padding: theme.spacing(3, 4),
			display: 'flex',
			flexDirection: 'column',
			justifyContent: 'flex-end',
		}),
	},
};
