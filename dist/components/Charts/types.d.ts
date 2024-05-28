import type { SxProps, Theme } from '@mui/material';
import type { Options, PlotAreaOptions, PlotColumnOptions, PlotLineOptions, PlotPieOptions, SeriesAreaOptions, SeriesColumnOptions, SeriesLineOptions, SeriesPieOptions } from 'highcharts';
import type React from 'react';
import type { IconProps } from '../Icon';
export declare const ActionConfigItemsKeys: {
    readonly THREE_DOT_MENU: "THREE_DOT_MENU";
};
export type ThreeDotsMenuConfig = {
    iconConfig?: IconProps;
    options: Array<{
        key: string;
        component?: React.ReactNode;
        itemProps?: object;
    }>;
    exportFileName?: string;
};
export type BaseChartProps = {
    [K in keyof Omit<Options, 'title'>]: Options[K];
} & {
    /**
     * SubTitle of the chart
     * @default Chart subtitle
     */
    subheader?: React.ReactChild;
    /**
     * Title of the chart
     * @default Chart title
     */
    title?: React.ReactChild;
    /**
     * graphTitle is passed as title prop of the chart
     * @default Chart graphTitle
     */
    graphTitle?: {
        [K in keyof Pick<Options, 'title'>]: Options[K];
    };
    /**
     * The system prop that allows defining system overrides as well as additional CSS styles.
     * Applied to Card that wraps the highcharts.
     */
    sx?: SxProps<Theme>;
    /**
     * The action to display in the card header.
     */
    actionsConfig?: Array<{
        key: string;
        component?: React.ReactNode;
        itemProps?: {
            threeDotsMenuConfig?: ThreeDotsMenuConfig;
        };
    }>;
};
export type AreaChartProps = Omit<BaseChartProps, 'series' | 'plotOptions'> & {
    /**
   * (Highcharts, Highstock) The area series type.
   *
   * In TypeScript the type option must always be set.
   *
   * Configuration options for the series are given in three levels:
   *
   * 1. Options for all series in a chart are defined in the
   * plotOptions.series object.
   *
   * 2. Options for all `area` series are defined in plotOptions.area.
   *
   * 3. Options for one single series are given in the series instance array.
   * (see online documentation for example)
   *
   * @default {
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
                    theme.palette["D-50"]
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
            footerFormat: "</table>",
          },
          ...props.plotOptions,
        }
   */
    plotOptions?: PlotAreaOptions;
    /**
     * (Highcharts, Highstock) A `area` series. If the type option is not specified,
     * it is inherited from chart.type.
     *
     * In TypeScript the type option must always be set.
     *
     * Configuration options for the series are given in three levels:
     *
     * 1. Options for all series in a chart are defined in the plotOptions.series
     * object.
     *
     * 2. Options for all `area` series are defined in plotOptions.area.
     *
     * 3. Options for one single series are given in the series instance array. (see
     * online documentation for example)
     *
     * You have to extend the `SeriesAreaOptions` via an interface to allow custom
     * properties: ``` declare interface SeriesAreaOptions { customProperty: string;
     * }
     *
     */
    series: SeriesAreaOptions[];
};
export type PieChartProps = Omit<BaseChartProps, 'series' | 'plotOptions'> & {
    /**
   * (Highcharts, Highmaps) A pie chart is a circular graphic which is divided
   * into slices to illustrate numerical proportion.
   *
   * In TypeScript the type option must always be set.
   *
   * Configuration options for the series are given in three levels:
   *
   * 1. Options for all series in a chart are defined in the
   * plotOptions.series object.
   *
   * 2. Options for all `pie` series are defined in plotOptions.pie.
   *
   * 3. Options for one single series are given in the series instance array.
   * (see online documentation for example)
   *
   * @default {
          innerSize: "75%",
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
                    theme.palette["D-50"]
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
                  <span style="color: ${theme.palette["D-90"]}; font-size: ${
              theme.typography.descriptionMedium.fontSize
            }; font-weight: ${
              theme.typography.descriptionMedium.fontWeight
            }; line-height: ${
              theme.typography.descriptionMedium.lineHeight
            }";">{point.y} %</span>
                </td>
              </tr>`,
            footerFormat: "</table>",
          },
          ...props.plotOptions,
        }
   */
    plotOptions?: PlotPieOptions;
    /**
     * (Highcharts, Highmaps) A `pie` series. If the type option is not specified,
     * it is inherited from chart.type.
     *
     * In TypeScript the type option must always be set.
     *
     * Configuration options for the series are given in three levels:
     *
     * 1. Options for all series in a chart are defined in the plotOptions.series
     * object.
     *
     * 2. Options for all `pie` series are defined in plotOptions.pie.
     *
     * 3. Options for one single series are given in the series instance array. (see
     * online documentation for example)
     *
     * You have to extend the `SeriesPieOptions` via an interface to allow custom
     * properties: ``` declare interface SeriesPieOptions { customProperty: string;
     * }
     *
     */
    series: SeriesPieOptions[];
};
export type LineChartProps = Omit<BaseChartProps, 'series' | 'plotOptions'> & {
    /**
   * (Highcharts, Highstock) The area series type.
   *
   * In TypeScript the type option must always be set.
   *
   * Configuration options for the series are given in three levels:
   *
   * 1. Options for all series in a chart are defined in the
   * plotOptions.series object.
   *
   * 2. Options for all `area` series are defined in plotOptions.area.
   *
   * 3. Options for one single series are given in the series instance array.
   * (see online documentation for example)
   *
   * @default {
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
                    theme.palette["D-50"]
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
            footerFormat: "</table>",
          },
          ...props.plotOptions,
        }
   */
    plotOptions?: PlotLineOptions;
    /**
     * (Highcharts, Highstock) A `area` series. If the type option is not specified,
     * it is inherited from chart.type.
     *
     * In TypeScript the type option must always be set.
     *
     * Configuration options for the series are given in three levels:
     *
     * 1. Options for all series in a chart are defined in the plotOptions.series
     * object.
     *
     * 2. Options for all `area` series are defined in plotOptions.area.
     *
     * 3. Options for one single series are given in the series instance array. (see
     * online documentation for example)
     *
     * You have to extend the `SeriesAreaOptions` via an interface to allow custom
     * properties: ``` declare interface SeriesAreaOptions { customProperty: string;
     * }
     *
     */
    series: SeriesLineOptions[];
};
export type ColumnChartProps = Omit<BaseChartProps, 'series' | 'plotOptions'> & {
    /**
   * (Highcharts, Highstock) The area series type.
   *
   * In TypeScript the type option must always be set.
   *
   * Configuration options for the series are given in three levels:
   *
   * 1. Options for all series in a chart are defined in the
   * plotOptions.series object.
   *
   * 2. Options for all `area` series are defined in plotOptions.area.
   *
   * 3. Options for one single series are given in the series instance array.
   * (see online documentation for example)
     *
   * @default {
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
                    theme.palette["D-50"]
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
            footerFormat: "</table>",
          },
          ...props.plotOptions,
        }
   */
    plotOptions?: PlotColumnOptions;
    /**
     * (Highcharts, Highstock) A `area` series. If the type option is not specified,
     * it is inherited from chart.type.
     *
     * In TypeScript the type option must always be set.
     *
     * Configuration options for the series are given in three levels:
     *
     * 1. Options for all series in a chart are defined in the plotOptions.series
     * object.
     *
     * 2. Options for all `area` series are defined in plotOptions.area.
     *
     * 3. Options for one single series are given in the series instance array. (see
     * online documentation for example)
     *
     * You have to extend the `SeriesAreaOptions` via an interface to allow custom
     * properties: ``` declare interface SeriesAreaOptions { customProperty: string;
     * }
     *
     */
    series: SeriesColumnOptions[];
};
//# sourceMappingURL=types.d.ts.map