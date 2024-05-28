import { IconButton, Stack } from '@mui/material';
import MuiTableCell from '@mui/material/TableCell';
import MuiTableRow from '@mui/material/TableRow';
import { get } from 'lodash';
import moment from 'moment';
import React from 'react';
import { useHistory } from 'react-router-dom';

import { Checkbox } from '../Checkbox';
import { FilterChip } from '../Chip';
import { Icon } from '../Icon';
import { Tooltip } from '../Tooltip';
import { Typography } from '../Typography';
import Attachment from './TableComponents/Attachment';
import UserAvatar from './TableComponents/UserAvatar';
import { getValue } from './utils';

const getChipColor = (type: string) => {
	switch (type) {
		case 'In progress':
		case 'inProgress': {
			return {
				backgroundColor: 'P-10',
				contentColor: 'P-50',
				label: 'In progress',
			};
		}
		case 'Rejected':
		case 'rejected': {
			return {
				backgroundColor: 'R-10',
				contentColor: 'R-40',
				label: 'Rejected',
			};
		}
		case 'Completed':
		case 'completed': {
			return {
				backgroundColor: 'G-15',
				contentColor: 'G-70',
				label: 'Completed',
			};
		}
		case 'Cancelled':
		case 'cancelled': {
			return {
				backgroundColor: 'O-15',
				contentColor: 'O-60',
				label: 'Cancelled',
			};
		}
		case 'withdrawn':
		case 'Withdrawn': {
			return {
				backgroundColor: 'O-15',
				contentColor: 'O-60',
				label: 'Withdrawn',
			};
		}
		case 'draft':
		case 'Draft': {
			return {
				backgroundColor: 'O-15',
				contentColor: 'O-60',
				label: 'Draft',
			};
		}
		case 'failed':
		case 'Failed': {
			return {
				backgroundColor: 'R-15',
				contentColor: 'R-60',
				label: 'Failed',
			};
		}
		default: {
			return {
				label: type,
			};
		}
	}
};

const getRedirectUrl = (row, column) => {
	const redirectTo = column?.redirectTo;
	if (redirectTo === undefined) return undefined;

	let placeholders = column?.redirectKey; //Array
	if (typeof placeholders === 'string') placeholders = [placeholders];

	if (Array.isArray(placeholders)) {
		//a placeholder in url needs to be inside {}
		const regex = new RegExp(`{(${placeholders.join('|')})}`, 'g');
		const result = redirectTo?.replace(
			regex,
			(_, placeholder) => get(row, placeholder) ?? `{${placeholder}}`
		);
		return result;
	} else return redirectTo;
};

const renderRowBasedOnType = (
	row,
	column,
	renderAttachment?: JSX.Element,
	linkComponent?: JSX.Element
) => {
	const value = getValue(column.field, row);
	switch (column.type) {
		case 'attachment':
			if (React.isValidElement(renderAttachment)) {
				return React.cloneElement(renderAttachment, { docs: value });
			} else {
				return (
					<Attachment
						value={typeof value === 'string' ? value : undefined}
					/>
				);
			}
		case 'number': {
			return getValue(column.field, row);
		}
		case 'link':
			if (React.isValidElement(linkComponent)) {
				const toPath =
					getRedirectUrl(row, column) ?? linkComponent?.props?.to;

				return toPath ? (
					React.cloneElement(linkComponent, {
						to: toPath,
						children: <Typography>{value}</Typography>,
					})
				) : (
					<Typography>{value}</Typography>
				);
			} else {
				return <Typography>{value}</Typography>;
			}
		case 'chip':
			return (
				<FilterChip
					customVariant="filled"
					isSelected
					{...getChipColor(value)}
				/>
			);
		case 'chipArray':
			if (typeof value === 'string') {
				// If the value is a string, render a single FilterChip
				return (
					<FilterChip
						customVariant="filled"
						isSelected
						backgroundColor="D-10"
						contentColor="D-70"
						label={value}
						sx={{
							borderRadius: '8px',
							padding: '4px 8px',
						}}
					/>
				);
			}
			const limit = column.limitTag ?? 3;
			const slicedValue = Array.isArray(value)
				? value.slice(0, limit)
				: [];
			const leftOver = value?.length > limit ? value?.length - limit : 0;
			const leftOverValues =
				leftOver > 0
					? value
							.slice(limit)
							.map(el => getValue(column.fieldItem, el))
					: [];
			return (
				<Stack direction="row" gap="4px">
					{slicedValue.map((val, idx) => {
						const arrayValue = getValue(column.fieldItem, val);
						return (
							<FilterChip
								key={`filterChip-${idx}`}
								customVariant="filled"
								isSelected
								backgroundColor="D-10"
								contentColor="D-70"
								label={arrayValue}
								sx={{
									borderRadius: '8px',
									padding: '4px 8px',
								}}
							/>
						);
					})}

					{leftOver > 0 && (
						<Tooltip title={leftOverValues.join(', ')}>
							<div>
								<FilterChip
									customVariant="filled"
									isSelected
									backgroundColor="D-10"
									contentColor="D-70"
									label={`+${leftOver}`}
									sx={{
										borderRadius: '8px',
										padding: '4px 8px',
									}}
								/>
							</div>
						</Tooltip>
					)}
				</Stack>
			);

		case 'user':
			return <UserAvatar user={value} />;
		case 'icon':
			return (
				<Icon
					iconName={value ?? column.iconName}
					size={column.iconSize}
					color={column.iconColor}
				/>
			);
		case 'date-time':
			return (
				<Typography>
					{moment(value).format(column.options.dateFormat)}
				</Typography>
			);
		// case "duration"
		default:
			return (
				<Typography variant="bodyMedium" fontWeight={500}>
					{Array.isArray(value) ? value.join(', ') : value}
				</Typography>
			);
	}
};

const TableRow = ({
	row,
	rowDetails,
	selectable,
	columns,
	rowActions,
	onRowClick,
	isShowRowDetails,
	colSpan,
	isShowActions,
	renderAttachment,
	linkComponent,
	columnWidth,
	selectedRows = [],
	handleSelect,
	handleFetchData,
}) => {
	const [isOpen, setIsOpen] = React.useState(false);

	return (
		<>
			<MuiTableRow onClick={() => onRowClick(row)}>
				{isShowRowDetails && (
					<MuiTableCell
						width={30}
						variant="body"
						sx={{ p: '12px 0 12px 24px' }}
					>
						<IconButton
							onClick={() => setIsOpen(!isOpen)}
							sx={{ p: '2px' }}
						>
							<Icon
								iconName="CaretDown"
								style={{
									transition: 'all 0.2s ease',
									position: 'relative',
									transform: isOpen
										? 'rotate(-180deg)'
										: 'rotate(0deg)',
								}}
							/>
						</IconButton>
					</MuiTableCell>
				)}
				{selectable && (
					<MuiTableCell width="20px" variant="body">
						<Checkbox
							checked={selectedRows.includes(row?._id)}
							onChange={() => {
								handleSelect(row?._id);
							}}
						/>
					</MuiTableCell>
				)}
				{columns
					?.filter(column => {
						if (column?.isMandatory === true) {
							return true;
						} else {
							return column?.isVisible ?? false;
						}
					})
					?.map((column, colIdx) => {
						if (column.render) {
							return (
								<MuiTableCell
									key={colIdx + (row.id || row._id)}
									variant="body"
									width={column.width ?? columnWidth}
								>
									{column.render(row)}
								</MuiTableCell>
							);
						}
						return (
							<MuiTableCell
								key={`${column.field}-${row.id || row._id}`}
								variant="body"
								width={column.width ?? columnWidth}
								// {...(column.type == 'link' && {
								//  component: 'a',
								//  href: getRedirectUrl(row, column),
								// })}
								onClick={e => {
									if (column.onCellClick) {
										e.stopPropagation();
										column.onCellClick(row);
									}
								}}
							>
								{renderRowBasedOnType(
									row,
									column,
									renderAttachment,
									linkComponent
								)}
							</MuiTableCell>
						);
					})}
				{isShowActions && (
					<MuiTableCell width={150}>
						{rowActions(row, handleFetchData)}
					</MuiTableCell>
				)}
			</MuiTableRow>
			{!!isOpen &&
				rowDetails({
					row,
					columns,
				})}
		</>
	);
};

export default TableRow;
