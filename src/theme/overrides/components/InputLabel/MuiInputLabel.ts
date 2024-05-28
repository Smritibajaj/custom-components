import type { Theme } from '@mui/material/styles';
import type { Components } from '@mui/material/styles/components';

export const MuiInputLabel: Components<Theme>['MuiInputLabel'] = {
	defaultProps: {
		disableAnimation: true,
		shrink: true,
	},

	styleOverrides: {
		root: {
			display: 'flex',
		},

		formControl: {
			position: 'relative',
			transform: 'unset',
		},
	},
};
