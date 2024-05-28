import type { Theme } from '@mui/material/styles';
import type { Components } from '@mui/material/styles/components';

export const MuiButtonGroup: Components<Theme>['MuiButtonGroup'] = {
	defaultProps: {
		color: 'P-50',
		disableElevation: true,
		size: 'medium',
		variant: 'primary',
		orientation: 'horizontal',
	},

	styleOverrides: {
		groupedHorizontal: ({ ownerState: { variant }, theme }) => ({
			':first-of-type': {
				borderRight: 0,
			},

			':last-of-type': {
				...(variant === 'primary'
					? { borderLeftColor: theme.palette.white }
					: {}),
			},
		}),
	},
};
