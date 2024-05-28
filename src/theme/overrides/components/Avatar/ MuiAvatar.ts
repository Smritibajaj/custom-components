import type { Theme } from '@mui/material/styles';
import type { Components } from '@mui/material/styles/components';

import type { ColorKey } from '../../../colors/types';

export const MuiAvatar: Components<Theme>['MuiAvatar'] = {
	defaultProps: {
		variant: 'circular',
	},

	styleOverrides: {
		root: ({ ownerState: { color = 'P-50' }, theme }) => ({
			backgroundColor: theme.palette[`${color.charAt(0) as ColorKey}-10`],
		}),
	},
};
