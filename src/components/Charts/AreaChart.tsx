import { useTheme } from '@mui/material';
import React, { forwardRef, memo } from 'react';

import BaseChart from './BaseChart';
import type { AreaChartProps } from './types';

const AreaChart = forwardRef<HTMLDivElement, AreaChartProps>(
	({ plotOptions, ...restProps }: AreaChartProps, ref) => {
		const theme = useTheme();

		return (
			<BaseChart
				{...restProps}
				plotOptions={{
					area: {
						marker: {
							enabled: false,
							radius: 2,
						},
						fillOpacity: 0.05,
						tooltip: {
							headerFormat: `<table>
                <tr>
                  <th colspan="3">
                    <span style="color:${theme.palette.black}; font-size: ${theme.typography.descriptionRegular.fontSize}; font-weight: ${theme.typography.descriptionRegular.fontWeight}; line-height: ${theme.typography.descriptionRegular.lineHeight}";>{point.key}<span>
                  </th>
                </tr>`,
							pointFormat: `<tr>
                <td style="vertical-align: middle;">
                  <span style="background-color: {series.color}; height: ${theme.spacing(
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
							}";">{series.name}</span>
                </td>
                <td style="text-align: right; vertical-align: middle;">
                  <span style="color: ${theme.palette.black}; font-size: ${
								theme.typography.descriptionMedium.fontSize
							}; font-weight: ${
								theme.typography.descriptionMedium.fontWeight
							}; line-height: ${
								theme.typography.descriptionMedium.lineHeight
							}"; ">{point.y}</span>
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

AreaChart.displayName = 'AreaChart';

export default memo(AreaChart);
