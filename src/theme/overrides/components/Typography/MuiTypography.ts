import type { Theme } from '@mui/material/styles';
import type { Components } from '@mui/material/styles/components';

export const MuiTypography: Components<Theme>['MuiTypography'] = {
	defaultProps: {
		variant: 'bodyMedium',
	},

	styleOverrides: {
		root: ({ theme }) => ({
			color: theme.palette.text.primary,
			fontFamily: theme.typography.fontFamily,

			'&.Mui-disabled': {
				color: theme.palette.text.disabled,
			},
		}),
	},
};
