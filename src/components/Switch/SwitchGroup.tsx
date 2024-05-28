import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormLabel from '@mui/material/FormLabel';
import React, { memo } from 'react';

import SwitchWithLabel from './SwitchWithLabel';
import type { SwitchGroupProps } from './types';

const SwitchGroup = (props: SwitchGroupProps) => {
	const {
		disabled = false,
		error = false,
		label,
		options,
		required = false,
		variant = 'standard',
		onChange,
		onBlur,
		row,
	} = props;

	return (
		<FormControl disabled={disabled} error={error} required={required}>
			<FormLabel>{label}</FormLabel>

			<FormGroup onChange={onChange} onBlur={onBlur} row={row}>
				{options.map(option => (
					<SwitchWithLabel
						{...option}
						key={option.value as string}
						variant={variant}
					/>
				))}
			</FormGroup>
		</FormControl>
	);
};

export default memo(SwitchGroup);
