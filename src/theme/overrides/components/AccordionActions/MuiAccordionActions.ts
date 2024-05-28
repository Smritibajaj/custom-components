import type { Theme } from '@mui/material/styles';
import type { Components } from '@mui/material/styles/components';

export const MuiAccordionActions: Components<Theme>['MuiAccordionActions'] = {
	defaultProps: {},

	styleOverrides: {
		root: ({ theme }) => ({
			borderTop: `1px solid ${theme.palette['D-15']}`,

			gap: theme.spacing(2),
			padding: theme.spacing(3),

			'>:not(:first-of-type)': {
				margin: 0,
			},
		}),
	},
};
