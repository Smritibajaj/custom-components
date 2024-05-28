// THIS COMPONENT IS SPECIFIC TO CHART COMPONENT SO DON'T MAKE ANY CHANGE UNLESS ABSOLUTELY NECESSARY

import { useTheme } from '@mui/material';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Popover from '@mui/material/Popover';
import type HighchartsReact from 'highcharts-react-official';
import moment from 'moment';
import React, { forwardRef, useState } from 'react';

import { Icon } from '../Icon';
import { chartsExportOptions, defaultTimeFormatForFileName } from './constants';
import {
	type IThreeDotMenuProps,
	type OptionType,
	ExportOptionsName,
} from './types';

const ThreeDotMenu = forwardRef<
	HighchartsReact.RefObject | null,
	IThreeDotMenuProps
>(({ config, title, subheader }, ref) => {
	const theme = useTheme();

	const { iconConfig, options, exportFileName } = config;

	const [anchorEl, setAnchorEl] = useState<Element | null>(null);

	const show = Boolean(anchorEl);
	const id = show ? 'simple-popover' : undefined;
	const handleClick: React.MouseEventHandler<SVGSVGElement> = event => {
		setAnchorEl(event.currentTarget as Element);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};

	const handleAction = (
		e: React.MouseEvent<HTMLLIElement, MouseEvent>,
		type: OptionType
	) => {
		e.stopPropagation();
		handleClose();

		try {
			//@ts-ignore
			const chart = ref?.current?.chart;

			chart.title.update({
				text: typeof title === 'string' ? title : '',
				align: 'left',
				marginRight: 100,
				useHTML: true,
				style: {
					marginTop: 100,
					...theme.typography.subHeadingSemiBold,
				},
			});
			chart.subtitle.update({
				text: typeof subheader === 'string' ? subheader : '',
				align: 'left',
				marginTop: 100,
				style: {
					marginTop: 100,
					...theme.typography.descriptionMedium,
				},
			});
			const fileName = exportFileName
				? exportFileName
				: `${chart.title.textStr} ${moment().format(
						defaultTimeFormatForFileName
				  )}`;

			if (
				type?.key === ExportOptionsName.DOWNLOAD_AS_PNG ||
				type?.key === ExportOptionsName.PRINT
			) {
				chart.exportChart({
					filename: fileName,
				});
			} else if (type?.key === ExportOptionsName.DOWNLOAD_AS_PDF) {
				chart.exportChart({
					type: 'application/pdf',
					filename: fileName,
				});
			} else if (type?.key === ExportOptionsName.DOWNLOAD_AS_CSV) {
				chart.options.exporting.filename = fileName;
				chart.downloadCSV();
			}

			chart.title.update({ text: '' });
			chart.subtitle.update({ text: '' });
		} catch (error) {
			/* empty */
		}
	};

	return (
		<>
			<Icon
				iconName={'DotsThreeOutlineVertical'}
				onClick={handleClick}
				weight="fill"
				fill={theme.palette['D-50']}
				hoverColor="P-50"
				key="settings"
				{...iconConfig}
			/>

			<Popover
				id={id}
				open={show}
				anchorEl={anchorEl}
				onClose={handleClose}
				transformOrigin={{
					vertical: 'top',
					horizontal: 'right',
				}}
				anchorOrigin={{
					vertical: 'bottom',
					horizontal: 'left',
				}}
			>
				<List
					sx={{
						boxShadow: '0',
					}}
				>
					{options.map(option => {
						const optionKey = option.key;
						switch (optionKey) {
							case ExportOptionsName.DOWNLOAD_AS_PNG:
							case ExportOptionsName.DOWNLOAD_AS_PDF:
							case ExportOptionsName.DOWNLOAD_AS_CSV:
								return (
									<ListItem
										key={option.key}
										sx={{
											paddingTop: theme.spacing(0),
											paddingBottom: theme.spacing(0),
											'&:hover': {
												cursor: 'pointer',
											},
										}}
										onClick={e =>
											handleAction(
												e,
												chartsExportOptions[optionKey]
											)
										}
									>
										<>
											<ListItemIcon
												sx={theme => ({
													minWidth: theme.spacing(0),
													paddingRight:
														theme.spacing(1),
												})}
											>
												{
													chartsExportOptions[
														optionKey
													].icon
												}
											</ListItemIcon>
											<ListItemText
												primary={
													chartsExportOptions[
														optionKey
													].label
												}
											/>
										</>
									</ListItem>
								);

							default:
								return (
									<Box key={option.key} onClick={handleClose}>
										{option.component}
									</Box>
								);
						}
					})}
				</List>
			</Popover>
		</>
	);
});

ThreeDotMenu.displayName = 'ThreeDotMenu';
export { ThreeDotMenu };
