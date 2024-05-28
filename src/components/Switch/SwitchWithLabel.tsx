import { Box, FormHelperText } from '@mui/material';
import FormControlLabel from '@mui/material/FormControlLabel';
import React, { memo } from 'react';

import Switch from './Switch';
import type { SwitchWithLabelProps } from './types';

const SwitchWithLabel = (props: SwitchWithLabelProps) => (
	<Box
		sx={theme => ({
			display: 'flex',
			flexDirection: 'column',
			gap: theme.spacing(2),
		})}
	>
		<FormControlLabel
			{...props}
			control={<Switch />}
			labelPlacement="start"
		/>

		{props?.helperText ? (
			<FormHelperText>{props.helperText}</FormHelperText>
		) : null}
	</Box>
);

export default memo(SwitchWithLabel);
