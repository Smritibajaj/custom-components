import type { BaseChartProps } from '../Charts/types';
import type { IconProps } from '../Icon/types';

export const ExportOptionsName = {
	DOWNLOAD_AS_PNG: 'DOWNLOAD_AS_PNG',
	DOWNLOAD_AS_PDF: 'DOWNLOAD_AS_PDF',
	DOWNLOAD_AS_CSV: 'DOWNLOAD_AS_CSV',
	PRINT: 'PRINT',
} as const;

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
