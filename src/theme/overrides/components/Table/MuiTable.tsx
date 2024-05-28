import type { Theme } from '@mui/material/styles';
import type { Components } from '@mui/material/styles/components';

export const MuiTable: Components<Theme>['MuiTable'] = {
	defaultProps: {},
	styleOverrides: {
		root: ({ theme }) => ({}),
	},
};

export const MuiTableContainer: Components<Theme>['MuiTableContainer'] = {
	defaultProps: {},
	styleOverrides: {
		root: ({ theme }) => ({
			border: `1px solid ${theme.palette['D-20']}`,
			borderRadius: theme.shape.borderRadius,
		}),
	},
};

export const MuiTableHead: Components<Theme>['MuiTableHead'] = {
	defaultProps: {},
	styleOverrides: {
		root: ({ theme }) => ({
			overflowX: 'scroll',
			th: { background: theme.palette['D-10'] },

			'.MuiTableCell-root': {
				padding: theme.spacing(2),
				whiteSpace: 'nowrap',
			},
		}),
	},
};

export const MuiTablePagination: Components<Theme>['MuiTablePagination'] = {
	defaultProps: {},
	styleOverrides: {
		root: ({ theme }) => ({
			padding: theme.spacing(6, 4),
		}),
		actions: () => ({
			display: 'flex',
		}),
		displayedRows: () => ({
			margin: 'auto',
		}),
		toolbar: ({ theme }) => ({
			'.MuiTablePagination-selectLabel + div': {
				marginRight: theme.spacing(0),
				marginLeft: theme.spacing(3),
				padding: theme.spacing(0),
				'.MuiSelect-standard': {
					height: '100%',
					display: 'flex',
					alignItems: 'center',
					paddingRight: theme.spacing(12),
				},
			},
		}),
		spacer: () => ({ display: 'none' }),
	},
};

export const MuiTableCell: Components<Theme>['MuiTableCell'] = {
	defaultProps: {},
	styleOverrides: {
		root: ({ theme, ownerState: { type } }) => ({
			padding: theme.spacing(3),
			...(type === 'row-detail' && {
				padding: theme.spacing(0),
			}),
		}),
	},
	spacer: () => ({
		display: 'none',
	}),
};
