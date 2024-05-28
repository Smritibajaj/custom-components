import { Box, Drawer, Skeleton, TableRow } from '@mui/material';
import MuiTable from '@mui/material/Table';
import TableContainer from '@mui/material/TableContainer';
import debounce from 'lodash/debounce';
import get from 'lodash/get';
import isEmpty from 'lodash/isEmpty';
import React, { useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';

import { Button, IconButton } from '../Button';
import { Typography } from '../Typography';
import { DrawerContainer, Footer, Header, TableWrapper } from './Styles';
import { TableBody } from './TableBody';
import { TableFooter } from './TableFooter';
import { TableHeader } from './TableHeader';
import TableLoader from './TableLoader';
import TableMeta from './TableMeta';
import type { IColumn, IProps, ITable, Row, SortOrder } from './types';

const defaultPaginationState = {
	total: 0,
	page: 1,
	limit: 10,
	sortOrder: {},
};

const resetSortOrder = (columns: IColumn[]) => {
	if (!columns || !isEmpty(columns)) {
		return {};
	}
	const sortMap = {};
	columns
		?.filter(col => col.sortable)
		?.map(col => {
			sortMap[col?.field] = 0;
		});
	return sortMap;
};

const getVisibleColumns = (
	columns: IColumn[],
	rowDetails,
	rowActions,
	showRowDetails
) => {
	const isShowRowDetails =
		showRowDetails === false ? false : typeof rowDetails === 'function';
	const isShowActions = typeof rowActions === 'function';
	columns?.filter(col => col?.isVisible || col?.isMandatory)?.length;
	let visibleCount = columns?.filter(
		col => col?.isVisible || col?.isMandatory
	)?.length;
	if (isShowRowDetails) visibleCount += 1;
	if (isShowActions) visibleCount += 1;
	return {
		isShowRowDetails,
		isShowActions,
		visibleCount,
	};
};

export const Table = ({
	columns,
	renderRow,
	showManageColumns = true,
	rowsPerPage = 10,
	selectable,
	rowDetails,
	showRowDetails,
	fetchData,
	getters,
	rowActions,
	onRowClick = () => {},
	title,
	description,
	onSaveColumn,
	tableName,
	emptyComponent,
	renderAttachment,
	linkComponent,
	tableView,
	refetchData = [],
	showSearch = true,
	showFilters = true,
	filters,
	showBorder = true,
	showFooter = true,
	singleSort = false,
	selectedRowPaths = [],
	setSelectedRowPaths = data => {},
	showTableMeta = true,
	columnWidth,
	rowsPerPageOptions = [10, 20, 50, 100],
	manageColumnButtonProps = {},
}: ITable) => {
	const [managedColumns, setColumns] = useState(columns);
	const [pagination, setPagination] = useState({
		...defaultPaginationState,
		limit: rowsPerPage,
	});
	const [isFetching, toggleFetching] = useState(true);
	const [isError, toggleError] = useState(false);
	const [rows, setRows] = useState<Row[]>();
	const [openRowIndex, setOpenRowIndex] = useState<number>(1);
	const [sortOrder, setSortOrder] = useState(resetSortOrder(columns));
	const [search, setSearch] = useState('');
	const [filterDrawer, setFilterDrawer] = useState<boolean>(false);
	const [appliedFilters, setAppliedFilters] = useState({});
	const [filterConfig, setFilterConfig] = useState(filters);
	const [selectedRows, setSelectedRows] = useState<string[]>([]);
	const [selectAllCheckbox, setSelectAllCheckbox] = useState(false);

	const { isShowRowDetails, isShowActions, visibleCount } = getVisibleColumns(
		columns,
		rowDetails,
		rowActions,
		showRowDetails
	);

	useEffect(() => {
		handleFetchData();
	}, [pagination.page, pagination.limit, sortOrder]);

	useEffect(() => {
		if (pagination.page != 1)
			setPagination(prevState => ({
				...defaultPaginationState,
				limit: prevState.limit ?? rowsPerPage,
			}));
		else handleFetchData();
	}, [columns, search, appliedFilters, ...refetchData]);

	useEffect(() => {
		setColumns(columns);
	}, [columns]);

	useEffect(() => {
		if (Array.isArray(filters) && filters.length > 0) {
			setFilterConfig(filters);
		}
	}, [filters]);

	useEffect(() => {
		if (isEmpty(selectedRowPaths) && !isEmpty(selectedRows)) {
			setSelectedRows(selectedRowPaths);
		}
	}, [selectedRowPaths]);

	useEffect(() => {
		if (setSelectedRowPaths) {
			setSelectedRowPaths(selectedRows);
		}
		if (rows?.every(row => selectedRows.includes(row?._id))) {
			setSelectAllCheckbox(true);
		} else {
			setSelectAllCheckbox(false);
		}
	}, [selectedRows]);

	// Commented out as this was causing API to trigger twice.
	// useEffect(() => {
	// 	// setPagination({
	// 	// 	...defaultPaginationState,
	// 	// 	limit: rowsPerPage,
	// 	// });
	// 	// setSortOrder(resetSortOrder(columns));
	// 	handleFetchData();
	// }, [fetchData]);

	// Todo reset pagination and sort on fetchData change

	const handleFetchData = async () => {
		try {
			if (fetchData) {
				toggleFetching(true);
				const response = await fetchData(
					pagination,
					sortOrder,
					search,
					appliedFilters
				);
				if (response.filters) {
					setFilterConfig(response.filters);
				}
				if (getters?.row) {
					setRows(get(response, getters.row));
				} else {
					setRows(response);
				}
				if (getters?.pagination) {
					setPagination({
						...pagination,
						page: get(
							response,
							`${getters?.pagination}.${getters?.pageKey}` ||
								`${getters?.pagination}.page`
						),
						total: Number(
							get(
								response,
								`${getters?.pagination}.${getters?.totalKey}` ||
									`${getters?.pagination}.total` ||
									'total'
							) || 0
						),
					});
				}
				toggleFetching(false);
			}
		} catch (error) {
			console.log('error in comp', error);
			toggleFetching(false);
			toggleError(true);
		}
	};

	const handlePageSizeChange = size => {
		setPagination({
			...pagination,
			page: 1,
			limit: size,
		});
	};

	const handleSaveColumns = columnsConfig => {
		const payload = {
			tableName,
			columns: columnsConfig,
		};
		setColumns(columnsConfig);
		if (onSaveColumn) {
			onSaveColumn(payload);
		}
	};

	const handleSelectAll = () => {
		if (rows?.every(row => selectedRows.includes(row?._id))) {
			setSelectedRows([]);
		} else {
			const selectedIds = rows?.map(row => row?._id) ?? [];
			setSelectedRows(selectedIds);
		}
	};

	const handleSelect = (id: string) => {
		setSelectedRows(prevSelectedRows => {
			if (prevSelectedRows.includes(id)) {
				// If the ID is already in the selectedRows array, remove it
				return prevSelectedRows.filter(rowId => rowId !== id);
			} else {
				// If the ID is not in the selectedRows array, add it
				return [...prevSelectedRows, id];
			}
		});
	};
	const debouncedSetSearch = debounce(value => setSearch(value), 500);
	const handleSearch = e => {
		debouncedSetSearch(e.target.value);
	};

	if (isError) {
		<TableContainer>
			<TableMeta title={title} description={description} />
			<Typography>
				Something went wrong while fetching data. Please try again
				later.
			</Typography>
		</TableContainer>;
	}

	const handleSubmitFilter = formData => {
		setAppliedFilters(formData);
		setFilterDrawer(false);
	};

	const handleClearFilter = () => {
		setAppliedFilters({});
		setFilterDrawer(false);
	};
	return (
		<Box
			display="flex"
			sx={theme => ({
				flexDirection: 'column',
				border: showBorder
					? `1px solid ${theme.palette['D-20']}`
					: 'unset',
				borderRadius: `${theme.shape.borderRadius}px`,
			})}
		>
			{/* {isFetching ? (
				<TableRow sx={theme => ({ padding: theme.spacing(5) })}>
					<Skeleton variant="text" />
				</TableRow>
			) : ( */}
			{showTableMeta && (
				<TableMeta
					title={title}
					description={description}
					columns={managedColumns}
					changeColumns={handleSaveColumns}
					pagination={pagination}
					showManageColumns={showManageColumns}
					showSearch={showSearch}
					handleSearch={handleSearch}
					showFilters={showFilters && filterConfig?.length > 0}
					setFilterDrawer={setFilterDrawer}
					appliedFilters={appliedFilters}
					rows={rows}
					manageColumnButtonProps={manageColumnButtonProps}
					isFetching={isFetching}
				/>
			)}
			{/* )} */}
			{isFetching ? (
				<TableLoader size={visibleCount} />
			) : (
				<>
					<TableWrapper>
						<MuiTable>
							<TableHeader
								columns={managedColumns}
								setSortOrder={setSortOrder}
								orderBy={pagination.orderBy}
								sortOrder={sortOrder}
								singleSort={singleSort}
								selectable={selectable}
								rowDetails={rowDetails}
								rowActions={rowActions}
								isShowRowDetails={isShowRowDetails}
								isShowActions={isShowActions}
								handleSelectAll={handleSelectAll}
								selectAllCheckbox={selectAllCheckbox}
							/>

							<TableBody
								tableName={tableName}
								columns={managedColumns}
								openRowIndex={openRowIndex}
								renderRow={renderRow}
								rows={rows}
								setOpenRowIndex={setOpenRowIndex}
								selectable={selectable}
								rowDetails={rowDetails}
								rowActions={rowActions}
								onRowClick={onRowClick}
								emptyComponent={emptyComponent}
								isShowRowDetails={isShowRowDetails}
								isShowActions={isShowActions}
								colSpan={visibleCount}
								tableView={tableView}
								columnWidth={columnWidth}
								renderAttachment={renderAttachment}
								linkComponent={linkComponent}
								selectedRows={selectedRows}
								handleSelect={handleSelect}
								handleFetchData={handleFetchData}
							/>
						</MuiTable>
					</TableWrapper>
					{showFooter ? (
						<TableFooter
							colSpan={visibleCount}
							changePagination={setPagination}
							pagination={pagination}
							onPageSizeChange={handlePageSizeChange}
							rowsPerPageOptions={rowsPerPageOptions}
						/>
					) : null}
				</>
			)}
			{showFilters && filterConfig?.length > 0 ? (
				<Drawer
					anchor="right"
					open={filterDrawer}
					onClose={() => setFilterDrawer(false)}
				>
					<DrawerContainer>
						<Header>
							<Typography variant="headingSemiBold">
								Filters
							</Typography>
							<IconButton
								iconName="X"
								size="medium"
								variant="ghost"
								onClick={() => setFilterDrawer(false)}
								color="D-50"
							/>
						</Header>
						{/* <DynamicForm
							config={filterConfig}
							defaultValues={appliedFilters}
							formId="table-filter-form"
							onSubmit={formData => handleSubmitFilter(formData)}
							onError={formError => console.log({ formError })}
						/> */}
						<Footer>
							<Button
								variant="tertiary"
								onClick={handleClearFilter}
							>
								Reset
							</Button>
							<Button type="submit" form="table-filter-form">
								Apply
							</Button>
						</Footer>
					</DrawerContainer>
				</Drawer>
			) : null}
		</Box>
	);
};

export default Table;
