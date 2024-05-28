import type { Theme } from '@mui/material/styles';
import type { Components } from '@mui/material/styles/components';

export const MuiSlider: Components<Theme>['MuiSlider'] = {
	defaultProps: {
		valueLabelFormat: value => `${value}%`,
	},

	styleOverrides: {
		markLabel: ({ theme }) => ({
			...theme.typography.bodyMedium,
			color: theme.palette.text.primary,
		}),

		mark: () => ({
			display: 'none',
		}),

		rail: ({ theme }) => ({
			backgroundColor: theme.palette['D-15'],
		}),

		thumb: ({ theme }) => ({
			backgroundColor: theme.palette.white,
			border: `1px solid ${theme.palette['P-50']}`,
			boxShadow: `0px 0px 1px 0px rgba(51, 51, 52, 0.31), 0px 3px 5px 0px rgba(51, 51, 52, 0.20) !important`,
			height: '16px',
			width: '16px',
			'&:hover': {
				border: `2px solid ${theme.palette['P-50']}`,
			},
			'&.Mui-active': {
				border: `2px solid ${theme.palette['P-50']}`,
				boxShadow: `0px 0px 2px 0px ${theme.palette['P-50']} !important`,
			},
		}),

		track: ({ theme }) => ({
			backgroundColor: theme.palette['P-50'],
			border: 'none',
		}),

		valueLabel: ({ theme }) => ({
			backgroundColor: theme.palette['D-70'],
			borderRadius: theme.shape.borderRadius,
			filter: 'drop-shadow(0px 3px 5px rgba(51, 51, 52, 0.2)) drop-shadow(0px 0px 1px rgba(51, 51, 52, 0.31))',
			padding: theme.spacing(2),

			'& .MuiSlider-valueLabelLabel': {
				...theme.typography.bodyMedium,
				color: theme.palette.white,
			},
		}),
	},
};
