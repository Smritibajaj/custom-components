import type { Theme } from '@mui/material/styles';
import type { Components } from '@mui/material/styles/components';

const getSnackColor = (variant: string | undefined, theme: Theme) => {
	console.log('variant', variant);
	switch (variant) {
		case 'dark':
			return {
				backgroundColor: theme.palette['D-90'],
			};
		case 'light':
			return {
				backgroundColor: '#fff',
				color: theme.palette['D-90'],
			};
		default:
			return {
				backgroundColor: theme.palette['D-90'],
			};
	}
};
export const MuiSnackbar: Components<Theme>['MuiSnackbar'] = {
	defaultProps: {
		autoHideDuration: 5000,
	},

	styleOverrides: {
		root: ({ theme, ownerState: { variant } }) => ({
			maxWidth: '360px',
			'.MuiSnackbarContent-root': {
				...getSnackColor(variant as string, theme),
			},
			'.MuiSnackbarContent-message .MuiTypography-root': {
				...getSnackColor(variant as string, theme),
			},
		}),
	},
};
