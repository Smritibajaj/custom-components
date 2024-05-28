import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { Icon } from '../Icon';
import BaseChart from './BaseChart';

export default {
	args: {
		cardHeader: 'Chart title',
		subheader: 'Chart subtitle',
		series: [
			{
				name: 'Active users',
				type: 'area',
				data: [
					{ x: 1658102400000, y: 147 },
					{ x: 1658188800000, y: 172 },
					{ x: 1658275200000, y: 105 },
					{ x: 1658361600000, y: 137 },
					{ x: 1658448000000, y: 150 },
					{ x: 1658534400000, y: 71 },
					{ x: 1658620800000, y: 44 },
					{ x: 1658707200000, y: 125 },
					{ x: 1658793600000, y: 121 },
					{ x: 1658880000000, y: 129 },
					{ x: 1658966400000, y: 111 },
					{ x: 1659052800000, y: 135 },
					{ x: 1659139200000, y: 97 },
					{ x: 1659225600000, y: 76 },
					{ x: 1659312000000, y: 134 },
					{ x: 1659398400000, y: 129 },
					{ x: 1659484800000, y: 94 },
					{ x: 1659571200000, y: 126 },
					{ x: 1659657600000, y: 88 },
					{ x: 1659744000000, y: 59 },
					{ x: 1659830400000, y: 53 },
					{ x: 1659916800000, y: 100 },
					{ x: 1660003200000, y: 90 },
					{ x: 1660089600000, y: 92 },
					{ x: 1660176000000, y: 60 },
					{ x: 1660348800000, y: 86 },
					{ x: 1660435200000, y: 38 },
					{ x: 1660521600000, y: 120 },
					{ x: 1660608000000, y: 138 },
					{ x: 1660694400000, y: 84 },
				],
			},
			{
				name: 'New users',
				type: 'area',
				data: [
					{ x: 1658102400000, y: 32 },
					{ x: 1658188800000, y: 53 },
					{ x: 1658275200000, y: 17 },
					{ x: 1658361600000, y: 28 },
					{ x: 1658448000000, y: 36 },
					{ x: 1658534400000, y: 13 },
					{ x: 1658620800000, y: 3 },
					{ x: 1658707200000, y: 28 },
					{ x: 1658793600000, y: 53 },
					{ x: 1658880000000, y: 49 },
					{ x: 1658966400000, y: 40 },
					{ x: 1659052800000, y: 51 },
					{ x: 1659139200000, y: 15 },
					{ x: 1659225600000, y: 12 },
					{ x: 1659312000000, y: 18 },
					{ x: 1659398400000, y: 45 },
					{ x: 1659484800000, y: 16 },
					{ x: 1659571200000, y: 31 },
					{ x: 1659657600000, y: 22 },
					{ x: 1659744000000, y: 6 },
					{ x: 1659830400000, y: 6 },
					{ x: 1659916800000, y: 11 },
					{ x: 1660003200000, y: 31 },
					{ x: 1660089600000, y: 23 },
					{ x: 1660176000000, y: 19 },
					{ x: 1660348800000, y: 31 },
					{ x: 1660435200000, y: 12 },
					{ x: 1660521600000, y: 46 },
					{ x: 1660608000000, y: 46 },
					{ x: 1660694400000, y: 33 },
				],
			},
		],
		xAxis: {
			title: {
				text: 'Axis title',
			},
		},
		yAxis: {
			title: {
				text: 'Axis title',
			},
		},
	},
	component: BaseChart,
	title: 'Components/Charts/BasicChart',
} as ComponentMeta<typeof BaseChart>;

const Template: ComponentStory<typeof BaseChart> = args => (
	<BaseChart {...args} />
);

export const Chart = Template.bind({});
Chart.args = {};

export const ChartWithActionConfig = Template.bind({});
ChartWithActionConfig.args = {
	actionsConfig: [
		{
			key: 'EXPAND_PANEL',
			component: (
				<Icon iconName="ArrowsOutSimple" key="chart-fullscreen" />
			),
		},
		{
			key: 'THREE_DOT_MENU',
			itemProps: {
				threeDotsMenuConfig: {
					options: [
						{ key: 'DOWNLOAD_AS_PNG' },
						{ key: 'DOWNLOAD_AS_PDF' },
						{
							key: 'REMOVE',
							component: (
								<ListItem button>
									<ListItemIcon
										sx={theme => ({
											minWidth: '0px',
											paddingRight: theme.spacing(1),
										})}
									>
										<Icon
											iconName="Trash"
											color="R-40"
											hoverColor="R-40"
										/>
									</ListItemIcon>

									<ListItemText primary={'Remove'} />
								</ListItem>
							),
						},
					],
				},
			},
		},
	],
};

export const BasicChartWithBlueColorPalette = Template.bind({});
BasicChartWithBlueColorPalette.args = {
	colors: [
		'#E7F1FD',
		'#9FC7F8',
		'#3E8FF1',
		'#0F72EE',
		'#0C5BBE',
		'#08448F',
		'#052E5F',
	],
};
