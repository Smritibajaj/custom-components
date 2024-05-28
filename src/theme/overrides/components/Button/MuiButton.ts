import type { Theme } from '@mui/material/styles';
import type { Components } from '@mui/material/styles/components';

import type { ColorPalette } from '../../../colors';

export const MuiButton: Components<Theme>['MuiButton'] = {
	defaultProps: {
		centerRipple: true,
		color: 'P-50',
		disableElevation: true,
		size: 'medium',
		variant: 'primary',
	},

	styleOverrides: {
		root: ({ ownerState: { color = 'P-50' }, theme }) => ({
			minWidth: 'auto',
			textTransform: 'unset',

			':active': {
				borderColor:
					theme.palette[
						`${color.charAt(0)}-50` as keyof ColorPalette
					],
				boxShadow: `0px 0px 2px ${
					theme.palette[`${color.charAt(0)}-50` as keyof ColorPalette]
				}`,
			},

			'&.Mui-disabled': {
				background: `${theme.palette.action.disabledBackground} !important`,
				borderColor: `${theme.palette['D-30']} !important`,
				boxShadow: 'none',
			},
		}),

		sizeMedium: ({ theme }) => ({
			padding: theme.spacing(2.5, 4),
			...theme.typography.bodyMedium,
		}),

		sizeSmall: ({ theme }) => ({
			padding: theme.spacing(1.5, 3),
			...theme.typography.descriptionMedium,
		}),

		ghost: ({ ownerState: { color = 'P-50' }, theme }) => ({
			color: theme.palette[color],
			':hover': {
				background:
					theme.palette[
						`${color.charAt(0)}-10` as keyof ColorPalette
					],
			},
			':active': {
				borderColor: 'transparent',
				background:
					theme.palette[
						`${color.charAt(0)}-15` as keyof ColorPalette
					],
			},
			'&.Mui-disabled': {
				background: 'transparent !important',
				borderColor: 'transparent !important',
			},
		}),

		ghostSizeMedium: ({ theme }) => ({
			padding: theme.spacing(2.5, 2),
		}),

		ghostSizeSmall: ({ theme }) => ({
			padding: theme.spacing(1.5, 2),
		}),

		primary: ({ ownerState: { color = 'P-50' }, theme }) => ({
			background: theme.palette[color],
			color: theme.palette.white,

			':hover': {
				background:
					theme.palette[
						`${color.charAt(0)}-60` as keyof ColorPalette
					],
			},
			':active': {
				background:
					theme.palette[
						`${color.charAt(0)}-70` as keyof ColorPalette
					],
			},
		}),

		secondary: ({ ownerState: { color = 'P-50' }, theme }) => ({
			background: theme.palette.white,
			borderColor: theme.palette[color],
			color: theme.palette[color],

			':hover': {
				background:
					theme.palette[
						`${color.charAt(0)}-10` as keyof ColorPalette
					],
			},
			':active': {
				background:
					theme.palette[
						`${color.charAt(0)}-15` as keyof ColorPalette
					],
			},
		}),

		tertiary: ({ ownerState: { color = 'P-50' }, theme }) => ({
			background: theme.palette.white,
			borderColor: theme.palette['D-30'],
			color: theme.palette['D-50'],
			':hover': {
				background:
					theme.palette[
						`${color.charAt(0)}-10` as keyof ColorPalette
					],
			},
			':active': {
				borderColor: theme.palette['D-30'],
				background:
					theme.palette[
						`${color.charAt(0)}-15` as keyof ColorPalette
					],
			},
		}),

		startIcon: ({ ownerState: { disabled = false } }) => ({
			margin: 0,

			'& .MuiBox-root': {
				cursor: disabled ? 'not-allowed' : 'inherit',

				'& svg *:not(rect:first-of-type)': {
					stroke: 'currentColor !important',
				},
			},
		}),

		endIcon: ({ ownerState: { disabled = false } }) => ({
			margin: 0,

			'& .MuiBox-root': {
				cursor: disabled ? 'not-allowed' : 'inherit',

				'& svg *:not(rect:first-of-type)': {
					stroke: 'currentColor !important',
				},
			},
		}),
	},
};
