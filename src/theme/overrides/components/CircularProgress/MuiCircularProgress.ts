import type { Theme } from '@mui/material/styles';
import type { Components } from '@mui/material/styles/components';

export const MuiCircularProgress: Components<Theme>['MuiCircularProgress'] = {
	defaultProps: {
		color: 'P-50',
	},

	styleOverrides: {
		root: ({ ownerState: { color = 'P-50' }, theme }) => ({
			color: theme.palette[color],
		}),
		circle: {
			strokeLinecap: 'round',
		},
	},
};
