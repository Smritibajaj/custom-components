import type { Theme } from '@mui/material/styles';
import type { Components } from '@mui/material/styles/components';

export const MuiCheckbox: Components<Theme>['MuiCheckbox'] = {
	defaultProps: {
		color: 'default',
	},

	styleOverrides: {
		root: ({ theme }) => ({
			border: 'none',
			height: 'max-content',
			padding: theme.spacing(2),
			width: 'max-content',

			':hover': {
				background: theme.palette['P-5'],
			},

			'&.Mui-disabled': {
				background: 'inherit',

				'& span.icon': {
					background: theme.palette.action.disabledBackground,

					':hover': {
						background: 'inherit',
					},
				},

				'&.Mui-checked span.icon': {
					background: theme.palette.action.disabled,
				},

				'&.MuiCheckbox-indeterminate span.icon': {
					background: theme.palette.action.disabled,
				},
			},
		}),
	},
};
