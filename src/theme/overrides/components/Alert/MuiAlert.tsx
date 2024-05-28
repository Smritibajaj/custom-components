import type { Theme } from '@mui/material/styles';
import type { Components } from '@mui/material/styles/components';

import { Icon } from '../../../../components';

const getMessageColor = (severity: string | undefined) => {
	switch (severity) {
		case 'info':
			return 'P-80';
		case 'warning':
			return 'Y-80';
		case 'error':
			return 'R-80';
		case 'success':
			return 'G-80';
		default:
			return 'D-60';
	}
};

const getTitleColor = (severity: string | undefined) => {
	switch (severity) {
		case 'info':
			return 'P-50';
		case 'warning':
			return 'Y-70';
		case 'error':
			return 'R-40';
		case 'success':
			return 'G-60';
		default:
			return 'D-60';
	}
};

export const MuiAlert: Components<Theme>['MuiAlert'] = {
	defaultProps: {
		severity: 'info',
		variant: 'standard',
		iconMapping: {
			error: <Icon iconName="Warning" color="R-40" size={24} />,
			info: <Icon iconName="Info" color="P-50" size={24} />,
			success: <Icon iconName="CheckCircle" color="G-60" size={24} />,
			warning: <Icon iconName="WarningCircle" color="Y-70" size={24} />,
		},
	},
	styleOverrides: {
		root: ({ theme }) => ({
			display: 'flex',
			alignItems: 'center',
			gap: theme.spacing(4),
			padding: theme.spacing(2),
		}),

		icon: () => ({
			margin: 0,
			padding: 0,
		}),

		message: ({ theme, ownerState: { severity } }) => ({
			alignItems: 'center',
			display: 'flex',
			flex: 1,
			gap: theme.spacing(4),
			padding: 0,

			'& .alert-title': {
				color: theme.palette[getTitleColor(severity)],
				whiteSpace: 'nowrap',
			},

			'& .alert-description': {
				color: theme.palette[getMessageColor(severity)],
			},
		}),

		action: () => ({
			margin: 0,
			padding: 0,
		}),

		standardInfo: ({ theme }) => ({
			background: theme.palette['P-10'],
		}),

		standardWarning: ({ theme }) => ({
			background: theme.palette['Y-20'],
		}),

		standardSuccess: ({ theme }) => ({
			background: theme.palette['G-15'],
		}),

		standardError: ({ theme }) => ({
			background: theme.palette['R-10'],
		}),
	},
};
