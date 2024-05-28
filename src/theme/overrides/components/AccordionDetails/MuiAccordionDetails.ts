import type { Components, Theme } from '@mui/material/styles';

export const MuiAccordionDetails: Components<Theme>['MuiAccordionDetails'] = {
	styleOverrides: {
		root: ({ theme }) => ({
			display: 'flex',
			flexDirection: 'column',
			padding: theme.spacing(2, 3, 4),

			'& .MuiTypography-root': {
				...theme.typography.subHeadingMedium,
			},
		}),
	},
};
