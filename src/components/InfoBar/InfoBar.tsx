import { Stack } from '@mui/material';
import Alert from '@mui/material/Alert';
import Collapse from '@mui/material/Collapse';
import React, { memo, useState } from 'react';

import { IconButton } from '../Button';
import { Typography } from '../Typography';
import type { InfoBarProps } from './types';

const InfoBar = ({
	description,
	severity,
	title,
	action = null,
	canClose = false,
	icon,
}: InfoBarProps) => {
	const [isOpen, setIsOpen] = useState(true);

	return (
		<Collapse in={isOpen}>
			<Alert
				severity={severity}
				variant="standard"
				color={severity}
				icon={icon}
				action={
					action ? (
						action
					) : canClose ? (
						<IconButton
							className="close-icon"
							variant="ghost"
							onClick={() => setIsOpen(!isOpen)}
							iconName="X"
							size="small"
							color="D-50"
						/>
					) : null
				}
			>
				<Typography className="alert-title" variant="bodyMedium">
					{title}
				</Typography>

				<Stack>
					{Array.isArray(description) ? (
						description.map((desc, idx) => {
							return (
								<Stack direction={'row'}>
									<Typography
										className="alert-description"
										variant="descriptionRegular"
									>
										{idx + 1}.
									</Typography>
									<Typography
										className="alert-description"
										variant="descriptionRegular"
									>
										{desc}
									</Typography>
								</Stack>
							);
						})
					) : (
						<Typography
							className="alert-description"
							variant="descriptionRegular"
						>
							{description}
						</Typography>
					)}
				</Stack>
			</Alert>
		</Collapse>
	);
};

export default memo(InfoBar);
