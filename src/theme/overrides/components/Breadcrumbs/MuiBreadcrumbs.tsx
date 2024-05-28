import type { Theme } from '@mui/material/styles';
import type { Components } from '@mui/material/styles/components';
import { CaretRight } from 'phosphor-react';

export const MuiBreadcrumbs: Components<Theme>['MuiBreadcrumbs'] = {
	defaultProps: {
		itemsAfterCollapse: 2,
		itemsBeforeCollapse: 2,
		maxItems: 4,
		separator: <CaretRight weight="bold" />,
	},
	styleOverrides: {
		li: ({ ownerState, theme }) => ({
			color: theme.palette['D-50'],
			...(ownerState?.variant === 'secondary'
				? theme.typography.captionMedium
				: theme.typography.headingMedium),
			// if primary, ignore the hover state on last child
			[`&:hover${
				ownerState?.variant === 'primary' ? ':not(:last-child)' : ''
			}`]: {
				cursor: 'pointer',
				color: theme.palette['D-80'],
				background: theme.palette['P-10'],
			},
		}),
		separator: ({ ownerState, theme }) => ({
			margin: theme.spacing(1),
			svg: {
				height: ownerState?.variant === 'secondary' ? 12 : 16,
				width: ownerState?.variant === 'secondary' ? 12 : 16,
			},
		}),
		ol: ({ theme }) => ({
			// collapsed icon updates
			button: {
				background: 'none',
				svg: {
					color: theme.palette['D-50'],
					position: 'absolute',
					top: '-3px',
				},
			},
		}),
	},
};
