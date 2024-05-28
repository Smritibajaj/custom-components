import type { Theme } from '@mui/material/styles';
import type { Components } from '@mui/material/styles/components';

export const MuiFormControlLabel: Components<Theme>['MuiFormControlLabel'] = {
	defaultProps: {
		componentsProps: {
			typography: {
				variant: 'bodyMedium',
			},
		},
		labelPlacement: 'end',
		variant: 'standard',
	},

	styleOverrides: {
		root: ({ ownerState: { variant = 'standard' }, theme }) => ({
			margin: theme.spacing(0),
			width: 'max-content',
			gap: theme.spacing(2),
			justifyContent: 'space-between',

			'& .MuiCheckbox-root': {
				padding: 0,
			},

			'&.Mui-disabled': {
				cursor: 'not-allowed',
				pointerEvents: 'auto',
			},

			...(variant === 'outlined'
				? {
						border: `1px solid ${theme.palette['D-40']}`,
						borderRadius: theme.shape.borderRadius,
						gap: theme.spacing(2),
						padding: theme.spacing(2.25),

						'& .MuiCheckbox-root': {
							padding: 0,
						},

						'& .MuiRadio-root': {
							padding: 0,
						},

						':hover': {
							background: theme.palette['P-10'],
							borderColor: theme.palette['P-50'],
						},

						'&.Mui-disabled': {
							background: `${theme.palette.action.disabledBackground} !important`,
							borderColor: `${theme.palette.action.disabled} !important`,
							cursor: 'not-allowed',
							pointerEvents: 'auto',
						},
				  }
				: {}),
		}),

		asterisk: ({ theme }) => ({
			color: theme.palette['R-40'],

			'&.Mui-error': {
				color: theme.palette['R-40'],
			},
		}),
	},
};
