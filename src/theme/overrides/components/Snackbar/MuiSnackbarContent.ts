import type { Components, Theme } from '@mui/material/styles';

export const MuiSnackbarContent: Components<Theme>['MuiSnackbarContent'] = {
	defaultProps: {},

	styleOverrides: {
		root: ({ theme, ownerState: { variant } }) => ({
			padding: theme.spacing(3),
			display: 'flex',
			gap: theme.spacing(2),
			opacity: '80% !important',
		}),

		message: ({ theme }) => ({
			padding: theme.spacing(0),
			display: 'flex',
			flex: 1,
			alignItems: 'center',
			gap: theme.spacing(1),
			'& .MuiTypography-root': {
				color: theme.palette.white,
			},
			'& .MuiBox-root': {
				alignSelf: 'flex-start',
				cursor: 'initial',
			},
		}),

		action: ({ theme }) => ({
			margin: theme.spacing(0),
			padding: theme.spacing(0),
			alignSelf: 'flex-start',
			gap: theme.spacing(0),
			'& >button': {
				margin: theme.spacing(-1, 0),
			},
		}),
	},
};
