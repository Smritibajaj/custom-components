import type { Theme } from '@mui/material/styles';
import type { Components } from '@mui/material/styles/components';

export const MuiInput: Components<Theme>['MuiInput'] = {
	defaultProps: {
		disableUnderline: true,
	},

	styleOverrides: {
		formControl: {
			'label + &': {
				marginTop: 0,
			},
		},
	},
};
