import type { Theme } from '@mui/material/styles';
import type { Components } from '@mui/material/styles/components';

export const MuiAvatarGroup: Components<Theme>['MuiAvatarGroup'] = {
	defaultProps: {
		max: 4,
		spacing: 'small',
	},

	styleOverrides: {
		root: ({ ownerState: { max = 4 }, theme }) => ({
			justifyContent: 'start',

			...[...Array(max - 1)].reduce(
				(result, curr, index) => ({
					...result,
					[`& > .MuiAvatar-root:nth-last-child(${index + 1})`]: {
						zIndex: index,
					},
				}),
				{}
			),

			'& :nth-last-child(4)': {
				...theme.typography.bodyMedium,
				backgroundColor: theme.palette['P-10'],
				color: theme.palette['P-50'],
				zIndex: 4,
			},
		}),
	},
};
