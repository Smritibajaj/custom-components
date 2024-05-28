import type { Theme } from '@mui/material/styles';
import type { Components } from '@mui/material/styles/components';

export const MuiInputBase: Components<Theme>['MuiInputBase'] = {
	defaultProps: {},

	styleOverrides: {
		root: ({ theme }) => ({
			background: theme.palette.white,
			border: `1px solid ${theme.palette['D-50']}`,
			borderRadius: theme.shape.borderRadius,
			gap: theme.spacing(2),
			padding: theme.spacing(2.25, 4),

			':hover': {
				background: theme.palette['D-5'],
			},

			'&.Mui-disabled': {
				background: theme.palette['D-10'],
				borderColor: theme.palette.action.disabled,
				cursor: 'not-allowed',
				pointerEvents: 'auto',
			},

			'&.Mui-error': {
				borderColor: theme.palette['R-40'],
			},

			'&.Mui-focused': {
				background: theme.palette.white,
				borderColor: theme.palette['P-50'],

				'& ::placeholder': {
					color: theme.palette['D-20'],
				},
			},
		}),

		input: ({ theme }) => ({
			color: theme.palette.text.primary,
			height: 'unset',
			padding: 0,
			...theme.typography.bodyMedium,

			'::placeholder': {
				color: theme.palette['D-40'],
				opacity: 1,
				...theme.typography.bodyMedium,
			},

			'&.Mui-disabled': {
				color: theme.palette.action.disabled,
				cursor: 'not-allowed',
				pointerEvents: 'auto',
			},
		}),

		multiline: ({ theme }) => ({
			color: theme.palette['D-90'],
			...theme.typography.bodyMedium,

			'::placeholder': {
				color: theme.palette['D-40'],
				...theme.typography.bodyMedium,
			},

			'&.Mui-disabled': {
				color: theme.palette.action.disabled,
				cursor: 'not-allowed',
				pointerEvents: 'auto',
			},
		}),
	},
};
