import { Icon } from '../Icon';
import { ExportOptionsName } from './types';

export const defaultTimeFormatForFileName = 'MMMM Do YYYY h:mm:ss a';

export const chartsExportOptions = {
	DOWNLOAD_AS_PNG: {
		key: ExportOptionsName.DOWNLOAD_AS_PNG,
		label: 'Download as PNG',
		icon: (
			<Icon iconName="DownloadSimple" weight="fill" hoverColor="D-50" />
		),
	},
	DOWNLOAD_AS_PDF: {
		key: ExportOptionsName.DOWNLOAD_AS_PDF,
		label: 'Download as PDF',
		icon: (
			<Icon iconName="DownloadSimple" weight="fill" hoverColor="D-50" />
		),
	},
	DOWNLOAD_AS_CSV: {
		key: ExportOptionsName.DOWNLOAD_AS_CSV,
		label: 'Download as CSV',
		icon: (
			<Icon iconName="DownloadSimple" weight="fill" hoverColor="D-50" />
		),
	},
};
