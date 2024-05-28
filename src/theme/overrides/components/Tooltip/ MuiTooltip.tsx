import type { Components, Theme } from '@mui/material/styles';

export const MuiTooltip: Components<Theme>['MuiTooltip'] = {
	defaultProps: {
		placement: 'bottom',
	},

	styleOverrides: {
		arrow: ({ theme }) => ({
			'&:before': {
				background: theme.palette['D-90'],
			},
		}),

		tooltip: ({ theme }) => ({
			background: theme.palette['D-90'],
			borderRadius: theme.shape.borderRadius,
			boxShadow: `${theme.spacing(
				0,
				0.75,
				1.25
			)} rgba(51, 51, 52, 0.2), ${theme.spacing(
				0,
				0,
				0.25
			)}  rgba(51, 51, 52, 0.31)`,
			gap: theme.spacing(2),
			opacity: '0.8 !important',
			padding: theme.spacing(2, 3),

			'& .MuiBox-root': {
				'& svg > *:not(rect:first-of-type)': {
					stroke: theme.palette.white,
				},

				'&:hover': {
					'*:not(rect:first-of-type)': {
						stroke: theme.palette.white,
					},
				},

				'& .MuiTypography-root': {
					color: theme.palette.white,
				},
			},
		}),
	},
};
