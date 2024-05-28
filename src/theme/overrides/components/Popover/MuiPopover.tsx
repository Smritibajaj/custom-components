import type { Theme } from '@mui/material';
import type { Components } from '@mui/material/styles/components';

export const MuiPopover: Components<Theme>['MuiPopover'] = {
	defaultProps: {
		anchorOrigin: {
			vertical: 'bottom',
			horizontal: 'left',
		},

		transformOrigin: {
			vertical: 'top',
			horizontal: 'right',
		},
	},

	styleOverrides: {
		root: {
			height: '100%',
		},

		paper: ({ theme }) => ({
			backgroundColor: theme.palette.white,
			borderRadius: theme.shape.borderRadius,
			//remove boxShadow value when we have elevation availabe in theme

			boxShadow:
				'0px 0px 1px 0px rgba(51, 51, 52, 0.31), 0px 8px 12px 0px rgba(51, 51, 52, 0.15)',
			padding: theme.spacing(2, 0),
		}),
	},
};
