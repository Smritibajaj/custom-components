import type { Theme } from '@mui/material/styles';
import type { Components } from '@mui/material/styles/components';

export const MuiCardHeader: Components<Theme>['MuiCardHeader'] = {
	defaultProps: {
		titleTypographyProps: {
			variant: 'subHeadingSemiBold',
		},
		subheaderTypographyProps: {
			variant: 'descriptionMedium',
		},
	},

	styleOverrides: {
		root: ({ theme }) => ({
			padding: theme.spacing(4, 4, 3, 4),
		}),

		action: ({ theme }) => ({
			display: 'flex',
			alignItems: 'center',
			gap: theme.spacing(2),
			margin: theme.spacing(0),
		}),

		content: ({ theme }) => ({
			display: 'flex',
			flexDirection: 'column',
			gap: theme.spacing(2),
		}),
	},
};
