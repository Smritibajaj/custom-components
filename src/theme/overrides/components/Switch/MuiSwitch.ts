import type { Components, Theme } from '@mui/material/styles';

export const MuiSwitch: Components<Theme>['MuiSwitch'] = {
	defaultProps: {
		color: 'default',
	},

	styleOverrides: {
		root: () => ({
			width: 44,
			height: 24,
			padding: 2,
			'> .MuiSwitch-switchBase:hover': {
				backgroundColor: 'transparent',
			},
		}),

		switchBase: ({ theme }) => ({
			margin: theme.spacing(0.25),
			padding: theme.spacing(0.75),
			transitionDuration: '300ms',
			top: '-1px',
			left: '-1px',

			':not(.Mui-disabled):hover': {
				backgroundColor: theme.palette['P-50'] + '33', // '33' is added for 20% opacity
			},
			'&.Mui-checked': {
				color: theme.palette.white,

				'& + .MuiSwitch-track': {
					backgroundColor: theme.palette['P-50'],
					opacity: 1,
					border: 0,
				},
			},
			'&.Mui-disabled + .MuiSwitch-track': {
				background: theme.palette['D-20'],
				opacity: 1,
			},
		}),

		thumb: () => ({
			boxSizing: 'border-box',
			width: 16,
			height: 16,
		}),

		track: ({ theme }) => ({
			borderRadius: (theme.shape.borderRadius as number) * 3,
			background: theme.palette['D-40'],
			opacity: 1,
			height: 20,
			width: 40,
		}),
	},
};
