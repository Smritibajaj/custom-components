import MTableBody from '@mui/material/TableBody';
import MuiTableCell from '@mui/material/TableCell';
import MuiTableRow from '@mui/material/TableRow';

import TableRow from './TableRow';
import type { ITableBodyProps } from './types';

export const TableBody = <DataType,>({
	columns,
	loading,
	openRowIndex,
	renderRow,
	renderRowDetail,
	rows,
	withCollapsibleRows,
	rowsPerPage,
	page,
	selectable,
	rowDetails,
	rowActions,
	onRowClick,
	emptyComponent,
	tableName,
	isShowRowDetails,
	isShowActions,
	colSpan,
	tableView,
	renderAttachment,
	linkComponent,
	columnWidth,
	selectedRows,
	handleSelect,
	handleFetchData
}: ITableBodyProps<DataType>) => {
	if (rows?.length === 0 && emptyComponent) {
		return (
			<MTableBody>
				<MuiTableRow>
					<MuiTableCell colSpan={10}>{emptyComponent}</MuiTableCell>
				</MuiTableRow>
			</MTableBody>
		);
	}
	return (
		<MTableBody>
			{rows?.length > 0 &&
				rows?.map(row => (
					<TableRow
						row={row}
						tableView={tableView}
						isShowRowDetails={isShowRowDetails}
						columns={columns}
						key={`${tableName}-${row?.id || row?._id}`}
						selectable={selectable}
						rowDetails={rowDetails}
						rowActions={rowActions}
						onRowClick={onRowClick}
						isShowActions={isShowActions}
						colSpan={colSpan}
						renderAttachment={renderAttachment}
						linkComponent={linkComponent}
						columnWidth={columnWidth}
						selectedRows={selectedRows}
						handleSelect={handleSelect}
						handleFetchData={handleFetchData}
					/>
				))}
		</MTableBody>
	);
};
