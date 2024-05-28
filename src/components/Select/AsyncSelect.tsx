import { FormHelperText } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { useTheme } from '@mui/material/styles';
import React from 'react';
import { AsyncPaginate } from 'react-select-async-paginate';

import { Icon } from '../Icon';
import { makeStyles } from './styles';
import type { AsyncSelectProps } from './types';

export const AsyncSelect = ({
	defaultOptions = true,
	isClearable = true,
	isDisabled = false,
	isMulti = false,
	isSearchable = true,
	label,
	required,
	components,
	customStyles = {},
	error = false,
	helperText = '',
	...rest
}: AsyncSelectProps) => {
	const theme = useTheme();

	return (
		<FormControl error={error} required={required} disabled={isDisabled}>
			{label ? <FormLabel required={required}>{label}</FormLabel> : null}

			<AsyncPaginate
				additional={{ limit: 10, page: 1 }}
				components={{
					ClearIndicator: (...clearProps) => (
						<Icon
							iconName="X"
							size={16}
							weight="bold"
							{...clearProps[0]?.innerProps}
						/>
					),
					DropdownIndicator: () => (
						<Icon iconName="CaretDown" size={16} weight="bold" />
					),
					IndicatorSeparator: () => null,
					...(components ?? {}),
				}}
				defaultOptions={defaultOptions}
				isClearable={isClearable}
				isDisabled={isDisabled}
				isMulti={isMulti}
				isSearchable={isSearchable}
				menuPlacement="auto"
				// styles={makeStyles(theme)}
				styles={makeStyles(theme, customStyles)}
				{...rest}
			/>
			{helperText ? (
				<FormHelperText error={!!error}>{helperText}</FormHelperText>
			) : null}
		</FormControl>
	);
};
