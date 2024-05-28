import { useTheme } from '@mui/material';
import Highcharts, {
	type Options,
	type XAxisOptions,
	type YAxisOptions,
} from 'highcharts';
import addHighchartsMore from 'highcharts/highcharts-more';
import HighchartsExportData from 'highcharts/modules/export-data';
import HighchartsExporting from 'highcharts/modules/exporting';
import HighchartsOfflineExporting from 'highcharts/modules/offline-exporting';
import HighchartsReact from 'highcharts-react-official';
import React, { forwardRef, memo, useMemo, useRef } from 'react';

import { Card } from '../Card';
import { ThreeDotMenu } from '../ThreeDotMenu';
import { type BaseChartProps, ActionConfigItemsKeys } from './types';

if (typeof Highcharts === 'object') {
	HighchartsExporting(Highcharts);
	HighchartsOfflineExporting(Highcharts);
	HighchartsExportData(Highcharts);
}

addHighchartsMore(Highcharts);

const defaultColors = [
	'#0F72EE',
	'#7E84FA',
	'#DE3D82',
	'#F68511',
	'#0FB5AE',
	'#E8C600',
	'#008F5D',
];

const BaseChart = forwardRef<HTMLDivElement, BaseChartProps>((props, ref) => {
	const {
		colors = defaultColors,
		actionsConfig = [],
		legend = {},
		plotOptions = {},
		series = [],
		title,
		subheader,
		tooltip = {},
		xAxis = {},
		yAxis = {},
		sx,
		graphTitle,
		...restProps
	} = props;

	const theme = useTheme();
	const chartRef = useRef<HighchartsReact.RefObject>(null);

	const options = useMemo<Options>(
		() => ({
			colors,
			chart: {
				// zoomType: "x", //Allows to zoom chart
				...restProps.chart,
			},
			credits: {
				enabled: false, //disables the highcharts credit
			},
			exporting: {
				enabled: false,
			},
			legend: {
				align: 'right',
				itemStyle: {
					fontFamily: theme.typography.fontFamily,
					color: theme.palette['D-60'],
					fontWeight:
						theme.typography.subHeadingMedium.fontWeight?.toString(),
					fontSize: theme.typography.subHeadingMedium
						.fontSize as string,
					letterSpacing:
						theme.typography.subHeadingMedium.letterSpacing,
					lineHeight: theme.typography.subHeadingMedium.lineHeight,
				},
				layout: 'horizontal',
				verticalAlign: 'top',
				symbolHeight: parseFloat(theme.spacing(2.5)),
				symbolWidth: parseFloat(theme.spacing(2.5)),
				symbolRadius: parseFloat(theme.spacing(2.5)),
				...legend,
			},
			plotOptions,
			series,
			tooltip: {
				borderWidth: parseFloat(theme.spacing(0)),
				borderRadius: parseFloat(theme.spacing(4)),
				backgroundColor: theme.palette.white,
				padding: parseFloat(theme.spacing(2)),
				shadow: {
					offsetX: parseFloat(theme.spacing(0)),
					offsetY: parseFloat(theme.spacing(0.5)),
					width: parseFloat(theme.spacing(2.5)),
					opacity: parseFloat(theme.spacing(0.05)),
					//TODO:check the box shadow color
					color: 'rgba(51, 51, 52, 0.1)',
				},
				shared: true,
				useHTML: true,
				...tooltip,
			},
			xAxis: (Array.isArray(xAxis) ? xAxis : [xAxis]).map(
				xAxisObject => ({
					crosshair: {
						width: 1.325,
						zIndex: 5,
					},
					tickLength: parseFloat(theme.spacing(0)),
					title: {
						style: {
							fontFamily: theme.typography.fontFamily,
							fontWeight:
								theme.typography.descriptionMedium.fontWeight?.toString(),
							fontSize: theme.typography.descriptionMedium
								.fontSize as string,
							letterSpacing:
								theme.typography.descriptionMedium
									.letterSpacing,
							lineHeight:
								theme.typography.descriptionMedium.lineHeight,
							color: theme.palette['D-50'],
						},
						text: (xAxisObject as XAxisOptions)?.title?.text ?? '',
						useHTML: true,
					},
					type: (xAxisObject as XAxisOptions)?.type ?? 'datetime',
					labels: {
						format: '{value:%b %d}',
					},
					...xAxisObject,
				})
			),
			yAxis: (Array.isArray(yAxis) ? yAxis : [yAxis]).map(
				yAxisObject => ({
					title: {
						style: {
							fontFamily: theme.typography.fontFamily,
							fontWeight:
								theme.typography.descriptionMedium.fontWeight?.toString(),
							fontSize: theme.typography.descriptionMedium
								.fontSize as string,
							letterSpacing:
								theme.typography.descriptionMedium
									.letterSpacing,
							lineHeight:
								theme.typography.descriptionMedium.lineHeight,
							color: theme.palette['D-50'],
						},
						text: (yAxisObject as YAxisOptions)?.title?.text ?? '',
						useHTML: true,
					},
					...yAxisObject,
				})
			),
			title: graphTitle
				? { ...graphTitle }
				: {
						text: undefined,
				  },
			subtitle: {
				text: undefined,
			},
			...restProps,
		}),
		[props]
	);

	return (
		<Card sx={{ height: '100%', width: '100%', ...sx }}>
			{!!title || !!subheader || actionsConfig.length ? (
				<Card.Header
					title={title}
					subheader={subheader}
					action={actionsConfig.map(action => {
						if (action.component) {
							return (
								<React.Fragment key={action.key}>
									{action.component}
								</React.Fragment>
							);
						}

						//if in future we have more options than change this to switch case
						//to handle multiple cases
						if (
							action.key === ActionConfigItemsKeys.THREE_DOT_MENU
						) {
							return (
								<React.Fragment key={action.key}>
									{action.itemProps?.threeDotsMenuConfig ? (
										<ThreeDotMenu
											config={
												action.itemProps
													.threeDotsMenuConfig
											}
											title={title}
											subheader={subheader}
											graphTitle={graphTitle}
											ref={chartRef}
										/>
									) : null}
								</React.Fragment>
							);
						}

						return null;
					})}
				/>
			) : null}
			<Card.Content
				sx={{ height: '100%', width: '100%', ...sx }}
				ref={ref}
			>
				<HighchartsReact
					highcharts={Highcharts}
					options={options}
					ref={chartRef}
				/>
			</Card.Content>
		</Card>
	);
});

BaseChart.displayName = 'BaseChart';
export default memo(BaseChart);
