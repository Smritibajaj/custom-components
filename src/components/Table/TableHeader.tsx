import { Popover } from '@mui/material';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import { startCase } from 'lodash';
import React, { useState } from 'react';

import { Checkbox } from '../Checkbox';
import { ConditionalWrapper } from '../ConditionalWrapper';
import { Tooltip } from '../Tooltip';
import { Typography } from '../Typography';
import ColumnMenu from './ColumnMenu';
import SortIcon from './SortIcon';
import type { ITableHeaderProps } from './types';

export const TableHeader = <T,>({
	columns,
	orderBy,
	sortOrder,
	selectable,
	rowDetails,
	setSortOrder,
	singleSort,
	rowActions,
	isShowRowDetails,
	handleSelectAll,
	selectAllCheckbox,
}: ITableHeaderProps<T>) => {
	const [anchorEl, setAnchorEl] = useState(null);

	const getSortDirection = column => {
		const columnName = column.field;
		const direction = sortOrder[columnName];

		if (direction == '1') return 'asc';
		else if (direction == '-1') return 'desc';
		else return 'default';
	};

	return (
		<TableHead>
			<TableRow>
				{selectable ? (
					<TableCell
						variant="head"
						sx={theme => ({
							padding: `${theme.spacing(2, 3)} !important`,
						})}
					>
						<Checkbox
							checked={selectAllCheckbox}
							onChange={handleSelectAll}
						/>
					</TableCell>
				) : null}
				{isShowRowDetails ? (
					<TableCell variant="head" width="30px" />
				) : null}
				{columns?.map(column => {
					if (
						column?.isVisible !== true &&
						column?.isMandatory !== true
					) {
						return null;
					}
					return (
						<TableCell
							key={`header-${column.key ?? column.field}`}
							variant="head"
							width={column.width}
						>
							<ConditionalWrapper
								condition={!!column.sortable}
								wrapper={children => {
									const sortId = `table-sortable-${
										column.key ?? column.field
									}`;
									return (
										<TableSortLabel
											active={false}
											direction={
												orderBy === column.key
													? 'desc'
													: 'asc'
											}
											IconComponent={() => (
												<SortIcon
													dir={getSortDirection(
														column
													)}
												/>
											)}
											id={sortId}
											hideSortIcon={false}
											onClick={(
												event: React.MouseEvent<HTMLDivElement>
											) => {
												if (!anchorEl) {
													setAnchorEl(
														event.currentTarget
													);
												}
											}}
										>
											{children}
											<Popover
												id={sortId}
												open={anchorEl?.id === sortId}
												anchorEl={
													anchorEl?.id === sortId
														? anchorEl
														: null
												}
												onClose={() => {
													setAnchorEl(null);
												}}
												anchorOrigin={{
													vertical: 'bottom',
													horizontal: 'right',
												}}
											>
												<ColumnMenu
													sortOrder={sortOrder}
													column={column}
													setSortOrder={setSortOrder}
													singleSort={singleSort}
													closeMenu={() =>
														setAnchorEl(null)
													}
												/>
											</Popover>
										</TableSortLabel>
									);
								}}
							>
								<Tooltip title={startCase(column.label)}>
									<Typography
										color="#807F81"
										fontSize="12px"
										sx={{
											whiteSpace: 'nowrap',
											overflow: 'hidden',
											textOverflow: 'ellipsis',
											width: 'auto',
										}}
									>
										{startCase(column.label)}
									</Typography>
								</Tooltip>
							</ConditionalWrapper>
						</TableCell>
					);
				})}
				{rowActions && rowActions() !== null && (
					<TableCell variant="head" width="50px">
						<Typography color="#807F81" fontSize="12px">
							Actions
						</Typography>
					</TableCell>
				)}
			</TableRow>
		</TableHead>
	);
};
