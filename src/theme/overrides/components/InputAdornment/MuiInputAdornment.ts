import type { Components, Theme } from '@mui/material/styles';

export const MuiInputAdornment: Components<Theme>['MuiInputAdornment'] = {
	defaultProps: {},

	styleOverrides: {
		root: ({ theme }) => ({
			display: 'flex',
			gap: theme.spacing(2),
			height: 'max-content',
			maxHeight: 'max-content',
			margin: theme.spacing(0),

			'& span.notranslate': {
				display: 'none',
			},
		}),
	},
};
