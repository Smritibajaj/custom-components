import type { Theme } from '@mui/material/styles';
import type { Components } from '@mui/material/styles/components';

export const MuiStepper: Components<Theme>['MuiStepper'] = {
	defaultProps: {
		variant: 'primary',
	},

	styleOverrides: {
		root: ({ ownerState, theme }) => ({
			fontFamily: theme.typography.fontFamily,
			'.MuiStepLabel-labelContainer': {
				maxWidth: 200,
				...theme.typography.descriptionRegular,
				color: theme.palette['D-50'],
				'.MuiStepLabel-label': {
					...theme.typography.bodyMedium,
					'&.Mui-completed, &.Mui-disabled, &.Mui-error': {
						color: theme.palette['D-50'],
					},
					'&.Mui-error.Mui-active': {
						color: theme.palette['D-80'],
					},
				},
			},
			'.MuiStepLabel-iconContainer': {
				height: 24,
				width: 24,
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				paddingRight: 0,
				marginRight: theme.spacing(2),
				borderRadius: '50%',
				background: theme.palette['D-15'],
				'> .MuiTypography-root': {
					...theme.typography.descriptionMedium,
					color: theme.palette['D-50'],
				},
				'&.Mui-active': {
					background:
						theme.palette[
							ownerState?.variant === 'primary' ? 'P-50' : 'D-70'
						],
					'> .MuiTypography-root': {
						color: theme.palette.white,
					},
				},
				'&.Mui-completed': {
					svg: {
						color: theme.palette[
							ownerState?.variant === 'primary' ? 'P-50' : 'G-60'
						],
					},
					background:
						theme.palette[
							ownerState?.variant === 'primary' ? 'P-10' : 'G-10'
						],
				},
				'&.Mui-error:not(.Mui-active)': {
					background: theme.palette['R-10'],
					svg: {
						color: theme.palette['R-40'],
					},
				},
			},
			'.MuiStepLabel-root': {
				paddingBottom: 0,
			},

			'.MuiStepConnector-lineHorizontal': {
				borderColor: theme.palette['D-15'],
				margin: theme.spacing(0, 2, 0, 2),
				minWidth: 72,
			},
		}),
		alternativeLabel: ({ theme }) => ({
			'.MuiStepLabel-alternativeLabel': {
				'&.MuiStepLabel-label': {
					marginTop: theme.spacing(2),
				},
				'&.MuiStepLabel-vertical': {
					alignItems: 'flex-start',
					'.MuiStepLabel-alternativeLabel': {
						textAlign: 'start',
					},
				},
			},

			'&.MuiStepper-vertical': {
				alignItems: 'flex-start',
				'.MuiStepConnector-vertical': {
					position: 'static',
					marginLeft: theme.spacing(3),
				},
				'.MuiStep-vertical': {
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'flex-start',
				},
			},

			'.MuiStepConnector-lineHorizontal': {
				minWidth: 'unset',
				margin: theme.spacing(0, 4, 0, 2),
			},
		}),
		vertical: ({ theme }) => ({
			'.MuiStepConnector-lineVertical': {
				minHeight: 72,
				margin: theme.spacing(0, 0, 2),
			},
			'.MuiStepConnector-alternativeLabel': {
				'.MuiStepConnector-lineVertical': {
					minHeight: 72,
					margin: theme.spacing(2, 2, 2, 0),
				},
			},
		}),
	},
};
