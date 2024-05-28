import type { Theme } from '@mui/material/styles';
import type { Components } from '@mui/material/styles/components';

export const MuiDialogTitle: Components<Theme>['MuiDialogTitle'] = {
	defaultProps: {},

	styleOverrides: {
		root: ({ theme }) => ({
			...theme.typography.headingSemiBold,
			padding: theme.spacing(3, 6),
		}),
	},
};