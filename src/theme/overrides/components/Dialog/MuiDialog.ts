import type { Theme } from '@mui/material/styles';
import type { Components } from '@mui/material/styles/components';

export const MuiDialog: Components<Theme>['MuiDialog'] = {
	defaultProps: {
		scroll: 'paper',
	},

	styleOverrides: {
		root: () => ({}),

		paper: () => ({}),
	},
};
