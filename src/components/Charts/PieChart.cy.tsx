/// <reference types="cypress" />
import { mount } from 'cypress/react';
import type { SeriesPieOptions } from 'highcharts';
import React from 'react';

import { ThemeWrapper } from '../../../cypress/utils/ThemeWrapper';
import PieChart from './PieChart';

const pieChartSeries: SeriesPieOptions[] = [
	{
		name: 'Brands',
		type: 'pie',
		data: [
			{
				name: 'Chrome',
				y: 61.41,
			},
			{
				name: 'Internet Explorer',
				y: 11.84,
			},
			{
				name: 'Firefox',
				y: 10.85,
			},
			{
				name: 'Edge',
				y: 4.67,
			},
			{
				name: 'Safari',
				y: 4.18,
			},
			{
				name: 'Sogou Explorer',
				y: 1.64,
			},
			{
				name: 'Opera',
				y: 1.6,
			},
			{
				name: 'QQ',
				y: 1.2,
			},
			{
				name: 'Other',
				y: 2.61,
			},
		],
	},
];

describe('PieChart.cy.tsx', () => {
	it('should mount and render pie chart properly.', () => {
		const title = 'Area chart title';
		const subTitle = 'Area chart subtitle';
		mount(
			<ThemeWrapper>
				<PieChart
					title={title}
					subheader={subTitle}
					disableActions={false}
					series={pieChartSeries}
				/>
			</ThemeWrapper>
		);
	});

	it('should validate series data for pie chart.', () => {
		cy.wrap(pieChartSeries).should(data => {
			expect(data).to.not.empty;
			expect(data).to.have.length.greaterThan(0);
			const firstSeries = data[0];
			expect(firstSeries).to.not.empty;
			expect(firstSeries).to.haveOwnProperty(
				'type',
				'pie',
				'property type exist with value as pie in series'
			);
			expect(data).to.be.equal(pieChartSeries);
		});
	});
});
