import { FormHelperText } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import MuiFormGroup from '@mui/material/FormGroup';
import FormLabel from '@mui/material/FormLabel';
import React, { memo, useEffect, useState } from 'react';

import CheckboxWithLabel from './CheckboxWithLabel';
import type { CheckboxGroupProps } from './types';

const CheckboxGroup = (props: CheckboxGroupProps) => {
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
		selectAll = false,
		value = undefined,
		helperText,
		isMultiSelect = false,
	} = props;

	const [values, setValues] = useState(isMultiSelect ? value ?? [] : value);

	useEffect(() => {
		onChange?.(values);
	}, [values]);

	return (
		<FormControl disabled={disabled} error={error} required={required}>
			<FormLabel>{label}</FormLabel>

			<MuiFormGroup
				onChange={event => {
					if (
						selectAll &&
						event?.target?.value?.includes?.(selectAll)
					) {
						event?.target?.checked
							? setValues(options.map(option => option.value))
							: setValues([]);
					} else if (isMultiSelect) {
						let newValues = [...values];
						if (event?.target?.checked) {
							newValues = [...newValues, event.target.value];
						} else {
							newValues = newValues.filter(
								val => val !== event.target.value
							);
						}
						setValues(newValues);
					} else if (event?.target?.checked) {
						setValues(event?.target?.value);
					} else {
						setValues(undefined);
					}
				}}
				onBlur={onBlur}
				row={row}
			>
				{selectAll && (
					<CheckboxWithLabel
						variant={variant}
						label={selectAll}
						value={selectAll}
						checked={values?.length == options?.length}
					/>
				)}

				{options.map(option => (
					<CheckboxWithLabel
						{...option}
						key={option.value as string}
						variant={variant}
						checked={
							isMultiSelect
								? values?.includes?.(option?.value)
								: values == option?.value
						}
					/>
				))}
			</MuiFormGroup>
			<FormHelperText>{helperText}</FormHelperText>
		</FormControl>
	);
};

export default memo(CheckboxGroup);
