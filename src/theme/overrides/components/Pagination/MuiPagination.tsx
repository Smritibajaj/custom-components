import { PaginationItem } from '@mui/material';
import type { Theme } from '@mui/material/styles';
import type { Components } from '@mui/material/styles/components';
import { CaretLeft, CaretRight } from 'phosphor-react';
import type { ColorPalette } from '../../../colors';
import { Icon } from '../../../../components';
export const MuiPagination: Components<Theme>['MuiPagination'] = {
	defaultProps: {
		size: 'medium',
		color: 'P-50',
		renderItem: item => (
			<PaginationItem
				slots={{
					previous: () => <Icon iconName="CaretLeft" />,
					next: () => <Icon iconName="CaretRight" />,
				}}
				{...item}
			/>
		),
	},
	styleOverrides: {
		ul: ({ ownerState: { color = 'P-50' }, theme }) => ({
			'.MuiPaginationItem-previousNext': {
				svg: {
					height: 16,
					width: 16,
					'> polyline': {
						strokeWidth: '24',
					},
				},
			},
			'.MuiTouchRipple-root': { display: 'none' },
			'.MuiButtonBase-root': {
				margin: 0,
				color: theme.palette['D-80'],
				fontWeight: 500,
				'&.Mui-selected': {
					color: theme.palette[color as keyof ColorPalette],
					backgroundColor:
						theme.palette[`${color[0]}-10` as keyof ColorPalette],
					'&:hover': {
						backgroundColor:
							theme.palette[
								`${color[0]}-15` as keyof ColorPalette
							],
					},
					'&.Mui-disabled': {
						backgroundColor: theme.palette['D-10'],
					},
				},
				'&:hover': {
					backgroundColor:
						theme.palette[`${color[0]}-10` as keyof ColorPalette],
				},
				'&:active': {
					backgroundColor: theme.palette['D-10'],
				},
				'&.Mui-disabled': {
					opacity: 1,
					color: theme.palette['D-40'],
					backgroundColor: 'unset',
				},
			},
		}),
	},
};
