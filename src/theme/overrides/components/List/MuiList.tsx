import type { Theme } from '@mui/material';
import type { Components } from '@mui/material/styles/components';

export const MuiList: Components<Theme>['MuiList'] = {
	defaultProps: {},

	styleOverrides: {
		root: ({ theme }) => ({
			padding: theme.spacing(2, 0),
			minWidth: 'auto',

			'& .MuiListItem-root': {
				padding: theme.spacing(2.5, 3),
				gap: theme.spacing(2.5),
				borderBottom: `1px solid  ${theme.palette['D-5']}`,
				borderRadius: 'unset',

				'&:hover': {
					background: theme.palette['P-10'],
				},
			},

			'& .MuiListItemText-root': {
				margin: theme.spacing(0),
			},

			'& .MuiListItemText-primary': {
				...theme.typography.bodyMedium,
			},

			'& .MuiListItemIcon-root': {
				display: 'unset',
				minWidth: 'unset',

				'& .MuiBox-root svg': {
					cursor: 'pointer',
				},
			},
		}),
	},
};
