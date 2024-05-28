import type { ComponentMeta, ComponentStory } from '@storybook/react';

import { COLUMNS, fetchData, FILTERS, getNestedData } from './mock';
import Table from './Table';

export default {} as ComponentMeta<typeof Table>;

const TableTemplate: ComponentStory<typeof Table> = args => <Table {...args} />;

// 'success' | 'info' | 'warning' | 'error';

export const StandardTable = TableTemplate.bind({});
StandardTable.args = {
	tableView: 'all_apps',
	columns: COLUMNS,
	title: (pagination, rows) => `Total ${rows?.length ?? 0} Items`,
	fetchData: fetchData,
	showManageColumns: true,
	fetchRowDetails: getNestedData,
	rowActions: null,
	onRowClick: data => console.log('row click', data),
	getters: {
		row: 'result',
		pagination: 'pagination',
		pageKey: 'current',
		totalKey: 'total',
	},
	emptyComponent: <div>No Data</div>,
	onSaveColumn: tableConfig => {
		console.log(tableConfig);
	},
	//rowDetails: () => <div>Row Details</div>,
	showFilters: true,
	filters: FILTERS,
	showFooter: true,
	selectable: true,
	setSelectedRowPaths: data => console.log('selectedRows', data),
	rowsPerPageOptions: [10, 20],
};
