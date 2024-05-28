import { useTheme } from '@mui/material';
import {
	File,
	FileCode,
	FileText,
	FileX,
	FileXls,
	Image,
} from 'phosphor-react';
import { memo } from 'react';
import { TFileAttachmentSize } from './types';

/**
 * File icon based on filename
 */
const FileIcon = ({
	fileName,
	size,
}: {
	fileName: string;
	size: TFileAttachmentSize;
}) => {
	const theme = useTheme();
	const fileExtension = getFileExtension(fileName);

	switch (fileExtension) {
		case 'png':
		case 'jpg':
		case 'gif':
		case 'jpeg':
		case 'tiff':
		case 'heic':
			return (
				<StyledIcon
					Component={Image}
					color={theme.palette['P-50']}
					backgroundColor={theme.palette['P-5']}
					size={size}
				/>
			);
		case 'doc':
		case 'docx':
		case 'odt':
		case 'page':
			return (
				<StyledIcon
					Component={File}
					color={theme.palette['P-50']}
					backgroundColor={theme.palette['P-5']}
					size={size}
				/>
			);

		case 'pdf':
		case 'xps':
		case 'eps':
			return (
				<StyledIcon
					Component={File}
					color={theme.palette['R-30']}
					backgroundColor={theme.palette['R-10']}
					size={size}
				/>
			);

		case 'xlsx':
		case 'xls':
		case 'num':
		case 'calc':
		case 'csv':
			return (
				<StyledIcon
					Component={FileXls}
					color={theme.palette['G-60']}
					backgroundColor={theme.palette['G-10']}
					size={size}
				/>
			);
		case 'ppt':
		case 'pptx':
		case 'keynote':
			return (
				<StyledIcon
					Component={File}
					color={theme.palette['O-40']}
					backgroundColor={theme.palette['O-10']}
					size={size}
				/>
			);
		case 'txt':
		case 'rtf':
			return (
				<StyledIcon
					Component={FileText}
					color={theme.palette['D-50']}
					backgroundColor={theme.palette['D-10']}
					size={size}
				/>
			);

		case 'html':
		case 'js':
		case 'py':
		case 'svg':
			return (
				<StyledIcon
					Component={FileCode}
					color={theme.palette['D-80']}
					backgroundColor={theme.palette['D-10']}
					size={size}
				/>
			);
		default:
			return (
				<StyledIcon
					Component={FileX}
					color={theme.palette['D-30']}
					backgroundColor={theme.palette['D-10']}
					size={size}
				/>
			);
	}
};

export const getFileExtension = (filename: string) => {
	// Use split() to separate the filename by periods (.)
	const parts = filename.split('.');
	// Get the last part of the array, which should be the file extension
	const extension = parts[parts.length - 1];
	return extension;
};

const StyledIcon = ({
	Component,
	backgroundColor,
	color,
	size,
}: {
	Component: typeof Image;
	backgroundColor: string;
	color: string;
	size: TFileAttachmentSize;
}) => {
	const theme = useTheme();
	const sizeMap: {
		[key in TFileAttachmentSize]: {
			padding: number | string;
			size: number | string;
		};
	} = {
		small: { padding: theme.spacing(1), size: 16 },
		medium: { padding: theme.spacing(2), size: 24 },
		large: { padding: theme.spacing(3), size: 40 },
	};
	return (
		<Component
			weight="fill"
			color={color}
			style={{
				background: backgroundColor,
				borderRadius: '50%',
				padding: sizeMap[size].padding,
				width: sizeMap[size].size,
				height: sizeMap[size].size,
			}}
			size={12}
		/>
	);
};
export default memo(FileIcon);
