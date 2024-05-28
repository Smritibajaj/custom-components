import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
// import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import axios from 'axios';
import { get } from 'lodash';
import React, { useContext, useRef, useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { Snackbar } from '../Snackbar';
import IconButton from './IconButton';
import type { SplitButtonProps } from './types';

const SplitButton = (props: SplitButtonProps) => {
	const {
		variant = 'primary',
		color = 'P-50',
		list,
		buttonLabel,
		size = 'small',
		disabled,
	} = props;

	const [open, setOpen] = useState(false);
	const { getValues, setValue } = useFormContext() || {};
	const anchorRef = useRef<HTMLDivElement>(null);
	const { setDataCenter, dataCenterUrl } = useContext<any>({});

	const [openSnackbar, setOpenSnackbar] = useState({
		visible: false,
		message: '',
	});

	const handleToggle = () => setOpen(prevOpen => !prevOpen);

	const handleClose = (event: Event) => {
		if (
			anchorRef.current &&
			anchorRef.current.contains(event.target as HTMLElement)
		) {
			return;
		}

		setOpen(false);
	};

	const fetchDataCenter = async () => {
		try {
			const { data, status } = await axios.get(dataCenterUrl, {
				headers: {
					authorization: localStorage.getItem('token') || '',
				},
			});

			if (status === 200) {
				setDataCenter?.(data?.data);
			}
		} catch (error) {
			console.error('error in fetching data center');
		}
	};

	return (
		<>
			<ButtonGroup
				variant={variant}
				ref={anchorRef}
				aria-label="split button"
				color={color}
				size={size}
			>
				<Button onClick={handleToggle} disabled={disabled}>
					{buttonLabel}
				</Button>

				<IconButton
					iconName={open ? 'CaretUp' : 'CaretDown'}
					onClick={handleToggle}
					disabled={disabled}
				/>
			</ButtonGroup>

			<Popper
				sx={{ zIndex: 1 }}
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
							transformOrigin:
								placement === 'bottom'
									? 'center top'
									: 'center bottom',
						}}
					>
						<Paper>
							<ClickAwayListener onClickAway={handleClose}>
								<MenuList id="split-button-menu" autoFocusItem>
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
													try {
														const { data, status } =
															await axios?.[
																option
																	?.httpMethod
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

														// Calling data center api after successful endPoint execution if dataCenterUrl present
														if (
															dataCenterUrl &&
															status === 200
														) {
															if (dataCenterUrl) {
																fetchDataCenter();
															}
															setOpenSnackbar({
																visible: true,
																message:
																	'Saved to data center!',
															});
														} else {
															setOpenSnackbar({
																visible: false,
																message:
																	'Something went wrong',
															});
														}

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
													} catch (err) {
														setOpenSnackbar({
															visible: true,
															message:
																err?.response?.data?.errors?.map(
																	e =>
																		e?.message
																) ||
																err?.message ||
																'Something went wrong',
														});
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
			<Snackbar
				open={openSnackbar.visible}
				message={openSnackbar.message}
				autoHideDuration={3000}
				onClose={() => {
					setOpenSnackbar({
						visible: false,
						message: '',
					});
				}}
			/>
		</>
	);
};

export default SplitButton;
