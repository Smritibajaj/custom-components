import type { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import PieChart from './PieChart';

export default {
	args: {
		cardHeader: 'Pie chart title',
		subheader: 'Pie chart subtitle',
		series: [
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
		],
	},
	component: PieChart,
	title: 'Components/Charts',
} as ComponentMeta<typeof PieChart>;

const Template: ComponentStory<typeof PieChart> = args => (
	<PieChart {...args} />
);

export const Pie = Template.bind({});
Pie.args = {};
