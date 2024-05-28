/// <reference types="react" />
import type { BaseChartProps } from '../Charts/types';
import type { IconProps } from '../Icon/types';
export declare const ExportOptionsName: {
    readonly DOWNLOAD_AS_PNG: "DOWNLOAD_AS_PNG";
    readonly DOWNLOAD_AS_PDF: "DOWNLOAD_AS_PDF";
    readonly DOWNLOAD_AS_CSV: "DOWNLOAD_AS_CSV";
    readonly PRINT: "PRINT";
};
type MenuOption = {
    key: string;
    component?: React.ReactNode;
    itemProps?: object;
};
export type Config = {
    iconConfig?: IconProps;
    options: Array<MenuOption>;
    exportFileName?: string;
};
export interface IThreeDotMenuProps {
    config: Config;
    title?: BaseChartProps['title'];
    subheader?: BaseChartProps['subheader'];
    graphTitle?: BaseChartProps['graphTitle'];
}
export type OptionType = {
    key: string;
    label: string;
    icon: JSX.Element;
};
export {};
//# sourceMappingURL=types.d.ts.map