import React, { memo } from 'react';

import BaseChart from './BaseChart';
import type { LineChartProps } from './types';

const LineChart = ({ chart, plotOptions, ...restProps }: LineChartProps) => (
	<BaseChart
		{...restProps}
		chart={{
			type: 'spline',
			scrollablePlotArea: {
				minWidth: 600,
				scrollPositionX: 1,
			},
			...chart,
		}}
		plotOptions={{
			line: {
				dashStyle: 'Dash',
				dataLabels: {
					enabled: true,
				},
				states: {
					hover: {
						enabled: false,
					},
				},
				...plotOptions,
			},
		}}
	/>
);

export default memo(LineChart);
