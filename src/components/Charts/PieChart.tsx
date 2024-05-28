import { useTheme } from '@mui/material';
import React, { forwardRef, memo } from 'react';

import BaseChart from './BaseChart';
import type { PieChartProps } from './types';

const PieChart = forwardRef<HTMLDivElement, PieChartProps>(
	({ legend, plotOptions, ...restProps }: PieChartProps, ref) => {
		const theme = useTheme();

		return (
			<BaseChart
				{...restProps}
				legend={{
					layout: 'vertical',
					align: 'right',
					verticalAlign: 'middle',
					itemMarginTop: parseFloat(theme.spacing(1.25)),
					itemMarginBottom: parseFloat(theme.spacing(1.25)),
					...legend,
				}}
				plotOptions={{
					pie: {
						innerSize: '75%',
						dataLabels: {
							enabled: false,
						},
						showInLegend: true,
						tooltip: {
							headerFormat: `<table>
                <tr>
                  <th colspan="4" />
                </tr>`,
							pointFormat: `<tr>
                <td style="vertical-align: middle;">
                  <span style="background-color: {point.color}; height: ${theme.spacing(
						1.5
					)}; width: ${theme.spacing(
								1.5
							)}; border-radius: 50%; display: inline-block; margin-bottom: ${theme.spacing(
								0.25
							)};"/>
                </td>
                <td style="vertical-align: middle;">
                  <span style="display: inline-block; color: ${
						theme.palette['D-50']
					}; font-size: ${
								theme.typography.descriptionRegular.fontSize
							}; font-weight: ${
								theme.typography.descriptionRegular.fontWeight
							}; line-height: ${
								theme.typography.descriptionRegular.lineHeight
							}";">{point.name}</span>
                </td>
                <td style="text-align: right; vertical-align: middle;">
                  <span style="color: ${theme.palette.black}; font-size: ${
								theme.typography.descriptionMedium.fontSize
							}; font-weight: ${
								theme.typography.descriptionMedium.fontWeight
							}; line-height: ${
								theme.typography.descriptionMedium.lineHeight
							}";">{point.count}</span>
                </td>
                <td style="text-align: right; vertical-align: middle;">
                  <span style="color: ${theme.palette['D-90']}; font-size: ${
								theme.typography.descriptionMedium.fontSize
							}; font-weight: ${
								theme.typography.descriptionMedium.fontWeight
							}; line-height: ${
								theme.typography.descriptionMedium.lineHeight
							}";">{point.y} %</span>
                </td>
              </tr>`,
							footerFormat: '</table>',
						},
						...plotOptions,
					},
				}}
				ref={ref}
			/>
		);
	}
);

PieChart.displayName = 'PieChart';

export default memo(PieChart);
