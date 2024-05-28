import type { Theme } from '@mui/material/styles';
import type { Components } from '@mui/material/styles/components';

export const MuiStepLabel: Components<Theme>['MuiStepLabel'] = {
	defaultProps: {},

	styleOverrides: {
		root: ({ ownerState, theme }) => ({
			'&.MuiStepLabel-vertical': {
				alignItems: ownerState?.optional ? 'flex-start' : 'center',
				paddingBottom: ownerState?.optional ? 0 : theme.spacing(2),
			},
		}),
	},
};
