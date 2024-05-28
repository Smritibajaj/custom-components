import {
	Divider,
	Drawer,
	InputAdornment,
	Popover,
	Skeleton,
} from '@mui/material';
import Box from '@mui/material/Box';
import React from 'react';

import { theme } from '../../theme';
import { BaseBadge } from '../Badge';
import { Button, IconButton } from '../Button';
import { Icon } from '../Icon';
import { TextField } from '../TextField';
import { Typography } from '../Typography';
import ManageColumn from './ManageColumns';
import type { ITableMeta } from './types';

const TableMeta = ({
	title,
	columns,
	changeColumns,
	description,
	pagination,
	showManageColumns,
	showSearch,
	handleSearch,
	showFilters,
	setFilterDrawer,
	appliedFilters,
	rows,
	manageColumnButtonProps,
	isFetching,
}: ITableMeta) => {
	const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
		null
	);

	const openPopover = (event: React.MouseEvent<HTMLButtonElement>) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	const open = Boolean(anchorEl);
	const id = open ? 'mui-custom-table-meta-popover' : undefined;

	const getFilterLength = () => {
		let count = 0;

		Object.keys(appliedFilters)?.forEach(el => {
			if (
				Array.isArray(appliedFilters[el]) &&
				appliedFilters[el].length > 0
			) {
				// check if we have valid element present in array
				appliedFilters[el]?.filter(el => !!el)?.length > 0 && count++;
			} else if (
				!Array.isArray(appliedFilters[el]) &&
				!!appliedFilters[el]
			) {
				count++;
			}
		});
		return count;
	};

	return (
		<>
			<Box
				display="flex"
				alignItems="center"
				sx={theme => ({
					padding: theme.spacing(5, 6),
					borderBottom: `1px solid ${theme.palette.divider}`,
				})}
			>
				<Box flex={1}>
					{isFetching ? (
						<Skeleton type="text" />
					) : typeof title === 'function' ? (
						title(pagination, rows)
					) : (
						<>
							<Typography variant="subHeadingSemiBold">
								{title}
							</Typography>
							{description && (
								<>
									<br />
									<Typography variant="subHeadingSemiBold">
										{description}
									</Typography>
								</>
							)}
						</>
					)}
				</Box>
				<Box
					display="flex"
					alignItems="center"
					justifyContent="space-between"
					sx={theme => ({
						gap: theme.spacing(2),
					})}
				>
					{showSearch && (
						<TextField
							InputProps={{
								startAdornment: (
									<InputAdornment position="start">
										<Icon iconName="MagnifyingGlass" />
									</InputAdornment>
								),
							}}
							placeholder="Search"
							onChange={handleSearch}
							sx={{ width: '220px' }}
						/>
					)}
					{showFilters && (
						<Button
							startIcon={<Icon iconName="Funnel" />}
							size="medium"
							variant="tertiary"
							onClick={() => setFilterDrawer(true)}
						>
							{getFilterLength() > 0 ? (
								<>
									<Divider
										orientation="vertical"
										variant="middle"
										flexItem
									/>

									<BaseBadge
										body={{
											component: getFilterLength(),
											sx: {
												color: 'D-5',
												fontSize: 11,
											},
										}}
										sx={{
											backgroundColor: 'P-40',
										}}
									/>
								</>
							) : null}
						</Button>
					)}
					{showManageColumns ? (
						<Box>
							<IconButton
								size="small"
								variant="ghost"
								iconName="DotsThreeVertical"
								color="D-50"
								onClick={openPopover}
							/>
							<Popover
								id={id}
								open={open}
								anchor="right"
								anchorEl={anchorEl}
								onClose={handleClose}
								anchorOrigin={{
									vertical: 'bottom',
									horizontal: 'right',
								}}
								sx={theme => ({
									'.MuiPopover-paper': {
										padding: `${theme.spacing(
											2,
											0,
											0
										)} !important`,
									},
								})}
							>
								<ManageColumn
									columns={columns}
									changeColumns={changeColumns}
									closePopover={handleClose}
									manageColumnButtonProps={
										manageColumnButtonProps
									}
								/>
							</Popover>
						</Box>
					) : null}
				</Box>
			</Box>
		</>
	);
};

export default TableMeta;
