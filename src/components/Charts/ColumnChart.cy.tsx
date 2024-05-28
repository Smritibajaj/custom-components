/// <reference types="cypress" />
import { mount } from 'cypress/react';
import type { SeriesColumnOptions } from 'highcharts';
import React from 'react';

import { ThemeWrapper } from '../../../cypress/utils/ThemeWrapper';
import ColumnChart from './ColumnChart';

const columnChartSeries: SeriesColumnOptions[] = [
	{
		name: 'Active users',
		type: 'column',
		data: [
			147, 172, 105, 137, 150, 71, 44, 125, 121, 129, 111, 135, 97, 76,
			134, 129, 94, 126, 88, 59, 53, 100, 90, 92, 60, 86, 38, 120, 138,
			84,
		],
	},
	{
		name: 'New users',
		type: 'column',
		data: [
			32, 53, 17, 28, 36, 13, 3, 28, 53, 49, 40, 51, 15, 12, 18, 45, 16,
			31, 22, 6, 6, 11, 31, 23, 19, 31, 12, 46, 46, 33,
		],
	},
];

describe('ColumnChart.cy.tsx', () => {
	it('should mount and render Column chart properly.', () => {
		const title = 'Column chart title';
		const subTitle = 'Column chart subtitle';
		mount(
			<ThemeWrapper>
				<ColumnChart
					title={title}
					subheader={subTitle}
					series={columnChartSeries}
					data-cy="Column-chart"
				/>
			</ThemeWrapper>
		);
	});

	it('should validate series data for chart.', () => {
		cy.wrap(columnChartSeries).should(data => {
			expect(data).to.not.empty;
			expect(data).to.have.length.greaterThan(0);
			const firstSeries = data[0];
			expect(firstSeries).to.not.empty;
			expect(firstSeries).to.haveOwnProperty(
				'type',
				'column',
				'property type exist with value as line in series'
			);
			expect(data).to.be.equal(columnChartSeries);
		});
	});
});
