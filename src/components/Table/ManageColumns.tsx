import { Box } from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment';
import React from 'react';
import {
	type DraggableProvided,
	type OnDragEndResponder,
	DragDropContext,
	Draggable,
	Droppable,
} from 'react-beautiful-dnd';

import { Button } from '../Button';
import { Checkbox } from '../Checkbox';
import { Icon } from '../Icon';
import { TextField } from '../TextField';
import { Typography } from '../Typography';
import type { TManageColumnProps, TManageColumnsItemProps } from './types';

const ColumnItem = ({
	id,
	index,
	columnName,
	//row,
	onChange,
	isVisible,
	isMandatory,
}: TManageColumnsItemProps) => (
	<Draggable draggableId={id} index={index}>
		{(provided: DraggableProvided) => (
			<Box
				display="flex"
				ref={provided.innerRef}
				sx={theme => ({
					padding: theme.spacing(1, 3),
					height: 40,
					alignItems: 'center',
					// border: `1px solid ${theme.palette.divider}`,
					background: theme.palette.white,
					zIndex: 100,
					position: 'relative',
				})}
				{...provided.draggableProps}
				{...provided.dragHandleProps}
			>
				<Box
					display="flex"
					sx={{
						alignItems: 'center',
						flex: 1,
					}}
				>
					<Icon iconName="DotsSixVertical" />
					<Checkbox
						checked={isMandatory || isVisible === true}
						onChange={onChange}
						disabled={isMandatory}
					/>
					<Typography variant="captionMedium">
						{columnName}
					</Typography>
				</Box>
			</Box>
		)}
	</Draggable>
);

const ManageColumn = ({
	columns,
	changeColumns,
	closePopover,
	manageColumnButtonProps,
}: TManageColumnProps) => {
	const [controlledColumns, updateColumns] = React.useState(columns);
	const [searchText, setSearchText] = React.useState('');

	const commitChanges = () => {
		changeColumns(controlledColumns);
		closePopover();
	};

	const onDragEnd: OnDragEndResponder = result => {
		if (!result.destination) {
			return;
		}
		const items = Array.from(controlledColumns);
		const [reorderedItem] = items.splice(result.source.index, 1);
		items.splice(result.destination.index, 0, reorderedItem);
		updateColumns(items);
	};

	const filteredColumns = searchText
		? controlledColumns.filter(col =>
				col.label.toLowerCase().includes(searchText.toLowerCase())
		  )
		: [...controlledColumns];

	const noColumnsText = searchText
		? 'No columns found'
		: 'No columns available';

	return (
		<Box
			display="flex"
			sx={theme => ({
				width: 300,
				flexDirection: 'column',
				borderRadius: theme.shape.borderRadius,
			})}
		>
			<TextField
				placeholder="Search Columns"
				onChange={e => setSearchText(e.target.value)}
				sx={theme => ({ padding: theme.spacing(2.5), width: 280 })}
				InputProps={{
					startAdornment: (
						<InputAdornment position="start">
							<Icon iconName="MagnifyingGlass" />
						</InputAdornment>
					),
				}}
			/>

			<DragDropContext onDragEnd={onDragEnd}>
				<Droppable droppableId="droppable-list">
					{provided => (
						<Box
							sx={theme => ({
								display: 'flex',
								flexDirection: 'column',
								flexWrap: 'wrap',
							})}
							ref={provided.innerRef}
							{...provided.droppableProps}
						>
							{filteredColumns?.map((item, index) => (
								<ColumnItem
									key={item.field + item.label + index}
									id={item.field + item.label + index}
									index={index}
									columnName={item.label}
									isVisible={item?.isVisible}
									isMandatory={item?.isMandatory}
									onChange={() => {
										updateColumns(
											controlledColumns.map(
												(column, columnIndex) => {
													if (
														item?.field ===
														column?.field
													) {
														return {
															...column,
															isVisible:
																column?.isMandatory ===
																true
																	? column?.isVisible
																	: !column?.isVisible,
														};
													}
													return column;
												}
											)
										);
									}}
								/>
							))}
							{provided.placeholder}
						</Box>
					)}
				</Droppable>
			</DragDropContext>
			<Box />
			{filteredColumns?.length ? (
				<Box
					display="flex"
					sx={theme => ({
						padding: theme.spacing(2),
						justifyContent: 'flex-end',
						gap: theme.spacing(2),
					})}
				>
					<Button
						variant="ghost"
						size="small"
						onClick={closePopover}
						{...manageColumnButtonProps}
					>
						Cancel
					</Button>
					<Button
						size="small"
						onClick={commitChanges}
						{...manageColumnButtonProps}
					>
						Apply
					</Button>
				</Box>
			) : (
				<Typography variant="bodyMedium" style={{ margin: 'auto' }}>
					{noColumnsText}
				</Typography>
			)}
		</Box>
	);
};

export default ManageColumn;

