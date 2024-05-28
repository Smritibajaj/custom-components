import {
	StyledPagination,
	StyledPopOver,
	StyledStack,
	TableFooterConatiner,
} from './Styles';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import React from 'react';

import { Icon } from '../Icon';
import { Typography } from '../Typography';
import type {
	ITableFooterProps,
	TPaginationProps,
	TTableFooterProps,
	TablePaginationActionsProps,
} from './types';
import Stack from '@mui/material/Stack';
import { Pagination } from '../Pagination';
import { isEmpty } from 'lodash';

export const TableFooter = ({
	colSpan,
	loading,
	pagination,
	changePagination,
	onPageSizeChange,
	rowsPerPageOptions,
}: TTableFooterProps) => {
	if (loading) {
		return null;
	}
	const [open, setOpen] = React.useState(false);
	const [anchorEl, setAnchorEl] = React.useState(null);

	const totalPages = Math.ceil(pagination?.total / pagination?.limit);

	const handleClick = event => {
		event.stopPropagation();
		setAnchorEl(event.currentTarget);
		setOpen(prev => !prev);
	};

	const handleClose = event => {
		event.stopPropagation();
		setAnchorEl(null);
		setOpen(false);
	};

	//const noOfPages = Math.ceil(pagination?.total / pagination?.limit);
	return (
		<TableFooterConatiner>
			<TableRow>
				{pagination?.page && (
					<>
						<TablePagination
							component="div"
							rowsPerPageOptions={rowsPerPageOptions}
							colSpan={colSpan}
							count={pagination?.total || 0}
							rowsPerPage={pagination?.limit}
							labelRowsPerPage={
								<Typography variant="bodyMedium" color="D-90">
									Rows per page
								</Typography>
							}
							page={pagination?.page ? pagination?.page - 1 : 0}
							labelDisplayedRows={({ from, to, count }) => (
								<Typography variant="bodyMedium" color="D-50">
									{`Showing ${from} - ${to} of ${count}`}
								</Typography>
							)}
							onPageChange={(event, page) => {
								changePagination(prev => ({
									...prev,
									page,
								}));
							}}
							sx={{
								'.MuiTablePagination-displayedRows': {
									margin:
										rowsPerPageOptions?.length === 0
											? 'initial'
											: 'auto',
								},
							}}
							SelectProps={{ sx: { height: '2rem' } }}
							onRowsPerPageChange={event =>
								onPageSizeChange(event.target.value)
							}
							ActionsComponent={TablePaginationActions}
						/>
					</>
				)}
			</TableRow>
		</TableFooterConatiner>
	);
};

function TablePaginationActions(props: TablePaginationActionsProps) {
	const { page, onPageChange, count, rowsPerPage } = props;
	return (
		<Pagination
			page={page + 1} // this component starts page count from 1, unlike TablePagination where page count starts from 0. As this is used inside table pagination, hence added 1
			onChange={onPageChange}
			count={Math.ceil(count / rowsPerPage)}
		/>
	);
}
