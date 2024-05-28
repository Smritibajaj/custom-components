import { useTheme } from '@mui/material';
import Chip from '@mui/material/Chip';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import axios from 'axios';
import { get } from 'lodash';
import { memo, useRef, useState } from 'react';
import { useFormContext } from 'react-hook-form';

import { getColor } from '../../utils/commonUtils';
import { Icon } from '../Icon';
import { type StatusPropsType, Type } from './type';

const Status = (props: StatusPropsType) => {
	const theme = useTheme();
	const anchorRef = useRef<HTMLDivElement>(null);
	const [open, setOpen] = useState(false);
	const { getValues, setValue } = useFormContext() || {};

	const {
		startIconConfig,
		endIconConfig,
		type = 'primary',
		list,
		sx,
		onDelete = () => {},
		...restProps
	} = props;

	let contentColor = 'P-50',
		backgroundColor = 'P-10',
		background = 'P-10';

	switch (type) {
		case Type.success: {
			contentColor = 'G-70';
			backgroundColor = 'G-10';
			background =
				list && list.length > 0
					? `linear-gradient(to right, ${theme.palette['G-10']} calc(100% - 22px), ${theme.palette['G-15']} calc(100% - 22px))`
					: 'G-10';
			break;
		}
		case Type.error: {
			contentColor = 'R-60';
			backgroundColor = 'R-5';
			background =
				list && list.length > 0
					? `linear-gradient(to right, ${theme.palette['R-5']} calc(100% - 22px), ${theme.palette['R-10']} calc(100% - 22px))`
					: 'R-5';
			break;
		}
		case Type.info: {
			contentColor = 'O-60';
			backgroundColor = 'O-10';
			background =
				list && list.length > 0
					? `linear-gradient(to right, ${theme.palette['O-10']} calc(100% - 22px), ${theme.palette['O-15']} calc(100% - 22px))`
					: 'O-10';
			break;
		}
		case Type.warning: {
			contentColor = 'Y-80';
			backgroundColor = 'Y-15';
			background =
				list && list.length > 0
					? `linear-gradient(to right, ${theme.palette['Y-15']} calc(100% - 22px), ${theme.palette['Y-20']} calc(100% - 22px))`
					: 'Y-15';
			break;
		}
		case Type.primary: {
			contentColor = 'P-50';
			backgroundColor = 'P-5';
			background =
				list && list.length > 0
					? `linear-gradient(to right, ${theme.palette['P-5']} calc(100% - 22px), ${theme.palette['P-10']} calc(100% - 22px))`
					: 'P-5';
			break;
		}
		case Type.default: {
			contentColor = 'D-60';
			backgroundColor = 'D-10';
			background =
				list && list.length > 0
					? `linear-gradient(to right, ${theme.palette['D-10']} calc(100% - 22px), ${theme.palette['D-15']} calc(100% - 22px))`
					: 'D-10';
			break;
		}
	}

	const handleClose = (event: Event) => {
		if (
			anchorRef.current &&
			anchorRef.current.contains(event.target as HTMLElement)
		) {
			return;
		}

		setOpen(false);
	};
	const handleToggle = () => setOpen(prevOpen => !prevOpen);

	return (
		<div ref={anchorRef} style={{ width: 'min-content' }}>
			<Chip
				aria-label="chip button"
				sx={{
					'& .MuiChip-label': {
						padding: 0,
						fontSize: '12px',
						lineHeight: '16px',
						fontWeight: 500,
						paddingRight:
							list && list?.length > 0 ? theme.spacing(1) : 0,
					},
					'.MuiChip-deleteIcon': {
						margin: 0,
						':hover': {
							'& *:not(rect:first-of-type)': {
								stroke: theme?.palette?.[contentColor],
							},
						},
					},
					'.MuiChip-avatar': {
						height: 16,
						width: 16,
						marginLeft: 0,
						marginRight: 0,
					},
					padding:
						list && list?.length > 0
							? theme.spacing(
									1,
									1,
									1,
									startIconConfig?.iconName ? 2 : 2.5
							  )
							: theme.spacing(
									1,
									endIconConfig?.iconName ? 2 : 2.5,
									1,
									startIconConfig?.iconName ? 2 : 2.5
							  ),
					gap: '4px',
					height: 'unset',
					...sx,
				}}
				{...{
					...(list && list?.length > 0
						? {
								deleteIcon: (
									<Icon
										{...{
											iconName: open
												? 'CaretUp'
												: 'CaretDown',
											color: `${contentColor}`,
										}}
									/>
								),
						  }
						: endIconConfig
						? {
								deleteIcon: (
									<Icon
										{...{
											...endIconConfig,
											color: contentColor,
										}}
									/>
								),
						  }
						: {}),
					...(startIconConfig
						? {
								avatar: (
									<Icon
										{...{
											...startIconConfig,
											color: contentColor,
										}}
									/>
								),
						  }
						: {}),
					...restProps,
					style: {
						color: getColor(contentColor, theme.palette),
						backgroundColor: getColor(
							backgroundColor,
							theme.palette
						),
						background: background,
					},
					...(list && list.length > 0
						? {
								onDelete: handleToggle,
						  }
						: endIconConfig
						? { onDelete }
						: {}),
				}}
			/>
			<Popper
				sx={{ zIndex: 1, marginTop: `${theme.spacing(1)} !important` }}
				open={open}
				anchorEl={anchorRef.current}
				role={undefined}
				transition
				disablePortal
				placement="bottom-start"
			>
				{({ TransitionProps, placement }) => (
					<Grow
						{...TransitionProps}
						style={{
							transformOrigin: 'center top',
						}}
					>
						<Paper>
							<ClickAwayListener onClickAway={handleClose}>
								<MenuList id="chip-button-menu" autoFocusItem>
									{list.map((option, index) => (
										<MenuItem
											key={`${option.value}-${index}`}
											onClick={async event => {
												option.onClick(
													option.value,
													event
												);

												if (option?.onClick) {
													option?.onClick(
														option.value,
														event
													);
												}
												if (option?.endPoint) {
													const { data, status } =
														await axios?.[
															option?.httpMethod
														]?.(
															option?.endPoint,
															{
																[option?.payloadKey]:
																	JSON.parse(
																		getValues(
																			option?.payloadPath
																		)
																	),
															},
															{
																headers: {
																	//authorization: localStorage.getItem('token') || '',
																	authorization:
																		localStorage.getItem(
																			'token'
																		),
																},
															}
														);

													if (
														option?.saveOutputPath
													) {
														setValue(
															option?.saveOutputPath,
															get(
																data,
																option?.responsePath
															)
														);
													}
												}

												setOpen(false);
											}}
										>
											{option.label}
										</MenuItem>
									))}
								</MenuList>
							</ClickAwayListener>
						</Paper>
					</Grow>
				)}
			</Popper>
		</div>
	);
};

export default memo(Status);
