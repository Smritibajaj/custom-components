import type { Theme } from '@mui/material/styles';
import type { Components } from '@mui/material/styles/components';

export const MuiAccordion: Components<Theme>['MuiAccordion'] = {
	defaultProps: {},

	styleOverrides: {
		root: ({ theme }) => ({
			':before': {
				height: 0,
			},

			'&.Mui-expanded': {
				margin: theme.spacing(0),
			},
		}),

		expanded: ({ theme }) => ({
			margin: theme.spacing(0),
		}),
	},
};
