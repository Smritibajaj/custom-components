import type { Theme } from '@mui/material/styles';
import type { Components } from '@mui/material/styles/components';

export const MuiButtonBase: Components<Theme>['MuiButtonBase'] = {
	defaultProps: {},

	styleOverrides: {
		root: ({ theme }) => ({
			border: '1px solid transparent',
			borderRadius: theme.shape.borderRadius,
			display: 'flex',
			flexDirection: 'row',
			gap: theme.spacing(2),
			textTransform: 'unset',

			'&.Mui-disabled': {
				cursor: 'not-allowed',
				pointerEvents: 'auto',
			},
		}),
	},
};
