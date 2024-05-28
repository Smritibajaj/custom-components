import type { TableProps } from '@mui/material/Table';
import type React from 'react';
import type { ChangeEvent } from 'react';
export type SortOrder = 'asc' | 'desc';
export type Row = Record<string, string> & {
    _id?: string | number;
    id: string | number;
};
export type TComponentType = 'link' | 'date' | 'dateTime' | 'duration' | 'status' | 'time';
export interface TManageColumnProps {
    row: Row;
    rowDetail?: () => React.ReactNode;
    columns: IColumns;
    changeColumns: React.Dispatch<React.SetStateAction<IColumns>>;
    closePopover: () => void;
    manageColumnButtonProps?: Object;
}
export interface TManageColumnsItemProps {
    id: string | number;
    index: number;
    columnName: string;
    row?: Row;
    onChange: () => void;
    isVisible: boolean | undefined;
    isMandatory?: boolean;
}
export interface TPaginationProps {
    total: number;
    page: number;
    limit: number;
}
export type ITable = TableProps & {
    columns: IColumns;
    rows: Row[];
    getters: {
        [key: string]: number | string;
    };
    description?: string;
    onSaveColumn: () => void;
    rowActions?: () => React.ReactNode;
    showRowDetails?: boolean;
    rowDetails?: () => React.ReactNode;
    fetchData: (_pagination: TPaginationProps, _sortOrder: any, _search: string, _appliedFilters: any) => void;
    rowsPerPage?: number | undefined;
    defaultPage?: number | undefined;
    selectable?: boolean;
    showManageColumns?: boolean;
    renderRow?: () => React.ReactNode;
    actions?: JSX.Element | null | undefined;
    tableName?: string;
    tableView?: string;
    emptyComponent?: JSX.Element | null | undefined;
    onRowClick?: () => void;
    refetchData?: any[];
    showSearch?: boolean;
    showFilters?: boolean;
    selectedRowPaths?: string[];
    setSelectedRowPaths?: (Args: any) => void;
    filters: {
        [key: string]: any;
    };
    showBorder?: boolean;
    showFooter?: boolean;
    columnWidth?: string | number;
    singleSort?: boolean;
    renderAttachment?: JSX.Element;
    linkComponent?: JSX.Element;
    rowsPerPageOptions?: number[];
    manageColumnButtonProps?: Object;
    onPageChange?: (page: number) => {};
    onRowsPerPageChange?: (pageSize: number) => {};
    showTableMeta?: boolean;
};
export type ITableMeta = {
    title: string | JSX.Element | undefined;
    columns: IColumns;
    changeColumns: React.Dispatch<React.SetStateAction<IColumns>>;
    description?: string;
    pagination?: ITablePagination;
    showPagination?: boolean;
    showSearch?: boolean;
    handleSearch?: (_value: string) => void;
    showFilters?: boolean;
    manageColumnButtonProps?: Object;
};
export interface TSortProps {
    orderBy: string;
    sortOrder: SortOrder;
}
export interface IColumn {
    type?: TComponentType;
    key: string;
    options?: Record<string, string>;
    field?: string;
    isVisible?: boolean;
    label: string;
    sortable?: boolean;
    colSpan?: number | string;
    render: () => React.ReactNode;
    isMandatory?: boolean;
}
export type IColumns = IColumn[];
export interface ITablePagination {
    currentPage?: number;
    limit: number;
    totalCount?: number;
}
export interface TTableFooterProps<T> {
    pagination: ITablePagination;
    loading?: boolean;
    changePagination: React.Dispatch<React.SetStateAction<number>>;
    onPageSizeChange?: () => void;
    rowsPerPageOptions?: number[];
    onPageChange?: (page: number) => {};
}
export interface IFetchTableDataArgs {
    page: number;
    limit?: number;
    sort?: {
        [x: string]: 1 | -1;
    };
}
export interface IProps<T> {
    columns: IColumns;
    fetchRowDetailData?: ({ rowId }: {
        rowId: string;
    }) => Promise<any>;
    fetchTableData?: ({ page, sort }: IFetchTableDataArgs) => Promise<any>;
    loading: boolean;
    pagination: ITablePagination;
    renderRow?: () => React.ReactNode;
    renderRowDetail?: ({ columns, row }: {
        columns: any;
        row: any;
    }) => React.ReactNode;
    renderAttachment?: JSX.Element;
    linkComponent?: JSX.Element;
    rows: T[];
    withCollapsibleRows?: boolean;
    columnWidth?: string | number;
}
export type ITableHeaderProps<T> = Pick<IProps<T>, 'columns'> & {
    handleSort: (columnKey: IColumn['key']) => void;
    orderBy: IColumn['key'];
    sortOrder: SortOrder;
    singleSort?: boolean;
    rowDetail?: () => React.ReactNode;
    selectable: boolean;
    rowActions: () => React.ReactNode;
    handleSelectAll?: () => void;
    selectAllCheckbox?: boolean;
};
export type ITableRow = {
    rows: Row[];
};
export type ITableBodyProps<T> = Pick<IProps<T>, 'columns' | 'fetchRowDetailData' | 'loading' | 'renderRow' | 'renderAttachment' | 'linkComponent' | 'renderRowDetail' | 'withCollapsibleRows' | 'columnWidth'> & {
    tableName: string | undefined;
    rows: {
        [x: string]: string | object;
    }[];
    openRowIndex: number | null;
    setOpenRowIndex: React.Dispatch<React.SetStateAction<number>>;
    selectedRows?: string[];
    handleSelect?: (Args: any) => void;
};
export type IRowDetailProps<T> = Pick<ITableBodyProps<T>, 'columns' | 'fetchRowDetailData'> & {
    row: T;
};
export type ITableFooterProps<T> = Pick<IProps<T>, 'columns' | 'fetchTableData' | 'loading' | 'pagination'> & {
    orderBy: IColumn['key'];
    sortOrder: SortOrder;
};
export interface TablePaginationActionsProps {
    count: number;
    page: number;
    rowsPerPage: number;
    onPageChange: (event: ChangeEvent<unknown>, newPage: number) => void;
}
//# sourceMappingURL=types.d.ts.map