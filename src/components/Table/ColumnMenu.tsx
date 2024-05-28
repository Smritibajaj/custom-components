import Box from '@mui/material/Box';
import React from 'react';

import { Button } from '../Button';
import { Icon } from '../Icon';
import { Typography } from '../Typography';
import type { ColumnMenuProps } from './types';

const Section = ({ children, title }) => (
	<Box
		sx={theme => ({
			padding: theme.spacing(4),
			borderBottom: `1px solid ${theme.palette.grey[300]}`,
			cursor: 'pointer',
		})}
	>
		{!!title && (
			<Typography variant="captionMedium" color="D-50">
				{title}
			</Typography>
		)}
		{children}
	</Box>
);

const ColumnMenu = ({
	closeMenu,
	column,
	sortOrder,
	setSortOrder,
	singleSort,
}: ColumnMenuProps) => {
	const handleSort = (orderType: string) => {
		const columnName = column.field;
		if (singleSort) {
			setSortOrder({
				[columnName]: orderType == 'asc' ? 1 : -1,
			});
		} else {
			setSortOrder({
				...sortOrder,
				[columnName]: orderType == 'asc' ? 1 : -1,
			});
		}
	};
	return (
		<Box
			sx={theme => ({
				width: 300,
			})}
		>
			<Section title={`Sort ${column.label}`}>
				<Box
					display="flex"
					sx={theme => ({
						padding: theme.spacing(2.5, 0),
					})}
					onClick={() => handleSort('asc')}
				>
					<Icon iconName="SortDescending" />
					<Typography
						variant="bodyMedium"
						color={theme => theme.palette.text.secondary}
						sx={theme => ({
							marginLeft: theme.spacing(2.5),
						})}
					>
						Sort by Ascending order
					</Typography>
				</Box>
				<Box
					display="flex"
					sx={theme => ({
						padding: theme.spacing(2.5, 0),
					})}
					onClick={() => handleSort('desc')}
				>
					<Icon iconName="SortAscending" />
					<Typography
						variant="bodyMedium"
						color={theme => theme.palette.text.secondary}
						sx={theme => ({
							marginLeft: theme.spacing(2.5),
						})}
					>
						Sort by Descending order
					</Typography>
				</Box>
			</Section>
		</Box>
	);
};

export default ColumnMenu;
