import { FormHelperText } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import MuiRadioGroup from '@mui/material/RadioGroup';
import React, { memo } from 'react';

import RadioWithLabel from './RadioWithLabel';
import type { RadioGroupProps } from './types';

const RadioGroup = (props: RadioGroupProps) => {
	const {
		disabled = false,
		error = false,
		label,
		options,
		required = false,
		value,
		variant = 'standard',
		onChange,
		onBlur,
		name,
		row,
		helperText,
	} = props;

	return (
		<FormControl disabled={disabled} error={error} required={required}>
			<FormLabel>{label}</FormLabel>

			<MuiRadioGroup
				name={name}
				onChange={onChange}
				onBlur={onBlur}
				row={row}
				value={value}
			>
				{options.map(option => (
					<RadioWithLabel
						{...option}
						key={option.value as string}
						variant={variant}
					/>
				))}
			</MuiRadioGroup>
			{helperText ? <FormHelperText>{helperText}</FormHelperText> : null}
		</FormControl>
	);
};

export default memo(RadioGroup);
