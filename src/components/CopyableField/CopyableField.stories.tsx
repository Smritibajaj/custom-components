import Box from '@mui/material/Box';
import React, { memo, useRef, useState } from 'react';

import { Button } from '../Button';
import { type IconName, Icon } from '../Icon';
import { TextField } from '../TextField';
import type { CopyableFieldProps } from './types';

const CopyableField = (props: CopyableFieldProps) => {
	const [iconName, setIconName] = useState<IconName>('Link');
	const [buttonName, setButtonName] = useState('Copy');
	const inputRef = useRef<HTMLInputElement>(null);

	const handleClick = () => {
		navigator.clipboard.writeText(inputRef.current?.value as string);
		setIconName('Check');
		setButtonName('Copied');
	};

	return (
		<Box sx={{ display: 'flex', width: '100%' }}>
			<TextField
				{...props}
				inputRef={inputRef}
				InputProps={{ readOnly: true }}
				sx={theme => ({
					'& .MuiInputBase-root': {
						borderBottomRightRadius: '0px',
						borderTopRightRadius: '0px',
						borderRight: 0,

						'& .MuiInputBase-input': {
							color: theme.palette['D-40'],
						},
					},
				})}
				type="text"
			/>

			<Button
				disabled={props.disabled}
				onClick={handleClick}
				startIcon={<Icon iconName={iconName} />}
				sx={{
					borderBottomLeftRadius: '0px',
					borderTopLeftRadius: '0px',
					alignSelf: 'flex-end',
				}}
			>
				{buttonName}
			</Button>
		</Box>
	);
};

export default memo(CopyableField);
